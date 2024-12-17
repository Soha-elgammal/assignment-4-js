var user = document.querySelector(".user");
var email = document.querySelector(".email");
var pass = document.querySelector(".pass");
var submit = document.querySelector(".submit");
var par = document.querySelector(".par");
var emailsgin = document.querySelector(".email-sgin");
var passsgin = document.querySelector(".pass-sgin");

var allarry = JSON.parse(localStorage.getItem("allarry")) || [];

function savedata() {
  if (user && email && pass) {
    if (user.value === "" || email.value === "" || pass.value === "") {
      par.innerText = "ALL inputs required";
      par.classList.add("red");
    } else if (user.value !== null && email.value !== null && pass.value !== null && validMail()) {
      var elemnt = {
        user: user.value,
        email: email.value,
        pass: pass.value,
      };
      par.innerText = "Success";
      par.classList.remove("red");
      par.classList.add("green");
      allarry.push(elemnt);
      localStorage.setItem("allarry", JSON.stringify(allarry));
      window.location.href = "login.html";
    } else {
      par.innerText = "Incorrect email";
      par.classList.add("red");
    }
  }
}

function checkperson() {
  if (emailsgin && passsgin) {
    if (emailsgin.value !== "" && passsgin.value !== "") {
      par.innerText = "";
      if (check()) {
        location.href = "home.html";
      } else {
        par.innerText = "Incorrect email or password";
        par.classList.add("red");
      }
    } else {
      par.innerText = "ALL inputs required";
      par.classList.add("red");
    }
  }
}

function check() {
  for (var i = 0; i < allarry.length; i++) {
    if (allarry[i].email.toLowerCase() === emailsgin.value.toLowerCase() && allarry[i].pass.toLowerCase() === passsgin.value.toLowerCase()) {
      localStorage.setItem("name", JSON.stringify(allarry[i].user));
      return true;
    }
  }
  return false;
}

function validMail() {
  var emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
  var testing = emailregex.test(email.value);
  if (testing === true) {
    email.style.color = "green";
    return true;
  } else {
    return false;
  }
}

if (submit && user && email && pass) {
  submit.addEventListener('click', function () {
    savedata();
  });
}

if (submit && emailsgin && passsgin) {
  submit.addEventListener('click', function () {
    checkperson();
  });
}
