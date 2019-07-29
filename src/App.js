import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { FormProvider } from 'react-advanced-form';
import ErrorBoundary from 'base/ErrorBoundary';
import Nprogress from 'base/Nprogress';
import Loading from 'base/Loading';
import './App.css';
import { theme } from './styles/theme';
import validationMessages from './lib/validationMessages';
import validationRules from './lib/validationRules';

const Home = lazy(() => import('./routes/Home'));
const SignUpForm = lazy(() => import('./routes/SignUp/SignUpForm'));
const NotFoundPage = lazy(() => import('./routes/404'));

// TODO on page load animation like that one on gitlab
// TODO add loading component
// TODO add Google Analitics to count visitors
// TODO Portals
// TODO try-catch in event listeners

// TODO MUST DO ALL TESTS STRAIGHT AFTER CREATING A FORM

// TODO REACT CONTEXT TO BE ADDED
// TODO USE CUSTOM HOOKS

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Loading />}>
          <Nprogress>
            <ThemeProvider theme={theme}>
              <FormProvider
                rules={validationRules}
                messages={validationMessages}
              >
                <div className="body">
                  <div className="navbar-btn">X</div>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/signup" component={SignUpForm} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </div>
              </FormProvider>
            </ThemeProvider>
          </Nprogress>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
