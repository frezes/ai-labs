---
sidebar_position: 3
title: 升级扩展组件
---

:::note
有关扩展组件管理的更多信息，请参阅官方文档：[KubeSphere 扩展管理](https://docs.kubesphere.com.cn/v4.2.0/06-extension-management/)
:::

# 升级扩展组件

本章节介绍如何在 **KubeSphere 扩展中心（Extension Center）** 中升级扩展组件。

当组件发布新版本后，您可以在扩展中心的组件详情页中执行升级操作。

---

## ⚠️ 注意事项

:::warning 重要说明
在 **KubeSphere v4.2.0 之前** 的版本中，安装扩展组件时通常需要手动显式配置镜像标签（`image tag`）。

而在 **KubeSphere v4.2.0 及之后版本** 中，镜像标签会自动随扩展组件版本同步更新，优先使用默认值，**无需手动配置**。

升级扩展组件时，请务必检查镜像标签配置是否符合预期。
如果在配置中仍显式指定了旧的镜像标签，可能会导致升级后仍拉取旧版本镜像，从而无法获得最新功能或修复。
:::

### ✅ 升级建议

为确保升级顺利，请遵循以下建议：

1. **检查并移除** 手动设置的镜像标签，或将其更新为新版本所需的镜像标签。
2. **推荐使用默认配置**，以自动获取与当前扩展版本匹配的镜像标签。
3. 各扩展组件镜像标签的具体配置路径，请参阅 **扩展中心各组件详情页的升级说明**。

---

## 🧩 前提条件

- 您需要在 KubeSphere 平台中具有 **platform-admin** 角色。  
  有关更多信息，请参阅 [用户和平台角色](https://docs.kubesphere.com.cn/v4.2.0/07-user-guide/02-platform-management/04-users-and-roles/)。
- 目标组件已安装，且存在可用的新版本。

---

## ⚙️ 操作步骤

1. 以具有 `platform-admin` 角色的用户登录 **KubeSphere Web 控制台**。
2. 点击左侧导航栏中的 **扩展中心（Extension Center）**。
3. 在已安装组件列表中，点击需要升级的组件名称，进入组件详情页。
4. 点击组件图标下的 **更多（More）** 按钮，选择 **更新（Upgrade）**。
5. 在弹出的更新对话框中，根据提示完成升级步骤。
6. 升级完成后，系统会自动同步至新的组件版本。

---

## 📘 延伸阅读

- [安装扩展组件](/docs/extension-managerment/install)
- [管理扩展组件](/docs/extension-managerment/manage)
- [卸载扩展组件](/docs/extension-managerment/uninstall)
