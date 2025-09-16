import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MessageItem } from './MessageItem';
import { MessageInput } from './MessageInput';
import { WelcomeScreen } from './WelcomeScreen';
import { Loading } from './Loading';
import { BotIcon } from './Icons';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
`;

const ChatHistory = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`;

const LoadingMessageGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  max-width: 90%;
  align-self: flex-start;
`;

const LoadingAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: #007AFF;
  color: #fff;
  border: 1px solid #e0e0e0;
`;

const LoadingContent = styled.div`
  padding-top: 6px;
  display: flex;
  align-items: center;
`;

export const ChatArea = ({ 
  activeChat, 
  isLoading, 
  onSendMessage, 
  onSuggestionClick 
}) => {
  const chatHistoryRef = useRef(null);

  // 自动滚动到底部
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [activeChat?.messages, isLoading]);

  const handleSendMessage = (text) => {
    // 修改这里：无论是否有活跃对话都允许发送消息
    // 如果没有活跃对话，传递 null 作为 chatId，让上层处理创建新对话
    const chatId = activeChat ? activeChat.id : null;
    onSendMessage(chatId, text);
  };

  const handleSuggestionClick = (suggestionText) => {
    if (onSuggestionClick) {
      onSuggestionClick(suggestionText);
    }
  };

  return (
    <ChatContainer>
      <ChatHistory ref={chatHistoryRef}>
        {!activeChat || activeChat.messages.length === 0 ? (
          <WelcomeScreen onSuggestionClick={handleSuggestionClick} />
        ) : (
          activeChat.messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))
        )}
        
        {isLoading && (
          <LoadingMessageGroup>
            <LoadingAvatar>
              <BotIcon size={20} />
            </LoadingAvatar>
            <LoadingContent>
              <Loading type="dots" />
            </LoadingContent>
          </LoadingMessageGroup>
        )}
      </ChatHistory>
      
      <MessageInput 
        onSendMessage={handleSendMessage} 
        disabled={isLoading}
      />
    </ChatContainer>
  );
};
