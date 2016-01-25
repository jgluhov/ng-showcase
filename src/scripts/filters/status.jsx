export function status() {
  return function (items, selection) {
    let results = [];
    angular.forEach(items, (v, k) => {
      angular.forEach(v, (value, key) => {
        if(key === 'status' && value === selection) {
          results.push(v)
        }
      });
    });
    return results;
  }
}
