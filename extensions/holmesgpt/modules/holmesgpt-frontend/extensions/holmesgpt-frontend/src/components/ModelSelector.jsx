
import React, { useState } from 'react';
import styled from 'styled-components';

const SelectorContainer = styled.div`
  position: relative;
`;

const SelectorButton = styled.button`
  background: none;
  border: 1px solid #e0e0e0;
  color: #666;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  font-size: 12px;
  gap: 6px;
  min-width: 120px;

  &:hover {
    background-color: #f0f0f0;
    border-color: #007AFF;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  min-width: 160px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  padding: 8px 0;
  display: ${props => props.isOpen ? 'block' : 'none'};
  max-height: 300px;
  overflow-y: auto;
`;

const ModelOption = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s ease;
  background-color: ${props => props.selected ? '#f0f8ff' : 'transparent'};
  font-size: 13px;
  color: #1d1d1f;

  &:hover {
    background-color: #f0f8ff;
  }
`;

const CheckIcon = styled.div`
  color: #007AFF;
  font-size: 12px;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const LoadingText = styled.div`
  padding: 10px 16px;
  font-size: 13px;
  color: #666;
  text-align: center;
`;

const ErrorText = styled.div`
  padding: 10px 16px;
  font-size: 13px;
  color: #ff4444;
  text-align: center;
`;

const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

export const ModelSelector = ({ models = [], selectedModel, onModelChange, loading = false, error = null }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 添加调试日志
  console.log('ModelSelector props:', { models, selectedModel, loading, error });

  const toggleDropdown = () => {
    if (!loading) {
      setIsOpen(!isOpen);
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleModelSelect = (modelName) => {
    onModelChange?.(modelName);
    closeDropdown();
  };

  const displayText = loading ? '加载中...' : (selectedModel || '选择模型');

  return (
    <SelectorContainer>
      <SelectorButton onClick={toggleDropdown} disabled={loading}>
        {displayText}
        <ChevronIcon />
      </SelectorButton>
      
      <Overlay isOpen={isOpen} onClick={closeDropdown} />
      
      <DropdownMenu isOpen={isOpen}>
        {loading && (
          <LoadingText>正在加载模型列表...</LoadingText>
        )}
        
        {error && (
          <ErrorText>加载失败: {error}</ErrorText>
        )}
        
        {!loading && !error && models.length === 0 && (
          <ErrorText>暂无可用模型 (models: {JSON.stringify(models)})</ErrorText>
        )}
        
        {!loading && !error && models.length > 0 && models.map((modelName) => (
          <ModelOption
            key={modelName}
            selected={modelName === selectedModel}
            onClick={() => handleModelSelect(modelName)}
          >
            <span>{modelName}</span>
            <CheckIcon visible={modelName === selectedModel}>
              ✓
            </CheckIcon>
          </ModelOption>
        ))}
      </DropdownMenu>
    </SelectorContainer>
  );
};
