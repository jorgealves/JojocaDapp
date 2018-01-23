/**
 * A component that renders either children or
 * a form requesting an address
 *
 * @link https://facebook.github.io/react/docs/higher-order-components.html
 * @param {React.Component} InputComponent
 */

import React from 'react';
import PropTypes from 'prop-types';

import SmartContractForm from './SmartContractForm';

import { web3 } from '../ethereumConfig';

export default class SmartContract extends React.Component {
  state = {
    contractInstance: null
  }

  static propTypes = {
    contractABI: PropTypes.array.isRequired,
    wrappedComponent: PropTypes.func.isRequired
  }

  componentDidMount() {
    window.web3 = web3;
    window.contractABI = this.props.contractABI;
  }

  getContractInstance(address) {
    this.setState({
      contractInstance: new web3.eth.Contract(
        this.props.contractABI,
        address
      )
    });
  }

  render() {
    const WrappedComponent = this.props.wrappedComponent;
    return (
      this.state.contractInstance ?
        <WrappedComponent contract={this.state.contractInstance} {...this.props} />
        : <SmartContractForm
          handleSubmit={(value) => this.getContractInstance(value)}
        />
    );
  }
}



