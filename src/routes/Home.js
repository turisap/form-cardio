import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Placeholder } from 'semantic-ui-react';

const StyledHomePage = styled.div`
  align-content: start;

  p {
    margin: 0;
    margin-top: 10px;
  }

  h2 {
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid #b2b2b2;
  }

  .home-page__inner {
    margin-top: 80px;
    display: grid;
    grid-template-rows: 180px 210px 100px;
    grid-template-columns: 500px;
  }

  .home-page__section {
    display: grid;
    align-content: center;
    height: 100%;
  }

  .home-page__contents {
    margin-top: 30px;
  }

  .home-page__stack {
    li {
      margin-bottom: 7px;
    }
  }

  .home-page__stackelement {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    font-size: 12px;
    font-weight: normal;
    padding: 2px 3px;
    background: rgba(27, 31, 35, 0.05);
    color: #24292e;
    border-radius: 5px;
    display: inline;
  }
`;

const HomePage = () => {
  let [loadingSequence, setLoadingSequence] = useState(0);

  useEffect(() => {
    let loadingInterval = setInterval(() => {
      setLoadingSequence(loadingSequence++);
    }, 100);

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <StyledHomePage className="container">
      <div className="home-page__inner">
        <div className="home-page__what">
          <div className="home-page__section">
            {loadingSequence < 4 ? (
              <Placeholder>
                <Placeholder.Header>
                  <Placeholder.Line length="medium" />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="very long" />
                  <Placeholder.Line length="very long" />
                  <Placeholder.Line length="very long" />
                  <Placeholder.Line length="very long" />
                </Placeholder.Paragraph>
              </Placeholder>
            ) : (
              <>
                <h2>What is this</h2>
                <div className="home-page__contents">
                  <p>
                    This is a set of different web forms which I created to
                    practice CSS grid for creating forms
                  </p>
                  <p>
                    It was inspired after struggling with the forms in previous
                    application
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="home-page__stack">
          <div className="home-page__section">
            {loadingSequence < 9 ? (
              <Placeholder>
                <Placeholder.Header>
                  <Placeholder.Line length="medium" />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="long" />
                  <Placeholder.Line length="very long" />
                </Placeholder.Paragraph>
              </Placeholder>
            ) : (
              <>
                <h2>Stack being used:</h2>
                <ul>
                  <li>
                    <p>
                      <span className="home-page__stackelement">
                        create-react-app
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="home-page__stackelement">
                        styled-components
                      </span>{' '}
                      for styling
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="home-page__stackelement">
                        react-advanced-form
                      </span>{' '}
                      for form validation
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="home-page__stackelement">
                        semantic-ui-react
                      </span>{' '}
                      for using such elements as placeholders
                    </p>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
        <div className="home-page__features">
          <div className="home-page__section">
            {loadingSequence < 11 ? (
              <Placeholder>
                <Placeholder.Header>
                  <Placeholder.Line length="medium" />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="short" />
                  <Placeholder.Line length="short" />
                  <Placeholder.Line length="short" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            ) : (
              <>
                <h2>New things tried:</h2>
                <ul>
                  <li>React Hooks</li>
                  <li>React Portals</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
