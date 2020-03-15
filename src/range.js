export class MegaSet extends Set {
  constructor(iterable) {
    super(iterable);
    this.setAddArray(iterable);
  }
  setAddArray(arr) {
    arr.forEach(num => this.add(num));
    return this;
  }
  setAddRange(x, y) {
    [...Array(Number(y) - Number(x) + 1)].forEach(() => this.add(x++));
    return this;
  }
  setSort() {
    const arr = this.toArray().sort((a, b) => a - b);
    this.clear();
    this.setAddArray(arr);
    return this;
  }
  setFindIndex(x) {
    if (Number(x) <= this.toArray()[0]) {
      return 0;
    } else if (Number(x) >= this.toArray()[this.size - 1]) {
      return this.size;
    }
    return this.toArray().findIndex(
      (value, idx) =>
        value === Number(x) ||
        (value + 1 < [...this][idx + 1] && x < [...this][idx + 1])
    );
  }
  setSplice(x, y) {
    while (Number(x) < Number(y) + 1) {
      this.delete(x++);
    }
    return this;
  }
  toArray() {
    return [...this];
  }
  toRangeArrays() {
    const result = [];
    const arr = this.toArray();
    while (arr.length) {
      let idx =
        arr.indexOf(arr.find((value, idx) => value + 1 < arr[idx + 1])) + 1 ||
        arr[arr.length - 1];
      result.push(arr.splice(0, idx));
    }
    return result;
  }
}
