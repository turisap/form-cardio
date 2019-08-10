import React, { useContext } from 'react';
import { Form } from 'react-advanced-form';
import Select from '../../../base/inputs/Select';
import styled from 'styled-components';
import FormsContext from '../../../context/formcontext';
import Textarea from '../../../base/inputs/TextArea';

const StyledIssueDescription = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 45px 55px 250px;

  .issue-description__title {
    font-size: 45px;
    font-weight: 500;
  }

  .issue-description__text {
    margin-bottom: 20px;
    font-size: 18px;
  }

  .form-group-textarea {
    display: grid;
    grid-template-rows: 230px 50px;
  }

  textarea {
    box-size: border-box;
    margin-top: 10px;
    margin-bottom: 5px;
    padding: 5px 9px;
    height: 200px;
    resize: none;

    &:focus {
      outline: none;
    }
  }
`;

const Steps = ({ setInvalidStep }) => {
  const { contactUsFormState } = useContext(FormsContext);

  const selectHandler = ({ nextValue }) => {
    if (nextValue === 'nothing') {
      setInvalidStep(true);
      return;
    }
    setInvalidStep(false);
  };

  const textAreaChangeHandler = e => {
    if (!e.fieldProps.errors) {
      setInvalidStep(false);
      return;
    }
    setInvalidStep(true);
  };

  const saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form noValidate={false}>
      {(function() {
        switch (/*contactUsFormState.activeStep*/ 2) {
          case 1:
            return (
              <Select
                name="select issue"
                label="Please select topic"
                onChange={selectHandler}
              >
                <option value={'nothing'}>- - - - - - - - - - - -</option>
                <option value="Get help with your studies">
                  Get help with your studies
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
            return (
              <StyledIssueDescription>
                <div className="issue-description__title">How can we help?</div>
                <div className="issue-description__text">
                  We are more than happy to help you to resolve your issue.
                  Please tell us the details about what happened
                </div>
                <Textarea
                  name="issue_description"
                  placeholder="Please type description for your issue here (between 20 and 100 characters)"
                  onChange={textAreaChangeHandler}
                />
              </StyledIssueDescription>
            );
          default:
            return <p>DEBUG ME</p>;
        }
      })()}
    </Form>
  );
};

export default Steps;
