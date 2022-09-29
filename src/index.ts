function echo<T extends { name: string }>(value: T): T {
  return value;
}

echo({ name: "Ben" });
