import { useEffect, useState } from "react";
import { api } from "@/lib/api";

// Responses already loaded this visit, so moving between pages does not refetch.
const cache = new Map();

// useApi loads a public API path. data is null until it arrives (or on failure);
// pass a null path to skip the request.
export function useApi(path) {
  const [state, setState] = useState(() => ({ data: cache.get(path) ?? null, loading: Boolean(path) && !cache.has(path), error: "" }));
  useEffect(() => {
    if (!path) return undefined;
    let active = true;
    if (cache.has(path)) setState({ data: cache.get(path), loading: false, error: "" });
    else setState({ data: null, loading: true, error: "" });
    api.get(path)
      .then(data => { cache.set(path, data); if (active) setState({ data, loading: false, error: "" }); })
      .catch(error => active && setState(current => ({ data: current.data, loading: false, error: error.message })));
    return () => { active = false; };
  }, [path]);
  return state;
}

// useSiteContent loads a console-managed page document ("website" or
// "shogun"). Fields staff have never saved are missing, so pages keep their
// built-in copy for those.
export function useSiteContent(key) {
  const { data, loading } = useApi(`/content/${key}`);
  return { content: data?.value || {}, loading };
}
