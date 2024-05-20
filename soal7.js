/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  //code here

  let result = "";
  let str = equation.toString();

  if (str.length == 0) {
    return "";
  }
  if (equation < 9) {
    if(str[0] == '0') {
      return parseNumber(str.slice(1))
    } else {
      result += str[0];
      return "+" + result + parseNumber(str.slice(1));
    }
  } else {
    if (equation >= 1000) {
      result += str[0] + "000";
      return result + "+" + parseNumber(str.slice(1));
    } else if (equation >= 100) {
      result += str[0] + "00";
      return result + "+" + parseNumber(str.slice(1));
    } else if (equation >= 10) {
      result += str[0] + "0";
      return result + parseNumber(str.slice(1));
    }
  }
  if (str.length < 3) {
    result += equation;
    return result;
  }
}

console.log(parseNumber(3333)); // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
