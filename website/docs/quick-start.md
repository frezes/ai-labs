---
sidebar_position: 2
---

# 🚀 快速开始

本章节介绍如何在 **KubeSphere** 环境中快速部署 **AI Labs**。  
你可以选择以下两种方式之一进行安装：

---

## 方式 1：使用 kubectl 部署（推荐）

如果你希望快速体验 AI Labs，可以直接通过 `kubectl` 部署预定义的资源清单：

```bash
kubectl apply -f https://raw.githubusercontent.com/frezes/ai-labs/refs/heads/main/deploy/deploy.yaml
```

部署完成后，AI Labs 的 **museum** 服务将自动创建，并在后台与 KubeSphere 平台进行同步。
稍后你即可在 KubeSphere 的 **扩展中心（Extension Center）** 中看到相关扩展模块。

查看部署状态：

```bash
kubectl get deploy -n kubesphere-system -l app=ai-labs-museum
```

> 💡 **提示：**
> 此方式适合快速安装与功能体验。
> 系统会自动同步扩展，无需手动推送。

---

## 方式 2：手动推送扩展至 KubeSphere 扩展中心（开发者使用）

如果你希望将 **AI Labs** 作为独立扩展发布到 **KubeSphere 扩展中心（Extension Center）**，可使用官方提供的 `ksbuilder` 工具进行构建与推送。

### 🧩 步骤 1：克隆项目

```bash
git clone https://github.com/frezes/ai-labs.git
cd ai-labs
```

---

### ⚙️ 步骤 2：构建并发布扩展

`ksbuilder` 是 KubeSphere 提供的扩展打包与发布工具，用于将扩展模块推送至本地 KubeSphere 扩展中心。

执行以下命令构建并推送扩展包：

```bash
ksbuilder publish extensions/{extension}/config/{extension}
```

> 💡 **说明：**
>
> * `{extension}` 请替换为实际扩展名称（如 `holmesgpt`、`open-webui`、`jupyterhub` 等）。
> * 推送成功后，扩展将出现在 KubeSphere 控制台的 **扩展中心** 页面。

---

## 📘 接下来做什么

* [安装扩展](./extensions/installation.md)
* [查看扩展介绍](../extensions/intro.md)




