import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';

const store = createStore(counterReducer);

const Statistiikka = () => {
  const state = store.getState();
  const good = state.good;
  const ok = state.ok;
  const bad = state.bad;
  const total = good + ok + bad;
  const average = (good - bad) / total;
  const positive = Math.round(good / total * 100);

  if (total === 0) {
    return (
      <div>
        <h2>Statistiikka</h2>
        <div>Ei yhtään palautetta annettu</div>
      </div>
    );
  }

  return (
    <div>
      <h2>Statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>Hyvä</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Ok</td>
            <td>{ok}</td>
          </tr>
          <tr>
            <td>Huono</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>Keskiarvo</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>Positiivisia</td>
            <td>{positive} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
class App extends React.Component {
  click = action => event => {
    event.preventDefault();
    store.dispatch({ type: action });
  };

  render() {
    return (
      <div>
        <h2>Anna palautetta</h2>
        <button onClick={this.click('GOOD')}>hyvä</button>
        <button onClick={this.click('OK')}>ok</button>
        <button onClick={this.click('BAD')}>huono</button>
        <Statistiikka />
        <button onClick={this.click('ZERO')}>nollaa tilasto</button>
      </div>
    );
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();
store.subscribe(renderApp);

export default App;
