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
import NavBar from './base/Nvabar';

const Home = lazy(() => import('./routes/Home'));
const SignUpForm = lazy(() => import('./routes/SignUp/SignUpForm'));
const ContactUsForm = lazy(() => import('./routes/ContactUs/ContactUsForm'));
const NotFoundPage = lazy(() => import('./routes/404'));

const FormContext = React.createContext();

// TODO on page load animation like that one on gitlab
// TODO add loading component
// TODO add Google Analitics to count visitors
// TODO Portals
// TODO try-catch in event listeners

// TODO MUST DO ALL TESTS STRAIGHT AFTER CREATING A FORM

// TODO REACT CONTEXT TO BE ADDED
// TODO USE CUSTOM HOOKS

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Home',
    component: Home
  },
  {
    path: '/signup',
    component: SignUpForm,
    title: 'Sign Up'
  },
  {
    path: '/contact-us',
    component: ContactUsForm,
    title: 'Contact Us'
  },
  {
    component: NotFoundPage,
    title: 'not found'
  }
];

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<Loading />}>
          <FormContext.Provider>
            <ThemeProvider theme={theme}>
              <FormProvider
                rules={validationRules}
                messages={validationMessages}
              >
                <div className="body">
                  <NavBar />
                  <Switch>
                    {routes.map(route => (
                      <Nprogress key={route.title} {...route} />
                    ))}
                  </Switch>
                </div>
              </FormProvider>
            </ThemeProvider>
          </FormContext.Provider>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
