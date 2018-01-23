/**
 * Container component
 * that sets a Voting Contract instance to a component.
 * Only when the contract is loaded is the Component visually rendered
 *
 * @link https://facebook.github.io/react/docs/higher-order-components.html
 * @param {React.Component} InputComponent
 */

import React from 'react';
import PropTypes from 'prop-types';

import SmartContract from './SmartContract';
import VotingComponentCard from './VotingComponentCard';

export default class VotingComponent extends React.Component {
  static propTypes = {
    description: PropTypes.string,
    text: PropTypes.string.isRequired,
    cover: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    contractABI: PropTypes.array
  }

  static defaultProps = {
    contractABI: require('../../../build/contracts/Voting.json').abi
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SmartContract
        contractABI={ this.props.contractABI }
        wrappedComponent={ VotingComponentCard }
      />
    );
  }
}
