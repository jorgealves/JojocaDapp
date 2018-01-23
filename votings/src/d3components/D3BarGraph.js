/**
 * Component that 
 * renders a graph structure based on D3 
 */

import React from 'react';
import PropTypes from 'prop-types';
import {axisLeft, extent as d3extent, scaleLinear, select} from 'd3';

import BasicD3Component from './BasicD3Component';

export default class D3BarGraph extends React.Component {
  static propTypes = {
    styles: PropTypes.object,
    dataScale: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object),
    viewBoxWidth: PropTypes.number,
    viewBoxHeight: PropTypes.number,
  }

  static defaultProps = {
    data: [],
    viewBoxWidth: 1600,
    viewBoxHeight: 900,
  }

  componentDidMount() {
    const { valuePropY: valueProp, data, viewBoxWidth, viewBoxHeight } = this.props;
    const barWidth = viewBoxWidth / data.length;
    const extent = d3extent(data, dataObj => dataObj[valueProp]);

    const scale = scaleLinear()
      .domain(extent)
      .range([0, viewBoxHeight]);

    const colorScale = scaleLinear()
      .domain(extent)
      .range([
        'red',
        'green'
      ]);


    select(this.svgElement)
      .append('g')
      .call(axisLeft(scale))
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
      .attr('height', data => scale(data[valueProp]))
      .attr('width', barWidth)
      .attr('y', (data) => viewBoxHeight - scale(data[valueProp]))
      .attr('x', (data, index) => barWidth * index)
      .attr('fill', data => colorScale(data[valueProp]))
  }

  render() {
    return <BasicD3Component
      svgRef={el => this.svgElement = el}
      styles={this.props.styles}
      viewBoxHeight={this.props.viewBoxHeight}
      viewBoxWidth={this.props.viewBoxWidth}
    />
  }
}
