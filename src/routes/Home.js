import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Placeholder } from 'semantic-ui-react';

// TODO add semantic UI placeholder

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
    grid-template-rows: 200px 200px 100px;
    grid-template-columns: 500px;
  }

  .home-page__contents {
    margin-top: 30px;
  }
`;

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  }, []);

  return (
    <StyledHomePage className="container">
      <div className="home-page__inner">
        <div className="home-page__what">
          {loading ? (
            <Placeholder>
              <Placeholder.Header>
                <Placeholder.Line length="medium" />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="medium" />
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
        <div className="home-page__stack">
          <h2>Stack being used:</h2>
          <ul>
            <li className="home-page__stack">Create-react-app</li>
            <li className="home-page__stack">styled-components</li>
            <li className="home-page__stack">react-advanced-form</li>
          </ul>
        </div>
        <div className="home-page__features">
          <h2>New things tried:</h2>
          <ul>
            <li>React Hooks</li>
            <li>React Portals</li>
          </ul>
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
