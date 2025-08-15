# Open WebUI

## 简介

### Open WebUI 简介

"Open WebUI is an extensible, feature-rich, and user-friendly self-hosted AI platform designed to operate entirely offline. It supports various LLM runners like Ollama and OpenAI-compatible APIs, with built-in inference engine for RAG, making it a powerful AI deployment solution."

![Open WebUI Demo](./image/demo.gif)

总的来说，Open WebUI 是一个 User-friendly AI Interface (Supports Ollama, OpenAI API, ...)，更多内容可参考 [Open WebUI 官方文档](https://docs.openwebui.com/)

### Open WebUI 扩展组件

Open WebUI 扩展组件是 KubeSphere 提供的用于集成 Open WebUI 的插件, 并内置 Ollama 用于模型部署，支持用户在 KubeSphere 中快速部署 Open WebUI，并支持通过 KubeSphere 账户进行登录。

## 最佳实践

### 安装 Open WebUI 扩展组件并部署模型

以下是在 KubeSphere 上安装 Open WebUI 扩展组件，并配置 deepseek-r1:1.5b 模型进行部署的配置文件，请根据实际情况修改配置文件中的 IP 地址和端口。然后就可以如图所示

```yaml
open-webui-helper:
  # -- The URL of the Open WebUI
  # openWebUIUrl: "http://{nodeIP}:{NodePort}"
  openWebUIUrl: "http://172.31.19.4:32678"
  
open-webui:
  ollama:
    enabled: true
    ollama:
    #   gpu:
    #     enabled: true
    #     type: 'nvidia'
    #     number: 1
      models:
        pull:
          - deepseek-r1:1.5b
        run:
          - deepseek-r1:1.5b
    # runtimeClassName: nvidia
    persistentVolume:
      enabled: true

  # -- Service values to expose Open WebUI pods to cluster
  service:
    type: NodePort
    nodePort: "32678"
```

![deploy](./image/deploy-open-webui.gif)
### 安装 Open WebUI 扩展组件并接入 KubeSphere  账户

```yaml
open-webui-helper:
  openWebUIUrl: "http://172.31.19.4:32678"

  kubesphereAsOIDCProvider:
    enabeld: true

open-webui:
  ollama:
    enabled: true
  service:
    type: NodePort
    nodePort: "32678"
  extraEnvVars:
    - name: OAUTH_TOKEN_ENDPOINT_AUTH_METHOD
      value: client_secret_post
  sso:
    enabled: enabled
    enableSignup: true
    oidc:
      enabled: true
      clientId: "open-webui"
      clientSecret: "open-webui"
      clientExistingSecret: ""
      providerUrl: "http://172.31.19.4:30880/.well-known/openid-configuration"
      providerName: "kubesphere"
      scopes: "openid email profile"
```


### 高可用部署