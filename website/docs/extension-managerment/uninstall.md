---
sidebar_position: 4
title: 卸载扩展组件
---

:::note
有关扩展组件管理的更多信息，请参阅官方文档：[KubeSphere 扩展管理](https://docs.kubesphere.com.cn/v4.2.0/06-extension-management/)
:::

# 卸载扩展组件

本章节介绍如何在 **KubeSphere 扩展中心（Extension Center）** 中卸载扩展组件。

对于配置了集群 Agent 的扩展组件，卸载时会先卸载集群 Agent，再卸载组件。

---

## ⚠️ 前提条件

- 您需要在 KubeSphere 平台中具有 **platform-admin** 角色。
  有关更多信息，请参阅 [用户和平台角色](https://docs.kubesphere.com.cn/v4.2.0/07-user-guide/02-platform-management/04-users-and-roles/)。

---

## 🛠 操作步骤

1. 以具有 **platform-admin** 角色的用户登录 **KubeSphere Web 控制台**。
2. 点击左侧导航栏中的 **扩展中心（Extension Center）**。
3. 在已安装组件列表中，点击目标组件，进入组件详情页。
4. 点击组件图标下的 **更多（More）**，选择 **卸载（Uninstall）**。
5. 输入扩展组件的名称，点击 **确定（Confirm）** 开始卸载。

---

## ⚠️ 注意事项

- 卸载操作不可撤销，请在确认不再使用该组件后再执行此操作。
- 若组件依赖其他扩展或服务，请先评估其影响。
- 对于配置了集群 Agent 的扩展组件，系统会自动清理相关资源，无需手动删除。

---

## 📘 延伸阅读

- [安装扩展组件](/docs/extension-managerment/install)
- [管理扩展组件](/docs/extension-managerment/manage)
- [升级扩展组件](/docs/extension-managerment/upgrade)


