# Setup Guide - 100% FREE DevOps Project

## What You Need

- Windows 10/11
- Internet (for downloads only)
- 4GB+ RAM available
- Administrator access

## Installation (All Free)

1. Docker Desktop - FREE
2. Minikube - FREE (open source)
3. kubectl - FREE (open source)
4. Terraform - FREE (open source)
5. Node.js - FREE (open source)
6. Git - FREE (open source)

## Getting Started

```powershell
# Start Minikube
minikube start

# Deploy app
kubectl apply -f k8s/app.yaml

# Deploy monitoring
kubectl apply -f k8s/prometheus-config.yaml
kubectl apply -f k8s/prometheus.yaml
kubectl apply -f k8s/grafana.yaml

# Deploy UI
kubectl apply -f k8s/portainer.yaml
```

## Access Everything

Get Minikube IP:

```powershell
minikube ip
```

Then visit:

- **App:** http://[IP]:30080
- **Prometheus:** http://[IP]:30090
- **Grafana:** http://[IP]:30300 (admin/admin123)
- **Portainer:** http://[IP]:30900

## Common Commands

```powershell
# Start cluster
minikube start

# Stop cluster
minikube stop

# View all pods
kubectl get pods

# View logs
kubectl logs -l app=myapp

# Scale app
kubectl scale deployment myapp --replicas=5

# Delete everything
kubectl delete all --all
```

## No Credit Card Ever

This project uses 100% free and open source tools.
No cloud accounts, no credit cards, no payments required.
Everything runs on your computer.
