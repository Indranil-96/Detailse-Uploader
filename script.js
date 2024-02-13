let studentList=[];

// let rolls=document.getElementById('roll');
// let marks=document.getElementById('marks');

let addDetailse=document.getElementById('add');
let printDetailse=document.getElementById('print');


addDetailse.addEventListener('click',function(){
    console.log("Event listner working");
    let names=document.getElementById('name');
    console.log(names.innerHTML());
    // console.log(names);
    // let stname=names.innerText();
    // let roll=rolls.innerText();
    // let mark=marks.innerText();
});

const createSt=(names,rolls,marks)=>{
  const  student={
        Sname: names,
        Sroll: rolls,
        Sramks: marks
    };
    studentList.push(student);
}

