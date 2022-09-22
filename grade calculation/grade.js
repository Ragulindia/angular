function calcu_grade() {
      let stName = document.getElementById("stdName").value;
      let stRoll = document.getElementById("rollNo").value;
      let stClass = document.getElementById("standard").value;
      let stSec = document.getElementById("section").value;
      let sbTam = document.getElementById("tamil").value;
      let sbEng = document.getElementById("english").value;
      let sbMat = document.getElementById("mathematics").value;
      let sbChe = document.getElementById("chemistry").value;
      let sbPhy = document.getElementById("physics").value;
      let sbCs = document.getElementById("com_sci").value;
      //console.log(stName);


      document.getElementById("pName").innerHTML = "NAME: " + stName;
      document.getElementById("pRoll").innerHTML = "ROLL NO: " + stRoll;
      document.getElementById("pClass").innerHTML = "STANDARD: " + stClass;
      document.getElementById("pSection").innerHTML = "SECTION: " + stSec;
     // console.log(sbTam);

     
      switch (true) {

            case (sbTam > "90"):
                  document.getElementById("pTamil").innerHTML = "Your tamil subject grade = S";
                  break;
            case (sbTam > "80"):
                  document.getElementById("pTamil").innerHTML = "Your tamil subject grade = A";
                  break;

            case (sbTam > "70"):
                  document.getElementById("pTamil").innerHTML = "Your tamil subject grade = B";
                  break;
            case (sbTam >= "50"):
                  document.getElementById("pTamil").innerHTML = "Your tamil subject grade = C";
                  break;
            default:
                  document.getElementById("pTamil").innerHTML = "Your tamil subject grade =U";
      }

      switch (true) {

            case (sbEng > "90"):
                  document.getElementById("pEng").innerHTML = "Your English subject grade = S";
                  break;
            case (sbEng > "80"):
                  document.getElementById("pEng").innerHTML = "Your English subject grade = A";
                  break;

            case (sbEng > "70"):
                  document.getElementById("pEng").innerHTML = "Your English subject grade = B";
                  break;
            case (sbEng >= "50"):
                  document.getElementById("pEng").innerHTML = "Your English subject grade = C";
                  break;
            default:
                  document.getElementById("pEng").innerHTML = "Your English subject grade =U";
      }

      switch (true) {

            case (sbMat > "90"):
                  document.getElementById("pMat").innerHTML = "Your Mathematics subject grade = S";
                  break;
            case (sbMat > "80"):
                  document.getElementById("pMat").innerHTML = "Your Mathematics subject grade = A";
                  break;

            case (sbMat > "70"):
                  document.getElementById("pMat").innerHTML = "Your Mathematics subject grade = B";
                  break;
            case (sbMat >= "50"):
                  document.getElementById("pMat").innerHTML = "Your Mathematics subject grade = C";
                  break;
            default:
                  document.getElementById("pMat").innerHTML = "Your Mathematics subject grade =U";
      }
      switch (true) {

            case (sbChe > "90"):
                  document.getElementById("pChe").innerHTML = "Your Chemistry subject grade = S";
                  break;
            case (sbChe > "80"):
                  document.getElementById("pChe").innerHTML = "Your Chemistry subject grade = A";
                  break;

            case (sbChe > "70"):
                  document.getElementById("pChe").innerHTML = "Your Chemistry subject grade = B";
                  break;
            case (sbChe >= "50"):
                  document.getElementById("pChe").innerHTML = "Your Chemistry subject grade = C";
                  break;
            default:
                  document.getElementById("pChe").innerHTML = "Your Chemistry subject grade =U";
      }

      switch (true) {


            case (sbPhy > "90"):
                  document.getElementById("pPhy").innerHTML = "Your Physis subject grade = S";
                  break;
            case (sbPhy > "80"):
                  document.getElementById("pPhy").innerHTML = "Your Physis subject grade = A";
                  break;

            case (sbPhy > "70"):
                  document.getElementById("pPhy").innerHTML = "Your Physis subject grade = B";
                  break;
            case (sbPhy >= "50"):
                  document.getElementById("pPhy").innerHTML = "Your Physis subject grade = C";
                  break;
            default:
                  document.getElementById("pPhy").innerHTML = "Your Physis subject grade =U";
      }


      switch (true) {

            case (sbCs > "90"):
                  document.getElementById("pCs").innerHTML = "Your Computer Science subject grade = S";
                  break;
            case (sbCs > "80"):
                  document.getElementById("pCs").innerHTML = "Your Computer Science subject grade = A";
                  break;

            case (sbCs > "70"):
                  document.getElementById("pCs").innerHTML = "Your Computer Science subject grade = B";
                  break;
            case (sbCs >= "50"):
                  document.getElementById("pCs").innerHTML = "Your Computer Science subject grade = C";
                  break;
            default:
                  document.getElementById("pCs").innerHTML = "Your Computer Science subject grade =U";
      }



}
a=80;
b=30;
sum= a-b;

console.log(sum);
var a,b,sum;