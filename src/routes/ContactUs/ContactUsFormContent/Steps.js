import React from 'react';
import { Form } from 'react-advanced-form';
import Select from '../../../base/inputs/Select';
import contactUsFormReducer from './contactUsFormReducer';

const Steps = () => {
  const [state, dispatch] = React.useReducer(contactUsFormReducer, {});
  return (
    <Form>
      {(function() {
        switch (state.activeStep) {
          case 1:
            return (
              <Select name="olol" label="Please select topic">
                <option value={null}>- - - - - - - - - - - -</option>
                <option value="Get help with your personal life">
                  Get help with your personal life
                </option>
                <option value="Order cookies">
                  Order a cartoon of cookies
                </option>
                <option value="Report strange feelings">
                  Report strange feelings
                </option>
                <option value="Clarify usage of our API">
                  Clarify usage of our API
                </option>
              </Select>
            );
          case 2:
            return <p>OLOLO</p>;
          default:
            return <p>DEBUG ME</p>;
        }
      })()}
    </Form>
  );
};

export default Steps;
