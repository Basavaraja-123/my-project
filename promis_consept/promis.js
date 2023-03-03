let student = [{id:101,name:"vidya",section:"A3",class:"10th", mailId:"vidya@gmail.com"},
               {id:102,name:"prasanna",section:"B1",class:"10th", mailId:"Prasanna@gmail.com"},
               {id:103,name:"basava",section:"A1",class:"10th", mailId:"basava@gmail.com"},
               {id:104,name:"chali",section:"A2",class:"10th", mailId:"chali@gmail.com"}

              ]

 let createStudent = (stu) => {
    return new Promise((resolve, reject) => {
        let flag=true;
        setTimeout(()=>{student.push(stu);
            flag?resolve("inserted succefuly"):reject("not insterted")},3000);
        })
 }
 let getStudent = () => {
    setTimeout(()=>{
     let rows=""
     student.forEach((stu)=>{
        rows=rows+ `<tr>
                        <td>${stu.id}</td>
                        <td>${stu.name}</td>
                        <td>${stu.section}</td>
                        <td>${stu.class}</td>
                        <td>${stu.mailId}</td>
                    <td>`
     })
     document.getElementById("root").innerHTML=rows;},1000)

}
createStudent({id:106,name:"ashok",section:"A1",class:"10th", mailId:"ashok@gmail.com"})
    .then((msg) => {console.log(msg)
                        getStudent()
})
     .catch((error) => {console.log(error);
})





 
             