 let StudentNames=[
    { name: "Steven", id:1},
    { name: "Mike",id:2 },
    { name: "John",id:3 }
]

function getStudentName(names){
    return names.map((studentname)=>studentname.name)
}
console.log(getStudentName(StudentNames));



