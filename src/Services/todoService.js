export const getTodos = async () => {
  const url = 'https://enigmatic-sands-86682.herokuapp.com/authUser/getTodos';
  let resp = await fetch(url, {
    headers: { 'x-auth-token': localStorage.getItem('token') },
  });
  let data = await resp.json();
  return data;
};

export const signin = async (user) => {
  const url = 'https://enigmatic-sands-86682.herokuapp.com/authUser/signin';
  let resp = await fetch(url, {
    method: 'Post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  });
  let data = await resp.json();
  return data;
};

export const singup = async (user) => {
  const url = 'https://enigmatic-sands-86682.herokuapp.com/authUser/signup';
  let resp = await fetch(url, {
    method: 'Post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  });
  let data = await resp.json();
  return data;
};

export const addTodo = async (todos) => {
  let url = 'https://enigmatic-sands-86682.herokuapp.com/authUser/addTodo';
  let resp = await fetch(url, {
    method: 'Post',
    headers: {
      'x-auth-token': localStorage.getItem('token'),
      'content-type': 'application/json',
    },
    body: JSON.stringify(todos),
  });
  let data = await resp.json();
  return data;
};

export const delTodo = async (id) => {
  const url = `https://enigmatic-sands-86682.herokuapp.com/authUser/delTodo/${id}`;
  let resp = await fetch(url, {
    headers: { 'x-auth-token': localStorage.getItem('token') },
  });
  let data = await resp.json();
  return data;
};
