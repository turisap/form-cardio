import React from 'react';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

class Nprogress extends React.Component {
  componentWillMount() {
    nprogress.start();
  }

  componentDidMount() {
    nprogress.done();
  }

  render() {
    return this.props.children;
  }
}

export default Nprogress;
