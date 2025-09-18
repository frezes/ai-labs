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

const SuggestionCard = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
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
    title: "检查 Kubernetes 资源状态",
    description: "使用 kubectl 命令查询集群中的各种资源状态"
  },
  {
    title: "分析应用日志",
    description: "获取 Pod 日志并分析应用运行状态和错误信息"
  },
  {
    title: "查询监控指标",
    description: "查询 Prometheus 监控指标和告警规则状态"
  },
  {
    title: "排查系统性能问题",
    description: "分析系统性能瓶颈和应用故障原因"
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
          我是 HolmesGPT，一款专注云原生与 Kubernetes 环境的 AI 智能代理，提供快速、专业的一站式故障诊断与运维支持
        </WelcomeSubtitle>
      </div>

      <SuggestionsContainer>
        {suggestions.map((suggestion, index) => (
          <SuggestionCard
            key={index}
          >
            <SuggestionTitle>{suggestion.title}</SuggestionTitle>
            <SuggestionDescription>{suggestion.description}</SuggestionDescription>
          </SuggestionCard>
        ))}
      </SuggestionsContainer>

      <div style={{ marginTop: '24px', color: '#1d1d1f', fontSize: '16px', fontWeight: '500' }}>
        有什么问题需要我帮助解决吗？
      </div>
    </WelcomeContainer>
  );
};