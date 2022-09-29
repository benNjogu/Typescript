class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let utils = new ArrayUtils();
let numbers = ArrayUtils.wrapInArray("1");
