import { BrowserRouter as Router, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { FormProvider } from 'react-advanced-form';
import ErrorBoundary from 'base/ErrorBoundary';
import Nprogress from 'base/Nprogress';
import { theme } from './styles/theme';
import validationMessages from './lib/validationMessages';
import validationRules from './lib/validationRules';
import NavBar from './base/Nvabar';
import FormContext from './context/formcontext';
import contactUsFormReducer from './reducers/contactUsFormReducer';

const Home = lazy(() => import('./routes/Home'));
const SignUpForm = lazy(() => import('./routes/SignUp/SignUpForm'));
const ContactUsForm = lazy(() => import('./routes/ContactUs/ContactUsForm'));
const Invoice = lazy(() => import('./routes/Invoice/InvoiceForm'));
const NotFoundPage = lazy(() => import('./routes/404'));

/* eslint-disable import/first */
import 'semantic-ui-css/semantic.min.css';
/* eslint-enable import/first */

// TODO add Google Analitics to count visitors
// TODO MUST DO ALL TESTS STRAIGHT AFTER CREATING A FORM
// TODO add PropTypes to all components
// TODO add default props to all components
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
    path: '/invoice',
    component: Invoice,
    title: 'Invoice'
  },
  {
    component: NotFoundPage,
    title: 'not found'
  }
];

function App() {
  const [contactUsFormState, contactUsFormDispatch] = React.useReducer(
    contactUsFormReducer,
    {
      activeStep: 1,
      finishedStep: 0
    }
  );

  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={''}>
          <FormContext.Provider
            value={{
              contactUsFormDispatch,
              contactUsFormState
            }}
          >
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
