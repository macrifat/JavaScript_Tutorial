
// arrays
/* multi line
comments*/

let fruits = ['apple', 'orrange', 'lemon', 1];

fruits[3]= 'rifat';

//print 
console.log(fruits); 

// add last
fruits.push('mango');
console.log(fruits); 
//add first
fruits.unshift('banana');
console.log(fruits); 

// remove from last
fruits.pop();
console.log(fruits); 

//index number
console.log(fruits.indexOf('lemon')); 

let toDo = [
    {id:1,
    text:'no1',
    isCompleted:true
},
{    id:2,
    text:'no2',
    isCompleted:true
},
{   id:3,
    text:'no3',
    isCompleted:false
},
];

console.log(toDo);
console.log(toDo[2].isCompleted);

// convert Javascript to JSON

let toDoJSON = JSON.stringify(toDo);
console.log(toDoJSON);
