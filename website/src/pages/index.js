import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="AI Labs" description="AI Extensions for KubeSphere">
      <main className={styles.main}>
        {/* ========== Hero Section ========== */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <h1 className={styles.title}>
                  探索 <span className={styles.highlight}>云原生</span> 与 <span className={styles.highlight}>AI</span> 的融合边界
                </h1>
                <p className={styles.description}>
                  AI Labs 是面向 KubeSphere 的 AI 扩展实验平台，助力云原生智能化。
                </p>
                <div className={styles.buttons}>
                  <Link className={styles.primaryBtn} to="/docs/intro">
                    快速开始
                  </Link>
                  <Link className={styles.secondaryBtn} to="/extensions/intro">
                    查看扩展
                  </Link>
                </div>
              </div>

              <div className={styles.heroImage}>
                <img src={require('@site/static/img/ai-labs-title.png').default} alt="AI Labs Logo" />
              </div>
            </div>
          </div>
        </section>

        {/* ========== Extensions Section ========== */}
        <section className={styles.extensions}>
          <div className="container">
            <h2>核心扩展</h2>
            <div className={styles.cards}>
              <ExtensionCard
                title="HolmesGPT"
                desc="用于排查云原生环境问题的 AI 智能代理。"
                link="/extensions/holmesgpt/intro"
                logo="holmesgpt_logo.png"
              />
              <ExtensionCard
                title="Open-WebUI"
                desc="统一的 AI Web 界面，连接和管理多种大语言模型与推理服务。"
                link="/extensions/open-webui/intro"
                logo="open-webui_logo.png"
              />
              <ExtensionCard
                title="JupyterHub"
                desc="用于 Jupyter 笔记本的多用户服务器。"
                link="/extensions/jupyterhub/intro"
                logo="jupyterhub_logo.svg"
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

function ExtensionCard({ title, desc, link, logo }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={require(`@site/static/img/${logo}`).default} alt={`${title} Logo`} className={styles.logoImage} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link className={styles.learnMore} to={link}>
        了解更多 →
      </Link>
    </div>
  );
}
