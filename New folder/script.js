
function myfunction() {
    alert("You are submitted the data!");
}

document.write("hello world<br>")
document.getElementById("regid").style.backgroundColor = "yellow"
document.write(Date())
document.write("<h3>hello world</h3><p>This is the javascript ")
document.getElementById("regid").innerHTML = "Reg form"
document.getElementById("regid").style.color = "blue"
function colo() {
    document.getElementById("btn").style.backgroundColor = "blue";
    document.getElementById("btn").style.color = "red";
    document.getElementById("regid").style.color = "white";
    document.getElementById("regid").style.backgroundColor = "green";

}
function selectcity() {
    var value = document.getElementById("city").value;
    document.getElementById("sltvalue").innerHTML = "Selected Year:" + " " + value;
    console.log(document.getElementById("city"));
    console.log(document.getElementById("city").value);
}
function mousechange() {
    document.getElementById("btn").style.backgroundColor = "tomato";
    document.getElementById("btn").style.color = "white";
}
function mouseout() {
    document.getElementById("btn").style.backgroundColor = "green";
    document.getElementById("btn").style.color = "white";
}
function gen() {
    var gender = document.getElementById("male").value;
    var gender = document.getElementById("male").value;
    document.getElementById("sltgen").innerHTML = gender;
}
function firstname() {
    document.getElementById("fname").style.backgroundColor = "green";
    document.getElementById("fname").style.color = "#fff";
    document.getElementById("fname").style.fontSize = "14px";

}
function entername(fname, lname) {
    //  alert("Hi, "+fname+" "+lname);
    console.log("Hi, " + fname + " " + lname);
}
entername("Ragul", "P")

function Add(val1, val2) {
    var result = val1 + val2;
    return result;
}
var addres = Add(10, 20);
console.log("The result is " + addres);
function Sub(v1,v2){
    var sub=v1-v2;
    return sub;
}
var subres=Sub(10,20);
console.log("sub is "+subres);
