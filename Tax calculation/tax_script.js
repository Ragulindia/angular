console.log("hello world");
var age;
var gender;
var income;
var tax;
var first_name;
var last_name;

function calculate(){
    age=document.getElementById("age").value;
    gender=document.getElementById("gender").value;
    
    income=document.getElementById("income").value;
   
    console.log(document.getElementById("age").value);
    console.log(document.getElementById("income").value);
    console.log(document.getElementById("gender").value);
   // console.log(document.getElementById("male").value);
     first_name=document.getElementById("fname").value;
     last_name=document.getElementById("lname").value;
     document.getElementById("fi_name").innerHTML="<td>"+first_name+"<td>";
     document.getElementById("la_name").innerHTML="<td>"+last_name+"<td>";
     document.getElementById("user_age").innerHTML="<td>"+age+"<td>";
     document.getElementById("ann_income").innerHTML="<td>"+income+"<td>";
     

    if((income <= 250000)){
        document.getElementById("tax_pay").innerHTML="TAX FREE";
    }
    else if((income > 250000)&&(income <= 500000)){
        if(gender === "female"){
            tax=income*0.03;
        document.getElementById("tax_pay").innerHTML="<td>"+tax+"<td>";
        }
        else if((age > 60)||(age < 18)){
            tax=income*0.04;
        document.getElementById("tax_pay").innerHTML="<td>"+tax+"<td>";
        }
        else if((income > 250000)&&(income <= 500000)){
        tax=income*0.05;
        document.getElementById("tax_pay").innerHTML="<td>"+tax+"<td>";
        }
    }
    else if(income > 500000){
        

        if(gender === "female"){
            tax=income*0.07;
        document.getElementById("tax_pay").innerHTML="<td>"+tax+"<td>";
        }
        else if((age > 60)||(age < 18)){
            tax=income*0.08;
        document.getElementById("tax_pay").innerHTML="<td>"+tax+"<td>";
        }
    
        else if(income > 500000){
        tax=income*0.10;
        document.getElementById("tax_pay").innerHTML="<td>"+tax+"<td>";
        }
    }
    
}