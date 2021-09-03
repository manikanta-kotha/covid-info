import React from "react";
import { withTranslation } from "react-i18next";

const logErrorToMyService = (error, errorInfo) => {
  // TODO: can be integrated with services like Sentry etc.,
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // we can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    const { t } = this.props;
    if (this.state.hasError) {
      // we can render any custom fallback UI
      return <h1>{t("something_wrong")}</h1>;
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
