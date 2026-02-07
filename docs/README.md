# Wiki - Cloud Native App Platform

Welcome to the official documentation for the **Cloud Native App Platform**. This project provides a complete, local Kubernetes environment with monitoring, logging, and security, using 100% free and open-source tools.

## 📚 Documentation Index

### 🚀 Getting Started

- **[Setup Guide](SETUP.md)**: Steps to install prerequisites and deploy the platform.
- **[User Guide](USER_GUIDE.md)**: How to use the platform for development.

### 🏗️ Architecture & Design

- **[Architecture Overview](ARCHITECTURE.md)**: System components, data flow, and technology stack.

### 🛠️ Operations & Management

- **[Operations Guide](OPERATIONS.md)**: Managing monitoring (Grafana), security, and the cluster.
- **[Troubleshooting](TROUBLESHOOTING.md)**: Solutions for common issues.

## 🔗 Quick Links

| Service        | URL                 | Default Credentials    |
| :------------- | :------------------ | :--------------------- |
| **App**        | `http://[IP]:30080` | N/A                    |
| **Grafana**    | `http://[IP]:30300` | `admin` / `admin123`   |
| **Prometheus** | `http://[IP]:30090` | N/A                    |
| **Portainer**  | `http://[IP]:30900` | Created on first login |

> **Note:** Run `minikube ip` to get your local cluster IP.
