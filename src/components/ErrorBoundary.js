import React from "react";

class ErrorBoundary extends React.Component {
  constructor({ ...props }) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    const newState = {
      hasError: true,
    };
    this.setState(newState);
  }

  render() {
    const hasError = this.state.hasError;

    const mainComponent = () => {
      return this.props.children;
    };
    const errorComponent = () => {
      return <h1>Oops! An error occured</h1>;
    };
    const body = hasError ? errorComponent() : mainComponent();
    return body;
  }
}

export default ErrorBoundary;
