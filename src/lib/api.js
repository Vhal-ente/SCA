const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:8080").replace(/\/$/, "");
const BASE = `${API_URL}/api/v1`;

async function request(path, { method = "GET", body, retry = true } = {}) {
  const response = await fetch(`${BASE}${path}`, {
    method,
    credentials: "include",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status === 401 && retry && !path.startsWith("/auth/refresh") && !path.startsWith("/auth/login")) {
    const refreshed = await fetch(`${BASE}/auth/refresh`, { method: "POST", credentials: "include" });
    if (refreshed.ok) return request(path, { method, body, retry: false });
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "Something went wrong. Please try again.");
  return data;
}

export const api = {
  get: (path) => request(path),
  post: (path, body) => request(path, { method: "POST", body }),
  patch: (path, body) => request(path, { method: "PATCH", body }),
  delete: (path) => request(path, { method: "DELETE" }),
};
