import React, { useContext, useState } from 'react';
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

const StyledStep3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-gap: 20px;
  padding-top: 50px;

  & .issue-submit__banner {
    border: ${props => props.theme.border_orange};
    border-radius: 3px;
    padding: 20px;
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: 30px 50px 70px;

    p {
      width: 250px;
      height: 46px;
      background: transparent;
      outline: none;
      border: ${props => props.theme.border_orange};
      border-radius: 3px;
      font-size: 16px;
      font-weight: bold;
      color: ${props => props.theme.text_orange};
      cursor: pointer;
    }

    p:hover {
      background: ${props => props.theme.orange_background};
      color: #ffffff;
    }
    & .issue-submit__title {
      font-size: 24px;
      color: ${props => props.theme.text_orange};
    }

    & .issue-submit__text {
      line-height: 14px;
      color: ${props => props.theme.text_on_white};
    }
  }
`;

const Steps = ({ setInvalidStep }) => {
  const { contactUsFormState } = useContext(FormsContext);
  const [submitting, setSubmitting] = useState(false);

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

  const handleSubmit = e => {
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1500);
  };

  // TODO loading button animation
  return (
    <Form noValidate={false}>
      {(function() {
        switch (/*contactUsFormState.activeStep*/ 3) {
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
          case 3:
            return (
              <StyledStep3>
                <div className="issue-submit__banner">
                  <div className="issue-submit__title">Email Us</div>
                  <div className="issue-submit__text">
                    We will be back to you once we figured out the solution
                  </div>
                  <p onClick={handleSubmit}>
                    {submitting ? 'kj' : 'Send Email'}
                  </p>
                </div>
                <div className="issue-submit__banner">
                  <div className="issue-submit__title">Open a ticket</div>
                  <div className="issue-submit__text">
                    Ask our community and get their feedback
                  </div>
                  <p>{submitting ? 'kj' : 'Open'}</p>
                </div>
              </StyledStep3>
            );
          default:
            return <p>DEBUG ME</p>;
        }
      })()}
    </Form>
  );
};

export default Steps;
