
import { useState, useCallback } from 'react';
import { chatAPI } from '../services/api';
import { generateId } from '../utils/storage';

const createNewChat = (title = '新对话') => ({
  id: generateId(),
  title,
  messages: [],
  sessionId: null,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

const createMessage = (content, type = 'user', rawResponse = null) => ({
  id: generateId(),
  content,
  type, // 'user' | 'assistant'
  timestamp: new Date().toISOString(),
  rawResponse,
});

export const useChat = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 开始新对话
  const startNewChat = useCallback(() => {
    const newChat = createNewChat();
    setChatHistory(prev => [newChat, ...prev]);
    setActiveChat(newChat);
    return newChat;
  }, []);

  // 选择对话
  const selectChat = useCallback((chat) => {
    setActiveChat(chat);
  }, []);

  // 删除对话
  const deleteChat = useCallback((chatId) => {
    setChatHistory(prev => prev.filter(chat => chat.id !== chatId));
    setActiveChat(prev => prev?.id === chatId ? null : prev);
  }, []);

  // 发送消息
  const sendMessage = useCallback(async (message, selectedModel = 'deepseek') => {
    if (!message.trim()) return;

    let currentChat = activeChat;
    
    // 如果没有活跃对话，创建新对话
    if (!currentChat) {
      currentChat = startNewChat();
    }

    // 添加用户消息
    const userMessage = createMessage(message, 'user');
    const updatedChat = {
      ...currentChat,
      messages: [...currentChat.messages, userMessage],
      title: currentChat.messages.length === 0 ? message.slice(0, 30) + (message.length > 30 ? '...' : '') : currentChat.title,
      updatedAt: new Date().toISOString(),
    };

    // 更新聊天历史和活跃对话
    setChatHistory(prev => prev.map(chat => 
      chat.id === updatedChat.id ? updatedChat : chat
    ));
    setActiveChat(updatedChat);

    try {
      setIsLoading(true);

      // 调用 API 发送消息
      const response = await chatAPI.sendMessage(message, selectedModel, currentChat.sessionId);

      // 添加助手回复
      const assistantMessage = createMessage(response.content, 'assistant', response.rawResponse);
      const finalChat = {
        ...updatedChat,
        messages: [...updatedChat.messages, assistantMessage],
        sessionId: response.sessionId,
        updatedAt: new Date().toISOString(),
      };

      // 更新聊天历史和活跃对话
      setChatHistory(prev => prev.map(chat => 
        chat.id === finalChat.id ? finalChat : chat
      ));
      setActiveChat(finalChat);

    } catch (error) {
      console.error('Failed to send message:', error);
      
      // 添加错误消息
      const errorMessage = createMessage(
        `抱歉，发送消息时出现错误：${error.message}`,
        'assistant'
      );
      const errorChat = {
        ...updatedChat,
        messages: [...updatedChat.messages, errorMessage],
        updatedAt: new Date().toISOString(),
      };

      setChatHistory(prev => prev.map(chat => 
        chat.id === errorChat.id ? errorChat : chat
      ));
      setActiveChat(errorChat);
    } finally {
      setIsLoading(false);
    }
  }, [activeChat, startNewChat]);

  // 处理建议点击
  const handleSuggestionClick = useCallback((suggestionText) => {
    sendMessage(suggestionText);
  }, [sendMessage]);

  return {
    chatHistory,
    activeChat,
    isLoading,
    startNewChat,
    selectChat,
    deleteChat,
    sendMessage,
    handleSuggestionClick,
  };
};
