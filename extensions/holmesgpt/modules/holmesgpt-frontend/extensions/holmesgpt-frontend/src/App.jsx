import React, { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { ChatLayout } from './components/ChatLayout';
import { useModels } from './hooks/useModels';
import { useChat } from './hooks/useChatState';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 使用模型管理 Hook
  const { models, selectedModel, loading: modelsLoading, error: modelsError, onModelChange } = useModels();

  // 使用聊天状态管理 Hook
  const {
    chatHistory,
    activeChat,
    isLoading,
    startNewChat,
    selectChat,
    deleteChat,
    sendMessage,
    handleSuggestionClick,
  } = useChat();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSendMessage = (chatId, message) => {
    sendMessage(message, selectedModel);
  };

  return (
    <ErrorBoundary>
      <ChatLayout
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        activeChat={activeChat}
        chatHistory={chatHistory}
        isLoading={isLoading}
        selectedModel={selectedModel}
        models={models}
        modelsLoading={modelsLoading}
        modelsError={modelsError}
        onStartNewChat={startNewChat}
        onSelectChat={selectChat}
        onDeleteChat={deleteChat}
        onSendMessage={handleSendMessage}
        onSuggestionClick={handleSuggestionClick}
        onModelChange={onModelChange}
      />
    </ErrorBoundary>
  );
}

export default App;