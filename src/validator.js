function firstFunction() {
  var inpObj = document.getElementById("firstname");
  if (!inpObj.checkValidity()) {
    document.getElementById("firstError").innerHTML = "*Enter a Valid Name";
  }
  else
    document.getElementById("firstError").innerHTML = "";
}

function lastFunction() {
  var inpObj = document.getElementById("lastname");
  if (!inpObj.checkValidity()) {
    document.getElementById("lastError").innerHTML = "*Enter a Valid Name";
  }
  else
    document.getElementById("lastError").innerHTML = "";
}
function dobFunction() {
  var inpObj = document.getElementById("dob");
  if (!inpObj.checkValidity()) {
    document.getElementById("dobError").innerHTML = "*Please Enter in given format DD-MMM";
  }
  else
    document.getElementById("dobError").innerHTML = "";
}
function mailFunction() {
  var inpObj = document.getElementById("mail");
  if (!inpObj.checkValidity()) {
    document.getElementById("mailError").innerHTML = "*Enter only infosys mail";
  }
  else
    document.getElementById("mailError").innerHTML = "";
}
function uidFunction() {
  var inpObj = document.getElementById("uid");
  if (!inpObj.checkValidity()) {
    document.getElementById("uidError").innerHTML = "*Enter a valid 4 digit uid";
  }
  else
    document.getElementById("uidError").innerHTML = "";
} 
function phoneFunction() {
  var inpObj = document.getElementById("phone");
  if (!inpObj.checkValidity()) {
    document.getElementById("phoneError").innerHTML = "*Enter a valid phone number";
  }
  else
    document.getElementById("phoneError").innerHTML = "";
}