# User Guide

This guide is for developers and users interacting with the Cloud Native App Platform.

## 1. Accessing the Application

Once deployed, your application is available at:
`http://[Minikube-IP]:30080`

To find the IP:

```powershell
minikube ip
```

## 2. Deploying Changes

The platform uses standard Kubernetes manifests. To update your application:

1.  **Modify Code**: Update your source code.
2.  **Build Image**:
    ```powershell
    docker build -t myapp:latest .
    # If using Minikube's Docker daemon:
    minikube image load myapp:latest
    ```
3.  **Apply Manifest**:
    ```powershell
    kubectl apply -f k8s/app.yaml
    ```
4.  **Restart Deployment** (to pull new image):
    ```powershell
    kubectl rollout restart deployment myapp
    ```

## 3. Viewing Logs

To see what your application is doing:

```powershell
# Get Pod Name
kubectl get pods

# View Logs
kubectl logs [pod-name]

# Follow Logs (Real-time)
kubectl logs -f [pod-name]
```

## 4. Checking Metrics

You can view raw metrics at:
`http://[Minikube-IP]:30080/metrics`

These are automatically scraped by Prometheus.
