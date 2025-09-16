
// 生成唯一ID
export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// 本地存储工具函数
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Failed to get from localStorage:', error);
      return defaultValue;
    }
  },

  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Failed to set to localStorage:', error);
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to remove from localStorage:', error);
    }
  },
};

export const ChatStorage = {
  STORAGE_KEY: 'holmesgpt-chats',
  
  saveChats: (chats) => {
    try {
      localStorage.setItem(ChatStorage.STORAGE_KEY, JSON.stringify(chats));
    } catch (error) {
      console.error('Failed to save chats:', error);
    }
  },
  
  loadChats: () => {
    try {
      const stored = localStorage.getItem(ChatStorage.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to load chats:', error);
      return [];
    }
  },
  
  clearChats: () => {
    try {
      localStorage.removeItem(ChatStorage.STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear chats:', error);
    }
  }
};

export const generateChatTitle = (firstMessage) => {
  if (!firstMessage) return '新对话';
  
  const text = firstMessage.trim();
  if (text.length <= 30) return text;
  
  return text.substring(0, 30) + '...';
};
