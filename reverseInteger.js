
/**
 * @param number: A 3-digit number.
 * @return: Reversed number.
 */
function reverseInteger(number) {
  const units = Math.floor(number / 100);
  const tens = (Math.floor(number / 10) * 10) - (100 * units);
  const hundreds = (number - (Math.floor(number / 10) * 10)) * 100;
  const result = units + tens + hundreds;
  return result;
}
//已通过lintcode测试
