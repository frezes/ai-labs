
import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
`;

const SpinnerContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #007AFF;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const DotsContainer = styled.div`
  display: inline-flex;
  gap: 4px;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  background-color: #007AFF;
  border-radius: 50%;
  animation: ${pulse} 1.4s ease-in-out infinite both;
  animation-delay: ${props => props.delay}s;
`;

export const Loading = ({ size = 16, type = 'spinner' }) => {
  if (type === 'dots') {
    return (
      <SpinnerContainer>
        <DotsContainer>
          <Dot delay={0} />
          <Dot delay={0.16} />
          <Dot delay={0.32} />
        </DotsContainer>
      </SpinnerContainer>
    );
  }

  return (
    <SpinnerContainer>
      <Spinner size={size} />
    </SpinnerContainer>
  );
};
