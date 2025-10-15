---
sidebar_position: 2
title: 管理扩展组件
---

:::note
有关扩展组件管理的更多信息，请参阅官方文档：[KubeSphere 扩展管理](https://docs.kubesphere.com.cn/v4.2.0/06-extension-management/)
:::

# 管理扩展组件

本章节介绍如何在 **KubeSphere 扩展中心（Extension Center）** 中管理扩展组件，包括：

- 配置扩展组件
- 配置集群 Agent
- 禁用或启用扩展组件


## 🧩 配置扩展组件

您可以在扩展中心的组件详情页中修改扩展组件的配置，除了安装时的初始配置外，也可以在运行中更新部分参数。

:::note 注意
在组件 **安装、升级、卸载** 过程中，不允许变更配置。
:::

### 前提条件

- 您需要在 KubeSphere 平台中具有 **platform-admin** 角色。  
  有关角色权限的更多信息，请参阅 [用户和平台角色](https://docs.kubesphere.com.cn/v4.2.0/07-user-guide/02-platform-management/04-users-and-roles/)。
- 您已成功安装至少一个扩展组件。

### 操作步骤

1. 以具有 `platform-admin` 角色的用户登录 **KubeSphere Web 控制台**。
2. 点击左侧导航栏中的 **扩展中心**。
3. 点击已安装的组件名称，进入组件详情页。
4. 点击组件图标下的 **更多（More）**，选择 **扩展组件配置**。
5. 在中间的 **自定义配置** 框中输入或修改配置内容。
6. 确认配置无误后，点击 **确定（Confirm）** 保存。
7. 您还可以执行以下操作：
   - **上传（Upload）**：上传自定义配置文件。
   - **复制（Copy）**：复制当前配置信息。
   - **下载（Download）**：下载当前配置文件。


## ⚙️ 配置集群 Agent

除了在安装组件时配置集群 Agent 外，您也可以在扩展中心的组件详情页中修改集群 Agent 的配置。

### 前提条件

- 您需要在 KubeSphere 平台中具有 **platform-admin** 角色。  
- 您已成功安装一个包含 **集群 Agent** 的扩展组件。

### 操作步骤

1. 登录 **KubeSphere Web 控制台**。
2. 点击左侧导航栏的 **扩展中心**。
3. 在组件列表中，选择目标组件并进入详情页。
4. 点击组件图标下的 **更多（More）**，选择 **集群 Agent 配置**。
5. 选择要配置的集群后，点击 **下一步（Next）**。
6. 在 **差异化配置** 页签中，点击 **编辑（🖋 pen-light）** 图标进行修改。
7. 在自定义配置框中输入配置内容，确认无误后点击 **确定（Confirm）**。
8. 可使用以下辅助操作：
   - **maximize**：全屏查看配置信息。
   - **upload**：上传自定义配置文件。
   - **copy-light**：复制当前配置信息。
   - **download-new**：下载配置文件。


## 🚫 禁用扩展组件

组件安装完成后会自动启用，您可以根据需要在扩展中心中禁用或重新启用扩展组件。

禁用后，该组件的功能将在集群、企业空间及项目中暂停使用；再次启用即可恢复。

### 前提条件

- 您需要在 KubeSphere 平台中具有 **platform-admin** 角色。

### 操作步骤

1. 登录 **KubeSphere Web 控制台**。
2. 点击左侧导航栏中的 **扩展中心**。
3. 在已安装组件列表中，点击目标组件，进入组件详情页。
4. 点击组件图标下的 **更多（More）**，选择 **禁用（Disable）**。
5. 若需重新启用组件，再次点击 **更多（More）**，选择 **启用（Enable）**。


## 📘 延伸阅读

- [安装扩展组件](/docs/extension-managerment/install)
- [升级扩展组件](/docs/extension-managerment/upgrade)
- [卸载扩展组件](/docs/extension-managerment/uninstall)

