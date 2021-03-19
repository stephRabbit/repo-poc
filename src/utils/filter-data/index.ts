function filterData<T extends keyof K, K>(propName: T) {
  return function (a: K, b: K) {
    if (a[propName] > b[propName]) return -1
    if (a[propName] < b[propName]) return 1
    return 0
  }
}

export default filterData
