import Web3 from 'web3';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card, { CardActions, CardMedia, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';

/**
 * A card representing a single voting instance.
 * It features the following:
 * - Main text for voting
 * - Description for the voting
 * - Options for the voting
 * - Status of the voting (if applicable)
 * - (optional) Image for the card
 * - all these options must come from the contract instance
 *
 * @class VotingComponentCard
 * @extends {Component}
 */

const web3 = new Web3();

export default class VotingComponentCard extends Component {
  state = {
    isLoading: true,
    text: '',
    candidates: [],
    cover: '',
    description: ''
  };

  static propTypes = {
    'contract': PropTypes.object.isRequired
  }

  componentDidMount() {
    let { contract } = this.props;

    contract.methods.getNumberCandidates().call()
      .then(
        nCandidates => {
          let promisedCandidateList = [];

          for (let i = 0; i < nCandidates; i++) {
            promisedCandidateList.push(
              contract.methods.candidateList(i).call()
            );
          }

          return Promise.all([
            contract.methods.text().call(),
            ...promisedCandidateList
          ]).then(values => {
            const [text, ...candidates] = values;
            this.setState({
              text: web3.utils.toAscii(text),
              candidates: candidates.map(candidate => web3.utils.toAscii(candidate)),
              isLoading: false
            })
          })
        }
      )
  }

  render() {
    const { isLoading, text, description, candidates } = this.state;
    return (
      !isLoading ?
        <Card>
          <Typography
            type="headline"
            component="h2"
          >
            {text}
          </Typography>
          <CardContent>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            {
              candidates.map(
                candidate => <Button>{candidate}</Button>
              )
            }
          </CardActions>
        </Card> : <CircularProgress />
    )
  }
}
