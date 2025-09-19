
import { useState, useEffect, useCallback } from 'react';
import { modelAPI } from '../services/api';

export const useModels = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedModel, setSelectedModel] = useState('gpt-4o');

  const fetchModels = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const modelNames = await modelAPI.getModels();
      console.log('Fetched models:', modelNames); // 添加调试日志
      
      setModels(modelNames);
      
      // 设置默认选中的模型
      if (modelNames.length > 0) {
        // 优先选择 gpt-4o，如果不存在则选择第一个
        const defaultModel = modelNames.includes('gpt-4o') ? 'gpt-4o' : modelNames[0];
        console.log('Setting default model:', defaultModel); // 添加调试日志
        setSelectedModel(defaultModel);
      }
      
    } catch (err) {
      console.error('Failed to fetch models:', err);
      setError(err.message);
      
      // 设置降级的默认模型列表
      const fallbackModels = ['gpt-4o', 'gpt-4-turbo', 'gpt-3.5-turbo'];
      setModels(fallbackModels);
      setSelectedModel('gpt-4o');
      
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchModels();
  }, [fetchModels]);

  const handleModelChange = (modelName) => {
    console.log('Model changed to:', modelName); // 添加调试日志
    setSelectedModel(modelName);
  };

  return {
    models,
    selectedModel,
    loading,
    error,
    onModelChange: handleModelChange,
    refetch: fetchModels
  };
};
