import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import ErrorBoundary from 'base/ErrorBoundary';
import Nprogress from 'base/Nprogress';
import Loading from 'base/Loading';
import './App.css';
import { theme } from './styles/theme';

const Home = lazy(() => import('./routes/Home'));
const SignUpForm = lazy(() => import('./routes/SignUp/SignUpForm'));
const NotFoundPage = lazy(() => import('./routes/404'));

// TODO on page load animation like that one on gitlab
// TODO add loading component
// TODO add Google Analitics to count visitors
// TODO Portals
// TODO try-catch in event listeners

// TODO MUST DO ALL TESTS STRAIGHT AFTER CREATING A FORM

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Loading />}>
          <Nprogress>
            <ThemeProvider theme={theme}>
              <div className="body">
                <div className="navbar-btn">X</div>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/signup" component={SignUpForm} />
                  <Route component={NotFoundPage} />
                </Switch>
              </div>
            </ThemeProvider>
          </Nprogress>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
