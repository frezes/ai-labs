---
sidebar_position: 2
title:  HolmesGPT 配置
---

# HolmesGPT 配置

## 模型选择与接入

HolmesGPT 支持多家 AI 提供商，让您可以灵活地选择最适合您需求和预算的模型。包括 Anthropic、AWS Bedrock、Azure OpenAI、Gemini、Google Vertex AI、Ollama、OpenAI、OpenAI-Compatible 等。

当然，HolmesGPT 也进行了 Benchmark，以帮助您选择最合适的模型，更详细内容可参考 [HolmesGPT LLM Evaluation Benchmark Results](https://holmesgpt.dev/development/evaluations/latest-results/)。

### Model Accuracy Comparison

| Model                                               | Pass | Fail | Skip/Error | Total | Success Rate          |
|-----------------------------------------------------|------|------|-------------|--------|------------------------|
| gpt-4o                                              | 52   | 41   | 12          | 105    | 🟡 **56% (52/93)**     |
| eu.anthropic.claude-sonnet-4-20250514-v1:0          | 82   | 13   | 10          | 105    | 🟡 **86% (82/95)**     |
| gpt-4.1                                             | 67   | 27   | 11          | 105    | 🟡 **71% (67/94)**     |
| gpt-5                                               | 74   | 20   | 11          | 105    | 🟡 **79% (74/94)**     |
| deepseek/deepseek-v3.1-terminus                     | 75   | 20   | 10          | 105    | 🟡 **79% (75/95)**     |
| qwen/qwen3-next-80b-a3b-instruct                    | 55   | 40   | 10          | 105    | 🟡 **58% (55/95)**     |

### 模型配置接入

你可以 [ai-providers](https://holmesgpt.dev/ai-providers/) 查看所有支持的 AI 提供商，并选择你需要的提供商进行配置。


## 数据源配置

HolmesGPT 连接到您的监控和可观察性工具，以提供全面的根本原因分析。您可以在 [data-sources](https://holmesgpt.dev/data-sources/) 查看所有支持的数据源，并进行配置。

- 内置工具集

  预先配置了 Prometheus、Grafana、DataDog 等流行工具的集成。

- 自定义工具集

  为专有或专用工具创建您自己的集成。

- 远程 MCP 服务器

  连接到模型上下文协议服务器以获得扩展功能。