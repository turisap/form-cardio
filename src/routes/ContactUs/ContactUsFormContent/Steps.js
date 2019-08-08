import React, { useContext } from 'react';
import { Form } from 'react-advanced-form';
import Select from '../../../base/inputs/Select';
import FormsContext from '../../../context/formcontext';

const Steps = ({ setInvalidStep }) => {
  const { contactUsFormState } = useContext(FormsContext);

  const selectHandler = ({ nextValue }) => {
    if (nextValue === 'nothing') {
      setInvalidStep(true);
      return;
    }
    setInvalidStep(false);
  };

  return (
    <Form>
      {(function() {
        switch (contactUsFormState.activeStep) {
          case 1:
            return (
              <Select
                name="select issue"
                label="Please select topic"
                onChange={selectHandler}
              >
                <option value={'nothing'}>- - - - - - - - - - - -</option>
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
