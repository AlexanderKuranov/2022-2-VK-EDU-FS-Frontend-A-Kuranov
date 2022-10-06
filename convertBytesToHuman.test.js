/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1099511627776)).toBe("1 TB")
  // ...
});

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman("str")).toBe(false)
  // ...
});

test('Возвращает false для слишком большого числа (больше Петабайта)', () => {
  expect(convertBytesToHuman(1125899906842624)).toBe(false)
  // ...
});

test('Возвращает false для отрицательных чисел', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  // ...
});

test('Возвращает false для отрицательных чисел', () => {
  expect(convertBytesToHuman(100)).toBe("100 B")
  // ...
});
// другая группа проверок
