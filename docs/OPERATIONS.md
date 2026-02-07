# Operations Guide

This guide is for platform administrators responsible for monitoring, security, and maintenance.

## 1. Monitoring (Grafana & Prometheus)

### Access

- **Grafana**: `http://[IP]:30300` (admin/admin123)
- **Prometheus**: `http://[IP]:30090`

### Dashboards

1.  Log in to Grafana.
2.  Go to **Dashboards** > **App Requests**.
3.  View `requests_total` and other key metrics.

### Adding New Metrics

1.  Ensure your app exposes metrics at `/metrics`.
2.  Prometheus will automatically scrape them (via ServiceMonitor configuration).
3.  Add new panels in Grafana querying the new metric name.

## 2. Cluster Management (Portainer)

### Access

- **Portainer**: `http://[IP]:30900`

### Capabilities

- **Visual Overview**: See all Namespaces, Pods, and Services.
- **Shell Access**: Open a terminal directly inside a container (click `>_ Console`).
- **Log Viewing**: View container logs in the browser.

## 3. Security Management

### Network Policies

We use a "deny-all-ingress" default policy.

- To allow traffic to a new service, you **must** create a Network Policy.
- See `k8s/network-policies.yaml` for examples (`allow-myapp`).

### RBAC (Role-Based Access Control)

- **ServiceAccounts**: Used by apps to talk to the API.
- **Roles/Bindings**: Define what an account can do.
- Default: `myapp` can read ConfigMaps/Secrets but cannot modify the cluster.

## 4. Maintenance

### Update Minikube

```powershell
minikube update-check
```

### Clean Up

To remove all resources but keep the cluster running:

```powershell
kubectl delete -f k8s/
```
