var count = 0;
function addSection() {
    count++;
    let row = document.getElementById("newrow");
    let tbody = document.getElementById("sections");
    let clone = row.cloneNode(true);
    clone.id = "newrow" + count;
    clone.style.display = '';
    clone.lastElementChild.firstElementChild.id = count;
    tbody.appendChild(clone);
}
function minus(id) {
    document.getElementById("sections").removeChild(document.getElementById("newrow" + id));
}
// function validate(id, Re, msg) {
//     let firstName = document.getElementById(id).value;
//     let re = new RegExp(Re);
//     if (firstName != '' && re.test(firstName)) {
//         document.getElementById(id + "error").innerHTML = '';
//     }
//     else {
//         document.getElementById(id + "error").innerHTML = msg;
//         return;
//     }
// }
// let d;
// function showInfo() {
//     const person = {
//         firstName: "",
//         lastName: "",
//         dob: "",
//         email: "",
//         address: "",
//         graduYear: "",
//         education: []
//     }

//     console.log("cALL")
//     let lasstName = document.getElementById("lastName").value;
//     let dob = document.getElementById("dob").value;



//     if (document.getElementById("firstName").value !== '') { person.firstName = document.getElementById("firstName").value } else return;
//     if (document.getElementById("lastName").value !== '') { person.lastName = document.getElementById("lastName").value } else return;
//     if (document.getElementById("dob").value !== '') { person.dob = document.getElementById("dob").value } else return;
//     d = person.dob;
//     if (document.getElementById("email").value !== '') { person.email = document.getElementById("email").value } else return;
//     if (document.getElementById("address").value !== '') { person.address = document.getElementById("address").value } else return;
//     if (document.getElementById("graduation-year").value !== '') { person.graduYear = document.getElementById("graduation-year").value } else return;
//     let edu = document.getElementsByClassName("education");
//     let j = 0;
//     for (let i = 0; i < edu.length; i++) {
//         if (edu[i].style.display !== 'none') {
//             person.education.push({});
//                j++;
//         }
//     }
//     document.getElementById("form").reset();
//     document.getElementById("fullname").innerHTML = ("Name: " + person.firstName + " " + person.lastName);
//     document.getElementById("doba").innerHTML = "DOB: " + person.dob;
//     document.getElementById("add").innerHTML = "Address: " + person.address;
//     document.getElementById("passout").innerHTML = "Graduation: " + person.graduYear;
//     let showcontent = document.getElementById("show-content");
//     showcontent.removeChild;
//     for (let i = 0; i < j; i++) {
//         let row = showcontent.insertRow(i);
//         row.insertCell(0).innerText = person.education[i].degree_Board;
//         row.insertCell(1).innerText = person.education[i].school_college;
//         row.insertCell(2).innerText = person.education[i].start_Year;
//         row.insertCell(3).innerText = person.education[i].passOut_Year;
//         row.insertCell(4).innerText = person.education[i].percentage;
//         row.insertCell(5).innerText = person.education[i].backlog;
//     }
// }

// [A-Za-z0-9\_\.\-]+[@][a-z]+[.][a-z]{2,3}


const details = [];
function person(firs, last, bob, email, address, graduYear, edu) {
    this.first = firs;
    this.last = last;
    this.dob = bob;
    this.email = email;
    this.address = address;
    this.graduYear = graduYear;
    this.edu = edu;
}
function validateName(fieldId, regex, errorMessage, errorSpanId) {
    const inputField = document.getElementById(fieldId);
    const errorSpan = document.getElementById(errorSpanId);
    let pattern = new RegExp(regex)
    if (inputField.value == '' || !pattern.test(inputField.value)) {
        errorSpan.innerHTML = errorMessage;
        return '';
    } else {
        errorSpan.innerHTML = '';
        return inputField.value;
    }
}
function validateAge(fieldId, errorMessage, errorSpanId) {
    const inputField = document.getElementById(fieldId);
    const errorSpan = document.getElementById(errorSpanId);
    let dob = new Date(inputField.value);
    let curr = new Date();
    let year = curr.getFullYear() - dob.getFullYear();
    let month = curr.getMonth() - dob.getMonth();
    if (month < 0 || (month == 0 && curr.getDate() < dob.getDate())) {
        year--;
    }
    if (year >= 18) {
        errorSpan.innerHTML = '';
        return inputField.value;
    }
    else {
        errorSpan.innerHTML = errorMessage;
        return '';
    }
}
function addDataForm(id) {
    console.log("calling me" + id)
    console.log(details[parseInt(id)])
    let form = document.getElementById("myform");
    document.getElementById("firstName").value = details[parseInt(id)].first;
    document.getElementById("lastName").value = details[parseInt(id)].last;
    document.getElementById("dob").value = details[parseInt(id)].age;
    document.getElementById("email").value = details[parseInt(id)].email;
    document.getElementById("address").value = details[parseInt(id)].address;
    document.getElementById("graduation-year").value = details[parseInt(id)].graduYear;
    let length = details[parseInt(id)].edu.length;
    // let classes=document.getElementsByClassName("education");
    // for(let i=3;i<classes.length;i++){
    //     document.getElementById('sections').removeChild(classes[i]);
    // }
    // for(let i=0;i<length-2;i++){
    //     addSection();
    // }
    // let clas=document.getElementsByClassName("education");
    // let j=0;
    // for(let i=0;i<clas.length;i++){
    //     if(j>=length)break;
    //     if(clas[i].style.display!=='none'){
    //         clas[i].getElementsByClassName("degree")[0].value=details[parseInt(id)].edu[j].degree_Board;
    //         clas[i].getElementsByClassName("school")[0].value=details[parseInt(id)].edu[j].school_college;
    //         clas[i].getElementsByClassName("startDate")[0].value=details[parseInt(id)].edu[j].start_Year;
    //         clas[i].getElementsByClassName("endDate")[0].value=details[parseInt(id)].edu[j].passOut_Year;
    //         clas[i].getElementsByClassName("percentage")[0].value=details[parseInt(id)].edu[j].percentage;
    //         j++;
    //     }
    // }
    addOrUpdate(parseInt(id));
}
function deleteData(id) {
    console.log()
    let body = document.getElementById('show-users')
    body.removeChild(document.getElementById(id).parentElement.parentElement);
}
function add(id) {
    let body = document.getElementById('show-users');
    let row;
    if (id == -1) {
        id = details.length - 1;
        row = body.insertRow();
        row.insertCell(0).innerHTML = details[id].first;
        row.insertCell(1).innerText = details[id].last;
        row.insertCell(2).innerText = details[id].dob;
        row.insertCell(3).innerText = details[id].email;
        row.insertCell(4).innerText = details[id].address;
        row.insertCell(5).innerText = details[id].graduYear;
        row.insertCell(6).innerHTML = `<button id=${id} onclick="addDataForm(${id})"  data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button>`;
        row.insertCell(7).innerHTML = `<button id=${id} onclick="deleteData(${id})" >delete</button>`;
    }
    else {
        row = document.getElementById(id).parentElement.parentElement;
        row.cells[0].innerHTML = details[id].first;
        row.cells[1].innerText = details[id].last;
        row.cells[2].innerText = details[id].dob;
        row.cells[3].innerText = details[id].email;
        row.cells[4].innerText = details[id].address;
        row.cells[5].innerText = details[id].graduYear;
    }
}
function validateForm(id, add) {
    let first = validateName('firstName', '^[a-zA-Z]+$', 'name must not null and contains only character', 'firstNameerror');
    let last = validateName('lastName', '^[a-zA-Z]+$', 'name must not null and contains only character', 'lastNameerror');
    let age = validateAge('dob', 'Under age', 'doberror');
    let email = validateName('email', '[a-zA-Z0-9._-]+[@][a-z]+[.][a-z]{2,3}', 'email is not valid', 'emailerror');
    let arr = document.getElementsByClassName('education');
    let educcation = new Array();
    for (let i of arr) {
        if (i.style.display !== 'none') {
            educcation.push({});
            let index = educcation.length - 1;
            educcation[index].degree_Board = i.getElementsByClassName("degree")[0].value;
            educcation[index].school_college = i.getElementsByClassName("school")[0].value;
            educcation[index].start_Year = i.getElementsByClassName("startDate")[0].value;
            educcation[index].passOut_Year = i.getElementsByClassName("endDate")[0].value;
            educcation[index].percentage = i.getElementsByClassName("percentage")[0].value;
        }
    }
    let p = new person(first, last, age, email, document.getElementById("address").value, document.getElementById("graduation-year").value, educcation);
    if (id == -1) {
        details.push(p);
    }
    else {
        details[id] = p;
    }
    add(id);
}


const form = document.getElementById('formsubmit');
function addOrUpdate(id) {
    form.addEventListener('click', function eventHandler(event) {
        event.preventDefault();
        validateForm(id, add);
        document.getElementById("myform").reset();

        this.removeEventListener('click',eventHandler)
    });
}




