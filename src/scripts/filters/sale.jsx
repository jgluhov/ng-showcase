export function sale() {
  return function (text, coeff) {
    coeff = coeff || 1;
    return parseInt(text) * coeff;
  }
}
