
import { generateId } from '../utils/storage';

const API_BASE_URL = '/proxy/holmesgpt.dev';

// 通用请求函数
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  // 如果有认证令牌，添加到请求头
  const token = localStorage.getItem('holmesgpt_token');
  if (token) {
    defaultOptions.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// 模型 API
export const modelAPI = {
  // 获取可用模型列表
  getModels: async () => {
    try {
      const response = await apiRequest('/api/model');
      
      // 处理返回的数据格式：{"model_name":"["deepseek"]"}
      let modelNames = response.model_name || [];
      
      // 如果 model_name 是字符串，需要解析 JSON
      if (typeof modelNames === 'string') {
        try {
          modelNames = JSON.parse(modelNames);
        } catch (parseError) {
          console.error('Failed to parse model_name JSON:', parseError);
          modelNames = [];
        }
      }
      
      // 确保返回数组
      if (!Array.isArray(modelNames)) {
        modelNames = [];
      }
      
      return modelNames;
    } catch (error) {
      console.error('Failed to fetch models:', error);
      // 返回默认模型列表作为降级方案
      return ['gpt-4o', 'gpt-4-turbo', 'gpt-3.5-turbo'];
    }
  },
};

// 聊天 API
export const chatAPI = {
  // 发送聊天消息
  sendMessage: async (message, model = 'deepseek', sessionId = null) => {
    try {
      const requestBody = {
        ask: message,  // 修改为 ask 字段
        model: model
      };

      // 如果有会话ID，可以添加到对话历史中
      if (sessionId) {
        // 根据 API 文档，应该使用 conversation_history 而不是 session_id
        requestBody.conversation_history = [
          {
            role: "system",
            content: "你是一个有用的 Kubernetes 助手。"
          }
          // 这里可以添加之前的对话历史
        ];
      }

      console.log('Sending chat request:', requestBody);

      const response = await apiRequest('/api/chat', {
        method: 'POST',
        body: JSON.stringify(requestBody),
      });

      console.log('Chat response:', response);

      // 返回完整的response数据，包括analysis和tool_calls
      return {
        content: response.analysis || '抱歉，我无法处理您的请求。',
        rawResponse: response, // 保存完整的原始响应
        sessionId: sessionId, // 保持会话ID用于前端状态管理
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Failed to send message:', error);
      throw new Error(`发送消息失败: ${error.message}`);
    }
  },
};
