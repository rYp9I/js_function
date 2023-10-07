// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

// findBiggestWord(str)
function findBiggestWord(str) {
    let wordsArray = str.split(' ');
    let bigWord = "";
         for (let word of wordsArray) {
            if (word.length > bigWord.length) {
                bigWord = word;
            }
    }
    return bigWord;
}
console.log(findBiggestWord("erwg fgrgw4rf gfsdffg ghwsfhjewfkk")); //ghwsfhjewfkk

// 2. написать функцию которая принимает число и возвращает перевернутое число

 //function revNumbers(number) 
 const revNumbers = (number) => number.toString().split('').reverse().join('');
 console.log(revNumbers(12345)); //54321
 

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

function unique(str){
    return str.split('').reduce((acc,current) => acc.includes(current) ? acc : acc + current);
}
console.log(unique('aaaaaaabbbbbccccd'));
 

  
// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

 function calcPoints(win, draw, loss) {
    return win*3+draw*1;
 }
 console.log(calcPoints(3, 3, 6)); //12

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

function statisctics(arr) {
    return{
        max: Math.max(... arr),
        min: Math.min(...arr),
        count: arr.length,
        average: arr.reduce((acc, curr) => acc + curr)/ arr.length,
    };
}
console.log(statisctics([3, 3, 75674, 64,678,32, 6]));
// 6.Написать функцию которая принимает массив работников компании 

 const workers = [
   { name: "Jimm", salary: 40000, department: "IT" },
   { name: "Bob", salary: 60300, department: "HR" },
   { name: "Stacy", salary: 15000, department: "IT" },
   { name: "Tom", salary: 55200, department: "DEVOPS" },
   { name: "Kate", salary: 25000, department: "IT" },
   { name: "John", salary: 40000, department: "HR" },
   { name: "Billy", salary: 60000, department: "DEVOPS" },
 ];
 function topSalary(departments) {
    const groupedDeps = departments.reduce((acc, current) => {
        if (acc[current.department]) {
            acc[current.department].push(current);
        } else{
            acc[current.department]=[current];
        } return acc;
    },)
   } ;
const avarageSalary = Object.keys(groupedDeps).map((el) => {
    const avarageSalary = groupedDeps[el]
    .map((item) => item.salary)
    .reduce((acc, curr) => acc + curr, 0)/ groupedDeps[el].length;
    return {department: el, avarageSalary };
});
return avarageSalary.sort((a, b) => b.avarageSalary - a.avarageSalary)[0];
const res = topSalary(workers);
console.log(topSalary(workers));
// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 



