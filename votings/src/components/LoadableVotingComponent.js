import React from 'react';

import Loadable from 'react-loadable';
import { CircularProgress } from 'material-ui/Progress';

export default Loadable({
  loader: () => import('./VotingComponent'),
  loading: () => <CircularProgress />,
  render(loaded, props) {

    let VotingComponent = loaded.default;

    return (
      <VotingComponent
        {...props}
      />
    );
  }
})