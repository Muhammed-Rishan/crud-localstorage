function registerF  () {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var user = {
        name:name,
        phone:phone,
        email:email,
        password:password
    };
    var userdata = JSON.stringify(user);
    localStorage.setItem(name,userdata);
}


const keys = Object.keys(localStorage);
// console.log(keys.length)
// console.log(keys);

for (let index = 0; index < keys.length; index++) {

var userString = localStorage.getItem(keys[index]);


var user = JSON.parse(userString);
var new_row = document.createElement("tr")
var id = document.createElement("td")
var fname = document.createElement("td")
var phone = document.createElement("td")
var email = document.createElement("td")
var password = document.createElement("td")
var action = document.createElement("td")

new_row.appendChild(id)
new_row.appendChild(fname)
new_row.appendChild(email)
new_row.appendChild(phone)
new_row.appendChild(password)
new_row.appendChild(action)


var new_tableRow = document.getElementById("table")
new_tableRow.appendChild(new_row)
id.innerHTML =index+1
fname.innerHTML= user.name //name user data
email.innerHTML =user.email
phone.innerHTML =user.phone
password.innerHTML =user.password
action.innerHTML = "<a class='update' href='update.html?id="+keys[index]+"'>Update</a><button class='delete' onclick='deleteUser()'>Delete</button>"


}


// const btnDelete = document.getElementById('btnDelete');

// btnDelete.onclick = function(){
//     const inputDelKeyD = inputDelKey.value;

//     if(inputDelKey){
//         localStorage.removeItem(inputDelKeyD);
//         location.reload();
//     }
// };

// btnAllDelete.onclick = function(){
//     localStorage.clear();
//     location.reload();
// };

