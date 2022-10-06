/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  let count = 0;
  let alph = ["B", "KB", "MB", "GB", "TB"];
  if (Number.isInteger(bytes) && bytes >= 0 && bytes < 1125899906842624  ) {
      while (bytes>=1024) {
          bytes = (bytes / 1024);
          count +=1;
      }
      console.log(Math.round(bytes*100)/100 +" " + alph[count]);
      return Math.round(bytes*100)/100 +" " + alph[count]}
  else {
      console.log("Некорректный ввод данных");
      return false;
  }
}
convertBytesToHuman(1099511627776)