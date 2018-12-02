let token = null;

const blogs = [
  {
    likes: 0,
    title: 'Mock Blog',
    author: 'Jou jou',
    url: 'jees',
    user: {
      _id: '5bf19bc8e27e6fd6ee8f752d',
      username: 'mrMusckle',
      name: 'bloggaajaM'
    },
    _id: '5b98d5223f64bd27943adfac'
  },
  {
    likes: 0,
    title: 'Mock Blog 2',
    author: 'Jou jou',
    url: 'jees',
    user: {
      _id: '5bf19bc8e27e6fd6ee8f752d',
      username: 'mrMusckle',
      name: 'bloggaajaM'
    },
    _id: '5b99044bf4f65b3008de8c4f'
  },
  {
    likes: 0,
    title: 'Mock Blog 3',
    author: 'Jou jou',
    url: 'jees',
    user: {
      _id: '5bf19bc8e27e6fd6ee8f752d',
      username: 'mrMusckle',
      name: 'bloggaajaM'
    },
    _id: '5b9909ef968de931cdbe5347'
  }
];

const getAll = () => {
  return Promise.resolve(blogs);
};

export default { getAll, blogs };
