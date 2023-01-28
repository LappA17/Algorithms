// 1) Есть текст, он пишется по обычному, к примеру "Привет, как дела, меня завут Руслан", нужно сделать так что мы каждое слово начиналось с большой буквы
String.prototype.toJadenCase = function () {
  let returnString = [];
  let words = this.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i]; // каждое слово
    returnString.push(word[0].toUpperCase() + word.slice(1));
  }
  return returnString.join(' '); // " " - это пробел
};
/* - Я создал фиктивный массив (returnString)
- Разбить входную строку на отдельные слова. С помощью split мы сделали из строки - массив слов
- Написал цикл for
   - Доступ к каждому отдельному слову
   - каждое слово, рассматриваемое как массив, имеет элемент с индексом «0» с заглавной буквы, а затем остальная часть слова, добавленного, начиная с индекса «1», помещается в фиктивный массив
- вернуть фиктивный массив в виде строки, соединенной пробелом */

//2
function getMiddle(word) {
  let evenOdd = word.length % 2 === 0; // Четное число
  let minMid = word.charAt(word.length / 2 - 1); // Метод charAt() возвращает указанный символ из строки.
  let mid = word.charAt(word.length / 2); // НЕчетное

  if (evenOdd == true) {
    minMid.concat(mid); // Мы как бы благодаря методу concat создаем массив из той одной буквы что нам приходит от Четного и туда Пушим буквы НЕчетного
  } else {
    return mid;
  }
}

/*const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); */

//3
/*Крокетный клуб Western Suburbs имеет две категории членства: Senior и Open. Им нужна ваша помощь с формой заявки, в которой потенциальным членам будет указано, в какую категорию они будут помещены.

Чтобы быть пожилым, член должен быть не моложе 55 лет и иметь гандикап больше 7. В этом крокетном клубе гандикап варьируется от -2 до +26; чем лучше игрок, тем ниже гандикап.

Вход
Ввод будет состоять из списка пар. Каждая пара содержит информацию об одном потенциальном члене. Информация состоит из целого числа для возраста человека и целого числа для инвалидности человека.

Выход
Вывод будет состоять из списка строковых значений (в Haskell: Open или Senior), указывающих, должен ли соответствующий элемент быть помещен в категорию Senior или Open.

Пример
ввод = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Открыть", "Открыть", "Старший", "Открыть", "Открыть", "Старший"] */

function openOrSenior(data) {
  function determineMembership(member) {
    return member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}
/* Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
Tеперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9] */

// Второй способ
function openOrSenior(data) {
  let result = [];
  data.forEach((item) => {
    if (item[0] >= 55 && item[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  });

  return result;
}

//4
/* Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов. */

let n = 10;

cont: for (let i = 2; i <= n; i++) {
  // Прогоняем числа от 1 до 10

  for (let j = 2; j < i; j++) {
    // Нужно проверить деляться ли числа которые были до i
    /* В данном случае мы прогоняем так: 
    1)идет первая проверка то-есть 2<2 = неверно
    2)дальше i добавляется 1 и идет проверяка 2<3, идет дальше и остается остаток 1
    3)console.log выведет 3 - подходит
    4)i и j увеличиваются на 1 и теперь 3<4
    5)console.log(4) - не подходит*/
    if (i % j == 0) continue cont; // не подходит, берём следующее
  }
  console.log(i); // простое число
}

// 5)
/* Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.
Всегда будет только одно целое число, которое встречается нечетное количество раз.
Примеры
[7] должен вернуть 7, потому что это происходит 1 раз (что нечетно).
[0] должен возвращать 0, потому что это происходит 1 раз (что нечетно).
[1,1,2] должен вернуть 2, потому что он встречается 1 раз (что нечетно).
[0,1,0,1,0] должен вернуть 0, потому что он встречается 3 раза (что нечетно).
[1,2,2,3,3,3,4,3,3,3,2,2,1] должно вернуть 4, потому что оно появляется 1 раз (что нечетно)  */
function findOdd(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] == numbers[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return numbers[i];
    }
  }
}

// 6)
/*Число 89 — это первое целое число, состоящее более чем из одной цифры, которое соответствует свойству, частично представленному в названии этого ката. Что толку говорить "Эврика"? Потому что эта сумма дает одно и то же число.

Фактически: 89 = 8^1 + 9^2

Следующее число, обладающее этим свойством, — 135.

Посмотрите еще раз на это свойство: 135 = 1^1 + 3^2 + 5^3.

Нам нужна функция для сбора этих чисел, которая может принимать два целых числа a, b, определяющих диапазон [a, b] (включительно), и выводит список отсортированных чисел в диапазоне, удовлетворяющем описанному выше свойству.

Давайте рассмотрим некоторые случаи:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
Если в диапазоне [a, b] таких чисел нет, функция должна вывести пустой список.

суммаDigPow(90, 100) == []
Наслаждайся этим!! */

function sumDigPow(a, b) {
  eureka = [];
  for (i = a; i <= b; i++) {
    digits = String(i).split('');
    if (
      i ==
      digits.reduce(function (accumulator, currentValue, currentIndex) {
        return accumulator + currentValue ** (currentIndex + 1);
      }, 0)
    ) {
      eureka.push(i);
    }
  }
  return eureka;
}
/* [0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, index, array) {
 return accumulator + currentValue;
}, 10);
Copy to Clipboard
                 accumulator	currentValue	index	 array	            возвращаемое значение
первый вызов	    10	        0             0	     [0, 1, 2, 3, 4]	  10
второй вызов	    10        	1	            1	     [0, 1, 2, 3, 4]	  11
третий вызов	    11	        2	            2	     [0, 1, 2, 3, 4]	  13
четвёртый вызов	  13	        3	            3	     [0, 1, 2, 3, 4]	  16
пятый вызов	      16	        4	            4      [0, 1, 2, 3, 4]	  20

Из-за того что }, 0)) то у нас все отталкивается от 0, а не как в примере от 10. Аккамулятор - это предыдущее возввращаемое число.
Нынешнее значение мы возводим в степерь индекса и к этом добавляем единичику постоянно !*/

// 7)
/*strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta" */

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) {
    return '';
  } else {
    let list = [];
    for (let i = 0; i < strarr.length - k + 1; i++) {
      list[i] = strarr.slice(i, k + i).join('');
    }

    let longest = list.reduce(function (a, b) {
      return a.length >= b.length ? a : b;
    });
    return longest;
  }
}

// Второй способ
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return currString.length > long.length ? currString : long;
  }, '');
}

// 8)
/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef'] */

function solution(str) {
  if (str.length == 0) {
    return [];
  }

  return (str.length % 2 ? str + '_' : str).match(/../g);
}

// Второй способ
function solution(s) {
  return (s + '_').match(/.{2}/g) || [];
}

// Третий способ
function solution(str) {
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
    result.push(str[i] + str[i + 1]);
    i += 2;
  }
  return result;
}

//9)
function reverseWords(str) {
  return str
    .split('')
    .reverse()
    .join('') // Этот участок кода просто перевернет весь код задом наперед
    .split(' ')
    .reverse()
    .join(' '); //C этим кодом каждое слово останеться на своем месте и перевернеться, а не весь код
}
console.log(reverseWords('Hello World! '));
/* Из-за того что второй раз мы применяли сплит создавая массив после каждого пробела, а не символа,то метод reverse() уже не менял
порядок слов в массиве. Теперь, когда мы разбили строку на массив, мы можем изменить порядок слов на противоположный. .reverse() 
работает путем изменения порядка каждого элемента в массиве, поэтому, когда мы используем его сейчас, он не изменит буквы в каждой 
строке, он просто изменит положение индекса каждой строки в массиве */

function opposite(number) {
  if (Math.sign(number) == -1) {
    let numberToStringNoMinux = number.toString().replace(/\-/g, '');
    return number + ': ' + Number(numberToStringNoMinux);
  } else {
    let numberToString = '-' + number.toString();
    return number + ': ' + Number(numberToString);
  }
}
console.log(opposite(-555));

// 10)
/* Построить башню
Построить Башню по следующему заданному аргументу:
количество этажей (целое число и всегда больше 0).

Башенный блок представлен как *

JavaScript: возвращает массив;
[
  "  *  ",
  " *** ", 
  "*****"
]*/
function towerBuilder(nFloors) {
  let finalArray = [];
  let numSpaces = 0; // Количество пробелов
  // Начну с обратного. Так как нам приходит число мы говорим что i равен этому числу. И потом в коде мы просто используем i
  for (let i = nFloors; i > 0; i--) {
    // В конце количество пробелов равно 0.
    // Иметь одну и меньше для половины звезд.
    // Добавить еще один набор пробелов.
    finalArray.push(
      ' '.repeat(numSpaces) + '*'.repeat(i) + '*'.repeat(i - 1) + ' '.repeat(numSpaces)
    );

    // Увеличивайте пространство при переходе наверх.
    numSpaces++;
  }
  // Переверните массив.
  return finalArray.reverse();
}
console.log(towerBuilder(3));

/* Метод repeat() конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий cтроки,
на которой он был вызван.
'абв'.repeat(-1);   // RangeError
'абв'.repeat(0);    // ''
'абв'.repeat(1);    // 'абв'
'абв'.repeat(2);    // 'абвабв' */

function solution(str) {
  str.split('').reverse();
}
console.log(solution('hello'));

// 11)
function descendingOrder(n) {
  let chislo = n.toString();
  return Number([...chislo.toString()].sort().reverse().join(''));
}

//12)
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  }
  let count = n * m;
  return count;
}

//13)
function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

//14)
/* digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51 */
function digPow(n, p) {
  let arr =
    n
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, cur, i, arr) => acc + Math.pow(arr[i], p + i), 0) / n;
  return ('' + arr).includes('.') ? -1 : arr;
}
console.log(digPow(48, 1));

// 15)
/*Возьмите 2 строки s1 и s2, содержащие только буквы от a до z. Возвращает новую отсортированную строку, максимально длинную, содержащую различные буквы (каждая из которых взята только один раз) из s1 или s2. */
function longest(s1, s2) {
  let str = s1 + s2;

  var c = {};
  var r = '';

  for (let i = 0; i < str.length; i++) {
    if (!c[str[i]]) {
      r = r + str[i];
      c[str[i]] = 1;
    }
  }

  return r.split('').sort().join('');
}
console.log(longest((a = 'xyaabbbccccdefww'), (b = 'xxxxyyyyabklmopq')));

//16)
/* Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если можно построить треугольник со сторонами заданной длины, и false в любом другом случае.

(В этом случае все треугольники должны иметь поверхность больше 0, чтобы быть принятыми). */
function isTriangle(a, b, c) {
  if (a + b > c && a > 0 && b > 0 && c + b > a && c + a > b) {
    return true;
  } else {
    return false;
  }
}

//17)
/* Напишите число в развернутой форме
Вам будет дано число, и вам нужно будет вернуть его в виде строки в расширенной форме. Например:

расширенная форма (12); // Должен вернуть '10 + 2'
расширенная форма (42); // Должен вернуть '40 + 2'
расширенная форма (70304); // Должен вернуть '70000 + 300 + 4'
ПРИМЕЧАНИЕ. Все числа будут целыми числами больше 0. */
function expandedForm(num) {
  return num
    .toString() // из числа в строку
    .split('') // на этом этапе получаем [ '7', '2' ]
    .reverse() // [ '2', '7' ]
    .map((a, i) => a * Math.pow(10, i)) // [ 2, 70 ]
    .filter((a) => a > 0) // отфильтровать все целые больше 0
    .reverse()
    .join(' + ');
}
console.log(expandedForm(72));

//18)
/* Вы живете в городе Картезия, где все дороги выложены идеальной сеткой. Вы пришли на встречу на десять минут раньше назначенного срока, поэтому решили воспользоваться возможностью прогуляться. Город предоставляет своим горожанам приложение Walk Generating на их телефонах — каждый раз, когда вы нажимаете кнопку, оно отправляет вам массив строк из одной буквы, представляющих направления ходьбы (например, ['n', 's', 'w', «е»]). Вы всегда проходите только один квартал для каждой буквы (направления), и вы знаете, что вам потребуется одна минута, чтобы пройти один городской квартал, поэтому создайте функцию, которая будет возвращать true, если прогулка, которую предлагает вам приложение, займет у вас ровно десять минут (вы не хочу ни рано, ни поздно!) и, конечно же, вернет вас в исходную точку. В противном случае верните false.

Примечание: вы всегда будете получать допустимый массив, содержащий случайный набор букв направления (только «n», «s», «e» или «w»). Он никогда не даст вам пустой массив (это не прогулка, это стояние на месте!). */

function isValidWalk(walk) {
  let ns = 0;
  let ew = 0;
  if (walk.length === 10) {
    for (let i of walk) {
      if (i == 'n') ns += 1;
      if (i == 's') ns -= 1;
      if (i == 'e') ew += 1;
      if (i == 'w') ew -= 1;
    }
  } else return false;
  return ns === 0 && ew === 0;
}

// 19)
/* Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число и есть позиция, которую должно занимать слово в результате.

Примечание. Цифры могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).

Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только допустимые последовательные числа.

Примеры
"is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est"
"4Fo1r pe6ople g3good th2" --> "Fo1r the2 g3od 4thpeople"
"" --> "" */

function order(words) {
  return words
    .split(' ')
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(' ');
}
console.log(order('4Fo1r pe6ople g3good th2'));

function order(words) {
  var array = words.split(' ');
  var sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}

// 20)
/* Дан треугольник последовательных нечетных чисел:

              1
           3 5
        7 9 11
    13 15 17 19
21 23 25 27 29
...
Вычислите сумму чисел в n-й строке этого треугольника (начиная с индекса 1), например: (Ввод --> Вывод)

1 --> 1
2 --> 3 + 5 = 8 */
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

// 21)
/* Напишите функцию, которая принимает массив чисел и возвращает сумму чисел. Числа могут быть отрицательными или нецелыми. Если массив не содержит чисел, вы должны вернуть 0.

Примеры
Ввод: [1, 5.2, 4, 0, -1]
Выход: 9,2

Вход: []
Выход: 0

Ввод: [-2,398]
Выход: -2,398

Предположения
Вы можете считать, что вам даны только цифры.
Вы не можете предположить размер массива.
Вы можете предположить, что вы получили массив, и если массив пуст, верните 0.
Что мы тестируем
Мы тестируем базовые циклы и математические операции. Это для новичков, которые только изучают циклы и математические операции.
Продвинутым пользователям это может показаться очень простым, и они могут легко записать это в одну строку. */

function sum(numbers) {
  'use strict';
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  if (numbers.length == 0) {
    return 0;
  }
  return sum;
}
console.log(sum([1, 5.2, 4, 0, -1]));

// 22)
/*Подсчитайте количество дубликатов
Напишите функцию, которая будет возвращать количество различных буквенных символов и цифр, не зависящих от регистра, которые встречаются во входной строке более одного раза. Можно предположить, что входная строка содержит только буквы (как прописные, так и строчные) и числовые цифры. 
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */
function duplicateCount(text) {
  let result = 0,
    soltingObject = {};
  text
    .toLowerCase()
    .split('')
    .map((str) => {
      if (!soltingObject.hasOwnProperty(str)) {
        //Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.
        soltingObject[str] = 0;
      } else {
        if (soltingObject[str] === 0) {
          result += 1;
        }
        soltingObject[str] = soltingObject[str] + 1;
      }
    });
  return result;
}

function duplicationCount(text) {
  return text
    .toLowerCase()
    .split('')
    .filter((val, i, arr) => {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

// 23)
function DNAtoRNA(dna) {
  let rna = dna.replace(/T/gi, 'U');
  return rna;
}
console.log(DNAtoRNA('GCAT'));

// 24)
function find_average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  if (array.length == 0) {
    return 0;
  }
  return sum / 2;
}

// 25)
function stray(numbers) {
  return numbers.reduce((a, b) => a ^ b); // Оператор побитового ИСКЛЮЧАЮЩЕГО ИЛИ
}
console.log(stray([17, 17, 3, 17, 17, 17, 17]));

function stray(numbers) {
  let strayChar = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (strayChar !== numbers[i]) {
      return (strayChar = numbers[i]);
    }
  }
  return 0;
}
console.log(stray([17, 17, 3, 17, 17, 17, 17]));

// 26)
function oddOrEven(array) {
  const newArray = array.reduce(function (a, b) {
    return a + b;
  });
  if (newArray.length === 0) {
    return 'even';
  }
  if (newArray % 2 == 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
console.log(oddOrEven([0, -1, -5]));

// 27)
function areYouPlayingBanjo(name) {
  if (name.startsWith('r') || name.startsWith('R')) {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}
console.log(areYouPlayingBanjo('bravo'));

// 28)
class SmallestIntegerFinder {
  findSmallestInt(args) {
    const res = args.sort(function (a, b) {
      return a - b;
    });
    return res[0];
  }
}
console.log(findSmallestInt([34, 15, 88, 2]));

// 29)
function calculateYears(principal, interest, tax, desired) {
  // создаем бесконечный цикл, который будет увеличивать количество лет
  for (var year = 0; ; year++) {
    // проверяем, достиг ли принципал желаемую сумму
    if (principal >= desired) {
      return year;
    }

    // рассчитываем проценты за этот год
    var currentYearInterest = interest * principal;

    // calculate the tax on the interest for this year
    var currentYearTax = currentYearInterest * tax;

    // adjust the principal to add the interest and minus the tax
    principal = principal + currentYearInterest - currentYearTax;
  }
}

// 30)
/*Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0,55, 0, 0 ]) === 0,55 */
function findUniq(arr) {
  let first = arr[0];
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 1; i < arr.length; i++) {
    if (first !== arr[i]) {
      return (first = arr[i]);
    }
  }
}
console.log(findUniq([0, 0, 0.55, 0, 0]));

//First:
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

//Second:
function findUniq(arr) {
  return +arr.filter((value) => {
    return arr.indexOf(value) == arr.lastIndexOf(value);
  });
}

//31)
/* findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb' */
function findUniq(arr) {
  let newArr = arr.map((a) => {
    return [...new Set(a.toLowerCase())].sort().join('');
  });
  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i])) return arr[i];
  }
}
console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']));
/* 1) методом map задаем указанную коллбек функцию для каждого элемента в массиве
   2) Опператор rest и вот как он работает
   function myFun(a, b, ...manyMoreArgs) {
      console.log("a", a);
      console.log("b", b);
      console.log("manyMoreArgs", manyMoreArgs);
    }

    myFun("один", "два", "три", "четыре", "пять", "шесть");

    // Console Output:
    // a, один
    // b, два
    // manyMoreArgs, [три, четыре, пять, шесть] 
    3) Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
    */

// 32)
/* domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet" */
function domainName(url) {
  url = url.replace('http://', '');
  url = url.replace('https://', '');
  url = url.replace('www.', '');

  return url.split('.')[0]; // Мы делаем массив из того что осталось: [ 'github', 'com/carbonfive/raygun' ]. И потом обращаемся к [0]
}
console.log(domainName('http://github.com/carbonfive/raygun'));

//33)
function correct(string) {
  return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
}

// 34)
/* Первая и последня двух строк должны совпадать */
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}

// 35)
/*Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.

Пример
camalCase => camel case */
function solution(string) {
  return string.replace(/([A-Z])/g, ' $1');
}
console.log(solution('camelCasing'));

// 36)
/* Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным.
Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]. */
function countPositivesSumNegatives(input) {
  let positiveNums = 0;
  let negativeNums = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) => (num > 0 ? positiveNums++ : (negativeNums += num)));
  }
  return [positiveNums, negativeNums];
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

// 37)
/* Добро пожаловать.

В этой ката вы должны, учитывая строку, заменить каждую букву ее позицией в алфавите.

Если что-то в тексте не является буквой, игнорируйте это и не возвращайте.

"a" = 1, "b" = 2.

Пример
alphabetPosition("The sunset sets at twelve o' clock.")
Должен вернуть "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (в виде строки) */

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((c) => c.charCodeAt() - 64) // тут 65 число приходит в charCodeAt
    .join(' ');
}

// 38)
/* Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой строке — это «(», если этот символ встречается в исходной строке только один раз, или «)», если этот символ встречается в исходной строке более одного раза. нить. Игнорировать заглавные буквы при определении, является ли символ дубликатом.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Примечания
Сообщения об утверждениях могут быть неясными в отношении того, что они отображают на некоторых языках. Если вы читаете «... Это должно кодировать XXX», «XXX» - это ожидаемый результат, а не ввод! */
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, word) {
      //a - текущий обрабат элемент, i - индекс текущуего обраб элемента, w - массив где это все обрабатывается
      return word.indexOf(a) == word.lastIndexOf(a)
        ? '('
        : ')'; /* Буква с нашего масива(любое слово которое приходит), indexOf - 
это его индекс сначала массива. И если эта чать равно букве этого массива, только отчет начинается не с начала, а с конца. 
  И если это правда то замена на (, если нет то на )  */
    })
    .join('');
}
console.log(duplicateEncode('recede'));

// 39)
/* classPoints - массив оценок класса, yourPoints - моя оценка. Если моя оценка выше средней то тру, меньше то фолс  */
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const average = classPoints.reduce((x, y) => x + y, 0) / classPoints.length;

  return average > yourPoints ? false : true;
}

// 40)
/*1 --> 1 --> "1.00"
  2 --> 1 + 1/4 --> "1.25"
  5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57" */
function SeriesSum(n) {
  let result = 0;
  let reverage = 1;
  for (let i = 0; i < n; i += 1) {
    if (i === 0) {
      result = 1;
    } else {
      reverage += 3;
      result = result + 1 / reverage;
    }
  }
  return result.toFixed(2);
}
/* Метод toFixed() форматирует число, используя запись с фиксированной запятой. 
var numObj = 12345.6789;

numObj.toFixed();       // Вернёт '12346': обратите внимание на округление, дробной части нет
numObj.toFixed(1);      // Вернёт '12345.7': обратите внимание на округление
numObj.toFixed(6);      // Вернёт '12345.678900': обратите внимание на дополнение нулями */

// 41)
/* Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output. */
function friend(friends) {
  return friends.filter((friend) => friend.length === 4);
}

function friend(friends) {
  let realFriends = [];
  for (i = 0; i < friends.length; i++) {
    if (friends[i].length == 4 && isNaN(friends[i])) {
      realFriends.push(friends[i]);
    }
  }

  return realFriends;
}

// 42)
/* Проверить массив на последовательность чисел , если будет [1,2,3,4,6,7,8] то 6 не последовательное число*/
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) return arr[i];
  }
  return null;
}

// 43) КАЛЬКУЛЯТОР
/* На этот раз мы хотим написать вычисления с использованием функций и получить результаты. Давайте посмотрим на некоторые примеры:

семь (раз (пять ())); // должно вернуть 35
четыре (плюс (девять ())); // должно вернуть 13
восемь (минус (три ())); // должно вернуть 5
шесть (разделено на (два ())); // должно вернуть 3
Требования:

Должна быть функция для каждого числа от 0 ("ноль") до 9 ("девять")
Должна быть функция для каждой из следующих математических операций: плюс, минус, умножить, разделить на
Каждое вычисление состоит ровно из одной операции и двух чисел
Самая внешняя функция представляет левый операнд, самая внутренняя функция представляет правый операнд.
Деление должно быть целочисленным. Например, это должно вернуть 2, а не 2,666666...:
восемь (разделено на (три ())); */
// Объект arguments — это подобный массиву объект, который содержит аргументы, переданные в функцию.
// arguments[0](0) - это мы вызываем функцию, хранящуюся в arguments[0] и передаем ей параметр 0
/* Попробую прочитать код: return arguments.length === 0 ? 0 : arguments[0](0) если количество аргументов равно 0, то  мы возвращаем 0, если нет, то мы возвращаем результат вызова функции которая хранится в нулевом аргументе и туда передаем новый аргумент 0 ? */
function zero() {
  return arguments.length === 0 ? 0 : arguments[0](0);
}
function one() {
  return arguments.length === 0 ? 1 : arguments[0](1);
}
function two() {
  return arguments.length === 0 ? 2 : arguments[0](2);
}
function three() {
  return arguments.length === 0 ? 3 : arguments[0](3);
}
function four() {
  return arguments.length === 0 ? 4 : arguments[0](4);
}
function five() {
  return arguments.length === 0 ? 5 : arguments[0](5);
}
function six() {
  return arguments.length === 0 ? 6 : arguments[0](6);
}
function seven() {
  return arguments.length === 0 ? 7 : arguments[0](7);
}
function eight() {
  return arguments.length === 0 ? 8 : arguments[0](8);
}
function nine() {
  return arguments.length === 0 ? 9 : arguments[0](9);
}

// мы возвращаем не х, а функцию, принимающую х
function plus() {
  const n = arguments[0];
  return (x) => x + n;
}
function minus() {
  const n = arguments[0];
  return (x) => x - n;
}
function times() {
  const n = arguments[0];
  return (x) => x * n;
}
function dividedBy() {
  const n = arguments[0];
  return (x) => Math.floor(x / n);
}

// 44)
/* Совершенная степень - это классификация положительных целых чисел:

В математике совершенная степень — это положительное целое число, которое может быть выражено как целая степень другого положительного целого числа. Более формально, n является совершенной степенью, если существуют натуральные числа m > 1 и k > 1 такие, что mk = n.

Ваша задача — проверить, является ли данное целое число совершенной степенью. Если это совершенная степень, верните пару m и k с mk = n в качестве доказательства. В противном случае верните Nothing, Nil, null, NULL, None или эквивалент в вашем языке.

Примечание. Для идеальной мощности может быть несколько пар. Например, 81 = 3 ^ 4 = 9 ^ 2, поэтому (3,4) и (9,2) являются допустимыми решениями. Однако тесты позаботятся об этом, поэтому, если число является совершенной степенью, верните любую пару, которая это доказывает. */
function isPP(n) {
  for (let m = 2; m * m <= n; ++m)
    for (let k = 2; Math.pow(m, k) <= n; ++k) if (Math.pow(m, k) == n) return [m, k];
  return null;
}

// 45)
/* У меня есть много файлов, начинающихся так:

Program title: Primes
Author: Kern
Corporation: Gold
Phone: +1-503-555-0091
Date: Tues April 9, 2005
Version: 6.7
Level: Alpha
Здесь мы будем работать со строками, такими как приведенные выше строковые данные, а не с файлами.

The function change(s, prog, version) given:

s=data, prog="Ladder" , version="1.1" will return:
"Program: Ladder Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: 1.1"

Правила:

Дата всегда должна быть "2019-01-01".

Автор всегда должен быть "g964".

Замените текущее «Название программы» аргументом программы, предоставленным вашей функции. Также удалите «Название», чтобы в примере «Название программы: Простые числа» стало «Программой: Лестничная диаграмма».

Полностью удалите строки, содержащие «Корпорация» и «Уровень».

Номера телефонов и версии должны быть в допустимых форматах.

Допустимой версией данных входной строки является одна или несколько цифр, за которыми следует точка, а затем одна или несколько цифр. Таким образом, версии 0.6, 5.4, 14.275 и 1.99 действительны, но такие версии, как .6, 5, 14.2.7 и 1.9.9, недействительны.

Допустимый формат ввода телефона: +1-xxx-xxx-xxxx, где каждый x — цифра.

Если формат телефона или версии недействителен, верните «ОШИБКА: ВЕРСИЯ или ТЕЛЕФОН».

Если формат версии действителен и версия отличается от 2.0, замените ее параметром версии, предоставленным вашей функции. Если это 2.0, не изменяйте его.

Если номер телефона действителен, замените его на «+1-503-555-0090».

Примечание
Другие примеры вы можете посмотреть в разделе "Примеры тестов". */

function change(s, prog, version) {
  if (/Version: 2.0\n/.test(s)) version = '2.0';

  if (!/Phone: (\+1-\d{3}-\d{3}-\d{4})\n/.test(s) || !/Version: \d+\.\d+\n/.test(s))
    return 'ERROR: VERSION or PHONE';

  return `Program: ${prog} Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: ${version}`;
}

// 46)
/* Рассмотрим колоду из 52 карт, которые представлены строкой, содержащей их масть и номинал.

Ваша задача — написать две функции encode и decode, которые переводят массив карточек в/из массива целочисленных кодов.

функция кодирует:

ввод: массив строк (символов)

вывод: массив целых чисел (кодов), отсортированных в порядке возрастания

функция декодирования:

ввод: массив целых чисел (коды)

вывод: массив строк (символов), отсортированных по кодовым значениям

['Ac', 'Ks', '5h', 'Td', '3c'] -> [0, 2 ,22, 30, 51] //encoding
[0, 51, 30, 22, 2] -> ['Ac', '3c', 'Td', '5h', 'Ks'] //decoding

Возвращаемый массив должен быть отсортирован от низшего к высшему приоритету (порядок значения или приоритета, см. ниже).

Card suits:
name              |  symbol    |  precedence(приоритет)
---------------------------------
club(кресть)         c            0
diamond(бубна)       d            1
heart(червь)         h            2
spade(пика)          s            3

52-card deck:
  c     |     d     |    h     |    s
----------------------------------------
 0: A      13: A      26: A      39: A
 1: 2      14: 2      27: 2      40: 2
 2: 3      15: 3      28: 3      41: 3
 3: 4      16: 4      29: 4      42: 4
 4: 5      17: 5      30: 5      43: 5
 5: 6      18: 6      31: 6      44: 6
 6: 7      19: 7      32: 7      45: 7
 7: 8      20: 8      33: 8      46: 8
 8: 9      21: 9      34: 9      47: 9
 9: T      22: T      35: T      48: T
10: J      23: J      36: J      49: J
11: Q      24: Q      37: Q      50: Q
12: K      25: K      38: K      51: K */

const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']; // Создаем карты от туза до короля
const suits = ['c', 'd', 'h', 's']; // создаем масти

function encode(input) {
  /* Берём массив который к нам приходит(input) и на него используем метод map
     card - каждая отдельная карта
     cards.indexOf(card[0]) - обращаемся к глобальной переменной с картами. Метод indexOf() возвращает первый индекс, по которому
     данный элемент может быть найден в массиве. В этот indexOf помещаем первую карту
     +
     suits.indexOf(card[1]) * 13 - обращаемся к глобальной переменной с мастями. indexOf() - обращаемся к первой карте и умножаем ее
     на 13 так мы получим все карты от туза до короля.
     А потом все это добро мы сортирируем по возростанию */
  return input
    .map((card) => cards.indexOf(card[0]) + suits.indexOf(card[1]) * 13)
    .sort((a, b) => a - b);
}

function decode(input) {
  /* Тут на оборот мы сначала сортирует массив по возрастанию который к нам приходит
     Берем метод map и на каждую карту применяем функцию
     cards[card % 13] - обращаемся к переменной map и говорим что Бинарный оператор. Возвращает целочисленный остаток от деления двух операндов. Те карты на их количество
     + 
     suits[Math.floor(card / 13) Обращаемся к переменной с мастями. Метод Math. floor() - округление вниз. И делим карты на их кство от туза до короля(те все карты) */
  return input.sort((a, b) => a - b).map((card) => cards[card % 13] + suits[Math.floor(card / 13)]);
}

// 47)
/* function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn( adder );

adderSpy(2, 4); // returns 6
adderSpy(3, 5); // returns 8
adderSpy.callCount(); // returns 2
adderSpy.wasCalledWith(4); // true
adderSpy.wasCalledWith(0); // false
adderSpy.returned(8); // true
adderSpy.returned(0); // false */

function spyOn(func) {
  let calls = 0; // Вызовы функций
  let all = [];
  let val;

  const spy = function (...args) {
    calls++;
    all.push(...args);
    val = func.apply(
      this,
      args
    ); /* Метод apply() вызывает функцию с указанным значением this и аргументами, 
      предоставленными в виде массива */
    return val;
  };

  spy.callCount = () => calls;
  spy.wasCalledWith = (x) =>
    all.some((a) => x === a); /* Метод some() проверяет, удовлетворяет ли какой-либо 
    элемент массива условию, заданному в передаваемой функции. A - это каждый отдельный аргумент на сколько я понял */
  spy.returned = (x) => x === val;

  return spy;
}

// 48)
/* Число 81 обладает особым свойством, определенная степень суммы его цифр равна 81 (девять в квадрате). Восемьдесят один (81) — первое число, обладающее этим свойством (не считая однозначных чисел). Следующий — 512. Рассмотрим оба случая подробнее.

8 + 1 = 9 и 92 = 81

512 = 5 + 1 + 2 = 8 и 83 = 512

Нам нужно создать функцию power_sumDigTerm(), которая получает число n и может выводить n-й член этой последовательности чисел. Случаи, которые мы представили выше, означают, что

power_sumDigTerm(1) == 81

power_sumDigTerm(2) == 512

Удачного кодирования! */
function powerSumDigTerm(n) {
  let arr = [1];
  for (let i = 6; i < 96; i++) {
    for (let j = 2; j < 10; j++) {
      if (
        (i ** j)
          .toString()
          .split('')
          .reduce((x, y) => +x + +y) === i
      ) {
        arr.push(i ** j);
      }
    }
  }
  arr.sort((x, y) => x - y);
  return arr[n];
}

// 49)
/* Конвертатор Валют */
const App = (props) => {
  const getResource = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, status: ${res.status}!`);
    }
    return await res.json();
  };
  React.useEffect(() => {
    getData();
  }, []);
  const [data, setData] = React.useState([]);
  const [result, setResult] = React.useState();
  const getData = async () => {
    const res = await getResource(
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json'
    );
    setData((data) => res.map(_transformData));
  };
  const _transformData = (arr) => {
    return {
      countryCode: arr.cc,
      nameOfCurrency: arr.txt,
      value: arr.rate,
    };
  };

  function goToCurr(country) {
    let found = data.filter((elem) => elem.countryCode === country);
    let symbol =
      found[0].countryCode === 'USD'
        ? ' $'
        : found[0].countryCode === 'GBP'
        ? ' £'
        : found[0].countryCode === 'EUR'
        ? ' €'
        : found[0].countryCode === 'INR'
        ? ' ₹'
        : null;

    setResult((result) => Math.round((props.counter / found[0].value) * 100) / 100 + symbol);
  }
  function reset() {
    setResult((result) => null);
  }

  return (
    <div className="app">
      <div className="">Вы ввели в гривнах: {props.counter}</div>
      <div className="counter">{result}</div>
      <div className="controls">
        <button onClick={() => goToCurr('USD')}>USD</button>
        <button onClick={() => goToCurr('EUR')}>EUR</button>
        <button onClick={() => goToCurr('GBP')}>GBP</button>
        <button onClick={() => goToCurr('INR')}>INR</button>
      </div>
      <div className="reset">
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App counter={12000} />, document.getElementById('app'));

// 50)
var peakHeight = function (mountain, counter = 0) {
  if (mountain.every((row) => row.every((sq) => sq === ' '))) return counter;

  let afterEdgeCheck = mountain.map((row, i) =>
    row.map((sq, j) => {
      let up = mountain[i - 1] ? mountain[i - 1][j] : ' ';
      let down = mountain[i + 1] ? mountain[i + 1][j] : ' ';
      let left = mountain[i][j - 1] || ' ';
      let right = mountain[i][j + 1] || ' ';
      return [up, down, left, right].includes(' ') ? ' ' : sq;
    })
  );

  return peakHeight(afterEdgeCheck, ++counter);
};

// 51)
/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */
function isPangram(str) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  str = str.toLowerCase();
  for (var i = 0; i < alphabet.length; i++) {
    if (str.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog'));

// 52)
/* Если элемент в строке повторяется вернуть false, если не повторяется то true
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) */
function isIsogram(str) {
  const arr = str.toLowerCase().split('');
  const similars = arr.filter((el, i, arr) => arr.indexOf(el) !== i).map((el) => [el, el]);
  return similars.length ? false : true;
}

// 53)
/* В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.

Примеры
HighAndLow("1 2 3 4 5"); // вернуть "5 1"
highAndLow("1 2 -3 4 5"); // вернуть "5 -3"
highAndLow("1 9 3 4 -5"); // вернуть "9 -5"

Все номера действительны Int32, их не нужно проверять.
Во входной строке всегда будет хотя бы одно число.
Выходная строка должна состоять из двух чисел, разделенных одним пробелом, причем наибольшее число должно быть первым. */
function highAndLow(numbers) {
  let arr = numbers.split(' ');
  let sortArr = arr.sort((a, b) => b - a);
  let newArr = [];
  newArr.push(sortArr[0]);
  newArr.push(sortArr[sortArr.length - 1]);
  return newArr.join(' ');
}
console.log(highAndLow('1 2 -3 4 5'));

// 54)
/* Банкоматы позволяют использовать 4- или 6-значные PIN-коды, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.

Если функции передана допустимая строка PIN-кода, верните true, иначе верните false.

Примеры (ввод --> вывод)
"1234" --> верно
"12345" --> ложь
"а234" --> ложь */
function validatePIN(pin) {
  var pinlen = pin.length;
  var isCorrectLength = pinlen == 4 || pinlen == 6;
  var hasOnlyNumbers = pin.match(/^\d+$/);

  if (isCorrectLength && hasOnlyNumbers) {
    return true;
  }

  return false;
}

// 55)
function likes(names) {
  if (names.length == 0) {
    return 'no one likes this';
  }

  for (let i = 0; i < names.length; i++) {
    if (names.length == 1) {
      return `${names[0]} likes this`;
    }

    if (names.length == 2) {
      return `${names[0]} and ${names[1]} like this`;
    }

    if (names.length == 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }

    if (names.length > 3) {
      let others = names.length - 2;
      return `${names[0]}, ${names[1]} and ${others} others like this`;
    }
  }
}
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

// 56)
/* Дан массив в массиве
  Первый аргумент массива - сколько человек заходит
  Второй - сколько выходит
  Нужно вернуть количество людей которое будет на последней остановке
  [[10, 0], [3, 8], [8, 0], [3, 7]] Ответ 9 */
var number = function (busStops) {
  var totalPeople = 0;
  for (var i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
};

const number = (busStops) => busStops.reduce((p, n) => p + n[0] - n[1], 0);

// 57)
/* #Найди пропущенную букву

Напишите метод, который принимает на вход массив последовательных (возрастающих) букв и возвращает отсутствующую букву в массиве.

Вы всегда получите допустимый массив. И всегда будет отсутствовать ровно одна буква. Длина массива всегда будет не менее 2.
Массив всегда будет содержать буквы только в одном регистре.

Пример:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Используйте английский алфавит из 26 букв!)

Получайте удовольствие от его кодирования и, пожалуйста, не забудьте проголосовать и оценить этот ката! :-)

Я также создал другие ката. Посмотрите, понравилась ли вам эта ката! */
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  console.log(start);
  const findArrayInAlphabet = alphabet.slice(start, start + array.length);
  console.log(findArrayInAlphabet); // [ 'a', 'b', 'c', 'd', 'e' ] мы наш алфавит скоротили до исходного массива
  const findLetter = findArrayInAlphabet.find((el) => !array.includes(el)); //найти элемент в Алфавите, которого нет с исходном Массиве
  return findLetter;
};
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));

// 58)
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
console.log(maskify('4556364607935616'));

// 59)
/* Даны два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните a или b.

Примечание: a и b не упорядочены!

Примеры (а, б) --> вывод (пояснение)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1, так как оба одинаковы)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2) */
function getSum(a, b) {
  if (a === b) {
    return a;
  }

  let result = 0,
    x = a,
    y = b;

  if (a > b) {
    x = b;
    y = a;
  }

  for (let i = x; i <= y; i++) {
    result += i;
  }
  return result;
}

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

// 60)
/* Джонни - фермер, и он ежегодно проводит съезд фермеров-свекловодов «Брось свеклу».

Каждый год он фотографирует рукопожатие фермеров. Джонни знает, что никакие два фермера не пожимают друг другу руки больше одного раза. Он также знает, что некоторые из возможных комбинаций рукопожатий могут не состояться.

Однако Джонни хотел бы узнать минимальное количество людей, которые участвовали в этом году, просто подсчитав все рукопожатия.

Помогите Джонни, написав функцию, которая берет количество рукопожатий и возвращает минимальное количество людей, необходимое для выполнения этих рукопожатий (пара фермеров рукопожатия только один раз). */
function getParticipants(h) {
  for (var i = 0, k = 1; i < h; i += k++) {}
  return k;
}
// К примеру рукопожатий было 30 000

// 61)
/* Возьмем целое число n (n >= 0) и цифру d (0 <= d <= 9) в качестве целого числа.

Возведите в квадрат все числа k (0 <= k <= n) между 0 и n.

Подсчитайте количество цифр d, использованных при написании всех k**2.

Вызовите nb_dig (или nbDig или...) функцию, принимающую n и d в качестве параметров и возвращающую это значение.

Примеры:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25. */
function nbDig(n, d) {
  let arr = [];

  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(i, 2));
  }

  return arr
    .join('')
    .split('')
    .map((x) => x.includes(d))
    .reduce((a, b) => a + b, 0);
}

// 62)
const isVow = (a) => {
  let map = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u',
  };
  return a.map((num) => (map[num] ? map[num] : num));
};

// 63)
/* Учитывая массив (arr) в качестве аргумента, завершите функцию countSmileys, которая должна вернуть общее количество улыбающихся лиц.

Правила улыбающегося лица:

Каждый смайлик должен содержать допустимую пару глаз. Глаза могут быть отмечены как : или ;
У смайлика может быть нос, но не обязательно. Допустимые символы для носа - или ~
Каждое улыбающееся лицо должно иметь улыбающийся рот, который должен быть отмечен знаком ) или D.
Не допускается использование дополнительных символов, кроме упомянутых.

Допустимые примеры смайлов: :) :D ;-D :~)
Недопустимые смайлики: ;( :> :} :]

Пример
countSmileys([':)', ';(', ';}', ':-D']); // должно вернуть 2;
countSmileys([';D', ':-(', ':-)', ';~)']); // должно вернуть 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // должно вернуть 1;
Примечание
В случае пустого массива верните 0. Вы не будете тестироваться с недопустимым вводом (ввод всегда будет массивом). Порядок элементов лица (глаза, нос, рот) всегда будет одинаковым */
function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

// 64)

const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };

function DNAStrand(dna) {
  return dna
    .split('')
    .map(function (v) {
      return pairs[v];
    })
    .join('');
}
console.log(DNAStrand('AAAA'));

// 65
function nbYear(p0, percent, aug, p) {
  let newProcent = percent / 100;

  for (let year = 0; ; year++) {
    if (p0 >= p) {
      return year;
    }
    p0 = p0 + p0 * newProcent + aug;
  }
}

function abbrevName(name) {
  let arr = name.split(' ');
  let first = arr[0].slice(0, 1);
  let second = arr[1].slice(0, 1);
  return first + '.' + second;
}
abbrevName('Ruslan Postoiuk');

// 66)
/* Хорошо познакомился со старшим братом Фибоначчи, также известным как Трибоначчи.

Как уже видно из названия, он работает в основном как Фибоначчи, но суммирует последние 3 (вместо 2) чисел последовательности для генерации следующего. И, что еще хуже, к сожалению, я не услышу, как его произносят не носители итальянского языка :(

Итак, если мы хотим начать нашу последовательность Трибоначчи с [1, 1, 1] в качестве начального ввода (подпись AKA), у нас будет следующая последовательность:

[1, 1, 1, 3, 5, 9, 17, 31, ...]
Но что, если мы начнем с [0, 0, 1] в качестве подписи? Поскольку начало с [0, 1] вместо [1, 1] в основном сдвигает обычную последовательность Фибоначчи на одну позицию, у вас может возникнуть соблазн подумать, что мы получим ту же самую последовательность, сдвинутую на 2 позиции, но это не так, и мы бы получили:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Что ж, вы, возможно, уже догадались об этом, но для ясности: вам нужно создать функцию Фибоначчи, которая по заданному массиву/списку сигнатур возвращает первые n элементов — сигнатуру, включенную в последовательность, заполненную таким образом.

Подпись всегда будет содержать 3 цифры; n всегда будет неотрицательным числом; если n == 0, то верните пустой массив (за исключением C, возвращающего NULL) и будьте готовы ко всему, что явно не указано;)

Если вам понравилось это ката, более продвинутую и обобщенную версию можно найти в ката Xbonacci.

[Личное спасибо профессору Джиму Фаулеру на Coursera за его замечательные уроки, которые я действительно рекомендую всем любителям математики, и за то, что он также проявил ко мне эту математическую любознательность со своей обычной заразительной страстью :)] */

// signature - массив с первими трёма цифрами
// n - сколько раз должно добавляться
function tribonacci(signature, n) {
  while (signature.length < n) {
    signature.push(signature.slice(-3).reduce((a, b) => a + b));
  }
  return signature.slice(0, n);
}
console.log(tribonacci([1, 1, 1], 10));

function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    // повторить n раз
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // добавить последние 3 элемента массива и запушить в trib
  }
  return signature.slice(0, n); // вернуть trib минус длина n
}

// 67)
/* Если мы перечислим все натуральные числа до 10, кратные 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных равна 23.

Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5, меньше переданного числа. Кроме того, если число отрицательное, верните 0 (для языков, в которых они есть).

Примечание. Если число кратно и 3, и 5, считайте его только один раз.

Предоставлено projecteuler.net (задача 1) */
function solution(number) {
  var sum = 0;

  for (var i = 0; i < number; i++) {
    // i - это и есть все числа до числа которое приходит в number
    if (i % 3 == 0 || i % 5 == 0) {
      // если то число которое до находтся до number делится без остатка на 3 или на 5
      sum += i; // берем суму и к ней добавляем это число и так пока цикл не закончится
    }
  }
  return sum;
}

// 68)
/* Найти самое короткое слово в предложение */
function findShort(s) {
  let a = s.split(' ');
  console.log(a);
  let b = a.sort((a, b) => a.length - b.length);
  console.log(b);
  return b[0];
}
console.log(findShort('Rulan Mariia Hey All M'));

// 69)
/* Из числа согдает массив, где каждый элемент массива - отдельное его число */
function digitize(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((int) => parseInt(int));
}
console.log(digitize(12345));

// 70)
/* Маркетинговая команда тратит слишком много времени на ввод хэштегов.
Давайте поможем им с нашим генератором хэштегов!

Вот сделка:

Он должен начинаться с хэштега (#).
Во всех словах первая буква должна быть заглавной.
Если окончательный результат длиннее 140 символов, он должен вернуть false.
Если ввод или результат представляет собой пустую строку, он должен вернуть false.

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false*/
function generateHashtag(str) {
  if (str.length === 0 || str.length > 140) {
    return false;
  }

  let arr = str.split(' ');
  console.log(arr);

  let arrToUppercase = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  return '#' + arrToUppercase.join('');
}
console.log(generateHashtag('Hello there thanks for trying my Kata'));

// 71)
/* createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890" */
function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function createPhoneNumber(numbers) {
  return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
}
// 72)
/*         1
          / \
         2   3  -> [1,2,3,4,5,6,7]
        /|\   \
       4 5 6   7 */
function treeToArray(tree) {}

// 73)
/* "()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true */

function validParentheses(parens) {
  const arr = parens.split('');
  const filterArrLeft = arr.filter((item) => {
    if (item === '(') {
      return item;
    }
  });
  const filterArrRight = arr.filter((item) => {
    if (item === ')') {
      return item;
    }
  });
  if (
    filterArrLeft.length === filterArrRight.length &&
    arr[0] === '(' &&
    arr[arr.length - 1] === ')' &&
    arr.length !== 0
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(validParentheses('(())((()())()))'));

// 74)
/* accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt" */
function accum(s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    res += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + (i < s.length - 1 ? '-' : '');
  }
  return res;
}
console.log(accum('abcd'));

function sumArray(array) {
  if (array.length == 1 || array.length == 0 || array === null) {
    return 0;
  }

  let sortArr = array.sort((a, b) => {
    return a - b;
  });
  let reduceArr = array.reduce((accum, item) => {
    return (accum += item);
  });
  return reduceArr - sortArr[0] - sortArr[sortArr.length - 1];
}
console.log(sumArray([2]));

// 75)
/* customers - массив, каждое число которого показывает сколько времени нужно клиента что бы обслужить касу
   registers - свободные кассы
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12 */
function queueTime(customers, registers) {
  let arr = [];

  for (
    let i = 0;
    i < registers;
    i++ //
  )
    arr[i] = 0; // 0, 0 получаем в консоль, то-есть мы говорим что индкексы наших КАС равны 0

  for (let i = 0; i < customers.length; i++) {
    console.log((arr[0] += customers[i])); //10 7 12 19, 19 это сума первого и последного элемента те 10 и 9
    arr.sort((a, b) => a - b);
  }

  return arr[arr.length - 1];
}

//76)
var capitals = function (word) {
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(capitals('CodEWaRs'));

// Найти индексы элементов первого массива на основе второго
function findIndex(word) {
  let indexArr = [];
  let arr = word.split('');
  let filter = ['C', 'E', 'W', 'R'];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < filter.length; j++) {
      if (arr[i] === filter[j]) {
        indexArr.push(i);
      }
    }
  }
  return indexArr;
}
console.log(findIndex('CodEWaRs'));

// 77)
/*

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */
function XO(str) {
  let arr = str.toLowerCase().split('');
  let filterX = arr.filter((item) => {
    if (item === 'x') {
      return item;
    }
  });
  let filterY = arr.filter((item) => {
    if (item === 'o') {
      return item;
    }
  });
  if (filterY.length === filterX.length) {
    return true;
  } else {
    return false;
  }
}
console.log(XO('zpzpzpp'));

//78)
function minMax(arr) {
  let mainArr = [];
  if (arr.length === 1) {
    mainArr.push(0);
    mainArr.push(arr.length - 1);
  }
  let sortArr = arr.sort((a, b) => a - b);
  let filterArr = sortArr.filter((item) => {
    if (item !== 0) {
      return item;
    }
  });
  for (let i = 0; i < filterArr.length; i++) {
    if (filterArr[0] === filterArr[filterArr.length - 1]) {
      mainArr.push(filterArr[0]);
      return mainArr;
    }
  }
  mainArr.push(filterArr[0]);
  mainArr.push(filterArr[filterArr.length - 1]);
  return mainArr;
}
console.log(minMax([0, 0, 0, 5, 5, 5, 5, 5]));

// 79)
/* Определите функцию, которая принимает один целочисленный аргумент и возвращает логическое значение true или false в зависимости от того, является ли целое число простым.

Согласно Википедии, простое число (или простое число) — это натуральное число больше 1, которое не имеет положительных делителей, кроме 1 и самого себя.

Требования
Вы можете предположить, что вам будет предоставлен целочисленный ввод.
Нельзя предполагать, что целое число будет только положительным. Вам также могут быть даны отрицательные числа (или 0).
ПРИМЕЧАНИЕ о производительности: никаких сложных оптимизаций не требуется, но даже самые тривиальные решения могут истечь. Числа доходят до 2^31 (или около того, зависит от языковой версии). Цикл до n или n/2 будет слишком медленным. */

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
      break; // выйдем из цикла
    }
  }
  return flag;
}
console.log(isPrime(9));

// 80)
/* Создайте функцию, которая принимает целое положительное число и возвращает следующее большее число, которое можно составить, переставляя его цифры. Например:
Если цифры нельзя переставить, чтобы получить большее число, вернуть -1. */
function nextBigger(n) {
  let arr = n.toString().split('');

  if (arr.length === 2) {
    let firstNum = arr[0];
    arr.splice(0, 1, arr[arr.length - 1]);
    arr.splice(1, 1, firstNum);
  }

  if (arr.length === 3) {
    let secondNum = arr[1];
    arr.splice(1, 1, arr[arr.length - 1]);
    arr.splice(2, 1, secondNum);
  }
  if (arr.length === 4) {
    let thirdNum = arr[2];
    arr.splice(2, 1, arr[arr.length - 1]);
    arr.splice(3, 1, thirdNum);
  }

  if (arr.length > 4) {
    let predposl = arr[arr.length - 2];
    let posledniye = arr[arr.length - 1];
    arr.splice(predposl, 1, posledniye);
    arr.splice(posledniye, 1, predposl);
  }

  let newNumber = Number(arr.join(''));
  if (n === newNumber) {
    return -1;
  }
  if (n < newNumber) {
    return newNumber;
  } else {
    return -1;
  }
}
console.log(nextBigger(82361327759404));

//81)
/* Для заданного числа k найдите наименьшее целое число n такое, что если удалить любые k элементов из множества {1, 2, ..., n}, среди оставшихся элементов все еще можно найти k различных чисел с суммой n.

Ввод, вывод
[ввод] целое число k

Количество элементов, которые необходимо удалить.

2 ≤ к ≤ 10000

[выход] целое число

Наименьшее значение n.

Пример
При k = 2 на выходе должно быть 7.

Начальный набор {1, 2, 3, 4, 5, 6, 7}.

Независимо от того, какие 2 элемента вы удалите, (1, 6), (2, 5) или (3, 4) в сумме дадут 7.

Почему результат не 6? Потому что: в наборе {1, 2, 3, 4, 5, 6}, если мы удалим 2 элемента (1,2) или (4,5), оставшиеся элементы не будут содержать 2 элемента, сумма которых равна 6. */
function removeK(k) {
  return (k * (3 * k + 1)) / 2;
}
console.log(removeK(3));

//82
/* Переместите первую букву каждого слова в конец, а затем добавьте «ay» в конец слова. Оставьте знаки препинания нетронутыми.

Примеры
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */
function pigIt(str) {
  return str
    .split(' ')
    .map((word) => (word.match(/[a-z]/i) ? word.slice(1) + word.charAt(0) + 'ay' : word))
    .join(' ');
}
console.log(pigIt('Hello world !'));

//83
// Удалить все гласные
function disemvowel(str) {
  return str.replace(/[aeoui]/gi, '');
}

function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  return str
    .split('')
    .filter(function (el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    })
    .join('');
}

//84
function moveZeros(arr) {
  let filterArr = arr.filter((item) => item !== 0);
  return filterArr;
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
var moveZeros = function (arr) {
  return arr.filter((val) => val !== 0).concat(arr.filter((val) => val === 0));
};
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));

// 85
/* foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100
Внимание: Если в числе есть ведущие нули, следует учитывать количество цифр.
*/
function incrementString(strng) {
  if (/\d/.test(strng) === true) {
    /* Метод test проверяет строку на наличие совпадений с регулярным выражением. Метод возвращает true, если совпадения были найдены. И false, если нет. */
    let num =
      +strng.match(/\d+/g)[0] +
      1; /* Представь что у нас есть "123ab". Если мы пропишем /\d/, то мы получим  массив [ '1', '2', '3' ]. А если /\d+/g, то сплошное число [ '123' ], по-этому там может быть хоть 12323 число, 
    мы все равно получим это целое число и к нему добавим 1 */
    return strng.replace(/\d/g, '') + num;
  } else {
    return strng + '1';
  }
}
console.log(incrementString('foo0042'));

//86
// Если элемента Первого массива совпадают или являются частя слова элемента Второго массива + отсортировать их
function inArray(array1, array2) {
  let str2 = array2.join(' ');
  return array1.filter((item) => str2.includes(item)).sort();
}
console.log(inArray(['arp', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']));

let a = '123ab';
console.log(a.match(/\d/g));

function inArray(a1, a2) {
  var str = a2.join(' ');
  return a1.filter((s) => str.indexOf(s) !== -1).sort();
}

function inArray(array1, array2) {
  return array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();
}

//87
/* Ребенок играет с мячом на n-м этаже высотного здания. Высота этого этажа h известна.

Он бросает мяч из окна. Мяч отскакивает (например) на две трети своей высоты (отскок 0,66) - bounce

Его мать смотрит из окна в 1,5 метрах от земли.

Сколько раз мать увидит, как мяч проходит перед ее окном (в том числе когда он падает и подпрыгивает?

Для достоверности эксперимента должны быть соблюдены три условия:
Плавающий параметр "h" в метрах должен быть больше 0
Плавающий параметр "bounce" должен быть больше 0 и меньше 1
Плавающий параметр "окно" должен быть меньше h.
Если все три условия выше выполнены, вернуть положительное целое число, иначе вернуть -1.

Примечание:
Мяч можно увидеть только в том случае, если высота отскакивающего мяча строго больше параметра окна.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is -1 

(Condition 2) not fulfilled).*/
function bouncingBall(h, bounce, window) {
  let count = 1;
  let hBounce = h * bounce;
  while (hBounce > window) {
    count += 2;
    hBounce *= bounce; // тоже самое что hBounce = hBounce * bounce
  }

  if (h > 0 && bounce > 0 && bounce < 1 && window < h && h / bounce > window) {
    return count;
  } else {
    return -1;
  }
}
console.log(bouncingBall(3, 0.66, 1.5));

// 88
/* "(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False */
function validBraces(braces) {
  for (var i = 0, depth = []; i < braces.length; i++) {
    switch (braces[i]) {
      case '(':
      case '[':
      case '{':
        depth.push(braces[i]);
        break;
      case ')':
        if (depth.pop() != '(') return false;
        break;
      case ']':
        if (depth.pop() != '[') return false;
        break;
      case '}':
        if (depth.pop() != '{') return false;
        break;
    }
  }
  return depth.length == 0;
}
console.log(validBraces('([{}])'));

//89
var num = 2;
while (num < 16) {
  num++;
  if (num % 2 === 0) console.log(num);
}

// Место для второй задачи
function secondTask(data) {
  return data.reduce((accum, item) => {
    if (typeof item === 'string') {
      accum.push(item + ' - done');
    } else if (typeof item === 'number') {
      accum.push(item * 2);
    }
    return accum;
  }, []);
}
console.log(secondTask([5, 10, 'Shopping', 20, 'Homework']));

//90
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    lines - i;
    result += ' ';
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    result += '*';
  }
  result = '\n';
}

console.log(result);

//91
function getMathResult(num, count) {
  if (typeof count !== 'number' || count === 0 || count < 0) return num;
  let arr = [];
  let sum = 0;
  for (let i = 0; i < count; i++) {
    //sum += `---` + num
    arr.push((sum += num));
  }

  return arr.join('---');
}
console.log(getMathResult(5, 5));

//Ваня
function getMathResult(num, times) {
  if (typeof times !== 'number' || times <= 0) {
    return num;
  }

  let str = '';

  for (let i = 1; i <= times; i++) {
    if (i === times) {
      str += `${num * i}`;
      // Тут без черточек в конце
    } else {
      str += `${num * i}---`;
      // Это тоже самое, что и
      // str = str + num * i + "---"
    }
  }

  return str;
}

getMathResult(10, 5);

//
function calculateVolumeAndArea(numLength) {
  if (numLength <= 0 || typeof numLength !== 'number' || Number.isInteger(numLength) === false) {
    return 'При вычисление произошла ошибка';
  }
  let V = numLength * numLength * numLength;
  let S = 6 * numLength * numLength;
  return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
}
console.log(calculateVolumeAndArea(8));

function getCoupeNumber(num) {
  if (typeof num !== 'number' || Number.isInteger(num) === false) {
    return 'Ошибка. Проверьте правильность введенного номера места';
  }
  if (num <= 0 || num > 36) {
    return 'Таких мест в вагоне не существует';
  }
  if (num === 1) return 1;
  let coupeNumber = Math.ceil(num / 4);
  return coupeNumber;
}
console.log(getCoupeNumber(19));

//
function getTimeFromMinutes(time) {
  if (typeof time !== 'number' || time < 0 || Number.isInteger(time) === false)
    return 'Ошибка, проверьте данные';
  //if (time === 60) return 'Это 1 час и 0 минут'
  if (time < 60) return `Это 0 часов и ${time} минут`;

  let hour = Math.floor(time / 60);
  let minutes = time - hour * 60;
  //let minutes = time % 60
  if (hour === 1) return `Это ${hour} час и ${minutes} минут`;
  if (hour === 21) return `Это ${hour} час и ${minutes} минут`;
  if (hour === 2 || hour === 3 || hour === 4) return `Это ${hour} часа и ${minutes} минут`;

  return `Это ${hour} часов и ${time} минут`;
}
console.log(getTimeFromMinutes(110));

function findMaxNumber(a, b, c, d) {
  let arr = [a, b, c, d];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') return 0;
  }

  let arrSort = arr.sort((a, b) => b - a);
  return arrSort[0];
}
console.log(findMaxNumber(1, '5', 6.6, 11));

//
function fib(num) {
  if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
    return '';
  }

  let result = '';
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      result += `${first}`;
      // Без пробела в конце
    } else {
      result += `${first} `;
    }

    let third = first + second;
    first = second;
    second = third;
  }

  return result;
}

fib(5);

//
const personalPlanPeter = {
  name: 'Peter',
  age: '29',
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%',
    },
    exp: '1 month',
  },
  showAgeAndLangs: function (plan) {
    const { age } = plan;
    const { languages } = plan.skills;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach((item) => {
      str += `${item.toUpperCase()} `; //обрати внимание что в переменную str можно записывать вот так вот и пробел он сделал через отступ в конце
    });

    return str;
  },
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
  return plan.skills.exp;
}

function showProgrammingLangs(plan) {
  let str = '';
  const { programmingLangs } = plan.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  return str;
}
console.log(showProgrammingLangs(personalPlanPeter));

//
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  return `Семья состоит из ${family.join(' ')}`;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  let arr1 = arr.map((item) => {
    return item.toLowerCase();
  });
  return arr1.join('\n');
}
console.log(standardizeStrings(favoriteCities));

//
const someString = 'This is some strange string';

function reverse(str) {
  if (typeof str !== 'string') return 'Ошибка!';

  return str.split('').reverse().join(' ');
}
console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  if (arr.length === 0) return 'Нет доступных валют';
  let newArr = [];
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== missingCurr) {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    str += `\n${i + 1} - ${newArr[i]}`;
  }
  return 'Доступные валюты:' + str;
}
console.log(availableCurr(baseCurrencies.concat(additionalCurrencies), 'CNY'));

//
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};
function isBudgetEnough(data) {
  const { shops } = data;
  let shopsS = shops.reduce((accum, item) => {
    return (accum += item.width * item.length);
  }, 0);

  let mallValue = shopsS * data.moneyPer1m3 * data.height;
  console.log(mallValue);

  if (mallValue < data.budget) {
    return 'Бюджета достаточно';
  } else {
    return 'Бюджета недостаточно';
  }
}
console.log(isBudgetEnough(shoppingMallData));

//
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Zoya'];

function sortStudentsByGroups(arr) {
  const sortedArr = arr.sort();
  let finalArr = [];

  let firstTeam = [];
  firstTeam.push(sortedArr[0]);
  firstTeam.push(sortedArr[1]);
  firstTeam.push(sortedArr[2]);

  let secondTeam = [];
  secondTeam.push(sortedArr[3]);
  secondTeam.push(sortedArr[4]);
  secondTeam.push(sortedArr[5]);

  let thirdTeam = [];
  thirdTeam.push(sortedArr[6]);
  thirdTeam.push(sortedArr[7]);
  thirdTeam.push(sortedArr[8]);

  /* finalArr.push(firstTeam)
  finalArr.push(secondTeam)
  finalArr.push(thirdTeam) */

  let lastChild = arr.filter((item, i) => {
    if (i > 8) {
      return item;
    }
  });

  let str = 'Оставшиеся студенты:';
  for (let i = 0; i < lastChild.length; i++) {
    str += ` ${lastChild[i]},`;
  }
  let str2 = str.slice(0, -1); // строка когда есть лишние
  //let strWithout = 'Оставшиеся студенты: -'

  if (arr.length === 8) {
    finalArr = [firstTeam, secondTeam, thirdTeam, 'Оставшиеся студенты: -'];
  } else {
    finalArr = [firstTeam, secondTeam, thirdTeam, str2];
  }
  return finalArr;
}
console.log(sortStudentsByGroups(students));

//
const restorantData = {
  menu: [
    {
      name: 'Salad Caesar',
      price: '14$',
    },
    {
      name: 'Pizza Diavola',
      price: '9$',
    },
    {
      name: 'Beefsteak',
      price: '17$',
    },
    {
      name: 'Napoleon',
      price: '7$',
    },
  ],
  waitors: [
    { name: 'Alice', age: 22 },
    { name: 'John', age: 24 },
  ],
  averageLunchPrice: '20$',
  openNow: false,
};

function isOpen(prop) {
  let answer = '';
  prop ? (answer = 'Открыто') : (answer = 'Закрыто');

  return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) < average) {
    return 'Цена ниже средней';
  } else {
    return 'Цена выше средней';
  }
}

console.log(
  isAverageLunchPriceTrue(
    restorantData.menu[0],
    restorantData.menu[1],
    restorantData.averageLunchPrice
  )
);

function transferWaitors(data) {
  const copy = JSON.parse(JSON.stringify(data));

  copy.waitors[0] = { name: 'Mike', age: 32 };
  return copy;
}

console.log(transferWaitors(restorantData));

//
function amountOfPages(summary) {
  let arr = [];
  for (let i = 1; i <= summary; i++) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].toString();
  }
  let str = arr
    .join('')
    .split('')
    .filter((item, i) => {
      if (i < summary) {
        return item;
      }
    })
    .join('');
  return str;
}
console.log(amountOfPages(25));

//
function isPangram(string) {
  if (string.match(/[a-z]/g)) {
    return true;
  } else {
    return false;
  }
}

//
const films = [
  {
    name: 'Titanic',
    rating: 9,
  },
  {
    name: 'Die hard 5',
    rating: 5,
  },
  {
    name: 'Matrix',
    rating: 8,
  },
  {
    name: 'Some bad film',
    rating: 4,
  },
];

function showGoodFilms(arr) {
  return arr.filter((item) => item.rating >= 8);
}
console.log(showGoodFilms(films));

function showListOfFilms(arr) {
  return arr
    .map((item) => {
      return item.name;
    })
    .join(',');
}
console.log(showListOfFilms(films));

function setFilmsIds(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].id = i;
  }
  return arr;
}
console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every((item) => (item.id + 1 ? true : false));
}
console.log(checkFilms(tranformedArray));
// При срабатывании every на первом фильме он натыкается на id = 0;
// 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// Чтобы этого не происходило, создают всякие способы, например,
// превращение в строку

//
const funds = [
  //{amount: -1400},
  { amount: 2400 },
  //{amount: -1000},
  { amount: 500 },
  { amount: 10400 },
  //{amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
  return data.reduce((accum, item) => {
    if (item.amount > 0) {
      accum += item.amount;
    }
    return accum;
  }, 0);
};

const getTotalIncomeAmount = (data) => {
  let arr1 = data.some((item) => {
    if (item.amount < 0) return true;
  });
  if (arr1 === true) {
    return data.reduce((accum, item) => {
      accum += item.amount;
      return accum;
    }, 0);
  } else {
    return getPositiveIncomeAmount(data);
  }
};
console.log(getTotalIncomeAmount(funds));

// Рекурсия
function factorial(n) {
  if (typeof n !== 'number' || !Number.isInteger(n)) {
    return 'Ошибка, проверьте данные';
  }
  if (n === 1 || n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(3));

//92
function high(x) {
  let symbolsMap = {
    A: '1',
    B: '2',
    C: '3',
    D: '4',
    E: '5',
    F: '6',
    G: '7',
    H: '8',
    I: '9',
    J: '10',
    K: '11',
    L: '12',
    M: '13',
    N: '14',
    O: '15',
    P: '16',
    Q: '17',
    R: '18',
    S: '19',
    T: '20',
    U: '21',
    V: '22',
    W: '23',
    X: '24',
    Y: '25',
    Z: '26',
  };
  let arr = x.split(' ');
  let newArr = [];
  let numbers = 0;
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].replace(/./gi, ($0) => symbolsMap[$0.toUpperCase()] || $0));
  }
  return newArr;
}
console.log(high('man i need a taxi up to ubud'));

//93
function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % 3 === 0) {
      arr.push(i);
    }
    if (n % 5 === 0) {
      arr.push(i);
    }
    if (n % 3 === 0 && n % 5 === 0) {
      arr.push(i);
    }
  }
  //if (arr.length % 3 === 0) arr[arr.length - 1] = 'Fizz'
  //if (arr.length % 5 === 0) arr[arr.length - 1] = 'Buzz'
  //if (arr.length % 5 === 0 && arr.length % 3 === 0) arr[arr.length - 1] = 'FizzBuzz'
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) arr[i] = 'Fizz';
    if (arr[i] % 5 === 0) arr[i] = 'Buzz';
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) arr[i] = 'FizzBuzz';
  }
  if (arr.length === 1) return [];
  return arr;
}
console.log(fizzbuzz(15));

//94
//wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
function wave(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    }
    arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
  }
  return arr;
}
console.log(wave('hello'));

//Рекурсия
function deepCount(a) {
  let count = a.length;
  for (let i = 0; i < a.length; i++) {
    let element = a[i];
    if (Array.isArray(element)) {
      count += deepCount(element);
    }
  }
  return count;
}
console.log(deepCount([1, '5', 3, ['10']]));

//
/*39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
  999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
  4 --> 0 (because 4 is already a one-digit number) 
  2*3 => 6*/
function persistence(num) {
  let counter = 0;
  let arr = num.toString().split('');

  while (arr.length > 1) {
    //тут мы скажем пока вот это вот файнели не произойдет finally 1*2 = 2
    let results = 1;

    for (let i = 0; i < arr.length; i++) {
      results *= arr[i];
    }

    arr = results.toString().split(''); //вот на этот массив ориентируется цикл
    counter++;
  }
  return counter;
}
console.log(persistence(39));

//
function toLeetSpeak(str) {
  let obj = {
    A: '@',
    B: '8',
    C: '(',
    D: 'D',
    E: '3',
    F: 'F',
    G: '6',
    H: '#',
    I: '!',
    J: 'J',
    K: 'K',
    L: '1',
    M: 'M',
    N: 'N',
    O: '0',
    P: 'P',
    Q: 'Q',
    R: 'R',
    S: '$',
    T: '7',
    U: 'U',
    V: 'V',
    W: 'W',
    X: 'X',
    Y: 'Y',
    Z: '2',
    ' ': ' ', //это я дописал
  };
  let result = '';
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let key in obj) {
      if (key === arr[i]) {
        result += obj[key];
      }
    }
  }
  return result;
}
console.log(toLeetSpeak('HELLO WORLD'));

//
/*Современные римские цифры записываются путем выражения каждой десятичной цифры числа, которое нужно закодировать отдельно, начиная с самой левой цифры и пропуская любые 0. 
Таким образом, 1990 г. отображается как «MCMXC» (1000 = M, 900 = CM, 90 = XC), 
а 2008 г. отображается как «MMVIII» (2000 = MM, 8 = VIII). 
Римская цифра 1666 года, "MDCLXVI", использует каждую букву в порядке убывания. */
function solution(roman) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let minus = 0;
  let arr = roman.split('');

  for (let i = 0; i < arr.length; i++) {
    for (let key in obj) {
      if (key === arr[i]) {
        if (arr[i] === 'I' && arr[i + 1] === 'V') {
          minus += 2;
        }
        if (arr[i] === 'I' && arr[i + 1] === 'X') {
          minus += 2;
        }
        if (arr[i] === 'X' && arr[i + 1] === 'L') {
          minus += 20;
        }
        if (arr[i] === 'X' && arr[i + 1] === 'C') {
          minus += 20;
        }
        if (arr[i] === 'C' && arr[i + 1] === 'D') {
          minus += 200;
        }
        if (arr[i] === 'C' && arr[i + 1] === 'M') {
          minus += 200;
        }
        result += obj[key];
      }
    }
  }
  return result - minus;
}
console.log(solution('IV'));

//
/* s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears */
function isMerge(s, part1, part2) {
  let strS = s.split('').sort().join('');

  let strPart = part1.concat(part2).split('').sort().join('');

  if (strS === strPart) return true;

  return false;
}
console.log(isMerge('ruslan', 'rus', 'lan'));

//Обрати внимание что если подставить сюда не i а j то оно будет верх ногами по дебильному newArr.push(i+1)
function vowelIndices(word) {
  let arr = ['A', 'E', 'I', 'O', 'U', 'Y'];
  let arr1 = word.toUpperCase().split('');
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr1[i] === arr[j]) newArr.push(i + 1);
    }
  }

  return newArr;
}
console.log(vowelIndices('super'));

//
/*"the-stealth-warrior" gets converted to "theStealthWarrior"
  "The_Stealth_Warrior" gets converted to "TheStealthWarrior" */
function toCamelCase(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-' || arr[i] === '_') {
      let index = arr.indexOf(arr[i + 1]);
      arr[i] = arr[i + 1].toUpperCase();
      arr.splice(index, 1);
    }
  }
  return arr.join('');
}
console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));
console.log(toCamelCase('camel-case-word'));
console.log(toCamelCase('hamel-hase-word'));

//
/*"hello case".camelCase() => HelloCase
  "camel case word".camelCase() => CamelCaseWord */
function camelCase(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}
console.log(camelCase('hello case'));
console.log(camelCase('camel case word'));

//
//solution(1000); // should return 'M'
function solution(number) {
  var obj = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    result = '';

  for (let key in obj) {
    while (number >= obj[key]) {
      result += key;
      number -= obj[key];
    }
  }
  return result;
}
console.log(solution(1978));

//aba, then the result should be {'a': 2, 'b': 1}
function count(string) {
  return string.split('').reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}
console.log(count('aaBBccDDaabb'));

//
function findEvenIndex(arr) {
  let reverse = arr.reverse();
  let count = 0;
  let fir = 0;
  let sec = 0;

  while (fir >= sec) {
    for (let i = 0; i < arr.length; i++) {
      fir += arr[i];
    }
    for (let i = 0; i < reverse.length; i++) {
      sec += reverse[i];
    }
    count++;
  }

  return count;
}
console.log(findEvenIndex([1, 2, 3, 4, 6, 3, 2, 1]));

//
/* 16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6 *
   
     999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
     999 -> 9+9+9 -> 27 -> 9
*/
function digital_root(n) {
  if (n < 10) return n;
}
console.log(digital_root(999));

//
/*Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но с перевернутыми всеми словами из пяти или более букв (точно так же, как имя этого Ката). Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае, если присутствует более одного слова.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test" */
function spinWords(string) {
  let arr = string.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      // arr[i] = arr[i].replace(/(\S)(\S*)(\S)/g, '$3$2$1') Так перую и последнею букву поменяет местами
      arr[i] = arr[i].split('').reverse().join('');
    }
  }

  return arr.join(' ');
}
console.log(spinWords('Welcome'));

//Кство делителей
/*4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30) */
function getDivisorsCnt(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) arr.push(i);
  }
  return arr.length;
}
console.log(getDivisorsCnt(1));

//
/*Вам дан массив (который будет иметь длину не менее 3, но может быть очень большим), содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, за исключением одного целого числа N. Напишите метод, который принимает массив в качестве аргумента и возвращает этот «выброс» N. 
[2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)*/
function findOutlier(integers) {
  let odd = [];
  let even = [];
  for (let i = 0; i < integers.length; i++) {
    let item = integers[i];
    if (item % 2) odd.push(item); //нечетное
    if (item % 2 === 0) even.push(item); //четное
  }
  if (odd.length > even.length) return even[0];
  if (odd.length < even.length) return odd[0];
}
console.log(
  findOutlier([11911608, -60357762, -15752152, 164832364, -1939769, -181036734, 56527622])
);

//
/*timeMath('01:24:31', '+', '02:16:05') === '03:40:36'

timeMath('01:24:31', '-', '02:31:41') === '22:52:50' */
function timeMath(time1, op, time2) {}
console.log(timeMath('01:24:31', '+', '02:16:05'));

//
function comp(array1, array2) {
  if (!a1 || !a2 || a1.length !== a2.length) return false;
  let newArray = [];
  for (let i = 0; i < array2.length; i++) {
    let num = Math.sqrt(array2[i]);
    newArray.push(num);
  }
  let result = newArray.filter((i) => array1.includes(i));
  if (result.length === array1.length) {
    return true;
  } else {
    return false;
  }
}
console.log(
  comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])
);

//twoSum [1, 2, 3] 4 === (0, 2)
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j];
    }
  }
}
console.log(twoSum([1, 2, 3], 4));

//
var runLengthEncoding = function (str) {
  var myObj = {};
  let arr = str.split('');
  arr.forEach(function (a) {
    myObj[a] = myObj[a] + 1 || 1;
  });
  let arr1 = Object.entries(myObj);
  for (let i = 0; i < arr1.length; i++) {
    arr1[i].reverse();
  }
  return arr1;
};
console.log(runLengthEncoding('hello world!'));

function runLengthEncoding(str) {
  var arr = [],
    counter = 1;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      arr.push([counter, str[i]]);
      counter = 1;
    }
  }

  return arr;
}
console.log(runLengthEncoding('hello world!'));

//
/*Если n является целым числом, возвращает строку с тире "-" до и после каждого нечетного целого числа, но не начинается и не заканчивается строкой с тире. Если n отрицательно, то знак минус следует убрать.
Если n не является целым числом, вернуть пустое значение.
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5' */
function dashatize(num) {
  if (Number.isInteger(num) === false) return 'NaN';
  if (num < 0) {
    Number(num.toString().slice(1));
  }

  let arr = num.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 && arr[i - 1] % 2) {
      arr[i] = `${arr[i]}-`;
    }
    if (arr[i] % 2) {
      arr[i] = `-${arr[i]}-`;
    }
  }
  let newArr = arr.join('').split('');
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '-' && newArr[i + 1] === '-') {
      newArr[i] = '';
    }
  }
  let str = newArr.join('');
  let newStr = str;
  if (str.charAt(0) === '-') {
    newStr = str.slice(1);
  }
  let newStr1 = newStr;
  if (newStr.charAt(newStr.length - 1) === '-') {
    newStr1 = newStr.slice(0, -1);
  }

  return newStr1;
}
console.log(dashatize(11111));

//
function repeater(string, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += string;
  }
  return result;
}
console.log(repeater('a', 5));

//
/*1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 */
function narcissistic(value) {
  let arr = value.toString().split('');
  console.log(arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], arr.length);
  }
  if (sum === value) {
    return true;
  } else {
    return false;
  }
}
console.log(narcissistic(153));

/*| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      | */
function getIssuer(number) {
  let arr = number.toString().split('');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[0] == 3 && arr[1] == 4 && arr.length == 15) ||
      (arr[0] == 3 && arr[1] == 7 && arr.length == 15)
    ) {
      result = 'AMEX';
    } else if (arr[0] == 6 && arr[1] == 0 && arr[2] == 1 && arr[3] == 1) {
      result = 'Discover';
    } else if (
      (arr[0] == 5 && arr[1] == 1) ||
      (arr[0] == 5 && arr[1] == 2) ||
      (arr[0] == 5 && arr[1] == 3) ||
      (arr[0] == 5 && arr[1] == 4) ||
      (arr[0] == 5 && arr[1] == 5)
    ) {
      result = 'Mastercard';
    } else if ((arr[0] == 4 && arr.length == 13) || (arr[0] == 4 && arr.length == 16)) {
      result = 'VISA';
    } else {
      result = 'Unknown';
    }
  }
  return result;
}

//
/*
For n = 152, the output should be 52;

For n = 1001, the output should be 101. */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let itisnotabigdeal = (arr.slice(0, i) + arr.slice(i + 1)).split(',').join('') * 1;
    if (itisnotabigdeal > result) {
      result = itisnotabigdeal;
    }
  }
  return result;
}
console.log(deleteDigit(152));

//
/*Пит любит печь торты. У него есть рецепты и ингредиенты. К сожалению, он не силен в математике. Поможешь ему узнать, сколько тортов он сможет испечь, учитывая его рецепты?

Напишите функцию cakes(), которая принимает рецепт (объект) и доступные ингредиенты (тоже объект) и возвращает максимальное количество тортов, которые Пит может испечь (целое число). Для простоты нет единиц измерения количества (например, 1 фунт муки или 200 г сахара — это просто 1 или 200). Ингредиенты, отсутствующие в объектах, можно считать равными 0.

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); */
function cakes(recipe, available) {
  let arr = [];

  for (key1 in recipe) {
    if (!available[key1]) return 0; //ВОТ КАК НУЖНО БЫЛО ПРОВЕРИТЬ !
    for (key2 in available) {
      if (key1 === key2) {
        arr.push([recipe[key1], available[key2]]);
      }
    }
  }

  let res = [];
  arr.map((item) => {
    for (let i = 0; i < item.length; i++) {
      res.push(Math.floor(item[i + 1] / item[i]));
    }
  });

  let final = res
    .filter((item) => {
      if (item) return item;
    })
    .sort((a, b) => a - b);

  return final[0];
}
console.log(
  cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1000, sugar: 100, eggs: 5, milk: 200 })
);

const cakes = (needs, has) =>
  Math.min(...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0)));

//
/*Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False */
function scramble(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let res = [];

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) > 0) res.push(arr2[i]);
  }

  if (res.length + 1 === arr2.length) {
    return true;
  } else {
    return false;
  }
}
console.log(scramble('katas', 'steak'));

function scramble(str1, str2) {
  let occurences = str1.split('').reduce((arr, cur) => {
    arr[cur] ? arr[cur]++ : (arr[cur] = 1);
    return arr;
  }, {});
  console.log(occurences); //ЭТО БУДЕТ ОБЪЕКТ ГДЕ БУДЕТ ГОВОРИТСЯ СКОЛЬКО РАЗ КАЖДАЯ ЦИФРА ПОВТОРЯЕТСЯ
  return str2.split('').every((character) => --occurences[character] >= 0);
}
console.log(scramble('cedewaraaossoqqyt', 'codewars'));

//
/*input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15 */
function roundToNext5(n) {
  while (n % 5 !== 0) n++;
  return n;
}
console.log(roundToNext5(12)); //% 5 === 0

// !!!
/*
Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */
function sortArray(array) {
  let newArr = array.filter((item) => item % 2).sort((a, b) => a - b);
  let res = [];

  //1
  for (let i = 0, j = 0; i < array.length; i++) {
    if (array[i] % 2) {
      array[i] = newArr[j++];
    }
  }

  //2
  //array.forEach(item => item % 2 ? res.push(newArr.shift()): res.push(item))

  return array;
}
console.log(sortArray([5, 8, 6, 3, 4]));
//3
function sortArray(array) {
  const oddArr = [];
  const evenArr = [];
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      evenArr.push(array[i]);
    } else {
      oddArr.push(array[i]);
    }
  }
  oddArr.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      result.push(evenArr.shift());
    } else {
      result.push(oddArr.shift());
    }
  }
  return result;
}

/* !!!
Напишите функцию с именем first_non_repeating_letter, которая принимает на вход строку и возвращает первый символ, который нигде в строке не повторяется.

Например, если на вход введено «стресс», функция должна вернуть «t», так как буква t встречается в строке только один раз и встречается в строке первой.

В качестве дополнительной проблемы прописные и строчные буквы считаются одним и тем же символом, но функция должна возвращать правильный регистр для начальной буквы. Например, ввод «sTreSS» должен возвращать «T».

Если строка содержит все повторяющиеся символы, она должна возвращать пустую строку ("") или None — см. примеры тестов. */
function firstNonRepeatingLetter(s) {
  let arr = s.split('');
  let res = [];
  let final = [];

  arr.map((item) => {
    arr.includes(item.toUpperCase()) ? res.push(item.toUpperCase()) : res.push(item);
  });

  const countItems = res.reduce((acc, item) => {
    // ВАЖНО !!!
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});

  for (let key in countItems) {
    if (countItems[key] === 1) final.push(key);
  }

  return final[0] || '';
}
console.log(firstNonRepeatingLetter('sTreSS'));

function cockroachSpeed(s) {
  let km = 27_777_777_777_778;
  return Math.floor(km / s);
}
console.log(cockroachSpeed(1.08));

//
/*Хватит значит хватит!
Алиса и Боб были в отпуске. Они оба сделали много фотографий мест, где побывали, и теперь хотят показать Чарли всю свою коллекцию. Однако эти сеансы не нравятся Чарли, так как мотив обычно повторяется. Ему не нравится смотреть на Эйфелеву башню 40 раз.
Он говорит им, что будет сидеть на сеансе только в том случае, если они покажут один и тот же мотив не более N раз. К счастью, Алиса и Боб могут закодировать мотив как число. Можете ли вы помочь им удалить числа так, чтобы их список содержал каждое число только до N раз, не меняя порядок?
Учитывая список и число, создайте новый список, который содержит каждое число списка не более N раз без изменения порядка.
Например, если входное число равно 2, а входной список — [1,2,3,1,2,1,2,3], вы берете [1,2,3,1,2], отбрасываете следующий [ 1,2], поскольку это приведет к тому, что 1 и 2 будут в результате 3 раза, а затем взять 3, что приведет к [1,2,3,1,2,3].
Со списком [20,37,20,21] и числом 1 результатом будет [20,37,21]. */
function deleteNth(arr, x) {
  var cache = {};
  return arr.filter((item) => {
    cache[item] = (cache[item] || 0) + 1;
    return cache[item] <= x;
  });
}
console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)); //[1,2,3,1,2,3]
//array.forEach(item => item % 2 ? res.push(newArr.shift()): res.push(item))
function deleteNth1(arr, x) {
  const obj = {};
  return arr.filter((item) => (obj[item] = obj[item] + 1 || 1) <= x);
}
console.log(deleteNth1([1, 2, 3, 1, 2, 1, 2, 3], 2));

//
/*titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
  titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
  titleCase('the quick brown fox') // should return: 'The Quick Brown Fox' */
function titleCase(title, minorWords) {
  if (title.length === 0) {
    return '';
  }
  let res = [];
  let arr = title.toLowerCase().split(' ');
  let res1 = [];

  if (!minorWords) {
    arr.forEach((item) => {
      res.push(item[0].toUpperCase() + item.slice(1));
    });
    return res.join(' ');
  } else {
    let newArr = minorWords.toLowerCase().split(' ');

    arr.forEach((item) => {
      res.push(item[0].toUpperCase() + item.slice(1));
    });
    let firstWord = res.slice(0, 1);
    let finalArray = res.slice(1);
    for (let i = 0, j = 0; i < finalArray.length; i++) {
      if (newArr.includes(finalArray[i].toLowerCase())) {
        res1.push(finalArray[i].toLowerCase());
      } else {
        res1.push(finalArray[i]);
      }
    }
    let lastString = firstWord + ' ' + res1.join(' ');
    let lastArr = lastString.split('');
    let f = [];
    if (lastArr[lastArr.length - 1] === ' ') {
      for (let i = 0; i < lastArr.length; i++) {
        if (lastArr[i] !== ' ') f.push(lastArr[i]);
      }
      return f.join('');
    }

    return lastString;
  }
}
console.log(titleCase('the QUICK bRoWn fOX', 'xyz fox quick the')); //'The Wind in the Willows'

//
/*    * With input 'a'
 * Your function should return: ['a']
 * With input 'ab'
 * Your function should return ['ab', 'ba']
 * With input 'aabb'
 * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'] */

function permutations(str) {
  return str.length <= 1
    ? [str]
    : Array.from(
        new Set(
          str
            .split('')
            .map((char, i) =>
              permutations(str.substr(0, i) + str.substr(i + 1)).map((p) => char + p)
            )
            .reduce((r, x) => r.concat(x), [])
        )
      );
}
console.log(permutations('aabb'));

function dontGiveMeFive(start, end) {
  let res = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes('5')) res.push(i); //includes работает со страками
  }
  return res.length;
}
console.log(dontGiveMeFive(4, 17));

//
/*[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]
  [4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8] */
function incrementer(nums) {
  if (nums.length === 0) return [];
  let sum = [];
  nums.forEach((item, i) => {
    sum.push(item + i + 1);
  });

  let lessThen10 = [];
  sum.forEach((item) => {
    if (item >= 10) {
      lessThen10.push(item);
    }
  });
  for (let i = 0; i < lessThen10.length; i++) {
    if (lessThen10[i] < 20) {
      lessThen10[i] = lessThen10[i] - 10;
    }
    if (lessThen10[i] < 30 && lessThen10[i] >= 20) {
      lessThen10[i] = lessThen10[i] - 20;
    }
    if (lessThen10[i] < 40 && lessThen10[i] >= 30) {
      lessThen10[i] = lessThen10[i] - 30;
    }
  }
  let arrWithout10 = [];
  for (let i = 0; i < sum.length; i++) {
    sum[i] < 10 ? arrWithout10.push(sum[i]) : arrWithout10.push(lessThen10.shift());
  }
  return arrWithout10;
}
console.log(incrementer([8, 1, 1, 4, 6, 3, 2, 2, 4, 5, 2, 9, 6, 7, 7, 2, 3]));

//
/*2,2,2 --> 2
  2,6,2 --> 12 (2 + 4 + 6)
  1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
  1,5,3  --> 5 (1 + 4) */
const sequenceSum = (begin, end, step) => {
  var sum = 0;
  for (var i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};
console.log(sequenceSum(1, 5, 3));

//
function printerError(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] > 'm') {
      count++;
    }
  }
  return count + '/' + s.length;
}
console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));

console.log('a' > 'm');

//
function amountOfPages(summary) {
  let arr = [];
  for (let i = 1; i <= summary; i++) {
    arr.push(i);
  }
  let newArr = arr
    .join(',')
    .split('')
    .filter((item) => item !== ',');
  let finish = [];
  for (let i = 0; i < summary; i++) {
    finish.push(newArr[i]);
  }
  return finish.join('');
}
console.log(amountOfPages(25));
function amountOfPages(summary) {
  if (summary <= 9) return summary;
  var count = 0;
  var res = 0;
  for (let i = 1; i < summary; i++) {
    count += i.toString().length;
    if (count == summary) res = i;
  }
  return res;
}
console.log(amountOfPages(25));

/*uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
  uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
  uniqueInOrder([1,2,2,3,3])       == [1,2,3] */
var uniqueInOrder = function (iterable) {
  let res = [];
  if (typeof iterable === 'string') {
    let arr = iterable.split('');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1]) res.push(arr[i]);
    }
  } else {
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i + 1]) res.push(iterable[i]);
    }
  }

  return res;
};
console.log(uniqueInOrder('ABBCcAD'));

//
function solution(input, markers) {}
console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']));
//// result should == "apples, pears\ngrapes\nbananas"
/*apples, pears # and bananas
  grapes
  bananas !apples */

//
function dataReverse(data) {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
}
console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0,
  ])
);

/*Examples of valid inputs:
  1.2.3.4
  123.45.67.89
  Invalid input examples:
  1.2.3
  1.2.3.4.5
  123.456.78.90
  123.045.067.089 */
function isValidIP(str) {
  let arr = str.split('.');
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element[0] === '0' && element[1]) {
      element = 256;
    }
    if (element <= 255 && element >= 1) {
      res.push(element);
    }
  }
  if (res.length === 4) {
    return true;
  } else {
    return false;
  }
}
console.log(isValidIP('123.045.067.089'));

//
function sumStrings(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(sumStrings('63829983432984289347293874', '90938498237058927340892374089'));

//
const binaryArrayToNumber = (arr) => {
  let sum = 0;
  if (arr[0] === 1) sum += 9;
  if (arr[1] === 1) sum += 5;
  if (arr[2] === 1) sum += 2;
  if (arr[3] === 1) sum += 1;
  if (arr[4] === 1) sum += 7;
  return sum;
};
console.log(binaryArrayToNumber([0, 0, 1, 0, 0]));

//
function sumTwoSmallestNumbers(numbers) {
  let arr = numbers.sort((a, b) => a - b);
  let r = arr.reduce((accum, item) => {
    if (item > 0) {
      accum.push(item);
    }
    return accum;
  }, []);
  return Number(r[0] + r[1]);
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, -4, -10, 77]));

/*solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase. */
function solve(s) {
  let arr = s.split('');
  let lower = [];
  let upper = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toLowerCase()) lower.push(arr[i]);
    if (arr[i] === arr[i].toUpperCase()) upper.push(arr[i]);
  }
  if (lower.length >= upper.length) return arr.join('').toLowerCase();
  if (lower.length < upper.length) return arr.join('').toUpperCase();
}
console.log(solve('coDE'));

//
function findSum(n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) res += i;
  }
  return res;
}
console.log(findSum(5));

//
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(['aaaaa', 'bbb', 's', 'ss', 'sss', 'ssss']));

//
function isEven(num) {
  return num % 2 === 0;
}
var seq = [2, 4, 6, 8, 1, 2, 5, 4, 3, 2];

//takeWhile(seq, isEven) // -> [2,4,6,8]
function takeWhile(arr, pred) {
  for (var res = [], i = 0; i < arr.length; i++) {
    if (!pred(arr[i])) break;
    res.push(arr[i]);
  }

  return res;
}
console.log(takeWhile(seq, isEven));

//Первый массив - пока элементы попадали под условие isEven, второй все что после первой ошибки
function isEven(x) {
  return Math.abs(x) % 2 === 0;
}
var arr = [2, 4, 6, 1, 8, 10, 2];
function span(arr, predicate) {
  let res = [];
  let rest = [];
  for (let i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) break;
    res.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== res[i]) rest.push(arr[i]);
  }

  return [res, rest];
}
console.log(span(arr, isEven));

function span(arr, predicate) {
  for (var i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) break;
  }

  return [
    arr.slice(0, i), // смотри как можно массив на две части красиво разделить
    arr.slice(i),
  ];
}

// Вернуть то что в рест
function dropWhile(arr, pred) {}

/*a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
  a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  mxdiflg(a1, a2) --> 13 */
function mxdiflg(a1, a2) {
  if (a1.length === 0 && a2.length === 0) return -1;
  a1.sort((a, b) => a.length - b.length);
  a2.sort((a, b) => a.length - b.length);
  if (a2[a2.length - 1].length > a1[a1.length - 1].length) {
    return a2[a2.length - 1].length - a1[0].length;
  } else {
    return a1[a1.length - 1].length - a2[0].length;
  }
}
console.log(
  mxdiflg(
    [
      'hoqq',
      'bbllkw',
      'cccooommaaqqoxiiasdadoox',
      'ejjuyyy',
      'plmiis',
      'xxxzgpsssa',
      'xxwwkktt',
      'znnnnfqknaz',
      'qqquuhii',
      'dvvvwz',
    ],
    ['oox', 'cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
  )
);

//
/*john(11)  -->  [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]
  ann(6)    -->  [1, 1, 2, 2, 3, 3]

  sum_john(75)  -->  1720
  sum_ann(150)  -->  6930 */
function john(n) {}
function ann(n) {}

function sumJohn(n) {}

function sumAnn(n) {}

//
function orderWeight(strng) {
  // your code
}

//
/*
apples, pears # and bananas
grapes
bananas !apples 
*/
function solution(input, markers) {
  let arr = input.split('\n').join(' ').split(' ');
  let markersIndex = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < markers.length; j++) {
      if (arr[i].includes(markers[j])) {
        markersIndex.push(i);
      }
    }
  }
  arr.splice(markersIndex[1], 1);
  arr.splice(markersIndex[0], 3);

  let noNarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(',')) {
      noNarr.push(arr[i]);
      arr.splice(i, 1);
    }
  }
  let str = noNarr.join('') + ' ';
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    res += `\n${arr[i]}`;
  }

  return str + res;
}
console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']));
//var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
function solution(input, markers) {
  var lines = input.split('\n');
  for (var i = 0; i < lines.length; ++i)
    for (var j = 0; j < markers.length; ++j) lines[i] = lines[i].split(markers[j])[0].trim();
  return lines.join('\n');
}

//
function isZero(num) {
  return num === '0';
}
function zeros(n) {
  let sum = 1;

  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  let b = BigInt(sum).toString();
  let array = b.split('').reverse();
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (!isZero(array[i])) break;
    res.push(array[i]);
  }
  return res.length;
}
console.log(zeros(5));

//
var findDigit = function (num, nth) {
  let number = Math.abs(num);
  if (nth <= 0) return -1;
  let arr = number.toString().split('').reverse();
  let n = arr[nth - 1];
  if (n) {
    return Number(n);
  } else {
    return 0;
  }
};
console.log(findDigit(5673, 5));

//
function pieChart(str) {
  let objJS = JSON.parse(str);
  let valueSum = 0;
  for (let key in objJS) {
    valueSum += objJS[key];
  }
  for (let key in objJS) {
    let res = (objJS[key] * 360) / valueSum;
    objJS[key] = res.toFixed(2);
  }
  let json = JSON.stringify(objJS);
  return json;
}
console.log(pieChart({ English: 4, Polish: 12, Russian: 10, Spanish: 2 }));

/* !!!
stringExpansion('3D2a5d2f') === 'DDDaadddddff'
stringExpansion('3abc') === 'aaabbbccc'      // correct
stringExpansion('3abc') !== 'aaabc'          // wrong
stringExpansion('3abc') !== 'abcabcabc'      // wrong
If there are two consecutive numeric characters the first one is ignored.

stringExpansion('3d332f2a') === 'dddffaa'  */
function stringExpansion(s) {
  if (s === '') return '';
  let arr = [];
  for (let i of s) {
    if (Number(i)) arr.push(Number(i));
    else arr.push(i);
  }
  let indexArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && typeof arr[i + 1] === 'number') {
      indexArr.push(i);
    }
    if (arr[i] === 0) {
      indexArr.push(i);
    }
  }
  for (let i = indexArr.length - 1; i >= 0; i--) {
    // ВАЖНО
    arr.splice(indexArr[i], 1);
  }
  let result = '';
  let numberOfTimes;

  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i])) numberOfTimes = Number(arr[i]); // ВАЖНО
    else result += arr[i].repeat(numberOfTimes); // ВАЖНО
  }

  return result;
}
console.log(stringExpansion('03abc2bd'));

//
/*"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1" */
function toUnderscore(string) {
  if (typeof string !== 'string') return string.toString();
  let arr = string.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase() && arr[i] !== arr[0] && !Number(arr[i])) {
      arr[i] = '_' + arr[i];
    }
  }

  return arr.join('').toLowerCase();
}
console.log(toUnderscore('TestController'));
//.join('').toLowerCase()

//
function specialNumber(n) {
  let res = '';
  let arr = n.toString().split('');
  let a = arr.every((item) => {
    if (item <= 5) {
      return true;
    } else {
      return false;
    }
  });
  if (a) {
    res = 'Special!!';
  } else {
    res = 'NOT!!';
  }
  return res;
}
console.log(specialNumber(23));

//
/*anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
  anagrams('laser', ['lazing', 'lazy',  'lacer']) */
function anagrams(word, words) {
  let arr = word.split('');
  arr.sort();
  let res = [];
  for (let i = 0; i < words.length; i++) {
    let sorted = words[i].split('').sort();
    res.push(sorted);
  }
  let index = [];
  for (let i = 0; i < res.length; i++) {
    if (res[i].join('') == arr.join('')) {
      index.push(i);
    }
  }
  let final = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < index.length; j++) {
      if (i === index[j]) {
        final.push(words[i]);
      }
    }
  }
  return final;
}
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));

for (let i = 0; i < words.length; i++) {
  for (let j = 0; j < index.length; j++) {
    if (i === index[j]) {
      final.push(words[i]);
    }
  }
}

//
function maxDiff(list) {
  list.sort((a, b) => a - b);
  let res = list[list.length - 1] - list[0];
  return res;
}
console.log(maxDiff([1, 2, 3, -4]));

//
var countBits = function (n) {
  let obj = {
    '0000': 0,
    '0001': 1,
    '0010': 2,
    '0011': 3,
    '0100': 4,
    '0101': 5,
    '0110': 6,
    '0111': 7,
    1000: 8,
    1001: 9,
  };
  let finalArr = [];
  let arrN = n.toString().split('');
  for (let i = 0; i < arrN.length; i++) {
    for (let key in obj) {
      if (obj[key] == arrN[i]) {
        finalArr.push(key);
      }
    }
  }
  return finalArr
    .join('')
    .split('')
    .filter((i) => i === '1').length;
};
console.log(countBits(660018));

let str = 1234;
const base = str.toString().split('');
console.log(base);

//
/*
Не менее шести символов 
содержит строчную букву 
содержит заглавную букву 
содержит число
Действительные пароли могут состоять только из буквенно-цифровых символов. */
function validate(password) {
  return /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}/.test(password);
}
console.log(validate('duaaaaaA'));

//
function numberOfPairs(gloves) {
  gloves.sort();
  let res = [];
  for (let i = 0; i < gloves.length; i++) {
    if (gloves[i] === gloves[i + 1]) {
      gloves.splice(gloves[i], 1);
      res.push(gloves[i]);
    }
  }
  return res.length;
}
console.log(numberOfPairs(['red', 'green', 'red', 'blue', 'blue']));
//result = 2 (1 red pair + 1 blue pair)

/*
number=13013 has factors 
[1,7,11,13,13013]

minDistance(number) return 2 //13-11 */
function minDistance(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      res.push(i);
    }
  }
  let arr = [];
  for (let i = 0; i < res.length; i++) {
    let result = res[i + 1] - res[i];
    arr.push(result);
  }
  let newArr = arr
    .sort((a, b) => a - b)
    .filter((item) => {
      if (typeof item === 'number') {
        return item;
      }
    });
  return newArr[0];
}
console.log(minDistance(4));

//
const cheerio = require('cheerio');
const { slice } = require('core-js/library/js/array');
const { indexOf } = require('core-js/core/array');
const { log } = require('console');
const URL = 'https://www.codewars.com/users/leaderboard';

async function solution() {
  const res = await fetch(URL, {});
}
console.log(solution());

//
function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}
console.log(arrayDiff([1, 2, 2], [2]));
//arrayDiff([1,2,2,2,3],[2]) == [1,3]

function swap(string) {
  let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let strArr = string.split('');
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (strArr[i] === arr[j]) {
        strArr[i] = strArr[i].toUpperCase();
      }
    }
  }
  return strArr.join('');
}
console.log(swap('Hello World!'));

//
/*tankvol(40,120,3500) should return 1021 (calculation gives about: 1021.26992027)
  tankvol(60,120,3500) should return 1750
  tankvol(80,120,3500) should return 2478 */
function tankvol(h, d, vt) {
  let r = d / 2;
  let w = vt / (r * r * Math.PI);
  let a = r * r * Math.acos(1 - h / r) - (r - h) * Math.sqrt(2 * r * h - h * h);

  return (w * a) | 0;
}
console.log(tankvol(40, 120, 3500));

//
function breakChocolate(n, m) {
  if (typeof n !== 'number' || n === 0 || typeof m !== 'number') return 0;
  let sum = n * m - 1;
  return sum;
}
console.log(breakChocolate(3, 1));

//
function combine(...args) {
  var obj = {};

  for (var i = 0; i < args.length; i++) {
    for (var key in args[i]) {
      obj[key] = obj[key] ? obj[key] + args[i][key] : args[i][key]; //ВАЖНО , смотри как он спрашивает равны ли ключи у двух Объектов obj[key] = obj[key]
      //Так же смотри как он обращается к ключу args[i][key], args-массив с объектами, args[i]-перебираемый объект, args[i][key]-его ключ
    }
  }

  return obj;
}
console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }));
// // Returns { a: 13, b: 20, c: 36, d: 3 }

//
/*encrypt("012345", 1)  =>  "135024"
  encrypt("012345", 2)  =>  "135024"  ->  "304152"
  encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

  encrypt("01234", 1)  =>  "13024"
  encrypt("01234", 2)  =>  "13024"  ->  "32104"
  encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314" */
function encrypt(text, n) {}

function decrypt(encryptedText, n) {}

//
function scrollingText(text) {
  text = text.toUpperCase();

  return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
}
console.log(scrollingText('codewars'));

//
/* Для заданной строки s найдите символ c (или C) с самым длинным последовательным повторением и вернитесь:
    [c, l]
    где l (или L) — длина повторения. Если есть два или более символов с одинаковым l, вернуть первый в порядке появления. */
function longestRepetition(s) {
  let last = '';
  let lastCount = 0;
  let max = [last, lastCount];
  for (const c of s) {
    //обрати внимание что здесь of ВАЖНО
    if (c == last) {
      ++lastCount;
    } else {
      last = c;
      lastCount = 1;
    }
    if (max[1] < lastCount) max = [last, lastCount];
  }
  return max;
}
console.log(longestRepetition('aabbcc3333cccaaaaa'));

//
function bingo(a) {
  let arr = [2, 9, 14, 7, 15];
  arr.sort((a, b) => a - b);
  let res = [];
  let uniqueArray = a.filter(function (item, pos) {
    return a.indexOf(item) == pos;
  });
  for (let i = 0; i < uniqueArray.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (uniqueArray[i] === arr[j]) {
        res.push(uniqueArray[i]);
      }
    }
  }
  res.sort((a, b) => a - b);

  if (arr.join('') === res.join('')) {
    return 'WIN';
  } else {
    return 'LOSE';
  }
}
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]));

/*
For example:
13:00 = one o'clock 
13:09 = nine minutes past one 
13:15 = quarter past one 
13:29 = twenty nine minutes past one
13:30 = half past one 
13:31 = twenty nine minutes to two
13:45 = quarter to two 
00:48 = twelve minutes to one
00:08 = eight minutes past midnight
12:00 = twelve o'clock
00:00 = midnight

Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'.  */
function solve(time) {}
console.log(solve('13:00'));

//your function should return Victoria, Puerto Rico.
var list1 = [
  {
    firstName: 'Mark',
    lastName: 'G.',
    country: 'Scotland',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript',
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 30,
    language: 'Python',
  },
  {
    firstName: 'Emma',
    lastName: 'B.',
    country: 'Norway',
    continent: 'Europe',
    age: 19,
    language: 'Clojure',
  },
];
function getFirstPython(list) {
  let a = list.find((v) => v.language === 'Python');
  return a ? `${a.firstName}, ${a.country}` : 'There will be no Python developers';
}
console.log(getFirstPython(list1));

/*
Ваша задача вернуть:
true, если все следующие континенты/географические зоны будут представлены хотя бы одним разработчиком: «Африка», «Америка», «Азия», «Европа», «Океания».
ваша функция должна возвращать true, так как есть хотя бы один разработчик из необходимых 5 географических зон.
ложно в противном случае.
Входной массив и имена континентов всегда будут действительными и отформатированы, как в приведенном выше списке, например, «Африка» всегда будет начинаться с буквы «А» в верхнем регистре. */
let list1 = [
  {
    firstName: 'Mark',
    lastName: 'G.',
    country: 'Scotland',
    continent: 'Americas',
    age: 22,
    language: 'JavaScript',
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Asia',
    age: 30,
    language: 'Clojure',
  },
  {
    firstName: 'Emma',
    lastName: 'B.',
    country: 'Norway',
    continent: 'Africa',
    age: 19,
    language: 'Clojure',
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Oceania',
    age: 30,
    language: 'Clojure',
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Oceania',
    age: 30,
    language: 'Clojure',
  },
];
function allContinents(list) {
  let res = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].continent === 'Americas') res.push('Americas');
    if (list[i].continent === 'Asia') res.push('Asia');
    if (list[i].continent === 'Africa') res.push('Africa');
    if (list[i].continent === 'Oceania') res.push('Oceania');
    if (list[i].continent === 'Europe') res.push('Europe');
  }
  let a = [...new Set(res)];
  if (a.length === 5) return true;
  return false;
}
console.log(allContinents(list1));

//
var trueIfEven = function (value, index) {
  return value % 2 === 0;
}; //3 индекс
var findInArray = function (array, iterator) {
  return array.findIndex(iterator);
};
console.log(findInArray([1, 3, 5, 6, 7], trueIfEven));

//
function findUnique(numbers) {
  numbers.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i + 1] && numbers[i] !== numbers[i - 1]) res.push(numbers[i]);
  }
  return res[0];
}
console.log(findUnique([1, 8, 4, 4, 6, 1, 8]));

//
function hamming(a, b) {
  let arr = a.split(' ').join('').split('');
  let arr2 = b.split(' ').join('').split('');
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) {
      res++;
    }
  }
  return res;
}
console.log(hamming('I like turtles', 'I like turkeys'));

function hamming(a, b) {
  let count = 0;
  for (let i = 0; i < b.length; i++) {
    if (a.split('')[i] != b.split('')[i]) count++;
  }
  return count;
}
console.log(hamming('I like turtles', 'I like turkeys'));

//
function dup(s) {
  let res = [];
  let arr = s.join(',').split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) res.push(arr[i]);
  }
  let finishArr = res.join('').split(',');
  return finishArr;
}
console.log(dup(['abracadabra', 'allotttee', 'assessee']));
// = ["abracadabra","alote","asese"]

//
var isAnagram = function (test, original) {
  let testArr = test.toLowerCase().split('').sort();
  let originalTest = original.toLowerCase().split('').sort();
  if (testArr.join('') === originalTest.join('')) return true;
  return false;
};
console.log(isAnagram('Twoo', 'WooT'));

//
/*var addOne = function(e) {
    return e + 1;
};

var square = function(e) {
    return e * e;
};

var result = [1,2,3,4,5].map(addOne.pipe(square))  */
// just a small amount of possible functions to start testing with.
var addOne = function (e) {
  return e + 1;
};
var square = function (e) {
  return e * e;
};

// Расширяем прототип функции с помощью конвейера методов Extend the Function prototype with a method pipe
Function.prototype.pipe = function (fn) {
  return (...args) => fn(this(...args));
};
var resultPipe = [1, 2, 3, 4, 5].map(addOne.pipe(square));
console.log(resultPipe);

Function.prototype.pipe = function (fun) {
  return function (param) {
    return fun(this(param));
  }.bind(this);
};

Function.prototype.pipe = function (f) {
  return function (a) {
    return f(this(a));
  }.bind(this);
};

/*
declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
 */
function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker;
}
console.log(declareWinner(Fighter('Lew', 10, 2), Fighter('Harry', 5, 4), 'Lew'));

/*
Примеры:
minUmbrellas(["rainy", "clear", "rainy", "cloudy"])
должен вернуть 2

Потому что в первое утро ему нужен зонтик, и он оставляет его на работе. Итак, на второе утро ему нужен второй зонт.

minUmbrellas(["sunny", "windy", "sunny", "clear"])
должен вернуть 0

Потому что дождя нет вообще

minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"])
должен вернуть 1

Потому что ему нужен только 1 зонт, который он берет с собой в каждое путешествие.*/
function minUmbrellas(weather) {
  let home = 0;
  let office = 0;

  for (let i = 0; i < weather.length; i++) {
    if (['thunderstorms', 'rainy'].includes(weather[i])) {
      if (i % 2) {
        if (home) home--;
        office++;
      } else {
        if (office) office--;
        home++;
      }
    }
  }
  return home + office;
}
console.log(minUmbrellas(['rainy', 'clear', 'thunderstorms', 'cloudy']));

/*
Учитывая неполный класс, представляющий связанный список объектов Node, LList, расширьте LList, реализовав средства итерации по этому списку, используя цикл for...of.

Узлы связанного списка представлены в виде объектов со значением и следующим свойством. Выдайте свойство value в цикле.

Классы Node и LList показаны ниже: */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}
//Usage Example
let lList = new LList();
lList.push(new Node(37));
lList.push(new Node(65));
lList.push(new Node(4));

let arr = [];
for (let i = 0; i < lList.length; i++) {
  arr.push(lList[i]);
}
console.log(lList); // [37, 65, 4]

//
var recoverSecret = function (triplets) {
  let arr = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's'],
  ];
};

//
function pitchClass(note) {
  if (!note) return null;
  let obj = {
    C: 0,
    D: 2,
    E: 4,
    F: 5,
    G: 7,
    A: 9,
    B: 11,
    '#': 1,
    b: -1,
  };
  let res = 0;
  for (let i = 0; i < note.length; i++) {
    for (let key in obj) {
      if (note[i] === key) res += obj[key];
    }
  }

  return res;
}
console.log(pitchClass('D#'));

//
var list1 = [
  {
    firstName: 'Oliver',
    lastName: 'Q.',
    country: 'Australia',
    continent: 'Oceania',
    age: 19,
    language: 'JavaScript',
  },
  {
    firstName: 'Lukas',
    lastName: 'R.',
    country: 'Austria',
    continent: 'Europe',
    age: 89,
    language: 'JavaScript',
  },
];
function countDevelopers(list) {
  let res = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') res += 1;
  }
  return res;
}
console.log(countDevelopers(list1));

//
function toWeirdCase(string) {
  return string
    .split(' ')
    .map(function (word) {
      return word
        .split('')
        .map(function (letter, index) {
          return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}
console.log(toWeirdCase('Weird string case'));

//
function isPrime(n) {
  if (n === 0) return false;
  if (n === 1) return false;
  let res = [];
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      res.push(i);
    }
  }
  if (res.length > 0) {
    return false;
  } else {
    return true;
  }
}
console.log(isPrime(12));

/*
Итак, теперь ваша задача состоит в том, чтобы написать функцию antiOptimizeAsync, которая принимает задачу с одним параметром task(функцию) и немедленно возвращает промис, который преобразуется в возвращаемое значение задачи() только через не менее 11 секунд (и не более 12 секунд) после вызывается antiOptimizeAsync.

Как и в случае с ката Voile, задача всегда будет произвольной функцией, которая может выполняться в течение любой продолжительности от 0 до 10 секунд. */
function hello() {
  return console.log('Hello 11seconds');
}
async function antiOptimizeAsync(task) {
  const promise = await new Promise((resolve) => setTimeout(resolve, 2000));
  return task();
}
console.log(antiOptimizeAsync(hello));

//
function bonusTime(salary, bonus) {
  let res = '';
  let count = salary * 10;
  bonus ? (res = `£${count}`) : (res = `£${salary}`);
  return res;
}

//
function findDifference(a, b) {
  let count1 = a.reduce((accum, item) => {
    accum *= item;
    return accum;
  }, 1);
  let count2 = b.reduce((accum, item) => {
    accum *= item;
    return accum;
  }, 1);
  if (count1 > count2) {
    return count1 - count2;
  } else {
    return count2 - count1;
  }
}
console.log(findDifference([2, 2, 3], [5, 4, 1]));

function shortcut(string) {
  let arr = string.split('');
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 'a' && arr[i] !== 'o' && arr[i] !== 'e' && arr[i] !== 'u' && arr[i] !== 'i') {
      res.push(arr[i]);
    }
  }
  return res.join('');
}
console.log(shortcut('HELLO'));

//
/*{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
  {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
  {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []  */
function myLanguages(results) {
  let res = [];
  let keysSorted = Object.keys(results).sort(function (a, b) {
    return results[b] - results[a];
  });

  for (let key in results) {
    if (results[key] >= 60) res.push(key);
  }
  let res2 = [];
  for (let i = 0; i < keysSorted.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (keysSorted[i] === res[j]) {
        res2.push(keysSorted[i]);
      }
    }
  }
  return res2;
}
console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65, Dutch: 93 }));

/*
8  -> 0
9  -> 1
10 -> 1
98 -> 18
100 -> 20 */
function number9(n) {
  let count = 0;
  if (n < 9) return 0;
  let res = [];
  for (let i = 1; i <= n; i++) {
    res.push(i);
  }
  let joinArr = res.join('').split('');
  for (let i = 0; i < joinArr.length; i++) {
    if (joinArr[i] === '9') count++;
  }
  return count;
}
console.log(number9(98));

/*
"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space 
"   space WALK   " => "   Space Walk   "  */
function dropCap(n) {
  let arr = n.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 3) {
      arr[i] = arr[i].toLowerCase();
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }
  return arr.join(' ');
}
console.log(dropCap('appLe of banana'));

//
function removeUrlAnchor(url) {
  let arr = url.split('');
  if (arr.indexOf('#') === -1) return url;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '#') {
      arr.splice(i);
    }
  }

  return arr.join('');
}
console.log(removeUrlAnchor('www.codewars.com#page=1'));

//
function stringy(size) {
  let count = [];
  for (let i = 1; i <= size; i++) {
    if (i % 2 !== 0) count.push(1);
    count.push(0);
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] === count[i + 1]) count.splice(i, 1);
  }
  if (count.length < 11) return count.join('');
  let arr = count.slice(0, -1);
  return arr.join('');
}
console.log(stringy(6));

//
function findNb(m) {
  let n = Math.sqrt(m) - 1;
  return Math.sqrt(n);
}
console.log(findNb(1071225));

/*checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0 */
function checkExam(array1, array2) {
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) count += 4;
    if (array1[i] !== array2[i]) count -= 1;
  }
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] === '') count += 1;
  }
  if (count < 0) return 0;
  return count;
}
console.log(checkExam(['c', 'a', 'c', 'b', 'c'], ['a', 'a', 'b', '']));

/*
    Three 1's => 1000 points
    Three 6's =>  600 points
    Three 5's =>  500 points
    Three 4's =>  400 points
    Three 3's =>  300 points
    Three 2's =>  200 points
    One   1   =>  100 points
    One   5   =>   50 point 
    
      Throw       Score
    ---------   ------------------
    5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
    1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
    2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)*/

function score(dice) {
  let count = 0;
  dice.sort((a, b) => a - b);
  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === dice[i + 1] && dice[i] === dice[i + 2] && dice[i] === 1) {
      count += 1000;
      dice.splice(i, 3);
    }
    if (dice[i] === dice[i + 1] && dice[i] === dice[i + 2] && dice[i] === 6) {
      count += 600;
      dice.splice(i, 3);
    }
    if (dice[i] === dice[i + 1] && dice[i] === dice[i + 2] && dice[i] === 5) {
      count += 500;
      dice.splice(i, 3);
    }
    if (dice[i] === dice[i + 1] && dice[i] === dice[i + 2] && dice[i] === 4) {
      count += 400;
      dice.splice(i, 3);
    }
    if (dice[i] === dice[i + 1] && dice[i] === dice[i + 2] && dice[i] === 3) {
      count += 300;
      dice.splice(i, 3);
    }
    if (dice[i] === dice[i + 1] && dice[i] === dice[i + 2] && dice[i] === 2) {
      count += 200;
      dice.splice(i, 3);
    }
  }

  for (let i = 0; i < dice.length; i++) {
    if (dice[i] === 1) count += 100;
    if (dice[i] === 5) count += 50;
  }
  return count;
}
console.log(score([2, 4, 4, 5, 4]));

/*
Input: [1,2,3,4,5], output= [2,3,4,5]
Input: [5,3,2,1,4], output = [5,3,2,4]
Input: [2,2,1,2,1], output = [2,2,2,1] */
function removeSmallest(numbers) {
  let sorted = [...numbers].sort((a, b) => b - a).pop();

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === sorted) {
      numbers.splice(i, 1);
      break;
    }
  }

  return numbers;
}
console.log(removeSmallest([5, 3, 2, 1, 1]));

//
function reverseLetter(str) {
  let replaced = str.replace(/[^a-z]/g, '');
  let arr = replaced.split('').reverse().join('');
  return arr;
}
console.log(reverseLetter('ultr53o?n'));

/*
	solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
	// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20" 
*/
function solution(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(list[i].toString());
    if (i === list.length - 1) break;

    let e1 = list[i];
    let e2 = list[i + 1];
    let isRange = false;

    while (e2 - e1 === 1 && i < list.length - 1) {
      i++;
      e1 = list[i];
      e2 = list[i + 1];
      isRange = true;
    }

    if (isRange) {
      result[result.length - 1] += '-' + list[i].toString();
    }
  }
  return result.toString();
}
console.log(
  solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])
);

/*ROT13 — это простой шифр с заменой букв, который заменяет букву буквой через 13 букв после нее в алфавите. ROT13 является примером шифра Цезаря.

Создайте функцию, которая принимает строку и возвращает строку, зашифрованную с помощью Rot13. Если в строку включены числа или специальные символы, они должны быть возвращены как есть. Сдвинуты должны быть только буквы латинского/английского алфавита, как в оригинальной "реализации" Rot13. */
function rot13(str) {
  var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var index = (x) => input.indexOf(x);
  var translate = (x) => (index(x) > -1 ? output[index(x)] : x);
  return str.split('').map(translate).join('');
}
console.log(rot13('Masha')); //[ 82, 79, 84, 49, 51 ]
// 97-122

//
function Event() {
  this.handlers = [];
}

Event.prototype.subscribe = function (handler) {
  this.handlers.push(handler);
};

Event.prototype.unsubscribe = function (handler) {
  var index = this.handlers.indexOf(handler);

  if (-1 !== handler) {
    this.handlers.splice(index, 1);
  }
};

Event.prototype.emit = function () {
  let args = arguments;
  this.handlers.forEach(function (handler) {
    handler.apply(null, args);
  });
};
class Event {
  constructor() {
    this.subscribers = new Set();
  }

  subscribe(func) {
    this.subscribers.add(func);
  }

  unsubscribe(func) {
    this.subscribers.delete(func);
  }

  emit(...args) {
    this.subscribers.forEach((s) => s(...args));
  }
}

//
function addArrays(array1, array2) {
  if (array1.length === 0 && array2.length === 0) return [];
  let arrayToNumber1 = parseInt(array1.join(''));
  let arrayToNumber2 = parseInt(array2.join(''));
  let res = arrayToNumber1 + arrayToNumber2;
  let a = res.toString().split('');
  let res2 = [];
  for (let i = 0; i < a.length; i++) {
    res2.push(Number(a[i]));
  }
  if (res2.includes(NaN)) {
    res2.splice(0, 1);
    res2[0] = Number('-' + res2[0]);
  }
  return res2;
}
console.log(addArrays([4, 7, 3], [1, 2, 3]));

//
class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = '0', gender = 'Male') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  sayFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  greetExtraTerrestrials(raceName) {
    return `"Welcome to Planet Earth ${raceName}`;
  }
}

const person = new Person('Ruslan', 'Postoiuk', '22');
console.log(person.greetExtraTerrestrials('marcce'));

//constructor(name, age, legs, species, status)
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 0;
    this.species = 'shark';
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = 'cat';
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.master = master;
    this.legs = 4;
    this.species = 'dog';
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
const shark = new Shark('Sharky', '23', 'Killer');
//console.log(shark);
const cat = new Cat('Archi', '20', 'HomePat');
//console.log(cat.introduce());
const dog = new Dog('dog', '10', 'HomePat', 'Ruslan');
console.log(dog);
console.log(dog.introduce());
console.log(dog.greetMaster());

//
class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true);
  }
}

var spitsy = new Labrador('Spitsy', 10, 'Male', 'Donald');

//spitsy.master;
console.log(spitsy.name);
console.log(spitsy.age);
console.log(spitsy.gender);
console.log(spitsy.species);
console.log(spitsy.master);
console.log(spitsy.loyal);

// original Labrador class:
// class Labrador {
//   constructor(name, age, gender, master) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = "Labrador";
//     this.legs = 4;
//     this.size = "Large";
//     this.master = master;
//     this.loyal = true;
//   }
// }

//
class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get volume() {
    return this.length * this.width * this.height;
  }
  get surfaceArea() {
    return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
  }
}
class Cube extends Cuboid {
  constructor(l) {
    super(l, l, l);
  }
}
const cube = new Cube(10);
console.log(cube.surfaceArea);
// get устанавливает наш метод как свойство класса, что бы к нему обратится нам не нужно его вызывать

//
class Cube1 {
  constructor(length) {
    this.length = length;
  }
  get surfaceArea() {
    return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
  }
  get volume() {
    return this.length * this.length * this.length;
  }
  set surfaceArea(sA) {
    this.length = Math.pow(sA / 6, 1 / 2);
  }
  set volume(v) {
    this.length = Math.pow(v, 1 / 3);
  }
}

const cube1 = new Cube1();
console.log(cube1.volume(5));
console.log(cube1.volume);

//
class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this.contents = contents;
    this._filename = this._fullName.split('.').reverse().slice(1).reverse().join('.');
    this._extension = this._fullName.split('.').pop();
    this.row = 0;
    this.col = 0;
  }

  get fullName() {
    return this._fullName;
  }
  get filename() {
    return this._filename;
  }
  get extension() {
    return this._extension;
  }
  getContents() {
    return this.contents;
  }
  write(str) {
    if (this.contents !== '') {
      this.contents = this.contents + '\n';
    }
    this.contents = this.contents + str;
  }
  gets() {
    return this.contents.split('\n')[this.row++];
  }
  getc() {
    return this.contents[this.col++];
  }
}
var file1 = new File('hello_world.txt', 'Hello World');
console.log(file1.filename); // "hello_world"
file1._filename = 'goodbye_world'; // Reassignment should fail
console.log(file1._filename); // still "hello_world"

//
/*
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1 */
function tripledouble(num1, num2) {
  let arr1 = num1.toString().split('');
  let arr2 = num2.toString().split('');
  let res1 = [];
  let res2 = [];
  let finish = false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr1[i + 1] && arr1[i] === arr1[i + 2]) {
      res1.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === arr2[i + 1]) {
      res2.push(arr2[i]);
    }
  }

  for (let i = 0; i < res2.length; i++) {
    for (let j = 0; j < res1.length; j++) {
      if (res1[j] === res2[i]) {
        finish = true;
      }
    }
  }

  if (finish) {
    return 1;
  }
  return 0;
}
console.log(tripledouble(451999277, 41177722899));

/*
sum_of_squares(17) = 2
17 = 16 + 1 (4 and 1 are perfect squares).
sum_of_squares(15) = 4
15 = 9 + 4 + 1 + 1. There is no way to represent 15 as the sum of three perfect squares.
sum_of_squares(16) = 1 */
function sumOfSquares(n) {
  if (Math.sqrt(n) % 1 == 0) return 1;
  while (n % 4 == 0) n /= 4;
  if (n % 8 == 7) return 4;
  for (let i = 0; i < n; i++) {
    let a = n - i * i;
    if (Math.sqrt(a) % 1 == 0) return 2;
  }
  return 3;
}
console.log(sumOfSquares(16));

//
function noBoringZeros(n) {
  let arr = n.toString().split('').reverse();
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] === '0') {
      if (arr[i] === '0' && arr[i + 1] !== '0') break;
      arr.splice(i, 1);
    }
  }
  let res = arr.reverse();
  if (res[res.length - 1] === '0') res.splice(-1, 1);
  return +res.join('');
}
console.log(noBoringZeros(-9060000)); //

//
/*'myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79
17945;10091;10088;3907;10132
;12;13;48;11'
'Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79
\n3907;17945;10091;10088;10132
\n48;2;12;13;11'
*/
function sortCsvColumns(csvFileContent) {
  let arr = csvFileContent.split('\n');
  let firstArr = arr[0].split(';');
  let secondArr = arr[1].split(';');
  let thirdArr = arr[2].split(';');
  let res = [];

  for (let i = 0; i < firstArr.length; i++) {
    res.push(firstArr[i] + ';' + secondArr[i] + ';' + thirdArr[i]);
  }

  let sortedArr = res.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1 : -1)); // ВАЖНО !!!

  let arrJoinSplit = sortedArr.join(';').split(';');

  let firstArrSorted = [];
  for (let i = 0; i < arrJoinSplit.length; i += 3) {
    firstArrSorted.push(arrJoinSplit[i]);
  }

  let secondArrSorted = [];
  for (let i = 1; i < arrJoinSplit.length; i += 3) {
    secondArrSorted.push(arrJoinSplit[i]);
  }

  let thirdArrSorted = [];
  for (let i = 2; i < arrJoinSplit.length; i += 3) {
    thirdArrSorted.push(arrJoinSplit[i]);
  }

  let firstArrSortedJoin = firstArrSorted.join(';');
  let secondArrSortedJoin = secondArrSorted.join(';');
  let thirdArrSortedJoin = thirdArrSorted.join(';');

  return sortedArr;
}
console.log(
  sortCsvColumns(
    'myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n17945;10091;10088;3907;10132\n2;12;13;48;11'
  )
);
function trans(arr) {
  return arr[0].map((_, i) => arr.map((row) => row[i]));
}
function sortCsvColumns(csv) {
  return trans(
    trans(csv.split('\n').map((row) => row.split(';'))).sort((x, y) =>
      x[0].toLowerCase() < y[0].toLowerCase() ? -1 : 1
    )
  )
    .map((row) => row.join(';'))
    .join('\n');
}
console.log(
  sortCsvColumns(
    'myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n17945;10091;10088;3907;10132\n2;12;13;48;11'
  )
);

//
async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data.jokes) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  } else {
    const joke = data.jokes.find(({ id }) => id === jokeId);
    if (!joke) throw new Error(`No jokes found id: ${jokeId}`);

    return {
      ...joke,
      saySetup() {
        return joke.setup;
      },
      sayPunchLine() {
        return joke.punchLine;
      },
    };
  }
}
console.log(sayJoke('http://great.jokes/christmas', 101));

//
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}

let lList1 = new LList();
lList1.push(new Node(37));
lList1.push(new Node(65));
lList1.push(new Node(4));

let arr = [];
for (let value of lList1) {
  arr.push(value);
}
console.log(arr);

//
function revrot(str, sz) {
  if (sz <= 0 || sz.length === 0) return '';
  if (sz > str.length) return '';
}
console.log(revrot());

let aaa = 'Ruslan';

console.log(aaa.slice(1) + aaa.slice(0, 1));

//"3:1"
function points(games) {
  let count = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) count += 3;
    if (games[i][0] < games[i][2]) count += 0;
    if (games[i][0] === games[i][2]) count += 1;
  }
  return count;
}
console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));

//
function gooseFilter(birds) {
  const geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

  return birds.filter((elm) => !geese.includes(elm));
}
console.log(
  gooseFilter(['Mallard', 'Hook Bill', 'African', 'Crested', 'Pilgrim', 'Toulouse', 'Blue Swedish'])
);

//
function multiTable(number) {
  let res = [];
  for (let i = 2; i <= 10; i++) {
    res.push(`\n${i} * ${number} = ${i * number}`);
  }
  return `${1} * ${number} = ${number}` + res.join('');
}
console.log(multiTable(5));

//
function capitalize(s) {
  let arr = s.toLowerCase().split('');
  let res = [];
  let arr2 = s.toLowerCase().split('');
  let res2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i].toUpperCase();
      res.push(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (i % 2) {
      arr2[i] = arr2[i].toUpperCase();
      res2.push(arr2[i]);
    } else {
      res2.push(arr2[i]);
    }
  }
  return [res.join(''), res2.join('')];
}
console.log(capitalize('abcdef'));

function sumDigits(number) {
  let res = 0;
  let nonFiltered = number.toString().split('');
  let arr = nonFiltered.filter((n) => n !== '-');

  for (let i = 0; i < arr.length; i++) {
    let num = Number(arr[i]);
    res += Math.abs(num);
  }
  return res;
}
console.log(sumDigits(-32));

//
function flattenAndSort(array) {
  let res = array.flatMap((n) => {
    return n;
  });
  return res.sort((a, b) => a - b);
}
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

//
function sumOfMinimums(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].sort((a, b) => a - b);
    res += sorted[0];
  }
  return res;
}

//
function greet(language) {
  let res = 'Welcome';
  const obj = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  };
  for (let key in obj) {
    if (key === language) {
      res = obj[key];
    }
  }
  return res;
}
console.log(greet('dutch'));

//
function binToDec(bin) {
  const obj = {
    '0000': 0,
    '0001': 1,
    '0010': 2,
    '0011': 3,
    '0100': 4,
    '0101': 5,
    '0110': 6,
    '0111': 7,
    1000: 8,
    1001: 9,
  };
  let res = [];
  let count = 0;
  let arr = bin.split('');
  for (let i = 0; i < arr.length; i += 4) {
    res.push(arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3]);
  }
  for (let key in obj) {
    for (let i = 0; i < res.length; i++) {
      if (res[i] === key) {
        count += obj[key];
      }
    }
  }
  return count;
}
console.log(binToDec('11110001110100010011'));

//
function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat.length === 0) return '';
  let count = 0;
  let result = {};
  for (let i = 0; i < listOfCat.length; i++) {
    let item = listOfCat[i];
    result[item] = 0;
  }
  for (let item of listOfArt) {
    const firstLetter = item[0];
    const value = parseInt(item.split(' ')[1]);
    // ВАЖНО !!!
    if (!result.hasOwnProperty(firstLetter)) {
      result[firstLetter] = 0;
    }
    result[firstLetter] += value;
  }

  let string = '';
  for (let key in result) {
    string += ` (${key} : ${result[key]}) -`;
  }

  let str = string.slice(1);
  let str2 = str.slice(0, -2);

  return str2;
}
console.log(
  stockList(['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'], ['A', 'B', 'C', 'D'])
);
// '(A : 0) - (B : 1290) - (C : 515) - (D : 600)'

/*
1, 246, 2, 123, 3, 82, 6, 41 — делители числа 246. Возводя эти делители в квадрат, получаем: 1, 60516, 4, 15129, 9, 6724, 36, 1681. 
Сумма этих квадратов равна 84100 это 290*290.

Найдите все целые числа от m до n (m и n целых чисел, где 1 <= m <= n), 
такие, что сумма их квадратов делителей сама по себе является квадратом.

Из двух элементов: сначала число, квадрат делителя которого является квадратом, а затем сумма квадратов делителей.

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]*/
function summer(x) {
  let res = [];
  for (let j = 1; j <= x; j++) {
    if (x % j === 0) res.push(j);
  }
  return res;
}
function isSqrt(x) {
  return Math.sqrt(x) % 1 === 0;
}
function listSquared(m, n) {
  let result = [];

  for (let i = m; i <= n; i++) {
    const divs = summer(i);

    let sum = divs.reduce((accum, item) => {
      let pow = Math.pow(item, 2);
      accum += pow;
      return accum;
    }, 0);

    if (isSqrt(sum)) {
      result.push([i, sum]);
    }
  }
  return result;
}
console.log(listSquared(42, 250));

//
/*	array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
	array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1. */
function index(array, n) {
  let res = 0;

  for (let i = 0; i < array.length; i++) {
    if (i === n) {
      res = Math.pow(array[i], n);
    }
  }
  if (res) {
    return res;
  }
  return -1;
}
console.log(index([3, 10, 6, 2, 8], 4));

//Testing for 590 3 and 19746: expected 34 to equal 1115
function dutyFree(normPrice, discount, hol) {
  let sumOfDiscount = normPrice - (discount * normPrice) / 100;
  let dif = normPrice - sumOfDiscount;

  return Math.floor(hol / dif);
}
console.log(dutyFree(590, 3, 19746));

/*
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); */
function sumIntervals(intervals) {
  let res = 0;
  for (let i = 0; i < intervals.length; i++) {
    let array = intervals[i];
    for (let j = array[0]; j < array[1]; j++) {
      if (j !== j - 1) {
        res += j;
      }
    }
  }
  return res / intervals.length;
}
console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
);

//
function squareOrSquareRoot(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) % 1 === 0) {
      res.push(Math.sqrt(array[i]));
    } else {
      res.push(Math.pow(array[i], 2));
    }
  }
  return res;
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

/*
// 4 3/2 (four and three halves)
simplify(4, 3, 2); // == [5, 1, 2]
// becomes 5 1/2 (five and one half)

// 15/12 (fifteen twelfths)
simplify(0, 15, 12); // == [1, 1, 4]
// becomes 1 1/4 (one and one quarter) */
function simplify(integer, numerator, denominator) {}
console.log(simplify(4, 3, 2));

/*
For example, with n=7 and k=3 josephus(7,3) should act this way.

[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
[1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
[1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
[1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
[1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
[4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
[] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
So our final result is:

josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4] */
function josephus(items, k) {
  let people = [];
  for (let i = 1; i <= items; i++) {
    people.push(i);
  }

  let deathPeople = [];
  for (let i = 0; i < people.length; i += k) {
    while (people.length > 0) {
      deathPeople.push(people[i]);
      people.splice(i, 1);
    }
  }
  return deathPeople;
}
console.log(josephus(7, 3));

// "aa[aa]bbcdeff[fffff]g" Bracket Duplicates
function stringParse(string) {
  if (typeof string !== 'string') return 'Please enter a valid string';
  let arr = [];
  let str = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      str += string[i];
    } else {
      arr.push(str);
      str = string[i];
    }
    if (i === string.length - 1) {
      arr.push(str);
    }
  }

  return arr.map((v) => (v.length > 2 ? v.slice(0, 2) + '[' + v.slice(2) + ']' : v)).join``; // ВАЖНО !!! благодаря такому join оно сложит так строку как было
}
console.log(stringParse('aaaabbcdefffffffg'));

/*
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]

Output:
'Vatsan took his dog for a spin' */
function sentence(List) {
  let res = [];
  for (let i = 0; i < List.length; i++) {
    for (let key in List[i]) {
      res.push([key, List[i][key]]);
    }
  }
  res.sort((a, b) => a[0] - b[0]);

  let final = [];
  for (let i = 0; i < res.length; i++) {
    final.push(res[i][1]);
  }

  return final.join(' ');
}
console.log(
  sentence([
    { 4: 'dog' },
    { 2: 'took' },
    { 3: 'his' },
    { '-2': 'Vatsan' },
    { 5: 'for' },
    { 6: 'a' },
    { 12: 'spin' },
  ])
);

//
function litres(time) {
  time = Math.floor(time);
  return Math.floor(time / 2);
}
console.log(litres(11.8));

//
function rotateAndRemove(arr) {
  let rotatedArr = [];
  let newRow;
  for (let c = arr[0].length - 1; c >= 0; c--) {
    newRow = [];
    for (let r = 0; r < arr.length; r++) {
      newRow.push(arr[r][c]);
    }
    rotatedArr.push(newRow);
  }
  let removedArr = rotatedArr.map((row) => {
    row.splice(row.indexOf(Math.min(...row)), 1);
    row.splice(row.indexOf(Math.max(...row)), 1);
    return row;
  });
  if (removedArr.length !== 1) {
    return rotateAndRemove(removedArr);
  }
  return removedArr[0][0];
}
console.log(
  rotateAndRemove([
    [3, 5, 8, 4, 2],
    [1, 9, 2, 3, 8],
    [4, 6, 7, 2, 2],
    [7, 5, 5, 5, 5],
    [6, 5, 3, 8, 1],
  ])
);
// ВАЖНО !!!
// length-i-1 - для теста, может так получится запускать элементы массива
const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const rotate = (matrix, dir = 'left') => {
  const result = [];

  for (let col = 0; col < matrix[0].length; col += 1) {
    const rowElement = [];

    for (let row = 0; row < matrix.length; row += 1) {
      const rowIndex = dir === 'left' ? row : matrix.length - 1 - row;
      const colIndex = dir === 'left' ? matrix[row].length - 1 - col : col;
      rowElement.push(matrix[rowIndex][colIndex]);
    }

    result.push(rowElement);
  }

  return result;
};

console.log(arr);
console.log(rotate(arr));
console.log(rotate(arr, 'right'));

/*
solve('1234',1) = 234 because ('1','234') or ('12','34') or ('123','4').
solve('1234',2) = 34 because ('1','2','34') or ('1','23','4') or ('12','3','4'). 
solve('1234',3) = 4
solve('2020',1) = 202
*/
function solve(str, k) {
  let len = str.length - k;
  let arr = [];
  for (let i = 0; i < str.length; i++) arr.push(str.slice(i, len + i));
  return Math.max(...arr);
}
console.log(solve('1234', 2));

//
function remove(string) {
  let arr = string.split('');
  if (arr[arr.length - 1] === '!') {
    string = string.slice(0, -1);
    return string;
  }
  return string;
}
console.log(remove('Hi!'));

//
/*
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small" */
function lowestProduct(input) {
  if (input.length < 4) return 'Number is too small';
  let arr = input.split('');
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * arr[i + 1] * arr[i + 2] * arr[i + 3]);
  }
  return res.sort((a, b) => a - b)[0];
}
console.log(lowestProduct('6747987258'));

//
function tidyNumber(n) {
  let arr = n.toString().split('');
  let res = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      res = false;
      break;
    }
  }
  return res;
}
console.log(tidyNumber(13337889));

//gimme([5, 10, 14]) => 1
function gimme(triplet) {
  let res = [...triplet];
  triplet.sort((a, b) => a - b);
  return res.indexOf(triplet[1]);
}
console.log(gimme([5, 10, 14]));

//
function noSpace(x) {
  return x.replace(/\s/g, '');
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

//maxMultiple (10,50)  ==> return (50)
function maxMultiple(divisor, bound) {
  let res = [];
  for (let i = bound; i >= 0; i--) {
    if (i % divisor === 0 && i > 0) {
      res.push(i);
      break;
    }
  }
  return res[0];
}
console.log(maxMultiple(10, 50));

//Класс предназначен для приема массива значений и целого числа, указывающего, сколько элементов будет разрешено на каждой странице.
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  itemCount() {
    return this.collection.length;
  }
  //сколько элементов на текущей странице
  pageItemCount(n) {
    let result = [];
    let counter = this.itemCount();
    let sum = this.itemsPerPage;
    while (counter > sum) {
      result.push(this.itemsPerPage);
      sum += this.itemsPerPage;
    }
    result.push(sum - counter);
    const pages = this.pageCount();
    if (pages - 1 >= n) {
      return result[n];
    } else {
      return -1;
    }
  }
  //определяет, на какой странице находится элемент. Индексы с отсчетом от нуля
  pageIndex(n) {
    return Math.ceil((n + 1) / this.itemsPerPage);
  }
}

const tester = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(tester.pageIndex(5));

//Если 3-я буква гласная, верните первые 4 буквы.  Если 3-я буква согласная, верните первые 3 буквы. aeiou
function nicknameGenerator(name) {
  if (name.length < 4) return 'Error: Name too short';

  const arr = name.split('');
  let res = [];
  if (arr[2] === 'a' || arr[2] === 'e' || arr[2] === 'i' || arr[2] === 'o' || arr[2] === 'u') {
    res.push(arr[0], arr[1], arr[2], arr[3]);
  } else {
    res.push(arr[0], arr[1], arr[2]);
  }
  return res.join('');
}
console.log(nicknameGenerator('Kieberly'));

/*{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
} */
const whosOnline = (friends) => {
  if (friends.length === 0) return {};
  let obj = {
    online: [],
    offline: [],
    away: [],
  };
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === 'online' && friends[i].lastActivity <= 10) {
      obj.online.push(friends[i].username);
    }
    if (friends[i].status === 'offline') {
      obj.offline.push(friends[i].username);
    }
    if (friends[i].lastActivity > 10 && friends[i].status === 'online') {
      obj.away.push(friends[i].username);
    }
  }
  for (let key in obj) {
    if (obj[key].length === 0) {
      delete obj[key];
    }
  }
  return obj;
};
console.log(
  whosOnline([
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22,
    },
    {
      username: 'Bob',
      status: 'online',
      lastActivity: 104,
    },
  ])
);

/*ls = [1, 2, 3, 4, 5, 6]  parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0] */
function partsSums(ls) {
  let res = [];
  while (ls.length > 0) {
    let sum = 0;

    for (let i = 0; i < ls.length; i++) {
      sum += ls[i];
    }
    res.push(sum);
    ls.splice(0, 1);
  }
  res.push(0);
  return res;
}
console.log(partsSums([1, 2, 3, 4, 5, 6]));

/*	if functions mean or variance have as parameter town a city which has no records return -1 
	mean("London", data), 51.19(9999999999996) 
	variance("London", data), 57.42(833333333374)
*/
function getData(rfd) {
  let lines = rfd.split('\n');
  let cmap = new Map(
    lines.map((l) => {
      let parts = l.split(':');
      return [
        parts[0],
        parts[1]
          .split(/[^0-9.]+/)
          .filter((v) => v.length > 0)
          .map((v) => parseFloat(v)),
      ];
    })
  );
  return cmap;
}

function mean(country, rainfalldata) {
  let d = getData(rainfalldata).get(country);
  if (!d) {
    return -1;
  }
  return d.reduce((acc, v) => acc + v, 0) / d.length;
}
function variance(country, rainfalldata) {
  let m = mean(country, rainfalldata);
  if (m === -1) {
    return -1;
  }
  let d = getData(rainfalldata).get(country);
  return d.map((v) => (v - m) * (v - m)).reduce((acc, v) => acc + v, 0) / d.length;
}

//
function inAscOrder(arr) {
  let res = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      res = false;
      break;
    }
  }
  return res;
}

/*Наконец, поскольку средний вес является совокупной статистикой, важно, чтобы мы проверяли аргументы конструктора, чтобы ни один кот не создавался без указанного веса; поэтому обязательно выдайте ошибку, если оба аргумента не получены конструктором. */
var Cat = (function () {
  const cats = [];

  const constructor = function (name, weight) {
    if (!name || !weight) throw Error('invalid parameters');
    Object.defineProperty(this, 'name', { get: () => name });
    Object.defineProperty(this, 'weight', {
      get: () => weight,
      set: (value) => (weight = value),
    });
    cats.push(this);
  };

  constructor.averageWeight = () => cats.reduce((acc, cat) => acc + cat.weight, 0) / cats.length;

  return constructor;
})();

//
function minValue(values) {
  let uniqueArray = values.filter(function (item, pos) {
    return values.indexOf(item) == pos;
  });
  return Number(uniqueArray.sort((a, b) => a - b).join``);
}
console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]));

//
class Animal {
  _name = 'shery';
  constructor(type) {
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}
const dogy = new Animal('Shery', 'dog');
console.log(dogy.name);
dogy.name = 'Alex';
console.log(dogy.name);

/*
Первый и последний элементы массива не будут считаться пиками (в контексте математической функции мы не знаем, что находится после, а что до, и, следовательно, мы не знаем, пик это или нет).

Также остерегайтесь плато!!! [1, 2, 2, 2, 1] имеет пик, а [1, 2, 2, 2, 3] и [1, 2, 2, 2, 2] — нет. В случае плато-пика, пожалуйста, верните только положение и значение начала плато. Например: pickPeaks([1, 2, 2, 2, 1]) возвращает {pos: [1],peaks: [2]} (или эквивалент на других языках).

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)*/
<></>;
function pickPeaks(arr) {
  const result = { pos: [], peaks: [] };
  if (arr.length > 2) {
    let pos = -1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        pos = i;
      } else if (arr[i] < arr[i - 1] && pos != -1) {
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }
  return result;
}
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));

//a, b, c, d, e to represent tally marks for 1, 2, 3, 4, 5,
//expected 14 to equal 'e <br>e <br>d'
//Should return 'c': expected 3 to equal 'c'
var scoreToTally = function (score) {
  if (score === 5) return 'e <br>';
  let res = '';
  const obj = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd',
    5: 'e',
  };

  if (score <= 5) {
    for (let key in obj) {
      if (key == score) {
        res = obj[key];
      }
    }
  }
  if (res) {
    return res;
  }

  if (score % 5 === 0) {
    let newScore = score;
    let res5 = 'e ';
    while (newScore >= 6) {
      res5 += `<br>e <br>`;
      newScore -= 5;
    }
    return res5;
  }

  while (score >= 5) {
    res += 'e';
    score -= 5;
  }
  for (let key in obj) {
    if (key == score) {
      res += obj[key];
    }
  }

  const arr = res.split('');
  let resultString = `${arr[0]} `;
  for (let i = 1; i < arr.length; i++) {
    resultString += `<br>${arr[i]} <br>`;
  }
  let str = resultString.slice(0, -10);
  for (let key in obj) {
    if (key == score) {
      str += obj[key];
    }
  }
  return str;
};
console.log(scoreToTally(14));

//возвращает список всех степеней числа 2 с показателем степени от 0 до n (включительно).
function powersOfTwo(n) {
  let res = [1];
  for (let i = 1; i <= n; i++) {
    res.push(i * 2);
  }
  return res;
}
console.log(powersOfTwo(2));

//
// d = s * t
function solution(s, t) {}
console.log(solution());

//
function take(arr, n) {
  let res = arr.splice(0, n);
  return res;
}
console.log(take([1, 2, 3, 4, 5], 3));

//evaporator(10, 10, 5) -> 29
function evaporator(content, evap_per_day, threshold) {
  return -1;
}
console.log(evaporator);

//
function getRealFloor(n) {
  if (n <= 0) return n;
  if (n > 0 && n < 13) return n - 1;
  if (n > 13) return n - 2;
}
console.log(getRealFloor(2));

//
function isPalindrome(x) {
  x.toLowerCase();
  let arr = x.split('');
  let rev = x.split('').reverse();
  let str = arr.join('');
  let str2 = rev.join('');
  if (str === str2) {
    return true;
  }
  return false;
}
console.log(isPalindrome('hello'));

//
function capitalizeWord(word) {
  let newword = word[0].toUpperCase() + word.slice(1);
  return newword;
}
console.log(capitalizeWord('word'));

// (3600 * delta_distance) / s.
function gps(s, x) {
  if (x.length <= 1) return 0;
  let res = [];
  for (let i = 0; i < x.length - 1; i++) {
    let r = ((x[i + 1] - x[i]) * 3600) / s;
    res.push(r);
  }
  res.sort((a, b) => b - a);
  return Math.floor(res[0]);
}
console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]));

/*
sc("Aab") should return "Aa"

sc("AabBc") should return "AabB"

sc("AaaaAaab") should return "AaaaAaa"(father can have a lot of son)

sc("aAAAaAAb") should return "aAAAaAA"(son also can have a lot of father ;-) */
function sc(s) {
  let arr = s.split('');
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].toLowerCase() === arr[i + 1] ||
      arr[i].toUpperCase() === arr[i + 1] ||
      (arr[i].toLowerCase() !== arr[i + 1] && arr[i].toLowerCase() === arr[i - 1]) ||
      (arr[i].toUpperCase() !== arr[i + 1] && arr[i].toUpperCase() === arr[i - 1])
    ) {
      res.push(arr[i]);
    }
  }
  return res.join('');
}
console.log(sc('aAAAaAAb'));

function sc(s) {
  var str = '';
  for (let i = 0; i < s.length; i++)
    if (s.indexOf(s[i].toLowerCase()) != -1 && s.indexOf(s[i].toUpperCase()) != -1) str += s[i];
  return str;
}
console.log(sc('aAAAaAAb'));

//
function isFunction(pairs) {
  let res = [];
  for (let i = 0; i < pairs.length - 1; i++) {
    if (pairs[i].length === pairs[i + 1].length) {
      res.push(pairs[i]);
    }
  }
  return res;
}
console.log(isFunction([0.5, 1.5], [2.5, 3.5]));

//
function swapVowelCase(str) {
  const swapCase = (l) => (l === l.toLowerCase() ? l.toUpperCase() : l.toLowerCase());
  return str
    .split('')
    .map((l) => ('aeouiAEOUI'.includes(l) ? swapCase(l) : l))
    .join('');
}
console.log(swapVowelCase('C is alive!'));

//
function getDecimal(n) {
  if (typeof n !== 'number') return null;

  if (n < 0) {
    const positiveNumber = n * -1;
    const res = positiveNumber.toString().split('.')[1];
    return Number(`0.${res}`);
  }

  const res = n.toString().split('.')[1];
  return Number(`0.${res}`);
}
console.log(getDecimal(-2.4));

//
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }

  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  set name(name) {
    const firstName = name.split(' ')[0];
    const lastName = name.split(' ')[1];
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
let augustusCole = new Person('Augustus', 'Cole');
augustusCole.name = 'Cole Train';
console.log(augustusCole.firstName); // => 'Cole'
console.log(augustusCole.lastName); // => 'Train'
console.log(augustusCole.getName()); // => 'Cole Train'
console.log(augustusCole.name); // => 'Cole Train'

//
function flatten(array) {
  return array.flat(Infinity);
}
console.log(flatten([[1], [[2, 3]], [[[4]]]]));

//
function removeDupes(str) {
  let arr = str.split('');
  return arr.filter((item, i) => arr.indexOf(item) == i);
}
console.log(removeDupes('abababcdcdcd'));

/*
logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect */

function once(fn) {
  let called = false;
  return function (...arguments) {
    if (!called) {
      called = true;
      return fn.apply(this, arguments);
    }
  };
}
console.log((logOnce = once(console.log)));
console.log(logOnce('foo')); // -> "foo"
console.log(logOnce('bar'));

//
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (Number(enteredCode) !== Number(correctCode)) return false;
  let cur = new Date(currentDate).getTime();
  let end = new Date(expirationDate).getTime();
  if (cur <= end) {
    return true;
  }
  return false;
}
console.log(checkCoupon('123', '123', 'July 10, 2015', 'July 2, 2015'));

//
const closestMultiple10 = (num) => {
  let arr = num.toString().split('');
  if (
    arr[arr.length - 1] === '0' ||
    arr[arr.length - 1] === '1' ||
    arr[arr.length - 1] === '2' ||
    arr[arr.length - 1] === '3' ||
    arr[arr.length - 1] === '4'
  ) {
    let res = [];
    for (let i = num; i > 0; i--) {
      if (i % 10 === 0) {
        res.push(i);
      }
    }
    return res[0];
  } else {
    while (num % 10 !== 0) {
      num++;
    }
    return num;
  }
};
console.log(closestMultiple10(1666));

//
function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf') return 'Pls go away and stop eating my sheep';

  let reversed = queue.reverse();
  let res = [];
  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] === 'wolf') {
      res.push(i);
    }
  }
  return `Oi! Sheep number ${res[0]}! You are about to be eaten by a wolf!`;
}
console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']));

//
function strCount(obj) {
  let res = 0;
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      res++;
    }
    if (Array.isArray(obj[key])) {
      for (let i = 0; i < obj[key].length; i++) {
        if (typeof obj[key][i] === 'string') {
          res++;
        }
      }
    }
  }
  return res;
}
console.log(
  strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
  })
);

function countObjSpecial(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price > 80 && arr[i].quantity < 7) {
      res += arr[i].weight;
    }
  }
  return res;
}
console.log(
  countObjSpecial([
    { name: 'First', weight: 350, price: 68, quantity: 10 },
    { name: 'Second', weight: 350, price: 56, quantity: 8 },
    { name: 'Third', weight: 400, price: 68, quantity: 16 },
    { name: 'Fouth', weight: 675, price: 139, quantity: 30 },
    { name: 'Five', weight: 1600, price: 139, quantity: 8 },
    { name: 'Six', weight: 740, price: 159, quantity: 1 },
    { name: 'Seven', weight: 230, price: 81, quantity: 4 },
    { name: 'Eight', weight: 230, price: 69, quantity: 5 },
  ])
);

//
function makeCounter() {
  let counter = 0;
  return function () {
    return counter++;
  };
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

//Микро и маркро таски
//
setTimeout(() => console.log('timeout'));
Promise.resolve().then(() => console.log('Promise'));
console.log('code');
//
let promise = Promise.resolve();
promise.then(() => console.log('промис выполнен'));
console.log('код выполнен');
//
setTimeout(function timeout() {
  console.log('Таймаут');
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log('Создание промиса');
  resolve();
});

p.then(function () {
  console.log('Обработка промиса');
});

console.log('Конец скрипта');
//
console.log(1);

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
//
new Promise((resolve) => {
  console.log(1);
  resolve();
}).then(() => setTimeout(() => console.log(2), 0));

console.log(3);

setTimeout(() => {
  new Promise((resolve) => {
    console.log(4);
    resolve();
  }).then(() => console.log(5));
}, 0);

//Передача параметров по значению
function change(x) {
  x = 2 * x;
  console.log('x in change:', x);
}
let num = 10;
console.log('n before change:', num);
change(num);
console.log('n after change:', num);

// Замыкани
let phrase = 'Hello';
function sayHi(name) {
  return `${phrase} ${name}`;
}
console.log(sayHi('Ruslan')); //фция ищет перменную выше если ее нет локально
//
let phrase1 = 'Hello';
if (true) {
  let user = 'John';

  function sayHi() {
    console.log(`${phrase1}, ${user}`); //Hello, John но обрати внимание что будет ниже
  }
}
console.log(sayHi()); //undefined так как фция sayHi была создана в блоке if -> она должна быть вызвана в этом блоке !
//
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));
//
function inArray(arr) {
  return function (x) {
    return x;
  };
}
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inArray([1, 2, 10])));
//
let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];
function byField(field) {
  let sortedArr = [];
  for (let i = 0; i < users.length; i++) {
    const obj = users[i];
    for (let key in obj) {
      if (key === field) {
        sortedArr = users.sort((a, b) => (a.field > b.field ? 1 : -1));
      }
    }
  }
  return sortedArr;
}
console.log(byField('age'));

//
function allAnagrams(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let array = arr[i].split('').sort().join('');
    res.push(array);
  }
  let ifAnagram = res.filter((item, pos) => res.indexOf(item) == pos);
  if (ifAnagram.length === 1) {
    return true;
  }
  return false;
}
console.log(allAnagrams(['dcax', 'abcd', 'bacd']));

//
function brightest(colors) {}
console.log(brightest(['#00FF00', '#FFFF00', '#01130F']));

/*
race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
*/
function race(v1, v2, g) {
  if (v1 >= v2) return null;

  let t = (g * 3600) / (v2 - v1);
  let h = t / 3600;
  let mn = (t % 3600) / 60;
  let s = t % 60;
  let res = [Math.floor(h), Math.floor(mn), Math.floor(s)];
  return res;
}
console.log(race(80, 91, 37)); // [hour, min, sec]

//
function switcheroo(x) {
  const arr = x.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a') {
      arr[i] = 'b';
      continue;
    }
    if (arr[i] === 'b') {
      arr[i] = 'a';
    }
  }

  return arr.join('');
}
console.log(switcheroo('aabacbaa')); //bbabcabb

//
function squaresNeeded(grains) {
  if (grains === 0) return 0;
  let res = grains;
  let count = 0;

  while (res >= 2) {
    res = res / 2;
    count++;
  }
  return count + 1;
}
console.log(squaresNeeded(1));
/*
squaresNeeded(0) === 0
squaresNeeded(1) === 1
squaresNeeded(2) === 2
squaresNeeded(3) === 2
squaresNeeded(4) === 3 
squaresNeeded(8) === 4*/

//
function averages(numbers) {
  if (numbers === null) return [];
  if (numbers.includes(null)) return [];
  let res = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    const sum = (numbers[i] + numbers[i + 1]) / 2;
    res.push(sum);
  }
  return res;
}
console.log(averages(null)); //[ 2, 4, 3, -4.5]

//
function solve(arr) {
  return arr.filter((e, i) => arr.slice(i + 1).every((x) => x < e));
}
console.log(solve([5, 4, 4, 3, 2, 1]));

//
var findMissing = function (list) {
  const res = [];
  const difference = list[1] - list[0];
  for (let i = 0; i <= list.length; i++) {
    if (list[i + 1] - list[i] !== difference) {
      res.push(list[i]);
      res.push(list[i + 1]);
    }
  }
  let filtered = res.filter((item) => typeof item === 'number');
  return filtered[1] - difference;
};
console.log(findMissing([1, 3, 5, 9, 11]));

/*
11 ->   [4, 5, 2]
6  ->   [2, 3, 1]
10 ->   [4, 5, 1] */
function racePodium(blocks) {
  if (blocks === 7) return [2, 4, 1];
  let first = Math.ceil(blocks / 3) + 1;
  let second = first - 1;
  let third = blocks - first - second;
  return [second, first, third];
}
console.log(racePodium(119249));

function gordon(a) {
  let str = a.toUpperCase().split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') {
      str[i] = '@';
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
      str[i] = '*';
    }
  }
  str[str.length - 1] = '!';
  str[str.length - 2] = '!';
  str[str.length - 3] = '!';
  str[str.length - 4] = '!';
  return str.join(' ');
}
console.log(gordon('WH@T FECK D@MN !!!!'));

//
console.log('1');
setTimeout(() => {
  console.log('2');
}, 100);
setTimeout(() => {
  console.log('3');
}, 0);
console.log('4');

/*
// urls = ['url 1', 'url 2', 'url 3',... 'url n']
// cb(['url 1 answer', 'url 2 answer', 'url 3 answer',.. 'url n answer'])

Дан массив ссылок: ['url1', 'url2', ...] и лимит одновременных запросов (limit)
Необходимо реализовать функцию, которая опросит урлы и вызовет callback c массивом ответов
['url1_answer', 'url2_answer', ...] так, чтобы в любой момент времени выполнялось не более limit
запросов (как только любой из них завершился, сразу же отправляется следующий)
Т.е. нужно реализовать шину с шириной равной limit.

Требования:
- Порядок в массиве ответов должен совпадать с порядком в массиве ссылок
Дополнительно:
- Функция должна обладать мемоизацией (один и тот же урл не опрашивать дважды)

Для опроса можно использовать fetch или $.get
Ошибки обрабатывать не нужно
*/
async function yandes(cb, urls, limit) {
  const res = [];
  for (let i = 0; i < urls.length; i++) {
    const response = await fetch(url[i], {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
    res.push(cb(response));
  }
  return res;
}
console.log(yandes());

/*
Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10 

assert.equal(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
assert.equal(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil');
assert.equal(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field');*/
function goodVsEvil(good, evil) {
  const goodArr = good.split(' ');
  const evilArr = evil.split(' ');
  const resGood = [];
  const resEvil = [];

  resGood.push(Number(goodArr[0]) * 1);
  resGood.push(Number(goodArr[1]) * 2);
  resGood.push(Number(goodArr[2]) * 3);
  resGood.push(Number(goodArr[3]) * 3);
  resGood.push(Number(goodArr[4]) * 4);
  resGood.push(Number(goodArr[5]) * 10);

  let g = resGood.reduce((accum, item) => {
    accum += item;
    return accum;
  }, 0);

  resEvil.push(Number(evilArr[0]) * 1);
  resEvil.push(Number(evilArr[1]) * 2);
  resEvil.push(Number(evilArr[2]) * 2);
  resEvil.push(Number(evilArr[3]) * 2);
  resEvil.push(Number(evilArr[4]) * 3);
  resEvil.push(Number(evilArr[5]) * 5);
  resEvil.push(Number(evilArr[6]) * 10);

  let e = resEvil.reduce((accum, item) => {
    accum += item;
    return accum;
  }, 0);

  if (e === g) {
    return 'Battle Result: No victor on this battle field';
  }
  if (e < g) {
    return 'Battle Result: Good triumphs over Evil';
  }
  if (e > g) {
    return 'Battle Result: Evil eradicates all trace of Good';
  }
}
console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));

//
function loop_size(node) {
  let slow = node;
  let fast = node;

  do {
    slow = node.next;
    fast = node.next.next;
  } while (slow != fast);

  let count = 0;
  do {
    ++count;
    fast = fast.next;
  } while (slow != fast);
  return count;
}

function loop_size(node) {
  var turtle = node;
  var rabbit = node;

  // Find a point in the loop.  Any point will do!
  // Since the rabbit moves faster than the turtle
  // and the kata guarantees a loop, the rabbit will
  // eventually catch up with the turtle.
  do {
    turtle = turtle.getNext();
    rabbit = rabbit.getNext().getNext();
  } while (turtle != rabbit);

  // The turtle and rabbit are now on the same node,
  // but we know that node is in a loop.  So now we
  // keep the turtle motionless and move the rabbit
  // until it finds the turtle again, counting the
  // nodes the rabbit visits in the mean time.
  var count = 0;
  do {
    ++count;
    rabbit = rabbit.getNext();
  } while (turtle != rabbit);

  // voila
  return count;
}

//arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
function arithmeticSequenceElements(a, d, n) {
  const res = [];
  res.length = n;
  for (let i = a; i <= res.length; i += d) {
    res.push(i);
  }
  return res.filter((item) => typeof item === 'number');
}
console.log(arithmeticSequenceElements(1, 2, 5));

//
function modifyMultiply(str, loc, num) {
  let arr = str.split(' ');
  const res = [];
  let word = [arr[loc]];

  for (let i = 0; i < num; i++) {
    res.push(word);
  }
  return res.join('-');
}
console.log(modifyMultiply('This is a string', 3, 5));

//
function findLowestInt(k) {
  const k2 = k + 1;
  let n = 2;
  let res = (n * k).toString().split('');
  for (let i = 0; i < res.length; i++) {
    res[i] = Number(res[i]);
  }
  res.sort((a, b) => a - b);
  let str = res.join('');

  let res2 = (n * k2).toString().split('');
  for (let i = 0; i < res2.length; i++) {
    res2[i] = Number(res2[i]);
  }
  res2.sort((a, b) => a - b);
  let str2 = res2.join('');

  while (str !== str2) {
    n += 1;
  }
  return n;
}
console.log(findLowestInt(325));
/*k1 = 325
k2 = 326
n = 477
#Because 477 * 325 = 155025
and      477 * 326 = 155502 */

//
class Block {
  constructor(data) {
    this.data = data;
  }

  getWidth() {
    return this.data[0];
  }
  getLength() {
    return this.data[1];
  }
  getVolume() {
    return this.data[2] * (this.data[0] * this.data[1]);
  }
  getHeight() {
    return this.data[2];
  }
  getSurfaceArea() {
    return (
      2 * (this.data[0] * this.data[1] + this.data[0] * this.data[2] + this.data[1] * this.data[2])
    );
  }
}
const block = new Block([2, 4, 6]);
console.log(block.getVolume());

//
function nthFibo(num) {
  if (num === 1) return 0;
  if (num === 2) return 1;
  return nthFibo(num - 1) + nthFibo(num - 2);
}
console.log(nthFibo(4));

//
function findNb(m) {
  let count = 0;
  for (let i = 1; i < m; i++) {
    m = m - Math.pow(i, 3);
    count++;
  }
  if (m === 0) {
    return count;
  }
  return -1;
}
console.log(findNb(1071225));

/*
gap(6,100,110) --> nil or {0, 0} or ... : between 100 and 110 we have 101, 103, 107, 109 but 101-107is not a 6-gap because there is 103in between and 103-109is not a 6-gap because there is 107in between.*/
function gap(g, m, n) {
  let isPrime = function (x) {
    for (var i = 2; i * i <= x; i++) {
      if (x % i == 0) return false;
    }
    return true;
  };
  const result = [];
  const easyNumbers = [];
  for (let i = m; i < n; i++) {
    if (isPrime(i) === true) {
      easyNumbers.push(i);
    }
  }
  for (let i = 0; i < easyNumbers.length; i++) {
    if (easyNumbers.includes(easyNumbers[i] + g) && easyNumbers[i + 1] - easyNumbers[i] === g) {
      result.push(easyNumbers[i]);
    }
  }
  if (typeof result[0] === 'undefined') return null;
  return [result[0], result[0] + g];
}
console.log(gap(4, 130, 200));

//
function expressionMatter(a, b, c) {
  let first = a * (b + c);
  let second = a * b * c;
  let third = c + b * c;
  let fouth = (a + b) * c;
  let fifth = a * (b + c);

  let res = [first, second, third, fouth, fifth];
  res.sort((a, b) => b - a);
  return res[0];
}
console.log(expressionMatter(1, 2, 3));

//
function invert(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      let reserve = '-' + array[i];
      res.push(Number(reserve));
    }
    if (array[i] < 0) {
      res.push(Number(array[i].toString().split('')[1]));
    }
  }
  return res;
}
console.log(invert([-1, -2, -3, -4, -5]));

//ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163
function chooseBestSum(t, c, a) {
  let ind = [];
  let n = a.length;

  for (let j = 0; j < c; j++) ind[j] = j;
  ind[c] = n;

  let ok = true;
  let result = [];

  while (ok) {
    let comb = [];
    for (let j = 0; j < c; j++) comb[j] = a[ind[j]];
    result.push(comb);

    ok = false;

    for (let j = c; j > 0; j--) {
      if (ind[j - 1] < ind[j] - 1) {
        ind[j - 1]++;
        for (let k = j; k < c; k++) ind[k] = ind[k - 1] + 1;
        ok = true;
        break;
      }
    }
  }

  let q = [];
  for (let i = 0; i < result.length; i++) {
    q.push(
      result[i].reduce((acc, i) => {
        acc += i;
        return acc;
      }, 0)
    );
  }

  let qr = [];
  for (let i = 0; i < q.length; i++) {
    if (q[i] <= t) {
      qr.push(q[i]);
    }
  }
  return qr.length > 0 ? qr.sort((a, b) => b - a)[0] : null;
}
console.log(chooseBestSum(175, 3, [50, 55, 56, 57, 58]));

//
// Calculate total salary
// for active teamLeads and members

// You need to calculate total salary for  all ACTIVE teamLeads and members
// if property isActive === true it means that this member or teamlead is active

const workers = [
  {
    team: 'team A',
    teamLead: {
      name: 'Kirill',
      salary: 100,
      isActive: true,
    },
    teamMembers: [
      {
        member: 'Eugenia',
        salary: 20,
        isActive: true,
      },
      {
        member: 'Andrey',
        salary: 20,
        isActive: true,
      },
      {
        member: 'Victor',
        salary: 20,
        isActive: true,
      },
      {
        member: 'Alex',
        salary: 20,
        isActive: true,
      },
      {
        member: 'Anton',
        salary: 20,
        isActive: true,
      },
      {
        member: 'Alla',
        salary: 20,
        isActive: false,
      },
    ],
  },
  {
    team: 'team B',
    teamLead: {
      name: 'Kirill',
      salary: 100,
      isActive: true,
    },
    teamMembers: [
      {
        member: 'Artemia',
        salary: 20,
        isActive: true,
      },
      {
        member: 'Semen',
        salary: 20,
        isActive: true,
      },
      {
        member: 'Illy',
        salary: 20,
        isActive: true,
      },
      {
        member: 'Natalia',
        salary: 20,
        isActive: true,
      },
      {
        member: 'Elena',
        salary: 20,
        isActive: true,
      },
      {
        member: 'Egor',
        salary: 20,
        isActive: false,
      },
      {
        member: 'Egor',
        salary: 20,
        isActive: false,
      },
    ],
  },
];

const calculateMonthSalary = (data) => {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].teamLead.isActive) {
      res.push(data[i].teamLead.salary);
    }
    res.push(
      data[i].teamMembers.reduce((accum, item) => {
        if (item.isActive) {
          accum += item.salary;
        }
        return accum;
      }, 0)
    );
  }
  return res;
};

const totalSalary = calculateMonthSalary(workers);

console.log(totalSalary);

//"abc#d##c"      ==>  "ac"
//у тебя после удаления c# и d# останется ab#c
function cleanString(s) {
  if (s === '') return '';
  const arr = s.split('');
  const isEvery = arr.every((item) => {
    if (item === '#') {
      return true;
    }
  });
  if (isEvery) return '';

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '#' && arr[i - 1]) {
      arr.splice(i - 1, 1);
      count++;
    }
  }

  let countOfSharp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '#') {
      countOfSharp++;
    }
  }

  if (countOfSharp > count) {
    while (countOfSharp > count) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '#' && arr[i - 1]) {
          arr.splice(i - 1, 1);
          countOfSharp--;
        }
      }
    }
  }

  return arr.filter((item) => item !== '#').join('');
}
console.log(cleanString('abc##d######'));

//
function remove(string) {
  let rev = string.split('').reverse();
  if (rev[0] !== '!') {
    return string;
  }
  for (let i = 0; i < rev.length; i++) {
    if (rev[i] === '!' && rev[i + 1] === '!') {
      rev[i] = '';
    }
  }
  let bb = rev.join('').split('').reverse();
  bb.splice(-1, 1);
  return bb.join('');
}
console.log(remove('!Hi! Hi!!!'));

//
var encryptThis = function (text) {
  if (text.length === 1) return text.charCodeAt().toString();
  if (text.length === 2) {
    return `${text[0].charCodeAt()}${text[1]}`;
  }
  let res = [];

  let arr = text.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i][arr[i].length - 1];
    res.push(
      arr[i][0].charCodeAt() +
        arr[i][arr[i].length - 1] +
        arr[i].slice(2, arr[i].length - 1) +
        arr[i][1]
    );
    if (arr[i].length === 1) {
      res.push(arr[i].charCodeAt().toString());
    }
    if (arr[i].length === 2) {
      res.push(`${arr[i][0].charCodeAt()}${text[1]}`);
    }
  }
  return res.join(' ');
};
const resultOfFunc = encryptThis('va');
console.log(resultOfFunc);

//
function wallpaper(l, w, h) {
  if (l === 0 || l === 0.0) return 'zero';
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];

  const newL = (l * 15) / 100 + l;
  const newW = (w * 15) / 100 + w;
  const newH = (h * 15) / 100 + h;
  const indx = Math.round(newL + newW + newH);

  return numbers[indx - 2];
}
console.log(wallpaper(4.0, 3.5, 3.0));

//
function explode(x) {
  if (typeof x[0] === 'number' && typeof x[1] === 'number') {
    let count = x[0] + x[1];
    const res = [];
    while (count > 0) {
      res.push([x[0], x[1]]);
      count--;
    }
    return res;
  }

  const isEvery = x.every((item) => typeof item !== 'number');
  if (isEvery) {
    return 'Void!';
  }

  const res = [];

  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'number') {
      count = x[i];
    }
  }

  while (count > 0) {
    res.push([x[0], x[1]]);
    count--;
  }

  return res;
}
console.log(explode([9, 3]));

//
function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? 'yes, ascending'
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? 'yes, descending'
    : 'no';
}
console.log(isSortedAndHow([-3, -1, 1, 4, 6, 8, 10, 15, 20, 21]));

//
function List() {
  this.countSpecDigits = function (integersList, digitsList) {
    var result = [];
    for (var i = 0; i < digitsList.length; i++) {
      result.push([digitsList[i], integersList.join().split(digitsList[i]).length - 1]);
    }
    return result;
  };
}
const list = new List('');
console.log(list.countSpecDigits([-77, -65, 56, -79, 6666, 222], [1, 8, 4]));

//
const getData = () => {
  const ref = { a: 1 };
  return ref;
};

const main = () => {
  let ref1 = getData(); // 1 reference
  let ref2 = { ref1 }; // 2 reference

  ref1 = undefined; // 1 reference

  ref2.ref1 = undefined; // 0 reference

  console.log(ref2);
};
main();

//findSpecPartition(10, 4, 'min') == [7, 1, 1, 1]
function findSpecPartition(t, k, com) {
  if (com === 'min') {
    const firstEl = n - k + 1;
    const res = [firstEl];
    let count = k;
    while (count > 1) {
      res.push(1);
      count--;
    }
    return res;
  }
  let mainNumber = Math.floor(t / k);
  let result = [mainNumber];
  let rest = t - mainNumber;
  let count = k - 1;
  while (count > 0) {
    let dif = Math.ceil(rest / count);
    result.push(dif);
    rest -= dif;
    count--;
  }
  return result.sort((a, b) => b - a);
}
console.log(findSpecPartition(10, 4, 'min'));

//
function permutationCycles(permutation) {
  const result = [];
  for (let i = 0; i < permutation.length; i++) {
    result.push(permutation[permutation[i]]);
  }
  return permutation;
}
console.log(permutationCycles([0, 2, 1, 5, 3, 4]));
/*
permutation0 = 0, a cycle of size 1;
permutation1 = 2 -> 
permutation2 = 1, a cycle of size 2;
permutation3 = 5 -> 
permutation5 = 4 -> 
permutation4 = 3, a cycle of size 3.``` */

//
function solution(digits) {
  const sortedResult = [];
  const sortedArr = digits
    .toString()
    .split('')
    .sort((a, b) => b - a);
  const arr = digits.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    sortedResult.push(arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] + arr[i + 4]);
  }
  const res = sortedResult.sort((a, b) => b - a);

  return +res[0];
}
console.log(solution(1234567890)); //67890

//
function SequenceSum(count) {
  if (count < 0) return `${count}<0`;

  let sum = 0;
  for (let i = 0; i <= count; i++) {
    sum += i;
  }

  let res = [];
  for (let i = 0; i <= count; i++) {
    res.push(`${i}+`);
  }

  const string = res.join('');
  const string2 = string.substring(0, string.length - 1);

  return `${string2} = ${sum}`;
}
console.log(SequenceSum(6));

//
function primeFactors(n) {
  const isPrime = function (x) {
    for (var i = 2; i * i <= x; i++) {
      if (x % i == 0) return false;
    }
    return true;
  };
  const result = [];
  for (let i = 2; i < 20; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}
console.log(primeFactors(86240));

//
function iTri(s) {
  if (s === 0) return 'Starting Line... Good Luck!';
  const sum = 2.4 + 111 + 26.2; //139.6
  if (s >= sum) return "You're done! Stop running!";
  const difference = (sum - s + 1).toFixed(2);
  let resultObj = {
    Swim: 0,
    Bike: 0,
    Run: 0,
  };
  if (s <= 2.4) {
    return { Swim: `${difference} to go!` };
  }
  if (s <= 111 + 2.4) {
    return { Bike: `${difference} to go!` };
  }
  if (s <= sum - 10 && s >= sum - 26.2) {
    return { Run: `${difference} to go!` };
  }
  if (s >= sum - 10) {
    return { Run: 'Nearly there!' };
  }
}
console.log(iTri(2.3));

//giveChange(217) // => [2,1,1,0,0,2]
//giveChange(365) // =>  [0,1,1,0,1,3]
const giveChange = (amount) =>
  [100, 50, 20, 10, 5, 1]
    .map((num) => ([num, amount] = [Math.floor(amount / num), amount % num])[0])
    .reverse();
console.log(giveChange(2527));
/*
array[0] ---> represents $1 bills
array[1] ---> represents $5 bills
array[2] ---> represents $10 bills
array[3] ---> represents $20 bills
array[4] ---> represents $50 bills
array[5] ---> represents $100 bills */

console.log(200 % 100);

//"apple ban" --> ["apple 5", "ban 3"]
//"you will win" -->["you 3", "will 4", "win 3"]
function addLength(str) {
  const arr = str.split(' ');
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(`${arr[i]} ${arr[i].length}`);
  }
  return res;
}
console.log(addLength('apple ban'));

//s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
//"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
function meeting(s) {
  const arr = s.split(';');
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toUpperCase().split(':').reverse().join(', ');
    res.push(`(${arr[i]})`);
  }
  return res.sort().join('');
}
console.log(
  meeting(
    'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn'
  )
);

//
function unluckyDays(year) {
  const res = [];
  for (let month = 0; month < 12; month++) {
    let d = new Date(year, month, 13);
    if (d.getDay() == 5) {
      res.push(d);
    }
  }
  return res.length;
}
console.log(unluckyDays(2015));

//
function streetFighterSelection(fighters, position, moves) {
  let result = [];

  moves.forEach(function (move) {
    if (move === 'up') {
      // если up то мы всегда остаемся вверху
      position[0] = 0;
    } else if (move === 'down') {
      // если down то внизу и не нужны никакие проверки
      position[0] = 1;
    } else if (move === 'right') {
      position[1] = position[1] === 5 ? 0 : position[1] + 1;
    } else if (move === 'left') {
      position[1] = position[1] === 0 ? 5 : position[1] - 1;
    }

    result.push(fighters[position[0]][position[1]]);
  });

  return result;
}
console.log(
  streetFighterSelection(
    [
      ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
      ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
    ],
    [0, 0],
    ['right', 'down', 'left', 'left', 'left', 'left', 'right']
  )
);

//
function removeNb(n) {
  const resultArr = [];
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += i;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (i * j === res - i - j) {
        resultArr.push([j, i], [i, j]);
      }
    }
  }
  if (!!resultArr.length) return resultArr;
  return [];
}
console.log(removeNb(394));
console.log(21 * 15);
/*
n = 1000003: expected [] to deeply equal [ [ 550320, 908566 ],
  [ 559756, 893250 ],
  [ 893250, 559756 ],
  [ 908566, 550320 ] ]
should work for some random numbers
n = 394: expected [] to deeply equal [ [ 273, 283 ], [ 283, 273 ] ]
 */

//
function remove(s, n) {
  let counter = 5;
  let plus = 0;
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    while (counter >= 1) {
      if (arr[i] === '!') {
        arr[i] = '';
        counter--;
      }
    }
  }
  return arr.join('');
}
console.log(remove('!!!Hi !!hi!!! !!hi', 5));
//remove("!Hi!",100) === "Hi"
//remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"

//
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const res =
    age1 * age1 +
    age2 * age2 +
    age3 * age3 +
    age4 * age4 +
    age5 * age5 +
    age6 * age6 +
    age7 * age7 +
    age8 * age8;
  const sqrt = Math.sqrt(res) / 2;
  return Math.floor(sqrt);
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

//
function formatMoney(amount) {
  const str = amount.toString();

  if (str.includes('.')) {
    const numbersAfterDot = str.split('.')[1];
    if (numbersAfterDot.length === 1) {
      return `$${str}0`;
    }
    if (numbersAfterDot.length === 2) {
      return `$${str}`;
    }
  } else {
    return `$${str}.00`;
  }
}
console.log(formatMoney(1604.1));

//
const grabscrab = (anagram, dictionary) =>
  dictionary.filter((e) => [...e].sort().join('') == [...anagram].sort().join(''));
console.log(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])); //["sport", "ports"]

//
function step(g, m, n) {
  const res = [];
  const isPrime = function (x) {
    for (var i = 2; i * i <= x; i++) {
      if (x % i == 0) return false;
    }
    return true;
  };
  for (let i = m; i <= n; i++) {
    if (isPrime(i) === true) {
      res.push(i);
    }
  }
  const result = [];
  for (let i = 0; i < res.length - 1; i++) {
    if (res[i] + g === res[i + 1]) {
      result.push(res[i], res[i + 1]);
      break;
    }
  }
  return result;
}
console.log(step(4, 130, 200));

//
function solve(arr) {
  if (arr.length === 1) return '23:59';
  const result1 = [];
  const result2 = [];
  for (let i = 0; i < arr.length; i++) {
    const res1 = `${arr[i][0]}${arr[i][1]}`;
    const res2 = `${arr[i][3]}${arr[i][4]}`;
    result1.push(+res1);
    result2.push(+res2);
  }
  const SORTED = [...result1].sort((a, b) => a - b);
  const highest = [];
  for (let i = 0; i < SORTED.length - 1; i++) {
    highest.push(SORTED[i + 1] - SORTED[i]);
  }
  const copyHighest = [...highest].sort((a, b) => b - a);
  let indexes = [];
  let num = copyHighest[0];

  for (let i = 0; i < SORTED.length; i++) {
    if (SORTED[i + 1] - SORTED[i] === num) {
      indexes.push(SORTED[i], SORTED[i + 1]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const res1 = `${arr[i][0]}${arr[i][1]}`;
    const res2 = `${arr[i][3]}${arr[i][4]}`;
    if (indexes[1] === +res1) {
      indexes.push(+res2);
    }
    if (indexes[0] === +res1) {
      indexes.push(+res2);
    }
  }
  indexes[3] += 1;
  if (indexes[2] < indexes[3]) {
    let dif = indexes[2] + 60 - indexes[3];
    if (dif < 10) {
      return `${num - 1}:0${dif}`;
    }
    return `${num - 1}:${dif}`;
  }
  if (indexes[2] === indexes[3]) {
    return `${num}:00`;
  }
  if (indexes[2] > indexes[3]) {
    let dif = indexes[2] - indexes[3];
    if (dif < 10) {
      return `${num}:0${dif}`;
    }
    return `${num}:${dif}`;
  }

  return indexes;
}
console.log(solve(['21:14, 21:30']));

//
function parse(data) {
  let count = 0;
  const arr = data.split('');
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'i') {
      count++;
    }
    if (arr[i] === 'd') {
      count--;
    }
    if (arr[i] === 's') {
      count = Math.pow(count, 2);
    }
    if (arr[i] === 'o') {
      res.push(count);
      continue;
    }
  }
  return res;
}
console.log(parse('iiisdoso'));

//
function maxTriSum(numbers) {
  const arr = numbers.filter((num, i) => numbers.indexOf(num) === i).sort((a, b) => b - a);
  return arr[0] + arr[1] + arr[2];
}
console.log(maxTriSum([3, 2, 6, 8, 6, 8, 8, 6, 8, 2, 3]));

const string =
  'https://webclient.testk8s.lisek.app/sklep/nowosci/73/nowosci/502/lubella-natures-paluszki-zakrecone-z-sola-morska-70-g/5900049043653"';
console.log(string.split('/').slice(3).join('/'));

//
function comparePowers(n1, n2) {
  const f = Math.pow(BigInt(n1[0]), BigInt(n1[1]));
  const s = Math.pow(n2[0], n2[1]);
  return f;
}
console.log(comparePowers([15341, 79562], [82627, 77192]));

//
const strWithDoorNum = '212D/19';
const str212D = '212D';
const listopada = '29 listopada 11';

const checkStreetNum = listopada.split(' ').length > 1;
console.log(checkStreetNum);
const checkAddress = (str) => {
  const obj = { street: '', streetNumber: '' };
  const arr = str.split(' ');
  if (arr.length > 1) {
    let streetFromArr = '';
    obj.streetNumber = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
      streetFromArr += arr[i] + ' ';
    }
    let strWithNoSpace = streetFromArr.slice(0, -1);
    obj.street = strWithNoSpace;
    return obj;
  }
  return str;
};
console.log(checkAddress(strWithDoorNum));

const straaa = 'aleja 29 listopada';
if (straaa[straaa.length - 1] === ' ') {
  const newStr = straaa.slice(0, -1);
  console.log(newStr.split(' '));
} else {
  console.log(straaa.split(''));
}

/*
// urls = ['url 1', 'url 2', 'url 3',... 'url n']
// cb(['url 1 answer', 'url 2 answer', 'url 3 answer',.. 'url n answer'])

/*
Дан массив ссылок: ['url1', 'url2', ...] и лимит одновременных запросов (limit)
Необходимо реализовать функцию, которая опросит урлы и вызовет callback c массивом ответов
['url1_answer', 'url2_answer', ...] так, чтобы в любой момент времени выполнялось не более limit
запросов (как только любой из них завершился, сразу же отправляется следующий)
Т.е. нужно реализовать шину с шириной равной limit.

Требования:
- Порядок в массиве ответов должен совпадать с порядком в массиве ссылок
Дополнительно:
- Функция должна обладать мемоизацией (один и тот же урл не опрашивать дважды)

Для опроса можно использовать fetch или $.get
Ошибки обрабатывать не нужно
*/
function parallelLimit(urls, limit, cb) {
  const map = new Map();
  let count = 0;

  const fetchNextUrl = () => {
    const currentUrl = urls.shift();

    if (map.has(currentUrl)) {
      return fetchNextUrl();
    }

    map.set(currentUrl, true);
    count++;

    fetch(currentUrl)
      .then((res) => res.json())
      .then((data) => {
        count--;
        map.set(currentUrl, data);

        if (urls.length > 0 && count < limit) {
          fetchNextUrl();
        } else if (urls.length === 0 && count === 0) {
          return cb(urls.map((url) => map.get(url)));
        }
      });
  };

  for (let i = 0; i < limit; i++) {
    fetchNextUrl();
  }
}

//
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

const promiseAll = async (promises) => {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((response) => {
          result[i] = response;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

//
function wordsToMarks(string) {
  var result = 0;
  for (var i = 0; i < string.length; i++) {
    result += parseInt(string[i], 36) - 9;
  }
  return result;
}

//
function numObj(s) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const alphabetString = alphabet.join(' ');
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < alphabetString.length; j++) {
      const char = alphabetString.charCodeAt(j);
      if (s[i] === char) {
        arr.push(alphabetString[j]);
      }
    }
  }
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const obj = { [s[i]]: arr[i] };
    res.push(obj);
  }
  return res;
}
console.log(numObj([118, 117, 120]));

//
const result2 = [];
const arr = [
  33, 22, 11, 222, 222, 333, 444, 555, 666, 777, 888, 999, 1111, 1000, 1100, 1200, 1300, 1400, 1500,
];
const dif = arr.length - 5;
for (let i = 0; i < arr.length - dif; i++) {
  result2.push(arr[i]);
}
console.log(arr);
console.log(result2);

//
someFunction();

//
const stonlyFn = (state) => {
  return new Promise((resolve, reject) => {
    if (state === true) {
      resolve('success');
    } else {
      reject('Error');
    }
  });
};

const stonlyVariable = stonlyFn(true);

stonlyVariable
  .then((data) => {
    console.log(data);
    return stonlyFn(false);
  })
  .catch((err) => {
    console.log(err);
  })
  .then((data) => {
    console.log(data);
    return stonlyFn(false);
  })
  .catch((err) => {
    console.log(err);
    return stonlyFn(true);
  });

//
/*
003111    #             3 = 1 + 1 + 1
813372    #     8 + 1 + 3 = 3 + 7 + 2
17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
56328116
*/
const checkEven = (num) => {
  if (num % 2 === 0) return true;
  else return false;
};

const isNumeric = (n) => !isNaN(n);

const sliceAndCount = (ticket, isEven) => {
  let leftCounter = 0;
  let rightCounter = 0;

  const length = ticket.length;
  const numToSlice = isEven ? length / 2 : Math.floor(length / 2);
  const arr = ticket.split('');
  if (!isEven) arr.splice(numToSlice, 1);
  for (let i = 0; i < arr.length - numToSlice; i++) {
    leftCounter += +arr[i];
  }
  for (let i = numToSlice; i < arr.length; i++) {
    rightCounter += +arr[i];
  }
  return leftCounter === rightCounter ? true : false;
};

function luckCheck(ticket) {
  if (!isNumeric(ticket)) throw new Error();
  if (!ticket || !Number.isInteger(+ticket)) throw new Error();
  const isEven = checkEven(ticket.length);
  return sliceAndCount(ticket, isEven);
}

console.log(luckCheck('777'));

//
decodeMorse = function (morseCode) {
  const morseCodeAlphabet = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    SOS: '...---...',
    '!': '-.-.--',
    '.': '.-.-.-',
  };
  let str = '';
  const arrOfWords = morseCode.split('   ');
  for (const word of arrOfWords) {
    const oneWord = word.split(' ');
    str += ' ';
    for (const letter of oneWord) {
      for (key in morseCodeAlphabet) {
        if (letter === morseCodeAlphabet[key]) {
          str += key;
        }
      }
    }
  }
  return str.trim();
};
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

//
function findLongest(array) {
  const sorted = [...array].sort((a, b) => b - a);
  const arr = [];
  for (const num of sorted) {
    arr.push(num.toString());
  }
  const f = arr.filter((item) => arr[0].length === item.length);
  const strArr = [];
  for (const el of array) strArr.push(el.toString());
  return Number(strArr.find((el) => el.length === f[0].length));
}
console.log(findLongest([8, 900, 500]));

//
const codeService = (vowels, string) => {
  const arr = string.split('');
  for (let i = 0; i < arr.length; i++) {
    for (const key in vowels) {
      if (arr[i] === key) {
        arr[i] = vowels[key];
      }
    }
  }
  return arr.join('');
};

function encode(string) {
  const vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return codeService(vowels, string);
}

function decode(string) {
  const vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return codeService(vowels, string);
}

console.log(encode('hello mum'));
console.log(decode('h3 th2r2'));

//
function adjacentElementsProduct(array) {
  const sum = [];
  for (let i = 0; i < array.length - 1; i++) {
    sum.push(array[i] * array[i + 1]);
  }
  return sum.sort((a, b) => b - a)[0];
}
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]));

//
function tailSwap(arr) {
  const leftContent = [];
  const rightContent = [];
  for (const str of arr) {
    const content = str.split(':');
    leftContent.push(content[0]);
    rightContent.push(content[1]);
  }
  return [`${leftContent[0]}:${rightContent[1]}`, `${leftContent[1]}:${rightContent[0]}`];
}

console.log(tailSwap(['abc:123', 'cde:456']));

//
function generateName() {
  let chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
  let str = '';
  for (let i = 0; i < 6; i++) {
    const pos = Math.floor(Math.random() * chrs.length);
    str += chrs.substring(pos, pos + 1);
  }
  return str;
}
console.log(generateName());

//
const countFn = (fight, side) => {
  let counter = 0;
  for (const key in side) {
    for (const letter of fight) {
      if (letter === key) {
        counter += side[key];
      }
    }
  }
  return counter;
};

function alphabetWar(fight) {
  const leftSide = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };
  const rightSide = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };
  const leftCount = countFn(fight, leftSide);
  const rightCount = countFn(fight, rightSide);

  if (leftCount > rightCount) return 'Left side wins!';
  if (leftCount < rightCount) return 'Right side wins!';
  else return `Let's fight again!`;
}

console.log(alphabetWar('wwwwwwz'));

//
function nextPal(val) {
  let count = 0;
  for (let i = val + 1; i < 10000000000; i++) {
    const arr = i.toString().split('');
    const reverseArr = i.toString().split('').reverse();
    if (arr.join('') === reverseArr.join('')) {
      count = i;
      break;
    }
  }
  return count;
}

console.log(nextPal(2541));

//
function balance(book) {
  const arr = book.split('\n');
  let balance = arr[0].match(/(-?\d+(\.\d+)?)/g)[0];
  arr[0] = `Original Balance: ${balance}`;
  const res = [arr[0]];
  let total = 0;
  const spendings = [];
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    if (item) {
      const numArr = item.match(/(-?\d+(\.\d+)?)/g);
      const numOfSpending = Number(numArr[1]);
      total += numOfSpending;
      spendings.push(numOfSpending);
      balance = balance - numOfSpending;
      let newItem = item.split(' ');
      if (
        newItem[1][newItem[1].length - 1] === '!' ||
        newItem[1][newItem[1].length - 1] === ':' ||
        newItem[1][newItem[1].length - 1] === '='
      ) {
        newItem[1] = newItem[1].slice(0, -1);
      }
      const time = newItem[2].match(/(-?\d+(\.\d+)?)/g)[0];
      const str = `${newItem[0]} ${newItem[1]} ${time}`;
      res.push(`${str} Balance ${balance.toFixed(2)}`);
    }
  }
  const average = total / spendings.length;
  res.push(`Total expense  ${total.toFixed(2)}`);
  res.push(`Average expense  ${average.toFixed(2)}`);
  return res.join('\r\n');
}

console.log(
  balance(
    '1000.00!=\n\n125 Market !=:125.45\n126 Hardware =34.95\n127 Video! 7.45\n128 Book :14.32\n129 Gasoline ::16.10\n'
  )
);
/*
expected 
    '1000.00!=\n
    \n125 Market !=:125.45
    \n126 Hardware =34.95
    \n127 Video! 7.45
    \n128 Book :14.32
    \n129 Gasoline ::16.10\n' 
to equal 
    'Original Balance: 1000.00\r\n
    125 Market 125.45 Balance 874.55\r\n
    126 Hardware 34.95 Balance 839.60\r\n
    127 Video 7.45 Balance 832.15\r\n
    128 Book 14.32 Balance 817.83\r\n
    129 Gasoline 16.10 Balance 801.73\r\n
    Total expense  198.27\r\n
    Average expense  39.65'
*/

//
class RomanNumerals {
  static toRoman(number) {
    var obj = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
      },
      result = '';

    for (let key in obj) {
      while (number >= obj[key]) {
        result += key;
        number -= obj[key];
      }
    }
    return result;
  }

  static fromRoman(roman) {
    const obj = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let result = 0;
    let minus = 0;
    let arr = roman.split('');

    for (let i = 0; i < arr.length; i++) {
      for (let key in obj) {
        if (key === arr[i]) {
          if (arr[i] === 'I' && arr[i + 1] === 'V') {
            minus += 2;
          }
          if (arr[i] === 'I' && arr[i + 1] === 'X') {
            minus += 2;
          }
          if (arr[i] === 'X' && arr[i + 1] === 'L') {
            minus += 20;
          }
          if (arr[i] === 'X' && arr[i + 1] === 'C') {
            minus += 20;
          }
          if (arr[i] === 'C' && arr[i + 1] === 'D') {
            minus += 200;
          }
          if (arr[i] === 'C' && arr[i + 1] === 'M') {
            minus += 200;
          }
          result += obj[key];
        }
      }
    }
    return result - minus;
  }
}

console.log(RomanNumerals.fromRoman('M'));
console.log(RomanNumerals.toRoman(1000));

//
function encode(plaintext) {
  return plaintext.replace(/[a-z]/gi, (letter) => (letter.charCodeAt(0) - 1) % 2);
}

console.log(encode('Hello World!'));

//
// можно было бы написать const findMatchedByPattern = (pattern) => (str) => {}
function findMatchedByPattern(pattern) {
  return function predicate(str) {
    const arr = str.split('');
    let condition = false;
    const res = [];

    for (const letter of pattern) {
      const findLetter = arr.findIndex((item) => item === letter);
      arr.splice(findLetter, 1);
      res.push(findLetter);
    }

    const isOneWordLost = res.find((item) => item === -1);
    if (isOneWordLost) return false;

    for (let i = 0; i < res.length - 1; i++) {
      if (res[i] <= res[i + 1]) {
        condition = true;
        continue;
      } else {
        condition = false;
        break;
      }
    }
    return condition;
  };
}
const fnPattern = findMatchedByPattern('vvl');
console.log(fnPattern('velivel'));

/*
Pattern:  Word:     Match:
acs       access    true
          ascces    false
          scares    false
vvl       veturvel  true
          velivel   false
bmb       bomb      true
          babyboom  false
*/

//
function digitalRoot(n) {
  let arr = n.toString().split('');
  let l = arr.length;

  while (l > 1) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
      res += Number(arr[i]);
    }
    arr = res.toString().split('');
    l = arr.length;
  }
  return Number(arr[0]);
}

console.log(digitalRoot(132189));
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//
function longestSlideDown(pyramid) {
  let res = 0;
  for (const item of pyramid) {
    if (item.length % 2 !== 0) {
      const el = Math.floor(item.length / 2);
      res += item[el];
    } else {
      const firstEl = item[item.length / 2 - 1];
      const secondEl = item[item.length / 2];
      firstEl > secondEl ? (res += firstEl) : (res += secondEl);
    }
  }
  return res;
}

console.log(
  longestSlideDown([
    [75],
    [95, 64],
    [17, 47, 82],
    [18, 35, 87, 10],
    [20, 4, 82, 47, 65],
    [19, 1, 23, 75, 3, 34],
    [88, 2, 77, 73, 7, 63, 67],
    [99, 65, 4, 28, 6, 16, 70, 92],
    [41, 41, 26, 56, 83, 40, 80, 70, 33],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  ])
);
/*

                                                                /3/
                                                                \7\ 4 
                                                              2 \4\ 6 
                                                              8 5 \9\ 3

Предположим, что «скольжение вниз» — это максимальная сумма последовательных чисел от вершины к основанию пирамиды. 
Как видите, самое длинное «скольжение вниз» равно 3 + 7 + 4 + 9 = 23.

Ваша задача состоит в том, чтобы написать функцию, которая принимает представление пирамиды в качестве аргумента и возвращает ее «самое большое скольжение вниз». Например:
With the input  [[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]
* Your function should return   23
*/

function longestSlideDown(pyramid) {
  return pyramid.reduceRight((accum, arrayElement) => {
    console.log('accum', accum);
    console.log('arrayElement', arrayElement);
    return arrayElement.map((number, index) => {
      console.log('number', number);
      console.log('index', index);
      const res = number + Math.max(accum[index], accum[index + 1]);
      console.log('res', res);
      return res;
    });
  })[0];
}
console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]));

//
function tribonacci(signature, n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [signature[0]];
  }
  let count = n;
  const res = [...signature];
  const iterator = signature.length - 2;

  if (count === 3) {
    return res;
  }

  for (let i = signature.length - 1; i > iterator; i--) {
    const sum = signature[i] + signature[i - 1] + signature[i - 2];
    res.push(sum);
  }

  count--;
  return tribonacci(res, count);
}

console.log(tribonacci([0, 0, 1], 10));

/*
    [1,1,1], 10   -->  [1,1,1,3,5,9,17,31,57,105]  
    [0,0,1], 10   --> [0,0,1,1,2,4,7,13,24,44]    
*/

//
function Xbonacci(signature, n, length) {
  if (n === 0) {
    return [];
  }

  let count = n;
  let itterators = [];
  if (itterators.length === 0) {
    itterators.push(signature.length);
  }
  if (length) {
    itterators = [...length];
  }
  const res = [...signature];
  const iterator = signature.length - 2;

  if (count === itterators[0]) {
    return res;
  }

  for (let i = signature.length - 1; i > iterator; i--) {
    let sum = 0;
    for (let j = 0; j < itterators[0]; j++) {
      sum += signature[i - j];
    }
    res.push(sum);
  }

  count--;
  return Xbonacci(res, count, itterators);
}

console.log(Xbonacci([1, 1, 1, 1], 10));

//
function isIntArray(arr) {
  if (!arr) return false;
  let res = true;
  for (const num of arr) {
    if (!Number.isInteger(num)) {
      res = false;
      break;
    }
  }
  return res;
}

//
function treeByLevels(rootNode) {
  if (!rootNode) return [];
  const queue = [];
  queue.push(rootNode);
  const output = [];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    output.push(node.value);
  }
  return output;
}

console.log(
  treeByLevels({
    value: 2,
    left: {
      value: 8,
      left: { value: 1, left: null, right: null },
      right: { value: 3, left: null, right: null },
    },
    right: {
      value: 9,
      left: { value: 4, left: null, right: null },
      right: { value: 5, left: null, right: null },
    },
  })
);

/*
{ 
  value: 2,
  left: { 
      value: 8,
      left: { value: 1, left: null, right: null },
      right: { value: 3, left: null, right: null } 
  },
  right: { 
      value: 9,
      left: { value: 4, left: null, right: null },
      right: { value: 5, left: null, right: null } 
  } 
}

to deeply equal [ 2, 8, 9, 1, 3, 4, 5 ]
*/

//
const sumNested = (arr) => {
  return arr.flat(Infinity).reduce((acc, num) => (acc += num), 0);
};

console.log(sumNested([1, [2, [3, [4]]]]));

const fn = (arr, count = 0) => {
  let counter = count;
  let res = [];
  for (const item of arr) {
    if (typeof item === 'number') {
      counter += item;
    } else {
      res = item.flatMap((i) => i);
      return fn(res, counter);
    }
  }
  return counter;
};

console.log(fn([1, [2, [3, [4, 5]]]]));

const sumArr = (arr) => {
  if (typeof arr === 'number') return arr;
  let sum = 0;
  for (const item of arr) sum += sumArr(item);
  return sum;
};

console.log(sumArr([1, [2, [3, [4, 5]]]]));

//
function getBestWord(points, words) {
  const output = [];
  const res = [];
  const alphabet = points.map((q, w) => ({
    [String.fromCharCode(w + 97).toUpperCase()]: q,
  }));

  for (const word of words) {
    for (const letter of word) {
      let counter = 0;
      for (const item of alphabet) {
        if (letter === Object.keys(item)[0]) {
          counter += Object.values(item)[0];
          break;
        }
      }
      res.push(counter);
    }
  }

  for (const word of words) {
    let l = word.length;
    const arr = [];
    for (let i = 0; i < res.length; i++) {
      while (l) {
        arr.push(res[i]);
        res.splice(i, 1);
        l--;
      }
    }
    output.push(arr);
  }
  const sumOfNumbers = [];
  for (const item of output) {
    const sum = item.reduce((acc, item) => (acc += item), 0);
    sumOfNumbers.push(sum);
  }

  const sorted = [...sumOfNumbers].sort((a, b) => b - a)[0];
  const indexes = [];
  for (let i = 0; i < sumOfNumbers.length; i++) {
    if (sorted === sumOfNumbers[i]) indexes.push(i);
  }

  let searchElements = [];
  for (let i = 0; i < words.length; i++) {
    for (const ind of indexes) {
      searchElements.push(words[ind]);
    }
    break;
  }

  const lessLetters = searchElements.sort((a, b) => a.length - b.length)[0];
  return words.findIndex((el) => el === lessLetters);
}

console.log(
  getBestWord(
    [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10, 10],
    ['NOQ', 'TXAY', 'S', 'OM', 'ESFT', 'CJUKQ', 'CJUKQ', 'CJUKQ', 'QL', 'QO', 'ASTK', 'Y']
  )
);

/*
expected { points: [ 1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10, 10, 10, 10 ],
  words: [ 'NOQ', 'TXAY', 'S', 'OM', 'ESFT', 'CJUKQ', 'QL', 'QO', 'ASTK', 'Y' ] } to equal 5
*/

//
const sumDigits = (arr) => {
  const res = [];
  for (const num of arr) {
    res.push(Number(num));
  }
  return res.reduce((acc, item) => (acc += item), 0);
};

const evenOrOdd = (arr) => {
  let start = arr.length % 2 === 0 ? 0 : 1;
  for (let i = start; i < arr.length; i += 2) {
    arr[i] = Number(arr[i]) * 2;
    if (arr[i] > 9) {
      arr[i] = arr[i].toString().split('');
      arr[i] = Number(arr[i][0]) + Number(arr[i][1]);
    }
  }
  const res = sumDigits(arr);
  return res;
};
function validate(n) {
  const arr = n.toString().split('');
  const res = evenOrOdd(arr);
  return res % 10 === 0 ? true : false;
}

console.log(validate(123));

//
function foldArray(array, runs) {
  const copy = [...array];
  const reversed = [...array].reverse();
  const res = [];
  const step = Math.floor(copy.length / 2);
  const isEven = array.length % 2 === 0 ? true : false;
  if (!isEven) {
    const middleNumInd = step;
    var middleNum = copy.splice(middleNumInd, 1)[0];
  }
  for (let i = 0; i < copy.length - step; i++) {
    for (let j = 0; j < reversed.length - step; j++) {
      res.push(copy[i] + reversed[j]);
      reversed.splice(j, 1);
      break;
    }
  }
  if (!isEven) res.push(middleNum);
  runs--;
  if (runs) return foldArray(res, runs--);

  return res;
}

console.log(foldArray([1, 2, 3, 4, 5], 2));

/*
    input = [ 1, 2, 3, 4, 5 ];

    runs = 1
    expected = [ 6, 6, 3 ];

    runs = 2
    expected = [ 9, 6 ];

    runs = 3
    expected = [ 15 ];

    //

    input = [ -9, 9, -8, 8, 66, 23 ];
    expected = [ 14, 75, 0 ];
*/

//
function hexHash(code) {
  {
    const arr1 = [];
    for (var n = 0, l = code.length; n < l; n++) {
      const hex = Number(code.charCodeAt(n)).toString(16);
      arr1.push(hex);
    }
    return arr1
      .join('')
      .split('')
      .filter((el) => Number(el))
      .map((el) => Number(el))
      .reduce((acc, el) => (acc += el), 0);
  }
}

console.log(hexHash('Yo'));

//
function sumTriangularNumbers(num, s = 1, arr = []) {
  let n = num;
  if (s === 1) n = num + 1;
  if (n < 0) return 0;
  arr.push(s);
  let count = 0;
  let step = arr.reduce((acc, item) => (acc += item), 0);
  count += step;
  n--;
  s++;
  if (n) return sumTriangularNumbers(n, s, arr);
  return count;
}

console.log(sumTriangularNumbers(6));

//
// Мой вариант который долго работае
function largestSum(arr) {
  const isNegative = arr.every((el) => el < 0);
  if (isNegative || arr.length === 0) return 0;
  const isSomeNegative = arr.every((el) => el > 0);
  if (isSomeNegative) return arr.reduce((acc, el) => (acc += el), 0);
  const res = [];
  let l = arr.length;
  while (l) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      res.push(sum);
    }
    arr.splice(0, 1);
    sum = 0;
    l--;
  }
  return res.sort((a, b) => b - a)[0];
}

console.log(largestSum([31, -41, 59, 26, -53, 58, 97, -93, -23, 84]));

// Вариант который работает быстро
function largestSum(arr) {
  let currentSum = 0;
  let maxSum = 0;

  if (arr.length === 0) return 0;

  arr.forEach((a) => {
    currentSum = Math.max(a, currentSum + a);
    maxSum = Math.max(maxSum, currentSum);
  });
  return maxSum;
}

// Вариант который работает быстро
function largestSum(arr) {
  var max = 0;
  var cur = 0;
  for (var number of arr) {
    cur += number;
    if (cur < 0) cur = 0;
    if (cur > max) max = cur;
  }
  return max;
}

//
function snail(array, result = [], count = 0) {
  const res = [...result];
  const length = array[0].length;
  let counter = count;
  let step = 1;
  if (count === 0) {
    for (const arr of array) {
      counter += arr.length;
    }
  }
  for (let j = 0; j < array.length; j++) {
    const arr = array[j];
    if (!counter) break;
    for (let i = 0; i < arr.length; i++) {
      if (step === 1) {
        res.push(arr[i]);
        arr.splice(i, 1);
        i--;
        counter--;
      }
      if (step === 2) {
        if (arr[i] === arr[length - 1]) {
          res.push(arr[i]);
          arr.splice(-1, 1);
          counter--;
          if (array[j + 1]) step--;
          else step++;
        }
      }
      if (step === 3) {
        const lastArr = array[array.length - 1].reverse();
        for (let k = 0; k < lastArr.length; k++) {
          res.push(lastArr[k]);
          lastArr.splice(k, 1);
          k--;
          counter--;
        }
      }
    }
    step++;
  }
  if (step === 4) {
    const reversed = [...array].reverse();
    for (const arr of reversed) {
      if (arr.length) {
        res.push(arr[0]);
        arr.splice(0, 1);
        counter--;
      }
    }
  }
  const filtered = array.filter((el) => el.length);
  if (counter) return snail(filtered, res, counter);
  return res;
}

console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ])
);

/*
[1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

Test.assertDeepEquals(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
*/

//
class Primes {
  static isPrime(x) {
    for (var i = 2; i * i <= x; i++) {
      if (x % i == 0) return false;
    }
    return true;
  }

  static first(n) {
    let res = [];
    let counter = n;
    for (let i = 2; i < Infinity; i++) {
      if (!counter) break;
      if (this.isPrime(i)) {
        res.push(i);
        counter--;
      }
    }
    return res;
  }

  static slice(from, to) {
    return this.first().slice(from, to);
  }
}

console.log(Primes.first(20).slice(15, 20));

/*
Primes.first(5)
# => [2, 3, 5, 7, 11]

Test.assertSimilar(Primes.first(20).slice(15,20), [53, 59, 61, 67, 71])
*/

//
function sortMyString(S) {
  const f = [];
  const sec = [];
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) f.push(S[i]);
    else sec.push(S[i]);
  }
  return `${f.join('')} ${sec.join('')}`;
}

//
const findCordinate = (house, item) => {
  const cordinate = [];

  for (let j = 0; j < house.length; j++) {
    const arr = house[j];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        cordinate.push([j, i]);
      }
    }
  }
  return cordinate;
};

function allAlone(house) {
  const X = findCordinate(house, 'X');
  const O = findCordinate(house, 'o'); // [ [ 0, 2 ], [ 0, 19 ], [ 2, 23 ] ]

  const bottom = [];
  for (const item of O) {
    for (let i = item[0]; i < house.length; i++) {
      if (house[i][item[1]] === '#') {
        bottom.push(false);
        break;
      }
    }
  }

  const top = [];
  for (const item of O) {
    const dif = house.length - item[0];
    for (let i = 0; i < house.length - dif; i++) {
      if (house[i][item[1]] === '#') {
        top.push(false);
        break;
      }
    }
  }

  const left = [];
  for (const item of O) {
    for (let i = item[0]; i < house.length; i++) {
      const firstO = house[i].findIndex((el) => el === 'o');
      const firstHashtag = house[i].findIndex((el) => el === '#');
      if (firstO > 0 && firstHashtag < firstO) {
        left.push(false);
        break;
      }
    }
  }

  const right = [];
  for (const item of O) {
    for (let i = item[0]; i < house.length; i++) {
      const firstO = house[i].findIndex((el) => el === 'o');
      for (let j = firstO; j < house[i].length; j++) {
        if (firstO > 0 && house[i][j] === '#') {
          right.push(false);
          break;
        }
      }
    }
  }

  let output = false;
  const result = { top, bottom, left, right };
  for (const key in result) {
    if (result[key].length === 0) {
      output = true;
      break;
    }
  }
  if (!output) {
    const bottomO = [];
    for (const item of O) {
      for (let i = item[0]; i < house.length; i++) {
        if (house[i][item[1]] === '#') {
          bottomO.push(i);
          break;
        }
      }
    }

    const bottomX = [];
    for (const item of X) {
      for (let i = item[0]; i < house.length; i++) {
        if (house[i][item[1]] === '#') {
          bottomX.push(i);
          break;
        }
      }
    }

    for (const item of bottomO) {
      if (item === bottomX[0]) return false;
    }
    return true;
  } else {
    if (O.length === 1) {
      let top0 = 0;
      let topX = 0;

      for (const item of O) {
        const dif = house.length - item[0];
        for (let i = 0; i < house.length - dif; i++) {
          if (house[i][item[1]] === '#') {
            top0 = i;
            break;
          }
        }
      }

      for (const item of X) {
        const dif = house.length - item[0];
        for (let i = 0; i < house.length - dif; i++) {
          if (house[i][item[1]] === '#') {
            topX = i;
            break;
          }
        }
      }
      return top0 === topX ? false : true;
    }
    return output;
  }
}

console.log(
  allAlone([
    '#################             '.split(''),
    '#     o         #   o         '.split(''),
    '#          ######        o    '.split(''),
    '####       #                  '.split(''),
    '   #       ###################'.split(''),
    '   #                         #'.split(''),
    '   #                  X      #'.split(''),
    '   ###########################'.split(''),
  ])
);

//
function perimeter(n, count = []) {
  if (count.length === 0 && n === 0) return 4;
  let counter = [...count];
  let fib = n;
  if (counter.length === 0) fib += 1;
  if (count.length === 0) {
    counter.push(1);
    fib--;
    return perimeter(fib, counter);
  }
  if (counter.length === 1) {
    counter.push(1);
    fib--;
    return perimeter(fib, counter);
  }
  if (fib) {
    const newNum = counter[counter.length - 1] + counter[counter.length - 2];
    counter.push(newNum);
    fib--;
    return perimeter(fib, counter);
  }
  const res = 4 * counter.reduce((acc, num) => (acc += num), 0);
  return res;
}

console.log(perimeter(20));

//
const prevMultOfThree = (n) => {
  if (!n) return null;
  if (n % 3 === 0) return n;
  const arr = n.toString().split('');
  arr.pop();
  const res = [];
  for (const num of arr) {
    res.push(Number(num));
  }
  const number = Number(res.join(''));
  return prevMultOfThree(number);
};

console.log(36);

//
function buddy(start, limit) {
  const res = [];
  const output = [];
  for (let i = start; i <= limit; i++) {
    const first = [];
    for (let j = 0; j < i; j++) {
      if (i % j === 0) first.push(j);
    }
    res.push([i, first.reduce((acc, i) => (acc += i), 0) - 1]);
  }
  for (const item of res) {
    const first = [];
    for (let j = 0; j < item[1]; j++) {
      if (item[1] % j === 0) first.push(j);
    }
    const sum = first.reduce((acc, i) => (acc += i), 0) - 1;
    if (item[0] === sum) {
      output.push(item);
      break;
    }
  }
  return output[0];
}

console.log(buddy(381, 4318));

//
function divisors(n) {
  let divsum = 1;
  for (let i = 2, end = Math.sqrt(n) + 1; i < end; i++) {
    let d = Math.floor(n / i);
    let m = n % i;
    if (m === 0) {
      divsum += i;
      if (i != d) {
        const r = n / i;
        divsum += r;
      }
    }
  }
  return divsum;
}

function buddy(start, limit) {
  for (let i = start; i <= limit; i++) {
    let sum1 = divisors(i);
    if (start > sum1 - 1 || i > sum1) continue;
    let sumMinus1 = divisors(sum1 - 1);
    if (i === sumMinus1 - 1) {
      return [i, sum1 - 1];
    }
  }
  return 'Nothing';
}

console.log(buddy(10, 50));

//
function topThreeWords(text) {
  const arr = text.split(' ');
  for (let i = 0; i < arr.length; i++) {
    const regex = /[^A-Z'a-z0-9]/g;
    arr[i] = arr[i].replace(regex, '');
  }
  const filtered = arr.filter((el) => el).map((el) => el.toLowerCase());
  const res = [];
  for (const letter of filtered) {
    let count = 0;
    for (let j = 0; j < filtered.length; j++) {
      if (letter === filtered[j]) {
        count++;
      }
    }
    res.push([count, letter]);
  }
  const sorted = res.sort((a, b) => b[0] - a[0]);
  const noRepeat = [];
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i][1] !== sorted[i + 1][1]) noRepeat.push(sorted[i]);
  }
  const output = [];
  const dif = noRepeat.length - 3;
  for (let i = 0; i < noRepeat.length - dif; i++) {
    if (noRepeat[i]) {
      output.push(noRepeat[i][1]);
    }
  }
  return output.length ? output : [];
}

console.log(
  topThreeWords(
    'In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.'
  )
);

/*
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]
*/

//
function triangular(n, c = 0) {
  if ((n === 0 && c === 0) || n < 0) return 0;
  let count = c;
  count += n;
  n--;
  if (n) return triangular(n, count);
  return count;
}

console.log(triangular(447213));
//
function triangular(n) {
  if (n <= 0) return 0;
  let count = n;
  let res = 0;
  while (count) {
    res += count;
    count--;
  }
  return res;
}

//
function add(x) {
  function f(y) {
    return add(x + y);
  }
  f.valueOf = function () {
    return x;
  };
  return f;
}

console.log(add(1)(2));

//
function twoDecimalPlaces(n) {
  const arr = n.toString().split('.');
  const num = arr[1];
  const dotInt = num.toString().split('');
  for (let i = 0; i < dotInt.length; i++) {
    if (i === 2) {
      dotInt[i] = `.${dotInt[i]}`;
      break;
    }
  }
  const newNum = Number(dotInt.join('').split('.').join('.'));
  const res = Number(`${arr[0]}.${Math.round(newNum)}`);
  if (arr[1][0] == 0) {
    return Number(`${arr[0]}.0${Math.round(newNum)}`);
  }
  if (arr[1][0] == 9 && arr[1][1] == 9) {
    return Number(`${arr[0]}`) + 1;
  }
  return res;
}

console.log(twoDecimalPlaces(67.99781741414894));

//
function solve(arr) {
  const high = [...arr].sort((a, b) => a - b);
  const down = [...arr].sort((a, b) => b - a);
  const res = [];
  let count = arr.length;
  while (count >= 0) {
    res.push(down[0]);
    down.splice(0, 1);
    count--;
    res.push(high[0]);
    high.splice(0, 1);
    count--;
  }
  if (res.length > arr.length) res.pop();

  return res;
}

console.log(solve([52, 77, 72, 44, 74, 76, 40]));

// solve([15,11,10,7,12]) = [15,7,12,10,11]

//
function twoSort(s) {
  const sorted = s.sort();
  let str = '';
  for (const letter of sorted[0]) {
    str += `${letter}***`;
  }
  return str.slice(0, -3);
}

console.log(
  twoSort(['turns", "out", "random", "test", "cases", "are", "easier", "than", "writing'])
);

//
const schema = {
  1: [1, 2, 4],
  2: [1, 2, 3, 5],
  3: [2, 3, 6],
  4: [1, 4, 5, 7],
  5: [2, 4, 6, 5, 8],
  6: [3, 5, 6, 9],
  7: [4, 7, 8],
  8: [5, 7, 8, 9, 0],
  9: [6, 8, 9],
  0: [8, 0],
};

function getPINs(observed) {
  const res = [];
  const addToState = (prevState, index) => {
    if (!observed[index]) {
      res.push(prevState);
      return;
    }
    schema[observed[index]].forEach((value) => {
      addToState(`${prevState}${value}`, index + 1);
    });
  };

  addToState('', 0);

  return [...new Set(res)];
}

/*
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
*/

const getPINs2 = (observed) => {
  const dig = {
    0: ['0', '8'],
    1: ['1', '2', '4'],
    2: ['1', '2', '3', '5'],
    3: ['2', '3', '6'],
    4: ['1', '4', '5', '7'],
    5: ['2', '4', '5', '6', '8'],
    6: ['3', '5', '6', '9'],
    7: ['4', '7', '8'],
    8: ['5', '7', '8', '9', '0'],
    9: ['6', '8', '9'],
  };
  const per = (v, w) => w.map((x) => v + x);
  const t = observed.split('').map((x) => dig[x]); // получим подходящие массивы с dig
  return t.reduce((a, b) => a.map((x) => per(x, b)).reduce((a, b) => a.concat(b)));
};

console.log(getPINs2('12'));

//
function solution(words) {
  const letters = [];
  for (let i = 0; i < words.length; i++) {
    letters.push({ fl: words[i][0], ll: words[i][words[i].length - 1] });
  }
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (letters[i].ll === letters[j].fl) {
        count++;
        letters.splice(0, 1);
        i--;
        break;
      }
    }
  }
  if (words.length > 4 && count >= words.length - 2) return true;
  if (words.length === 4 && count >= 3) return true;
  return false;
}

console.log(solution(['excavate', 'endure', 'desire', 'screen', 'theater', 'excess', 'night']));

// "trade", "pole", "view", "grave", "ladder", "mushroom", "president"

//
const checkEveryRow = (arr, element) => {
  const res = arr.every((el) => el === element);
  return res;
};

const checkLastOrFirst = (arr, element, position = 'first') => {
  const res = [];
  let pos;
  position === 'last' ? (pos = arr[2]) : (pos = arr[0]);
  if (pos === element) {
    res.push(element);
  }
  return res.length === 3 ? true : false;
};

const checkDiagonal = (arr, el) => {
  const resLeftToRight = [];
  const resRightToLeft = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === 0 && arr[i][0] === el) {
        resLeftToRight.push(1);
        break;
      }
      if (i === 1 && arr[i][1] === el) {
        resLeftToRight.push(2);
        break;
      }
      if (i === 2 && arr[i][2] === el) {
        resLeftToRight.push(3);
        break;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === 0 && arr[i][2] === el) {
        resRightToLeft.push(1);
        break;
      }
      if (i === 1 && arr[i][1] === el) {
        resRightToLeft.push(2);
        break;
      }
      if (i === 2 && arr[i][0] === el) {
        resRightToLeft.push(3);
        break;
      }
    }
  }

  // console.dir({ resLeftToRight, resRightToLeft });
  if (resLeftToRight.length === 3 || resRightToLeft.length === 3) return true;
  else return false;
};

function isSolved(board) {
  const xEveryRow = [];
  const xFirstEl = [];
  const xLastEL = [];

  const oEveryRow = [];
  const oFirstEl = [];
  const oLastEL = [];
  for (const row of board) {
    xEveryRow.push(checkEveryRow(row, 1));
    xFirstEl.push(checkLastOrFirst(row, 1));
    xLastEL.push(checkLastOrFirst(row, 1, 'last'));

    oEveryRow.push(checkEveryRow(row, 2));
    oFirstEl.push(checkLastOrFirst(row, 2));
    oLastEL.push(checkLastOrFirst(row, 2, 'last'));
  }
  const xDiagonal = checkDiagonal(board, 1);
  const oDiagonal = checkDiagonal(board, 2);

  const isEveryXInRow = xEveryRow.find((el) => el);
  const isXFL = xFirstEl.every((el) => el);
  const isXL = xLastEL.every((el) => el);

  const isEveryOInRow = oEveryRow.find((el) => el);
  const isOFL = oFirstEl.every((el) => el);
  const isOL = oLastEL.every((el) => el);

  //console.log(isEveryXInRow, isXFL, isXL, xDiagonal);
  //console.log(isEveryOInRow, isOFL, isOL, oDiagonal);

  if (isEveryXInRow || isXFL || isXL || xDiagonal) return 1;
  if (isEveryOInRow || isOFL || isOL || oDiagonal) return 2;

  let emptyCounter = 0;

  for (const row of board) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 0) emptyCounter++;
    }
  }

  // console.log(emptyCounter);
  if (!emptyCounter) return 0;
  else return -1;
}

console.log(
  isSolved([
    [0, 1, 1],
    [2, 0, 0],
    [2, 1, 0],
  ])
);

/*
0 if a spot is empty, 
1 if it is an "X", 
2 if it is an "O"

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
*/

//
function complexFunction(...args) {}

function cache(func) {
  const cachedResults = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!(key in cachedResults)) {
      const result = func.apply(null, args);
      cachedResults[key] = result;
    }
    return cachedResults[key];
  };
}

const cachedFunction = cache(complexFunction);

console.log(cachedFunction('foo', 'bar')); // complex function should be executed
console.log(cachedFunction('foo', 'bar')); // complex function should not be invoked again, instead the cached result should be returned
console.log(cachedFunction('foo', 'baz')); // should be executed, because the method wasn't invoked before with these arguments

//
function mostFrequentWord(arr, n) {
  let freq = 0;
  let res = '';
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i + 1; j < n; j++) {
      if (JSON.stringify(arr[j]) === JSON.stringify(arr[i])) {
        count++;
      }
    }
    if (count >= freq) {
      res = arr[i];
      freq = count;
    }
  }
  return res;
}

function killer(suspectInfo, dead) {
  const res = [];
  for (const deadPerson of dead) {
    for (const key in suspectInfo) {
      for (const sawPeople of suspectInfo[key]) {
        if (deadPerson === sawPeople) {
          res.push(key);
          break;
        }
      }
    }
  }
  return mostFrequentWord(res, res.length);
}

console.log(
  killer(
    {
      Johnny: ['David', 'Kyle', 'Lucas'],
      Peter: ['Lucy', 'Kyle'],
      James: ['Jacob', 'Bill', 'Lucas'],
    },
    ['Lucas', 'Bill']
  )
);

/*function pathFinder(maze) {
  const array = maze.split('\n');
  const start = array[0][0];
  const res = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === '.' && array[i + 1][j] === '.') {
        res.push([i, j]);
        break;
      }
    }
  }
  return res;
}

console.log(
  pathFinder(
    '.WW..WWWW.\n....W...W.\n..........\n..W.......\n.......W..\nWW...WW...\nW....WW...\n...W....WW\n.WW.W....W\nW...WWW...'
  )
);


true
.WW..WWWW. 0
....W...W. 1
.......... 2
..W....... 3
.......W.. 4
WW...WW... 5
W....WW... 6 Если есть такой этап как здесь, где можно пойти и на лево и на право, и я пошел в лево и уперся в тупик, то напиши код так, что бы он вернулся обратно 
...W....WW 7 на этот этап и пошел в право(на этот этап я имею ввиду вот сюда что бы код вернулся W....WW...)
.WW.W....W 8
W...WWW... 9

false
.W...WW.WW
.W.WW...WW
..W.......
...W.....W
..WWWW....
...W.W...W
W.WW.W..W.
...W...W..
...W....W.
.....W.W..
*/
