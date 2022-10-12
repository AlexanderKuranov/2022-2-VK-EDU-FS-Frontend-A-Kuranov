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
  expect(convertBytesToHuman(100)).toBe("100 B")
  expect(convertBytesToHuman(1024)).toBe("1 KB")
  expect(convertBytesToHuman(1125899906842622)).toBe("1024 TB")
  expect(convertBytesToHuman(0)).toBe("0 B")
});

test('Возвращает false для некорректных данных', () => {
  expect(convertBytesToHuman("str")).toBe(false)
  expect(convertBytesToHuman(1125899906842624)).toBe(false) // верхняя граница 1125899906842623
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman("123")).toBe(false)
  expect(convertBytesToHuman("100.5")).toBe(false)
});

test('Тесты типа !==', () => {
  expect(convertBytesToHuman("10")).not.toBe("10 B")
  expect(convertBytesToHuman(-10)).not.toBe("10 B")
  expect(convertBytesToHuman(1024)).not.toBe("1024 B")
  expect(convertBytesToHuman(10.5)).not.toBe("10.5 B")
});
