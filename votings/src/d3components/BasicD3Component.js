/**
 * HOC that provides data and a scale 
 * to another component for a specific type of scale 
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class D3Graph extends React.Component {
  static propTypes = {
    styles: PropTypes.object,
    viewBoxHeight: PropTypes.number,
    viewBoxWidth: PropTypes.number
  }

  static defaultProps = {
    data: [],
    viewBoxWidth: 1600,
    viewBoxHeight: 900,
  }

  render() {
    const {viewBoxWidth, viewBoxHeight} = this.props;

    return (
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        ref={this.props.svgRef}
      />
    )
  }
}



