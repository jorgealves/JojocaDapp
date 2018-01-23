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

export default class VotingComponent extends React.Component {
  state = {
    address: ''
  }

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  updateAddress(text) {
    this.setState({
      address: text
    })
  }

  render() {
    return (
      <form
        onSubmit={
          (e) => {
            e.preventDefault();
            this.props.handleSubmit(this.state.address);
          }
        }
      >
        <label>Address:</label>
        <input
          type="text"
          value={ this.state.address }
          onChange={
            (e) => this.updateAddress(e.target.value)
          }
        />
      </form>
    )
  }

}
