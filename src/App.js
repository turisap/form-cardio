import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./routes/Home'));
const SignUpForm = lazy(() => import('./routes/SignUpForm'));

// TODO add nprogress on route change
// TODO Code splitting with dynamic imports in router (https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)
// TODO Add package to run evn varibales from .env
function App() {
  return <div className="App"></div>;
}

export default App;
