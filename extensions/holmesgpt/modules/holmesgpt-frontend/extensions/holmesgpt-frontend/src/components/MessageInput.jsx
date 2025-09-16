
import React, { useState } from 'react';
import styled from 'styled-components';
import { AutoResizeTextarea } from './AutoResizeTextarea';
import { Button } from './Button';
import { SendIcon } from './Icons';

const InputArea = styled.div`
  padding: 12px 20px 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const InputBox = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus-within {
    border-color: #007AFF;
    box-shadow: 0 4px 12px rgba(0, 122, 255, 0.1);
  }
`;

const SendButtonWrapper = styled.div`
  position: absolute;
  right: 12px;
  bottom: 10px;
  width: 32px;
  height: 32px;
`;

export const MessageInput = ({ onSendMessage, disabled = false }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || disabled) return;

    onSendMessage(inputValue.trim());
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <InputArea>
      <form onSubmit={handleSubmit}>
        <InputBox>
          <AutoResizeTextarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="输入您的消息..."
            disabled={disabled}
          />
          <SendButtonWrapper>
            <Button
              type="submit"
              icon={<SendIcon size={16} />}
              disabled={!inputValue.trim() || disabled}
              size="small"
              minWidth="32px"
            />
          </SendButtonWrapper>
        </InputBox>
      </form>
    </InputArea>
  );
};
