import React from 'react';
import './theme.scss';

class ThemeExperimentality extends React.Component {
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
export default ThemeExperimentality;