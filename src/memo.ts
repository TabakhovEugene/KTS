const memo = <T extends (...args: any[]) => any>(
  func: T,
  time?: number
): ((...arg: Parameters<T>) => ReturnType<T>) => {
  if (typeof func !== 'function') {
    throw new Error('INVALID_ARGUMENT');
  }

  if (time !== undefined && (typeof time !== 'number' || time < 0)) {
    throw new Error('INVALID_ARGUMENT');
  }

  const cache = new Map<string, { value: ReturnType<T>; expiresAt: number }>();

  return (...args: Parameters<T>): ReturnType<T> => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      const { value, expiresAt } = cache.get(key)!;

      if (expiresAt === Infinity || Date.now() < expiresAt) {
        cache.set(key, { value, expiresAt: time ? Date.now() + time : Infinity });
        return value;
      }
    }

    const value = func(...args);
    cache.set(key, { value, expiresAt: time ? Date.now() + time : Infinity });
    return value;
  };
};

export default memo;
