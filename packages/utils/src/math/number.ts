type arg = number | bigint | string;

const random = <T extends arg>(min: arg, max: arg) => {
  if (typeof min === 'number' && typeof max === 'number') {
    // 处理数字类型的最小和最大值
    return (Math.floor(Math.random() * (max - min + 1)) + min) as T;
  }
  if (typeof min === 'string' && typeof max === 'string') {
    // 处理字符串类型的最小和最大值
    const minCharCode = min.charCodeAt(0);
    const maxCharCode = max.charCodeAt(0);
    const randomCharCode =
      Math.floor(Math.random() * (maxCharCode - minCharCode + 1)) + minCharCode;
    return String.fromCharCode(randomCharCode) as T;
  }
  throw new Error('Unsupported types for min and max');
};

export { random };
