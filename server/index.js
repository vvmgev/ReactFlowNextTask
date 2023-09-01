import express from 'express';
import cors from 'cors';
import crypto from 'crypto';
import cookieParser from 'cookie-parser';


const app = express();
const port = process.env.PORT || 8080;


app.use(cors({credentials: true, origin: true}))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({}));


let lastUserId = 1;
let lastTodoId = 1;
const generateToken = () => crypto.randomBytes(64).toString('hex');
const generateUserId = () => ++lastUserId;
const generateTodoId = () => ++lastTodoId;
const findUserByToken = (token) => users.find(user => user.token === token);
const emptyTodo = {id: null, type: 'todoForm', data: { title: '', description: '', completed: false }, position: { x: 0, y: 0 }};
const users = [
  {email: 'a@a.com', password: '123123', id: 1, token: generateToken()}
];
const todos = {
  1: [{id: 'Todo-1', type: 'todoForm', data: {id: 'Todo-1',  title: 'My first ToDo', description: 'My First description', completed: false }, position: { x: 0, y: 0 }}]
};


///////////////////////////////////////////////////////
////////////////////// Todo ///////////////////////////


app.get('/todo', (req, res) => {
    const user = findUserByToken(req.cookies.token) || {};
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(todos[user.id] || []));
});

app.put('/todo', (req, res) => {
  const user = findUserByToken(req.cookies.token);
  const todosArr = todos[user.id] || [];
  const nodeTodoIndex = todosArr.findIndex(item => item.id === req.body.id);
  todosArr[nodeTodoIndex] = req.body;
  todos[user.id] = todosArr;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.body));
});

app.delete('/todo', (req, res) => {
  const user = findUserByToken(req.cookies.token);
  const todosArr = todos[user.id];
  
  const filteredArr = todosArr.filter(item => item.id !== req.body.id);
  todos[user.id] = filteredArr;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({}));
});

app.post('/todo', (req, res) => {
  const user = findUserByToken(req.cookies.token);
  const id = `Todo-${generateTodoId()}`;
  const todo = {
      ...emptyTodo,
      data: {...emptyTodo.data, id},
      position: {...emptyTodo.position},
      id,
    };
    const todosArr = todos[user.id] || [];
    todos[user.id] = todosArr;
    todosArr.push(todo);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(todo, null, 3));
});



///////////////////////////////////////////////////////
////////////////////// User ///////////////////////////



app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email && user.password === password);
  if(!user) {
    res.status(400);
    res.end(JSON.stringify({error: true}));
  }

  let options = {
    maxAge: 1000 * 60 * 6000, 
    httpOnly: false, 
  }
  res.cookie('token', user.token, options);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({token: user.token}));
});

app.post('/register', (req, res) => {
  const token = generateToken();
  users.push({...req.body, token, id: generateUserId()})
  let options = {
    maxAge: 1000 * 60 * 6000, 
    httpOnly: false, 
  }
  res.cookie('token', token, options);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({token}));
});

app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({}));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})