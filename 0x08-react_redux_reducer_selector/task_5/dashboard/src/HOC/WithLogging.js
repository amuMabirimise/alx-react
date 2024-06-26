import React from "react";

const WithLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${this.displayName || WrappedComponent.name || "Component"} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.displayName || WrappedComponent.name || "Component"} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
