// for loop


for (let i=0; i< 10; i++) {
    console.log(i);
    console.log(`for looop number: ${i}`);
}


// while loop

let i =0;
while(i< 8){
    console.log(`khela hobe : ${i}`);
    i++;
}

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

// conventional for loop
for(let i=0; i< toDo.length;i++){
    console.log(toDo[i].text);
}

// smart for loop

for(let todo of toDo){
    console.log(todo);
    console.log(todo.id);
}
for(let todo of toDo){
    console.log(todo.id);
}