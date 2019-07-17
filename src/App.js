import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';
import ErrorBoundary from 'base/ErrorBoundary';
import Nprogress from 'routes/Nprogress';

const Home = lazy(() => import('./routes/Home'));
const SignUpForm = lazy(() => import('./routes/SignUpForm'));
const NotFoundPage = lazy(() => import('./routes/404'));

// TODO add nprogress on route change
// TODO Code splitting with dynamic imports in router (https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)
// TODO Add package to run evn varibales from .env
// TODO on page load animation like that one on gitlab
// TODO add loading component

// TODO MUST DO ALL TESTS STRAIGHT AFTER CREATING A FORM
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Nprogress>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUpForm} />
              <Route component={NotFoundPage} />
            </Switch>
          </Nprogress>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
