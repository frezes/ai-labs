import React from 'react';
import styled from 'styled-components';
import { BotIcon } from './Icons';

const WelcomeContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 24px;
  padding: 40px 20px;
`;

const WelcomeIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #007AFF 0%, #0056CC 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 122, 255, 0.3);
`;

const WelcomeTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0;
`;

const WelcomeSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  max-width: 500px;
  line-height: 1.6;
  margin: 0;
`;

const SuggestionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  max-width: 600px;
  width: 100%;
  margin-top: 20px;
`;

const SuggestionCard = styled.button`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e9ecef;
    border-color: #007AFF;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const SuggestionTitle = styled.div`
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 8px;
  font-size: 14px;
`;

const SuggestionDescription = styled.div`
  color: #666;
  font-size: 13px;
  line-height: 1.4;
`;

const suggestions = [
  {
    title: "解释 Kubernetes 概念",
    description: "了解 Pod、Service、Deployment 等核心概念"
  },
  {
    title: "故障排查指导",
    description: "获取应用程序和集群问题的诊断建议"
  },
  {
    title: "最佳实践建议",
    description: "学习云原生应用的部署和管理最佳实践"
  },
  {
    title: "配置文件示例",
    description: "获取常用的 YAML 配置文件模板"
  }
];

export const WelcomeScreen = ({ onSuggestionClick }) => {
  return (
    <WelcomeContainer>
      <WelcomeIcon>
        <BotIcon size={40} />
      </WelcomeIcon>
      
      <div>
        <WelcomeTitle>欢迎使用 HolmesGPT</WelcomeTitle>
        <WelcomeSubtitle>
          我是您的云原生智能助手，专门帮助您解决 Kubernetes 和容器编排相关的问题。
          无论是概念解释、故障排查还是最佳实践，我都能为您提供专业的指导。
        </WelcomeSubtitle>
      </div>

      <SuggestionsContainer>
        {suggestions.map((suggestion, index) => (
          <SuggestionCard
            key={index}
            onClick={() => onSuggestionClick?.(suggestion.title)}
          >
            <SuggestionTitle>{suggestion.title}</SuggestionTitle>
            <SuggestionDescription>{suggestion.description}</SuggestionDescription>
          </SuggestionCard>
        ))}
      </SuggestionsContainer>
    </WelcomeContainer>
  );
};