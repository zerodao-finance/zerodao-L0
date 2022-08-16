export function cachedFrom(fn) {
  const cache = new Map();
  return function (v) {
    if (cache.has(v)) return v;
    const result = fn(v);
    cache.set(v, result);
    return result;
  };
}
