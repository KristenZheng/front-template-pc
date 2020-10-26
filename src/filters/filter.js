export const ifNull = (value, text) => {
  if (value) {
    return value;
  } else {
    return ''
  }
}