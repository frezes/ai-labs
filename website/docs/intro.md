---
sidebar_position: 1
---

# AI Labs 是什么？

**AI Labs** 是一个基于 [KubeSphere 可插拔架构](https://dev-guide.kubesphere.io/extension-dev-guide/zh/overview/) 打造的智能实验平台，致力于探索 **云原生 × AI** 的融合创新。

它通过扩展 KubeSphere 的能力，将多种 AI 应用、Agent 与自动化工具无缝集成到云原生环境中，为开发者提供一个可验证、可扩展的智能化实验空间。

AI Labs 的目标是：
- **探索 AI 在云原生场景的最佳实践**，如智能诊断、自动化运维和模型交互；
- **为 KubeSphere 注入 AI 能力**，助力平台实现智能化管理；
- **构建开放的 AI 生态**，让更多 AI 应用以插件的方式轻松融入 KubeSphere。


## 🚀 AI Labs 组件概览

| 组件名称           | 描述                                                                                                   | 推荐程度  | 当前开发状态 | 最新版本   |
| -------------- | ---------------------------------------------------------------------------------------------------- | ----- | ------ | ------ |
| **HolmesGPT**  | 一款面向云原生环境的智能故障诊断 Agent（AI Agent for Troubleshooting Cloud-Native Environments），能够自动分析日志、检测异常并提供修复建议。 | ⭐⭐⭐⭐⭐ | ✅ 已完成  | v0.12.4 |
| **Open-WebUI** | 开源的多模型统一聊天界面（Open WebUI for LLMs），支持本地与远程大语言模型接入。                                                    | ⭐⭐⭐⭐☆ | ✅ 已完成  | v0.6.8 |
| **JupyterHub** | 支持多用户的交互式 Notebook 环境，用于实验、教学与 AI 原型开发。                                                              | ⭐☆☆☆☆ | ✅ 已完成  | v5.3.0 |
| **n8n**        | 可视化工作流自动化平台（Workflow Automation for AI Integration），用于探索 AI 组件间的自动化编排与数据流集成。                         | ⭐⭐⭐⭐⭐  | 🧪 研究中 | -      |



## 📘 接下来做什么

- [安装 Kubernetes 及 KubeSphere](https://docs.kubesphere.com.cn/)
- [快速部署 AI Labs](./quick-start.md)
- [安装扩展组件](./extension-managerment/_category_.json)


> 💡 **提示：**  
> AI Labs 仍在持续演进中，未来将陆续集成更多智能组件与实验特性，助力 KubeSphere 迈向全面智能化。
