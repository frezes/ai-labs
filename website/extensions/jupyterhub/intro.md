---
sidebar_position: 1
---

# JupyterHub

## JupyterHub

介绍 JupyterHub 之前，我们先了解下 Jupyter Notebook。

### Jupyter Notebook

**A Jupyter Notebook** is nothing more than a Python(&) process which is getting commands from a web browser and displaying the output via that browser. What the process actually sees is roughly like getting commands on standard input(&) and writing to standard output(&). There is nothing intrinsically special about this process

- it can do anything a normal Python process can do, and nothing more. The Jupyter kernel handles capturing output and converting things such as graphics to a form usable by the browser.


### JupyterHub

直白的讲，**Jupyter Notebook** 就是一个“交互式的笔记本式编程工具”，那么， **JupyterHub**  解决的是“多人怎么方便、安全、高效地用 **Jupyter Notebook**” 的问题。

因此，JupyterHub 更符合 **教学/培训、在线服务/公共平台** 的使用场景。

## 最佳实践

JupyterHub 扩展组件仅将 [JupyterHub Helm chart](https://github.com/jupyterhub/zero-to-jupyterhub-k8s/tree/main/jupyterhub) 制作为 KubeSphere 扩展组件，方便用户在 KubeSphere 环境中快速部署 JupyterHub。

### 部署 JupyterHub 扩展组件

修改 JupyterHub 扩展组件配置，将 proxy 对外暴露，即可使用暴露地址访问 Jupyter。

```yaml
jupyterhub:
  proxy:
    # service relates to the proxy-public service
    service:
      type: NodePort
      labels: {}
      annotations: {}
      nodePorts:
        http: 30639
        https:
      disableHttpPort: false
      extraPorts: []
      loadBalancerIP:
      loadBalancerSourceRanges: []
```

注意，默认部署使用 `jupyterhub.auth.DummyAuthenticatorJupyterHub` 身份验证器，允许任何人使用任何用户名和密码登录。这仅应用于初始测试目的。如正式使用，可参考 [JupyterHub Authentication](https://zero-to-jupyterhub.readthedocs.io/en/latest/authentication.html) 配置身份验证器。

更多帮助文档可参考  [JupyterHub for Kubernetes](https://z2jh.jupyter.org/en/stable/index.html)。
