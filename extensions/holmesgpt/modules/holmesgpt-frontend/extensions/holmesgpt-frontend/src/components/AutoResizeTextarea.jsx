
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  width: 100%;
  min-height: 52px;
  max-height: 250px;
  padding: 16px 56px 16px 20px;
  border: none;
  outline: none;
  resize: none;
  background: transparent;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  font-family: inherit;

  &::placeholder {
    color: #999;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const AutoResizeTextarea = ({ 
  value, 
  onChange, 
  onKeyDown, 
  placeholder, 
  disabled = false,
  ...props 
}) => {
  const textareaRef = useRef(null);

  // 自动调整高度
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 250)}px`;
    }
  }, [value]);

  return (
    <StyledTextarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  );
};
