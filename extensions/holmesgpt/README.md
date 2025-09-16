# HolmesGPT

```
holmes:
  additionalEnvVars:
  - name: CLUSTER_NAME
    value: "host"
  - name: DEEPSEEK_API_BASE
    value: "https://openapi.coreshub.cn/v1"
  - name: DEEPSEEK_API_KEY
    value: "sk-RfyhoNcQnbo2UZKFgzLuG7Wt5r1t4W47yHeQP5BXGGn6oKdi"

  toolsets:
    kubernetes/core:
      enabled: true
    kubernetes/logs:
      enabled: true
    robusta:
      enabled: false
    internet:
      enabled: true
    prometheus/metrics:
      enabled: true

  modelList:
    deepseek:
      api_key: "{{ env.DEEPSEEK_API_KEY }}"
      model: deepseek/deepseek-chat
      temperature: 0
```