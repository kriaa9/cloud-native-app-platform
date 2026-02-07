# Troubleshooting Guide

Common issues and solutions for the Cloud Native App Platform.

## 1. "Minikube not starting"

**Symptom**: `minikube start` hangs or fails.
**Fixes**:

- **Check Docker**: Ensure Docker Desktop is running.
- **Restart Driver**:
  ```powershell
  minikube delete
  minikube start --driver=docker
  ```
- **Check Resources**: Ensure you have 4GB+ RAM free.

## 2. "ImagePullBackOff" or "ErrImagePull"

**Symptom**: Pod status shows image error.
**Fixes**:

- **Check Image Name**: typo in `k8s/app.yaml`?
- **Local Image**: If strictly local, load it into Minikube:
  ```powershell
  minikube image load myapp:latest
  ```
- **ImagePullPolicy**: Set to `Never` or `IfNotPresent` for local images.

## 3. "Service Unreachable"

**Symptom**: Can't access `http://[IP]:Port`.
**Fixes**:

- **Check IP**: Run `minikube ip` again (it can change).
- **Check Tunnel**: In some Windows setups, you might need:
  ```powershell
  minikube service [service-name] --url
  ```
- **Check Network Policy**: Did you block ingress?

## 4. "CrashLoopBackOff"

**Symptom**: Pod keeps restarting.
**Fixes**:

- **Check Logs**:
  ```powershell
  kubectl logs [pod-name] --previous
  ```
- **Check Environment**: Missing env vars?
- **Health Check**: Is the liveness probe failing?

## 5. "RBAC Denied"

**Symptom**: App log shows "Forbidden".
**Fixes**:

- Ensure `ServiceAccount` is assigned in `Deployment`.
- specific `Role` permissions are missing in `k8s/rbac.yaml`.
