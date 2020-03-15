#### Class MegaSet allow to create ranges like:

```javascript
const result = new MegaSet([]);
result.setAddRange(1337133, 4312429).toRangeArrays();
// [[1337133, 1337134, ...4312429]]
result.setAddRange(8, 32).toRangeArrays();
// [Array(2975296), [8, 9, ...32]]
result.setAddRange(1, 4).toRangeArrays();
// [Array(2975296), Array(24), [1, 2, ...4]]
result.setSort();
// [[1, 2, ...4], [8, 9, ...32], [1337133, 1337134, ...4312429]]
result.setDelete(5, 76).toRangeArrays();
// [[1, 2, ...4], [77, 78, ...98]]
result.setDelete(80, 80).toRangeArrays();
// [[1, 2, ...4], [77, 78, ...80], [81, 82, ...98]]
```
