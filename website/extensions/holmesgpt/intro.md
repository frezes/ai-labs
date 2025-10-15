---
sidebar_position: 1
title: HolmesGPT 介绍
---

# HolmesGPT 介绍

## HolmesGPT 是什么

**HolmesGPT** 是一个面向云原生环境的智能故障排查助手（AI Agent for Troubleshooting Cloud-Native Environments）。  
它基于大语言模型（LLM），通过交互式分析、自动化集成和多源数据联动，帮助用户快速定位和解决云原生系统中的问题。



## 主要特性

### 1. 交互式诊断（Interactive Mode）

HolmesGPT 提供强大的对话式交互界面，支持用户以自然语言与 AI 进行多轮对话式排障。  
它能够理解上下文，结合日志、事件、配置等信息，进行迭代式的故障分析与建议。

### 2. CI/CD 流水线故障分析

HolmesGPT 可集成到 CI/CD 流水线中，自动识别并分析部署失败的原因。  
当部署失败时，系统会即时生成诊断结果，并可将分析报告推送到 **Slack** 等协作工具中，帮助开发团队快速响应。

### 3. Prometheus 告警分析

通过连接到 **AlertManager** 实例，HolmesGPT 能够对 Prometheus/AlertManager 的告警进行深入分析。  
无论是全量告警还是特定告警，都可通过 HolmesGPT 发起智能调查，定位潜在问题根因。

### 4. MCP 集成分析

HolmesGPT 支持与 **MCP（Model Context Protocol）** 服务器集成，可结合 **MCP** 与 **自定义 tool_call** 进行智能化排查，帮助运维人员快速理解和解决集群异常。



## 快速开始

### 前提条件

在开始之前，请确保：

- 已部署可用的 **KubeSphere** 环境。
- 已按照 [AI Labs 快速开始指南](https://frezes.github.io/ai-labs/docs/quick-start/) 安装完成 AI Labs 平台。



### 安装 HolmesGPT 扩展

1. 打开 **KubeSphere 扩展中心**。  
2. 搜索 **HolmesGPT** 并进入详情页。  
3. 点击 **安装**，根据提示完成安装流程。  

#### 示例配置

```yaml
holmes:
  logLevel: DEBUG
  additionalEnvVars:
    - name: CLUSTER_NAME
      value: "host"
    - name: DEEPSEEK_API_BASE
      value: "https://openapi.coreshub.cn/v1"                # 请替换为您的 DeepSeek API Base
    - name: DEEPSEEK_API_KEY
      value: "sk-*******************"                        # 请替换为您的 DeepSeek API Key

  customClusterRoleRules:
    - apiGroups: ["monitoring.coreos.com"]
      resources: ["servicemonitors", "podmonitors", "prometheusrules"]
      verbs: ["get", "list"]
    - apiGroups: [""]
      resources: ["secrets", "pods", "services", "configmaps", "persistentvolumeclaims"]
      verbs: ["get", "list", "watch"]
    - apiGroups: [""]
      resources: ["namespaces"]
      verbs: ["get"]
    - apiGroups: ["apps"]
      resources: ["deployments", "statefulsets", "daemonsets"]
      verbs: ["get", "list", "watch"]
    - apiGroups: ["batch"]
      resources: ["jobs", "cronjobs"]
      verbs: ["get", "list", "watch"]
    - apiGroups: ["networking.k8s.io"]
      resources: ["ingresses"]
      verbs: ["get", "list", "watch"]

  toolsets:
    kubernetes/core:
      enabled: true
    kubernetes/logs:
      enabled: true
    kubernetes/prometheus_stack:
      description: This toolset fetches Prometheus target definitions. Requires specific cluster role rules.
      enabled: true
    helm/core:
      enabled: true
    robusta:
      enabled: false
    internet:
      enabled: true
    prometheus/metrics:
      enabled: true
      config:
        prometheus_url: "http://prometheus-k8s.kubesphere-monitoring-system.svc:9090"

  modelList:
    deepseek:
      api_key: "{{ env.DEEPSEEK_API_KEY }}"
      model: deepseek/DeepSeek-V3.1-Terminus               # 请替换为您的 DeepSeek 模型
      temperature: 0
```

安装完成后，HolmesGPT 将出现在扩展组件列表中，可直接进入交互模式进行使用。

> 💡 **提示：**  
> 模型原则上支持多种，可查看[配置部分](./configuration.md)了解详情。国内推建使用 **DeepSeek-V3.1-Terminus** 模型。  
> 可使用基石智算的产品，[注册](https://www.coreshub.cn/) 即送算力券，参考如下方式[获取 API Key](https://docs.coreshub.cn/console/big_model_server/api_key/create_api_key)，使用 **DeepSeek-V3.1-Terminus** 模型。



## 下一步

* [使用 HolmesGPT 进行交互式排障](./playground.md)
* [配置 HolmesGPT](./configuration.md)
* [更多关于 HolmesGPT 的信息](https://holmesgpt.dev/)

