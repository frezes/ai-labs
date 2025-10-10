# AI-Labs

AI Labs for KubeSphere Extension.

## What's inside

- [open-webui](./extensions/open-webui/README.md): User-friendly AI Interface (Supports Ollama, OpenAI API, ...)
- [jupyterhub](./extensions/jupyterhub/README.md) : Multi-user server for Jupyter notebooks.

## Quick Start

### Option 1: Deploy with kubectl (Recommended)

```sh
kubectl apply -f https://raw.githubusercontent.com/frezes/ai-labs/refs/heads/main/deploy/deploy.yaml
```

### Option 2: Install as KubeSphere Extension (For Developers)

```sh
git clone https://github.com/frezes/ai-labs.git
cd ai-labs
# publish the extension
ksbuilder publish extensions/{extension}/config/{extension}
```

### Final Step (Required for both options)

After deploying with either option, go to KubeSphere console and install the extension from the Extension Management page.

