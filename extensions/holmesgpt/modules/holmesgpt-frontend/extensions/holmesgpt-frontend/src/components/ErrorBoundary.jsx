
import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
  text-align: center;
`;

const ErrorTitle = styled.h2`
  color: #ff6b6b;
  margin-bottom: 16px;
`;

const ErrorMessage = styled.p`
  color: #666;
  margin-bottom: 24px;
`;

const RetryButton = styled.button`
  background-color: #007AFF;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056CC;
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>出现了一些问题</ErrorTitle>
          <ErrorMessage>
            应用程序遇到了意外错误，请尝试刷新页面或联系技术支持。
          </ErrorMessage>
          <RetryButton onClick={this.handleRetry}>
            重试
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
