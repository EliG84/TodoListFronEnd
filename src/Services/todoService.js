export const getTodos = async (token) => {
  const url = 'http://localhost:3001/authUser/getTodos';
  let resp = await fetch(url, {
    headers: { 'x-auth-token': token },
  });
  let data = await resp.json();
  return data;
};

export const signin = async (user) => {
  const url = 'http://localhost:3001/authUser/signin';
  let resp = await fetch(url, {
    method: 'Post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  });
  let data = await resp.json();
  return data;
};

export const singup = async (user) => {
  const url = 'http://localhost:3001/authUser/signup';
  let resp = await fetch(url, {
    method: 'Post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  });
  let data = await resp.json();
  return data;
};
