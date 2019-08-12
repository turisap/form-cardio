import React, { useContext, useState } from 'react';
import { Form } from 'react-advanced-form';
import Select from '../../../base/inputs/Select';
import styled from 'styled-components';
import { MoonLoader } from 'react-spinners';
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
  grid-template-columns: 220px 220px;
  justify-content: space-between;
  grid-gap: 20px;
  padding-top: 50px;
  max-width: 480px;

  & .issue-submit__banner {
    border: ${props => props.theme.border_orange};
    border-radius: 3px;
    padding: 20px;
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: 30px 50px 70px;

    .issue-submit__button {
      width: 180px;
      height: 46px;
      background: transparent;
      outline: none;
      border: ${props => props.theme.border_orange};
      border-radius: 3px;
      font-size: 16px;
      font-weight: bold;
      color: ${props => props.theme.text_orange};
      cursor: pointer;
      justify-self: center;
      display: grid;
      justify-content: center;
      align-items: center;
      font-size: 18px;
    }

    .issue-submit__button:hover {
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

const Steps = ({ setInvalidStep, setIssueType, issueType }) => {
  const { contactUsFormState, contactUsFormDispatch } = useContext(
    FormsContext
  );
  const [submittingEmail, setSubmittingEmail] = useState(false);
  const [submittingTicket, setSubmittingTicket] = useState(false);

  const selectHandler = ({ nextValue }) => {
    if (nextValue === 'nothing') {
      setInvalidStep(true);
      return;
    }

    setIssueType(nextValue);
    setInvalidStep(false);
  };

  const textAreaChangeHandler = e => {
    if (!e.fieldProps.errors) {
      setInvalidStep(false);
      return;
    }
    setInvalidStep(true);
  };

  const handleSubmit = submitFunction => {
    submitFunction(true);
    setTimeout(() => submitFunction(false), 1500);
  };

  const switchSteps = step => {
    switch (step) {
      case 1:
        return (
          <Select
            name="select issue"
            label="Please select topic"
            onChange={selectHandler}
            value={issueType}
          >
            <option value={'nothing'}>- - - - - - - - - - - -</option>
            <option value="Get help with your studies">
              Get help with your studies
            </option>
            <option value="Order cookies">Order a cartoon of cookies</option>
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
              We are more than happy to help you to resolve your issue. Please
              tell us the details about what happened
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
              <div
                className="issue-submit__button"
                onClick={() => handleSubmit(setSubmittingEmail)}
              >
                {submittingEmail ? (
                  <MoonLoader sizeUnit={'px'} size={30} color={'#b23b00'} />
                ) : (
                  'Send email'
                )}
              </div>
            </div>
            <div className="issue-submit__banner">
              <div className="issue-submit__title">Open a ticket</div>
              <div className="issue-submit__text">
                Ask our community and get their feedback
              </div>
              <div
                className="issue-submit__button"
                onClick={() => handleSubmit(setSubmittingTicket)}
              >
                {submittingTicket ? (
                  <MoonLoader sizeUnit={'px'} size={30} color={'#b23b00'} />
                ) : (
                  'Open a ticket'
                )}
              </div>
            </div>
          </StyledStep3>
        );
      default:
        return <p>DEBUG ME</p>;
    }
  };

  return <Form>{switchSteps(contactUsFormState.activeStep)}</Form>;
};

export default Steps;
