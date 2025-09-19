
import React from 'react';
import styled from 'styled-components';
import { MenuIcon } from './Icons';
import { ChatArea } from './ChatArea';
import { ModelSelector } from './ModelSelector';
import Sidebar from './Sidebar';

const LayoutContainer = styled.div`
  display: flex;
  height: calc(100vh - 65px);
  background-color: #f5f5f7;
  margin: 0;
  border-radius: 0;
  overflow: hidden;
  position: relative;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: ${props => props.sidebarOpen ? '240px' : '60px'};
  transition: margin-left 0.3s ease;
  position: relative;
  background-color: #fff;
  border-radius: 0;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  min-height: 60px;
  border-radius: 0;
`;

const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  margin-right: 16px;

  &:hover {
    background-color: #f0f0f0;
    color: #007AFF;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const ChatTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1d1d1f;
`;

export const ChatLayout = ({
  sidebarOpen,
  toggleSidebar,
  activeChat,
  chatHistory,
  isLoading,
  selectedModel,
  models,
  modelsLoading,
  modelsError,
  onStartNewChat,
  onSelectChat,
  onDeleteChat,
  onSendMessage,
  onSuggestionClick,
  onModelChange
}) => {
  // 添加调试日志
  console.log('ChatLayout models props:', { models, selectedModel, modelsLoading, modelsError });

  return (
    <LayoutContainer>
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        onStartNewChat={onStartNewChat}
        onSelectChat={onSelectChat}
        chatHistory={chatHistory}
        activeChat={activeChat}
        onDeleteChat={onDeleteChat}
      />
      
      <MainContent sidebarOpen={sidebarOpen}>
        <TopBar>
          <TopBarLeft>
            <MenuButton onClick={toggleSidebar}>
              <MenuIcon />
            </MenuButton>
            <ChatTitle>
              {activeChat ? activeChat.title : 'HolmesGPT'}
            </ChatTitle>
          </TopBarLeft>
          
          <TopBarRight>
            <ModelSelector 
              models={models}
              selectedModel={selectedModel}
              onModelChange={onModelChange}
              loading={modelsLoading}
              error={modelsError}
            />
          </TopBarRight>
        </TopBar>
        
        <ChatArea
          activeChat={activeChat}
          isLoading={isLoading}
          onSendMessage={onSendMessage}
          onSuggestionClick={onSuggestionClick}
        />
      </MainContent>
    </LayoutContainer>
  );
};
