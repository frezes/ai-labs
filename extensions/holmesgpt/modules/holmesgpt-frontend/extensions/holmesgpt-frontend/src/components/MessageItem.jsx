
import React from 'react';
import styled from 'styled-components';
import { UserIcon, BotIcon, InfoIcon, CodeIcon } from './Icons';

const MessageGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  max-width: 90%;
  align-self: ${({ sender }) => (sender === 'user' ? 'flex-end' : 'flex-start')};
  flex-direction: ${({ sender }) => (sender === 'user' ? 'row-reverse' : 'row')};
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${({ sender }) =>
    sender === 'user' ? '#f0f0f0' : '#007AFF'};
  color: ${({ sender }) => (sender === 'user' ? '#666' : '#fff')};
  border: 1px solid #e0e0e0;
`;

const MessageContent = styled.div`
  padding-top: 6px;
  color: #333;
  font-size: 14px;
  line-height: 1.7;
  word-wrap: break-word;

  pre {
    background-color: #f5f5f5;
    color: #333;
    border-radius: 4px;
    padding: 16px;
    white-space: pre-wrap;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    font-size: 13px;
    margin: 12px 0;
    border: 1px solid #e0e0e0;
  }

  code {
    background-color: #f5f5f5;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    font-size: 13px;
  }

  p {
    margin: 0 0 12px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ToolCallSection = styled.div`
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  margin: 10px 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  h3 {
    margin-top: 0;
    margin-bottom: 8px;
    color: #333;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .tool-call-item {
    background-color: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease;

    &:last-child {
      margin-bottom: 0;
    }

    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      transform: translateY(-0.5px);
    }

    .tool-name {
      font-weight: 600;
      color: #007AFF;
      margin-bottom: 6px;
    }

    .tool-params {
      background-color: #f8f9fa;
      padding: 8px;
      border-radius: 4px;
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
      font-size: 12px;
      margin-bottom: 8px;
      border-left: 3px solid #007AFF;
    }

    .tool-result {
      color: #333;
    }
  }
`;

const Collapsible = styled.div`
  .collapsible-header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .collapsible-content {
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
    transition: max-height 0.3s ease;
  }
`;

// 工具调用标记的样式
const ToolCallMarker = styled.span`
  background-color: #e3f2fd;
  color: #1565c0;
  padding: 3px 8px;
  border-radius: 16px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 12px;
  margin: 0 2px;
  border: 1px solid #bbdefb;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #bbdefb;
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

// 工具名称样式
const ToolName = styled.div`
  font-weight: 600;
  color: #007AFF;
  margin: 8px 0;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  padding: 4px 8px;
  background-color: #eef7ff;
  border-radius: 4px;
  display: inline-block;
`;

// 工具参数样式
const ToolParams = styled.div`
  background-color: #f8f9fa;
  padding: 12px;
  border-radius: 6px;
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 13px;
  margin: 8px 0;
  border: 1px solid #e9ecef;
  border-left: 3px solid #007AFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease;
  
  pre {
    margin: 0;
    background: none;
    border: none;
    padding: 0;
  }

  &:hover {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.06);
  }
`;

// 工具调用结果样式
const ToolCallResultStyle = styled.div`
  .tool-call-result {
    margin: 8px 0;
    padding: 10px;
    background: linear-gradient(145deg, #ffffff, #f8f9fa);
    border-radius: 6px;
    border: 1px solid #e9ecef;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
  }
  
  .tool-call-result:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  }
  
  .tool-call-result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    color: #333;
    font-size: 13px;
    padding-bottom: 6px;
    border-bottom: 1px solid #e9ecef;
  }
  
  .tool-call-description {
    margin: 6px 0;
    font-style: italic;
    color: #666;
    padding: 6px 8px;
    background-color: #f8f9fa;
    border-radius: 3px;
    border-left: 2px solid #adb5bd;
    font-size: 12px;
  }
  
  .tool-call-result-content {
    margin-top: 8px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 4px;
    overflow-x: auto;
    border: 1px solid #e9ecef;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.03);
  }
  
  .table-container {
    overflow-x: auto;
    margin: 8px 0;
    border-radius: 4px;
    border: 1px solid #e9ecef;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 12px;
  }
  
  th, td {
    padding: 6px 8px;
    text-align: left;
    border: 1px solid #e9ecef;
  }
  
  th {
    background-color: #f8f9fa;
    font-weight: 600;
    color: #333;
    border-bottom: 1px solid #007AFF;
  }
  
  tr:nth-child(even) {
    background-color: #fafbfc;
  }
  
  tr:hover {
    background-color: #f1f3f5;
  }
`;



// 渲染表格数据的组件
const TableRenderer = ({ data }) => {
  // 检查是否是表格格式的数据
  const lines = data.split('\n');
  if (lines.length < 2) return <pre>{data}</pre>;
  
  // 检查第一行和第二行是否构成表格头部
  const hasTableHeader = lines[1].includes('---') || lines[1].includes('___');
  
  if (!hasTableHeader) {
    // 如果不是表格，检查是否包含多个空格分隔的列
    const firstLineParts = lines[0].split(/\s{2,}/);
    if (firstLineParts.length < 2) return <pre>{data}</pre>;
  }
  
  // 提取表头和数据行
  let headers = [];
  let rows = [];
  
  if (hasTableHeader) {
    headers = lines[0].split(/\s{2,}/).map(h => h.trim());
    rows = lines.slice(2).filter(line => line.trim()).map(line => 
      line.split(/\s{2,}/).map(cell => cell.trim())
    );
  } else {
    headers = lines[0].split(/\s{2,}/).map(h => h.trim());
    rows = lines.slice(1).filter(line => line.trim()).map(line => 
      line.split(/\s{2,}/).map(cell => cell.trim())
    );
  }
  
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const renderMessageText = (text) => {
  // 添加安全检查
  if (!text || typeof text !== 'string') {
    return <p>消息内容为空</p>;
  }

  // 简单的 markdown 渲染
  const lines = text.split('\n');
  let inCodeBlock = false;
  let codeBlockContent = [];
  const elements = [];

  lines.forEach((line, index) => {
    // 检查是否包含特殊工具调用标记
    const hasToolCallMarkers = line.includes('<｜tool') && line.includes('｜>');
    
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        // 结束代码块
        elements.push(
          <pre key={`code-${index}`}>
            {codeBlockContent.join('\n')}
          </pre>
        );
        codeBlockContent = [];
        inCodeBlock = false;
      } else {
        // 开始代码块
        inCodeBlock = true;
      }
    } else if (inCodeBlock) {
      codeBlockContent.push(line);
    } else if (hasToolCallMarkers) {
      // 对于包含工具调用标记的行，使用特殊处理
      elements.push(
        <div key={`tool-${index}`} className="tool-call-markers">
          {renderToolCallMarkers(line)}
        </div>
      );
    } else {
      // 处理行内代码和Markdown格式
      let processedLine = line;
      
      // 处理粗体
      processedLine = processedLine.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      processedLine = processedLine.replace(/\*([^*]+)\*/g, '<em>$1</em>');
      
      // 处理行内代码
      const parts = processedLine.split(/(`[^`]+`)/g);
      const formattedParts = parts.map((part, partIndex) => {
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={partIndex}>{part.slice(1, -1)}</code>;
        } else if (part.includes('<strong>') || part.includes('<em>')) {
          // 处理包含HTML标签的部分
          return (
            <span key={partIndex} dangerouslySetInnerHTML={{ __html: part }} />
          );
        }
        return part;
      });
      
      // 如果行不为空，则添加p标签
      if (line.trim()) {
        elements.push(<p key={index}>{formattedParts}</p>);
      } else {
        // 对于空行，添加一个换行元素
        elements.push(<br key={index} />);
      }
    }
  });

  // 如果还有未闭合的代码块
  if (inCodeBlock && codeBlockContent.length > 0) {
    elements.push(
      <pre key="code-final">
        {codeBlockContent.join('\n')}
      </pre>
    );
  }

  return elements;
};

// 专门处理工具调用标记的函数
const renderToolCallMarkers = (text) => {
  // 处理两种可能的工具调用标记格式
  // 格式1: <｜tool▁calls▁begin｜>
  // 格式2: TOOL_CALLS_BEGIN
  
  // 首先尝试格式1
  if (text.includes('<｜') && text.includes('｜>')) {
    const parts = text.split(/(<｜[^｜]+｜>)/);
    
    return parts.map((part, index) => {
      // 检查是否是工具调用标记
      if (part.startsWith('<｜') && part.endsWith('｜>')) {
        // 根据标记类型显示不同的样式
        if (part.includes('tool▁calls▁begin')) {
          return <ToolCallMarker key={index}>TOOL_CALLS_BEGIN</ToolCallMarker>;
        } else if (part.includes('tool▁call▁begin')) {
          return <ToolCallMarker key={index}>TOOL_CALL_BEGIN</ToolCallMarker>;
        } else if (part.includes('tool▁sep')) {
          return <ToolCallMarker key={index}>TOOL_SEP</ToolCallMarker>;
        } else if (part.includes('tool▁call▁end')) {
          return <ToolCallMarker key={index}>TOOL_CALL_END</ToolCallMarker>;
        } else if (part.includes('tool▁calls▁end')) {
          return <ToolCallMarker key={index}>TOOL_CALLS_END</ToolCallMarker>;
        }
        return <span key={index}>{part}</span>;
      }
      
      // 处理标记外的内容中的行内代码
      if (part.includes('`')) {
        const codeParts = part.split(/(`[^`]+`)/g);
        return codeParts.map((codePart, codeIndex) => {
          if (codePart.startsWith('`') && codePart.endsWith('`')) {
            return <code key={codeIndex}>{codePart.slice(1, -1)}</code>;
          }
          return codePart;
        });
      }
      
      return part;
    });
  }
  
  // 处理格式2: TOOL_CALLS_BEGIN等直接文本格式
  const parts = text.split(/(TOOL_CALLS_BEGIN|TOOL_CALL_BEGIN|TOOL_SEP|TOOL_CALL_END|TOOL_CALLS_END)/);
  
  return parts.map((part, index) => {
    if (part === 'TOOL_CALLS_BEGIN') {
      return <ToolCallMarker key={index}>TOOL_CALLS_BEGIN</ToolCallMarker>;
    } else if (part === 'TOOL_CALL_BEGIN') {
      return <ToolCallMarker key={index}>TOOL_CALL_BEGIN</ToolCallMarker>;
    } else if (part === 'TOOL_SEP') {
      return <ToolCallMarker key={index}>TOOL_SEP</ToolCallMarker>;
    } else if (part === 'TOOL_CALL_END') {
      return <ToolCallMarker key={index}>TOOL_CALL_END</ToolCallMarker>;
    } else if (part === 'TOOL_CALLS_END') {
      return <ToolCallMarker key={index}>TOOL_CALLS_END</ToolCallMarker>;
    }
    
    // 处理工具名称和参数
    if (part.trim()) {
      // 检查是否是JSON参数
      if (part.trim().startsWith('{') && part.trim().endsWith('}')) {
        try {
          // 尝试解析JSON并格式化显示
          const jsonData = JSON.parse(part.trim());
          return (
            <ToolParams key={index}>
              <pre>{JSON.stringify(jsonData, null, 2)}</pre>
            </ToolParams>
          );
        } catch (e) {
          // 如果不是有效的JSON，直接显示
          return <ToolName key={index}>{part}</ToolName>;
        }
      } else {
        return <ToolName key={index}>{part}</ToolName>;
      }
    }
    
    return part;
  });
};

// 工具调用结果渲染组件
const ToolCallResultRenderer = ({ toolCallResult }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!toolCallResult || typeof toolCallResult !== 'object') {
    return null;
  }

  // 尝试渲染表格数据
  const renderResult = () => {
    if (!toolCallResult.result) return null;
    
    // 如果result是对象，显示为JSON
    if (typeof toolCallResult.result === 'object') {
      // 检查是否有表格格式的数据
      const data = toolCallResult.result.data || '';
      if (typeof data === 'string' && (data.includes('\n') && (data.includes(' ') || data.includes('|')))) {
        return <TableRenderer data={data} />;
      }
      return <pre>{JSON.stringify(toolCallResult.result, null, 2)}</pre>;
    }
    
    // 如果result是字符串，检查是否是表格格式
    if (typeof toolCallResult.result === 'string' && toolCallResult.result.includes('\n')) {
      return <TableRenderer data={toolCallResult.result} />;
    }
    
    return <pre>{toolCallResult.result}</pre>;
  };

  return (
    <ToolCallResultStyle>
      <div className="tool-call-result">
        <div 
          className="tool-call-result-header" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <strong>{toolCallResult.tool_name}</strong>
          <span>{toolCallResult.tool_call_id}</span>
        </div>
        {toolCallResult.description && (
          <div className="tool-call-description">{toolCallResult.description}</div>
        )}
        {toolCallResult.result && (
          <Collapsible isOpen={isOpen}>
            <div className="tool-call-result-content">
              {renderResult()}
            </div>
          </Collapsible>
        )}
      </div>
    </ToolCallResultStyle>
  );
};

// 工具调用渲染组件 - 支持显示所有工具调用
const ToolCallRenderer = ({ toolCalls }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // 确保toolCalls是数组
  const toolCallsArray = Array.isArray(toolCalls) ? toolCalls : [];
  
  // 过滤出有效的工具调用结构
  const validToolCalls = toolCallsArray.filter(toolCall => 
    toolCall && typeof toolCall === 'object'
  );

  return (
    <ToolCallSection>
      <Collapsible isOpen={isOpen}>
        <div 
          className="collapsible-header" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3>
            <CodeIcon size={18} /> 工具调用 ({toolCallsArray.length})
          </h3>
          <span>{isOpen ? '▼' : '▶'}</span>
        </div>
        <div className="collapsible-content">
          {validToolCalls.length > 0 ? (
            validToolCalls.map((toolCall, index) => (
              <ToolCallResultRenderer key={index} toolCallResult={toolCall} />
            ))
          ) : (
            <p className="no-tool-calls">暂无工具调用结果</p>
          )}
        </div>
      </Collapsible>
    </ToolCallSection>
  );
};

export const MessageItem = ({ message }) => {
  // 添加安全检查和属性映射
  if (!message) {
    return null;
  }

  // 处理不同的消息属性名
  const messageText = message.content || message.text || '';
  const messageSender = message.type === 'user' ? 'user' : 'assistant';
  const rawResponse = message.rawResponse || {};
  
  // 获取tool_calls（不通过conversation_history处理）
  const toolCalls = Array.isArray(rawResponse.tool_calls) ? rawResponse.tool_calls : [];

  // 默认展示所有内容
  const displayContent = renderMessageText(messageText);
  
  return (
    <MessageGroup sender={messageSender}>
      <Avatar sender={messageSender}>
        {messageSender === 'user' ? <UserIcon size={20} /> : <BotIcon size={20} />}
      </Avatar>
      <MessageContent>
        {displayContent}
        
        {/* 显示tool_call信息 */}
        {messageSender === 'assistant' && toolCalls.length > 0 && (
          <>
            {/* 直接从tool_calls字段获取 */}
            <ToolCallRenderer toolCalls={toolCalls} />
          </>
        )}
        

      </MessageContent>
    </MessageGroup>
  );
};
