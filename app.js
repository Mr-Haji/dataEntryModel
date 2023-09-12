var studentList = [];


function addStudent() {
    var inp1 = document.getElementById("fName");
    var inp2 = document.getElementById("lName");
    var inp3 = document.getElementById("age");
    var inp4 = document.getElementById("fthrName");

    if (inp1.value === "" || inp2.value === "" || inp3.value === "") {
        alert("Please Filled All Feeds");
    }
    else {
        var Student1 = {
            firstName: inp1.value,
            lastName: inp2.value,
            fathertName: inp4.value,
            Age: inp3.value,
            id: Math.floor(Math.random() * 20020)

        }
        studentList.push(Student1);
        inp1.value = "";
        inp2.value = "";
        inp3.value = "";
        inp4.value = "";
        alert("Successfully added✅");
        render();
    }

}
var table = document.getElementById("tbl");
var totalstudent = document.getElementById("totlstdnt")

function render() {
    totalstudent.innerHTML = studentList.length;

    table.innerHTML = `<thead>
    <tr>
        <th scope="col">S No</th>
        <th scope="col">Student Name</th>
        <th scope="col">Father Name </th>
        <th scope="col">Age</th>
        <th scope="col">ID</th>
    </tr>
</thead>`;
    
    for(var i = 0; i < studentList.length; i++) {
        console.log(studentList)
        table.innerHTML += `
<tbody>
    <tr>
        <td>${i + 1}</td>
        <td>${studentList[i].firstName} ${studentList[i].lastName}</td>
        <td>${studentList[i].fathertName}</td>
        <td>${studentList[i].Age}</td>
        <td> E-${studentList[i].id}</td>
        <td><button class="btn1" onclick="del(${i})">Delete</button></td>
        </tr>
    
</tbody>`
    }

}

function del(e) {
    studentList.splice(e, 1);
        render()
}


