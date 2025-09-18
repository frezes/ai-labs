# HolmesGPT Extension for KubeSphere

HolmesGPT 是一个专为 KubeSphere 设计的 AI 助手扩展，提供云原生环境故障排查和智能运维功能。

## 功能特性

### 🤖 智能聊天
- 与 HolmesGPT AI 助手进行自然语言对话
- 支持 Markdown 格式的消息渲染
- 实时消息流和工具调用展示
- 消息复制和历史记录功能

### 🔍 告警调查
- 自动化问题调查和分析
- 支持 `@investigate` 命令触发调查模式
- 详细的调查结果和工具调用展示
- 后续操作建议

### 🏥 应用健康检查
- 工作负载健康状态检查
- 支持 `@workload_health` 命令和 `#resource{kind,ns,name}` 格式
- 实时健康状态监控
- 详细的检查结果和建议

## 技术架构

### 前端技术栈
- **React 18** - 用户界面框架
- **Styled-components** - CSS-in-JS 样式方案
- **React Router DOM** - 客户端路由
- **@kubed/components** - KubeSphere 设计系统组件
- **@kubed/icons** - KubeSphere 图标库

### 核心组件
- `Layout` - 主布局组件，包含侧边栏和内容区域
- `Sidebar` - 左侧导航栏，提供功能切换
- `NewChat` - 新聊天页面，集成所有聊天功能
- `MessageList` - 消息列表组件，支持 Markdown 渲染
- `InputArea` - 输入区域组件，支持多行输入和快捷键
- `WelcomeScreen` - 欢迎屏幕，提供功能引导

## 安装和配置

### 1. 环境要求
- KubeSphere 3.0+
- Node.js 16+
- 现代浏览器支持

### 2. 安装扩展
```bash
# 克隆项目
git clone <repository-url>
cd extensions/holmesgpt

# 安装依赖
npm install

# 构建扩展
npm run build
```

### 3. 配置 API 地址

#### 方法一：通过配置文件（推荐）
```yaml
# holmesgpt-config.yaml
api:
  url: "http://your-holmesgpt-server:8000"
  timeout: 30000
  debug: false
```

#### 方法二：通过环境变量
```bash
export REACT_APP_HOLMESGPT_API_URL="http://localhost:8000"
```

#### 方法三：通过 KubeSphere 代理
```yaml
api:
  url: "/api"  # 通过 KubeSphere 代理，避免 CORS 问题
```

### 4. 部署到 KubeSphere
将构建后的文件部署到 KubeSphere 扩展目录，或使用提供的 Dockerfile 构建容器镜像。

## 使用指南

### 基本聊天
1. 点击左侧导航栏的"新聊天"
2. 在输入框中输入您的问题
3. 按 `Ctrl+Enter` 发送消息，或点击发送按钮

### 告警调查
1. 在输入框中输入 `@investigate <资源类型> <资源名称> [描述]`
2. 例如：`@investigate Pod my-pod 在 default 命名空间崩溃了`
3. HolmesGPT 将自动分析问题并提供详细报告

### 健康检查
1. 在输入框中输入 `@workload_health #resource{kind,ns,name}`
2. 例如：`@workload_health #resource{Deployment,default,my-app}`
3. 系统将检查指定工作负载的健康状态

## 配置选项

### API 配置
```yaml
api:
  url: "/api"                    # API 服务器地址
  timeout: 30000                 # 请求超时时间（毫秒）
  debug: false                   # 是否启用调试模式
```

### 功能配置
```yaml
features:
  chat: true                     # 启用聊天功能
  healthCheck: true              # 启用健康检查功能
  alertInvestigation: true       # 启用告警调查功能
```

### 界面配置
```yaml
ui:
  language: "zh"                 # 界面语言 (zh/en)
  theme: "light"                 # 主题 (light/dark)
  sidebarWidth: 240              # 侧边栏宽度
```

## 开发指南

### 项目结构
```
src/
├── components/          # 可复用组件
│   ├── Layout.jsx      # 主布局组件
│   ├── Sidebar.jsx     # 侧边栏组件
│   ├── MessageList.jsx # 消息列表组件
│   ├── InputArea.jsx   # 输入区域组件
│   ├── WelcomeScreen.jsx # 欢迎屏幕组件
│   └── MarkdownRenderer.jsx # Markdown 渲染器
├── pages/              # 页面组件
│   ├── NewChat.jsx     # 新聊天页面
│   ├── HealthCheck.jsx # 健康检查页面
│   └── AlertInvestigation.jsx # 告警调查页面
├── lib/                # 核心库
│   ├── api.js          # API 客户端
│   └── config.js       # 配置管理器
├── utils/              # 工具函数
│   └── index.js        # 通用工具函数
├── locales/            # 国际化文件
│   ├── zh/             # 中文语言包
│   └── en/             # 英文语言包
├── routes/             # 路由配置
│   └── index.js        # 路由定义
└── index.js            # 扩展入口文件
```

### 开发命令
```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 代码检查
npm run lint

# 格式化代码
npm run format
```

### 添加新功能
1. 在 `src/pages/` 中创建新页面组件
2. 在 `src/routes/index.js` 中添加路由
3. 在 `src/components/Sidebar.jsx` 中添加导航项
4. 更新国际化文件

## 故障排除

### 常见问题

1. **CORS 错误**
   - 使用 KubeSphere 代理模式：`url: "/api"`
   - 或配置 API 服务器支持 CORS

2. **API 连接失败**
   - 检查 API 服务器地址和端口
   - 验证网络连接
   - 启用调试模式查看详细错误

3. **扩展无法加载**
   - 检查 KubeSphere 版本兼容性
   - 验证扩展配置格式
   - 查看浏览器控制台错误信息

### 调试模式
启用调试模式可以查看详细的 API 请求和响应信息：
```yaml
api:
  debug: true
```

## 贡献指南

1. Fork 项目
2. 创建功能分支：`git checkout -b feature/new-feature`
3. 提交更改：`git commit -am 'Add new feature'`
4. 推送分支：`git push origin feature/new-feature`
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 支持

如有问题或建议，请通过以下方式联系：
- 提交 [Issue](https://github.com/your-repo/issues)
- 发送邮件至：support@example.com
- 查看 [文档](https://docs.example.com)

---

**HolmesGPT Extension** - 让云原生运维更智能 🚀