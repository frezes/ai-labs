import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { MenuIcon, CloseIcon, PlusIcon, ChatIcon, DeleteIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

// 更新机器人图标组件 - 更现代的 AI 助手设计
const RobotIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 1H5C3.9 1 3 1.9 3 3V7C1.9 7 1 7.9 1 9V16C1 17.1 1.9 18 3 18V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V18C22.1 18 23 17.1 23 16V9C23 7.9 22.1 7 21 7V9M19 9V16H5V9H19M7.5 11.5C7.5 10.7 8.2 10 9 10S10.5 10.7 10.5 11.5 9.8 13 9 13 7.5 12.3 7.5 11.5M13.5 11.5C13.5 10.7 14.2 10 15 10S16.5 10.7 16.5 11.5 15.8 13 15 13 13.5 12.3 13.5 11.5M8 15H16V16H8V15Z"/>
  </svg>
);

const SidebarContainer = styled.div`
  width: ${props => props.isOpen ? '240px' : '60px'};
  height: calc(100vh - 65px);
  background-color: #fff;
  color: #333;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  overflow: hidden;
  flex-shrink: 0;
  position: fixed;
  top: 65px;
  left: 0px;
  z-index: 100;
  border-right: 1px solid #e9ecef;
  border-radius: 0;
  box-shadow: none;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: ${props => props.isOpen ? 'flex-start' : 'center'};
  align-items: center;
  padding: ${props => props.isOpen ? '16px 20px' : '16px 12px'};
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  border-radius: 0;
  min-height: 56px;
`;

const AppTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  
  svg {
    width: 24px;
    height: 24px;
    color: #007AFF;
  }
  
  span {
    font-weight: 700;
    font-size: 18px;
    color: #1a1a1a;
    display: ${props => props.isOpen ? 'block' : 'none'};
  }
`;

const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e0e0e0;
    border-radius: 2px;
    
    &:hover {
      background-color: #c0c0c0;
    }
  }
`;

const NewChatButtonContainer = styled.div`
  padding: 0 16px 20px;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const CompactNewChatButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: #007AFF;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  display: ${props => props.isOpen ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #0056CC;
    transform: scale(1.05);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const ChatHistorySection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px 12px;
  margin-bottom: 8px;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  
  svg {
    width: 16px;
    height: 16px;
    color: #007AFF;
  }
`;

const SectionTitle = styled.div`
  font-size: 12px;
  color: #666;
  font-weight: 600;
`;

const ChatHistoryList = styled.div`
  padding: 0 ${props => props.isOpen ? '16px' : '12px'};
  flex: 1;
`;

const ChatHistoryItem = styled.div`
  padding: ${props => props.isOpen ? '10px 12px' : '10px 6px'};
  border-radius: 8px;
  margin-bottom: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${props => props.isOpen ? '10px' : '0'};
  font-size: 13px;
  position: relative;
  background-color: ${props => props.active ? '#f0f8ff' : 'transparent'};
  border: ${props => props.active ? '1px solid #007AFF' : '1px solid transparent'};
  transition: all 0.2s ease;
  justify-content: ${props => props.isOpen ? 'flex-start' : 'center'};
  
  &:hover {
    background-color: ${props => props.active ? '#f0f8ff' : '#f8f9fa'};
    transform: ${props => props.isOpen ? 'translateX(2px)' : 'scale(1.05)'};
  }
  
  svg {
    width: 14px;
    height: 14px;
    color: ${props => props.active ? '#007AFF' : '#666'};
    flex-shrink: 0;
  }
`;

const ChatHistoryItemContent = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
  font-weight: ${props => props.active ? '500' : '400'};
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  font-size: 12px;
  opacity: 0;
  transition: all 0.2s ease;
  border-radius: 4px;
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  
  ${ChatHistoryItem}:hover & {
    opacity: 1;
  }
  
  &:hover {
    color: #ff4757;
    background-color: #fff5f5;
  }
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

const SidebarFooter = styled.div`
  padding: 12px;
  border-top: 1px solid #f0f0f0;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const ToggleButton = styled.button`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  width: ${props => props.isOpen ? '40px' : '36px'};
  height: 32px;

  &:hover {
    background-color: #e9ecef;
    border-color: #007AFF;
    color: #007AFF;
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 65px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 99;
  display: ${props => props.isOpen && props.showOverlay ? 'block' : 'none'};
  backdrop-filter: blur(1px);
`;

export default function Sidebar({ 
  isOpen, 
  toggleSidebar, 
  onStartNewChat, 
  onSelectChat, 
  chatHistory, 
  activeChat,
  onDeleteChat
}) {
  const handleDeleteChat = (e, chatId) => {
    e.stopPropagation();
    onDeleteChat(chatId);
  };

  // 在移动端显示遮罩层
  const showOverlay = window.innerWidth <= 768;

  return (
    <>
      <Overlay isOpen={isOpen} showOverlay={showOverlay} onClick={toggleSidebar} />
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader isOpen={isOpen}>
          <AppTitle isOpen={isOpen}>
            <RobotIcon />
            <span>HolmesGPT</span>
          </AppTitle>
        </SidebarHeader>
        
        <SidebarContent>
          <NewChatButtonContainer isOpen={isOpen}>
            <Button variant="primary" onClick={onStartNewChat} minWidth="208px">
                <PlusIcon />
                Ask HolmesGPT
              </Button>
          </NewChatButtonContainer>
          
          <CompactNewChatButton isOpen={isOpen} onClick={onStartNewChat}>
            <PlusIcon />
          </CompactNewChatButton>
          
          {chatHistory.length > 0 && (
            <ChatHistorySection>
              <SectionHeader isOpen={isOpen}>
                <ChatIcon />
                <SectionTitle>最近聊天</SectionTitle>
              </SectionHeader>
              <ChatHistoryList isOpen={isOpen}>
                {chatHistory.map(chat => (
                  <ChatHistoryItem
                    key={chat.id}
                    active={activeChat && activeChat.id === chat.id}
                    isOpen={isOpen}
                    onClick={() => onSelectChat(chat)}
                    title={!isOpen ? chat.title : undefined}
                  >
                    <ChatIcon />
                    <ChatHistoryItemContent isOpen={isOpen} active={activeChat && activeChat.id === chat.id}>
                      {chat.title}
                    </ChatHistoryItemContent>
                    <DeleteButton 
                      isOpen={isOpen}
                      onClick={(e) => handleDeleteChat(e, chat.id)}
                    >
                      <DeleteIcon />
                    </DeleteButton>
                  </ChatHistoryItem>
                ))}
              </ChatHistoryList>
            </ChatHistorySection>
          )}
        </SidebarContent>
        
        <SidebarFooter>
          <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
            {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </ToggleButton>
        </SidebarFooter>
      </SidebarContainer>
    </>
  );
}