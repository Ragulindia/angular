document.getElementById("header").style.color = "blue";

function calculator(actType) {
    var num1;
    var num2;
    var ans;

    if (actType == 'add') {
        num1 = document.getElementById("val1").value;
        num2 = document.getElementById("val2").value;
        ans = +num1 + +num2;
        document.getElementById("val3").value = ans;
    }
    else if (actType == 'sub') {
        num1 = document.getElementById("val1").value;
        num2 = document.getElementById("val2").value;
        ans = num1 - num2;
        document.getElementById("val3").value = ans;
    }
    else if (actType == 'mul') {
        num1 = document.getElementById("val1").value;
        num2 = document.getElementById("val2").value;
        ans = num1 * num2;
        document.getElementById("val3").value = ans;
    }
    else if (actType == 'div') {
        num1 = document.getElementById("val1").value;
        num2 = document.getElementById("val2").value;
        ans = num1 / num2;
        document.getElementById("val3").value = ans;
    }
}
function calc() {

    var v1;
    var v2;
    var v3;
    v1 = document.getElementById("n1").value;
    v2 = document.getElementById("n2").value;
    v3 = document.getElementById("dropdown").value;

    if (v3 === '+') {
        document.getElementById("n3").value = +v1 + +v2;
    }
    else if (v3 === '-') {
        document.getElementById("n3").value = v1 - v2;
    }
    else if (v3 === '*') {
        document.getElementById("n3").value = v1 * v2;
    }
    else if (v3 === '/') {
        document.getElementById("n3").value = v1 / v2;
    }

}

//this code for a Ternary operator

function terybtn() {
    var a;
    var b;
    var c;
    d = "a is grater than b";
    e = "b is grater than a";


    a = document.getElementById("Value1").value;
    b = document.getElementById("Value2").value;
    c = (a > b) ? d : e;

    document.getElementById("tery_para").innerHTML = c;


}
//this code for a while condition statements


console.log("--------while------");
function printwhile() {
    var i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
}
printwhile();

//this code for a do_while condition statements

console.log("-------do_while------");
function printdowhile() {
    var a = 3;
    do {
        console.log(a);
        a++;
    } while (a < 10);
}
printdowhile()
console.log("----for loop----");

//------------------ For loop------------------------------

function forloop() {
    let n = document.getElementById("for_input").value;
    for (let i = 0; i < n; i++) {
        document.getElementById("for_para").innerHTML +=+   i +", ";
        console.log(i);
    }
}
//Strings methods

function stringbtn() {
    let text = document.getElementById("string").value;
    console.log(document.getElementById("string").value);

    let length = text.length;
    document.getElementById("stgln").innerHTML = "Text length is " + length;

    let newText = text.replace("learning", "working");
    document.getElementById("stgrp").innerHTML = newText;

    let upper = text.toUpperCase();
    document.getElementById("stgup").innerHTML = upper;

    let lower = text.toLowerCase();
    document.getElementById("stglc").innerHTML = lower;

    let text2 = " in credo sysytems";
    let concat = text.concat(text2);
    document.getElementById("stgcon").innerHTML = concat;

    let text3 = "    i am leraning java script";
    let Trim = text3.trim();
    document.getElementById("stgtm").innerHTML = Trim;

    let char = text.charAt(4);
    document.getElementById("stgch").innerHTML = "value of the 4 th index is: " + char;

    let intex = text.indexOf("a");
    document.getElementById("stgio").innerHTML = "The char 'a' posistion is:  " + intex;

    let stnslc = text.slice(-4);
    document.getElementById("stgslice").innerHTML = stnslc;

    let subs = text.substring(4);
    document.getElementById("stgsbslice").innerHTML = subs;

    let splt = text.split(" ");
    document.getElementById("stgsplit").innerHTML = splt;
}
//----------Array methods------

let student = ["Ragul", 101, "B.E", "A"];
console.log(student);
student.push("2020");
console.log(student);
student.pop()


//-----------Array loop using for loop----

let friuts = ["mango", "orange", "lemon", "apple", "banana", "mango1", "mango2", "orange1", "lemon1", "apple1", "banana1", "mango3"];
console.log("----Array loop using for loop---")
for (i = 0; i < friuts.length; i++) {

    console.log(i);
}
//-------- dropdown assignment--------------

function dropdown_country() {
    var country = document.getElementById("slt_coun").value;
    document.getElementById("slt_cap").value = country;
}

function dropdown_capital() {
    var capital = document.getElementById("slt_cap").value;
    document.getElementById("slt_coun").value = capital;
}

// find the no of days in year assignment

function sbt_year() {
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
        document.getElementById("p_year").innerHTML = year + " is a Leap year";
        document.getElementById("total_days").innerHTML = "Total days in " + year + " is 366";

        if (month == 1) {
            document.getElementById("p_month").innerHTML = "Total no of days in January is 31";

        }
        else if (month == 2) {
            document.getElementById("p_month").innerHTML = "Total no of days in February is 29";
        }
        else if (month == 3) {
            document.getElementById("p_month").innerHTML = "Total no of days in March is 31";
        }
        else if (month == 4) {
            document.getElementById("p_month").innerHTML = "Total no of days in April is 30";
        }
        else if (month == 5) {
            document.getElementById("p_month").innerHTML = "Total no of days in May is 31";
        }
        else if (month == 6) {
            document.getElementById("p_month").innerHTML = "Total no of days in June is 31";
        }
        else if (month == 7) {
            document.getElementById("p_month").innerHTML = "Total no of days in July is 30";
        }
        else if (month == 8) {
            document.getElementById("p_month").innerHTML = "Total no of days in August is 31";
        }
        else if (month == 9) {
            document.getElementById("p_month").innerHTML = "Total no of days in Septemper is 30";
        }
        else if (month == 10) {
            document.getElementById("p_month").innerHTML = "Total no of days in October is 31";
        }
        else if (month == 11) {
            document.getElementById("p_month").innerHTML = "Total no of days in November is 30";
        }
        else if (month == 12) {
            document.getElementById("p_month").innerHTML = "Total no of days in December is 31";
        }


    }
    else {

        document.getElementById("p_year").innerHTML = year + " is common year";
        document.getElementById("total_days").innerHTML = "Total days in " + year + " is 365";

        if (month == 1) {
            document.getElementById("p_month").innerHTML = "Total no of days in January is 31";

        }
        else if (month == 2) {
            document.getElementById("p_month").innerHTML = "Total no of days in February is 28";
        }
        else if (month == 3) {
            document.getElementById("p_month").innerHTML = "Total no of days in March is 31";
        }
        else if (month == 4) {
            document.getElementById("p_month").innerHTML = "Total no of days in April is 30";
        }
        else if (month == 5) {
            document.getElementById("p_month").innerHTML = "Total no of days in May is 31";
        }
        else if (month == 6) {
            document.getElementById("p_month").innerHTML = "Total no of days in June is 31";
        }
        else if (month == 7) {
            document.getElementById("p_month").innerHTML = "Total no of days in July is 30";
        }
        else if (month == 8) {
            document.getElementById("p_month").innerHTML = "Total no of days in August is 31";
        }
        else if (month == 9) {
            document.getElementById("p_month").innerHTML = "Total no of days in Septemper is 30";
        }
        else if (month == 10) {
            document.getElementById("p_month").innerHTML = "Total no of days in October is 31";
        }
        else if (month == 11) {
            document.getElementById("p_month").innerHTML = "Total no of days in November is 30";
        }
        else if (month == 12) {
            document.getElementById("p_month").innerHTML = "Total no of days in December is 31";
        }


    }
}
