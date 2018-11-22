import React from 'react';
import PropTypes from 'prop-types';
import '../StyleZ.css';

const LoginForm = ({ handleSubmit, handleChange, username, password }) => {
  return (
    <div>
      <h2>Log in to application</h2>

      <form onSubmit={handleSubmit}>
        <div>
          username:
          <input type="text" name="username" value={username} onChange={handleChange} />
        </div>
        <div>
          password:
          <input type="password" name="password" value={password} onChange={handleChange} />
        </div>
        <button className="login-button" type="submit">
          login{' '}
        </button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default LoginForm;
