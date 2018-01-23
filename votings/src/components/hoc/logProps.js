/**
 * High order component wrapper to log props when it is time to change them
 * @link https://facebook.github.io/react/docs/higher-order-components.html
 * @param {React.Component} InputComponent 
 */
export default function logProps(WrappedComponent) {
  return class extends React.Component {
    componentWillReceiveProps(nextProps) {
      console.log('Current props: ', this.props);
      console.log('Next props: ', nextProps);
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return <WrappedComponent {...this.props} />;
    }
  }
}