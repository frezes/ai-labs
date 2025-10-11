# AI-Labs

KubeSphere 扩展的 AI 实验室。

## 包含内容

- [open-webui](./extensions/open-webui/README.md): 用户友好的 AI 界面（支持 Ollama、OpenAI API 等）
- [jupyterhub](./extensions/jupyterhub/README.md): 多用户 Jupyter Notebook 服务器

## 快速开始

### 方式 1：使用 kubectl 部署（推荐）

```sh
kubectl apply -f https://raw.githubusercontent.com/frezes/ai-labs/refs/heads/main/deploy/deploy.yaml
```

### 方式 2：作为 KubeSphere 扩展安装（开发者使用）

```sh
git clone https://github.com/frezes/ai-labs.git
cd ai-labs
# 发布扩展
ksbuilder publish extensions/{extension}/config/{extension}
```

### 最后步骤（两种方式都需要）

使用任一方式部署后，请前往 KubeSphere 控制台，在扩展管理页面安装扩展。

## 项目说明

AI-Labs 是一个为 KubeSphere 平台设计的扩展集合，包含了多个与 AI 相关的工具和服务，可以帮助用户在 Kubernetes 环境中更好地利用 AI 技术。

## 许可证

本项目采用 Apache 2.0 许可证。详情请见 LICENSE 文件。