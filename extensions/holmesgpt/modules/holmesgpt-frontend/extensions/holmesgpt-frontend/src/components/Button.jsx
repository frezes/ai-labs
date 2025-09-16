import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${props => {
    switch (props.size) {
      case 'small': return '6px 12px';
      case 'large': return '12px 24px';
      default: return '8px 16px';
    }
  }};
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => {
    if (props.disabled) return '#f5f5f5';
    switch (props.variant) {
      case 'primary': return '#007AFF';
      case 'secondary': return '#f0f0f0';
      case 'ghost': return 'transparent';
      default: return '#007AFF';
    }
  }};
  color: ${props => {
    if (props.disabled) return '#999';
    switch (props.variant) {
      case 'primary': return '#fff';
      case 'secondary': return '#333';
      case 'ghost': return '#666';
      default: return '#fff';
    }
  }};
  border: ${props => props.variant === 'ghost' ? '1px solid #e0e0e0' : 'none'};
  min-width: ${props => props.minWidth || 'auto'};

  &:hover:not(:disabled) {
    background-color: ${props => {
      switch (props.variant) {
        case 'primary': return '#0056CC';
        case 'secondary': return '#e0e0e0';
        case 'ghost': return '#f5f5f5';
        default: return '#0056CC';
      }
    }};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Button = ({ 
  children, 
  icon, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  minWidth,
  ...props 
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      minWidth={minWidth}
      {...props}
    >
      {icon && icon}
      {children}
    </StyledButton>
  );
};
