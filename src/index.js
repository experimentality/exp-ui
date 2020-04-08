import React from 'react';

export { Button } from './components/button';
export { ThemeExperimentality } from './themes/experimentality';

class Theme extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="x">
        {props.children}
      </div>
    );
  }
}
export default Theme;