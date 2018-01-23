/**
 * Component that 
 * renders a scatterbox based on D3 
 */

import React from 'react';
import PropTypes from 'prop-types';
import { axisLeft, axisBottom, extent, scaleLinear, select } from 'd3';

import BasicD3Component from './BasicD3Component';

export default class D3ScatterBox extends React.Component {
  static propTypes = {
    styles: PropTypes.object,
    dataScaleY: PropTypes.func,
    dataScaleX: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object),
    viewBoxWidth: PropTypes.number,
    viewBoxHeight: PropTypes.number,
  }

  static defaultProps = {
    data: [],
    viewBoxWidth: 1600,
    viewBoxHeight: 900,
    circleRadius: 10
  }

  componentDidMount() {
    const { valuePropX, valuePropY, circleRadius, viewBoxHeight, viewBoxWidth } = this.props;

    const scaleY =
      scaleLinear()
        .domain(
          extent(
            this.props.data, dataObj => dataObj[valuePropY]
          )
        )
        .range([circleRadius, this.props.viewBoxHeight - circleRadius]);

    const scaleX = scaleLinear()
      .domain(
        extent(
          this.props.data, dataObj => dataObj[valuePropX]
        )
      )
      .range([circleRadius, this.props.viewBoxWidth - circleRadius])
    
    const colorScale = scaleLinear()
      .domain(
        extent(
          this.props.data, dataObj => (dataObj[valuePropY]/dataObj[valuePropX])
        )
      )
      .range([
        'red',
        'green'
      ])

    console.log(extent(
      this.props.data, dataObj => dataObj[valuePropY] / dataObj[valuePropX]
    ))

    select(this.svgElement)
      .append('g')
      .call(axisLeft(scaleY))
      .call(axisBottom(scaleX))
      .selectAll('circle')
      .data(this.props.data)
      .enter()
      .append('circle')
      .attr('cy', data => viewBoxHeight - scaleY(data[valuePropY]))
      .attr('cx', data => scaleX(data[valuePropX]))
      .attr('r', circleRadius)
      .attr('fill', data => colorScale(data[valuePropY]/data[valuePropX]))
  }

  render() {
    return<BasicD3Component
      svgRef={el => this.svgElement = el}
      styles={this.props.styles}
      viewBoxHeight={this.props.viewBoxHeight}
      viewBoxWidth={this.props.viewBoxWidth}
    />
  }
}
