function warning() {
  let warning = document.getElementById("warning");
  warning.innerHTML = "Warning! You must be 18+ to view this video!";
}

//menja boju karticama
function dodajBoju1() {
  let jedan = document.getElementById("jedan");
  jedan.style.background = "pink";
}

function oduzmiBoju1() {
  let jedan = document.getElementById("jedan");
  jedan.style.background = "white";
}

function dodajBoju2() {
  let dva = document.getElementById("dva");
  dva.style.background = "pink";
}

function oduzmiBoju2() {
  let dva = document.getElementById("dva");
  dva.style.background = "white";
}

function dodajBoju3() {
  let tri = document.getElementById("tri");
  tri.style.background = "pink";
}

function oduzmiBoju3() {
  let tri = document.getElementById("tri");
  tri.style.background = "white";
}

function dodajBoju4() {
  let cetiri = document.getElementById("cetiri");
  cetiri.style.background = "pink";
}

function oduzmiBoju4() {
  let cetiri = document.getElementById("cetiri");
  cetiri.style.background = "white";
}

//konvertor vode u energiju i obrnuto

function w2e() {
  let water = document.getElementById("water").value;
  document.getElementById("energy").value = water;
  document.getElementById("costW").innerHTML = water + " euro";
  document.getElementById("costE").innerHTML = water / 100 + " euro";
}

function e2w() {
  let energy = document.getElementById("energy").value;
  document.getElementById("water").value = energy;
  document.getElementById("costE").innerHTML = energy / 100 + " euro";
  document.getElementById("costW").innerHTML = energy + " euro";
}

function izracunaj() {
  let cooker = Number(document.getElementById("cooker").value);
  let pot = Number(document.getElementById("pot").value);

  let energy = Number(document.getElementById("energy").value);
  let water = Number(document.getElementById("water").value);
  energy = water / 100;

  let konacniRez = (document.getElementById("konacniRez").innerHTML =
    cooker + pot + water + energy + " euro");
}

//proverava formu

function ime() {
  let username = document.getElementById("username");
  let error1 = document.getElementById("error1");

  if (username.value.length < 4 || username.value.length > 11) {
    username.style.background = "red";
    error1.innerHTML = "Please enter a username between 3 and 10 characters";
  } else {
    username.style.background = "";
    error1.innerHTML = "";
  }
}
function mejl() {
  let email = document.getElementById("email");
  let error2 = document.getElementById("error2");

  if (email.value.length < 15 || email.value.length > 30) {
    email.style.background = "red";
    error2.innerHTML = "Invalid email";
  } else {
    email.style.background = "";
    error2.innerHTML = "";
  }
}

function pswd() {
  let pwd = document.getElementById("pwd");
  let error3 = document.getElementById("error3");
  let cpwd = document.getElementById("cpwd");
  let error4 = document.getElementById("error4");

  if (pwd.value.length < 4 || pwd.value.length > 11) {
    pwd.style.background = "red";
    error3.innerHTML = "Please enter a password between 3 and 10 characters";
  } else {
    pwd.style.background = "";
    error3.innerHTML = "";
  }

  if (cpwd.value != pwd.value || pwd.value != cpwd.value) {
    cpwd.style.background = "red";
    error4.innerHTML = "Passwords are not the same!";
  } else {
    cpwd.style.background = "";
    error4.innerHTML = "";
  }
}

function tnx() {
  let ostalo = document.getElementById("ostalo");
  ostalo.style.visibility = "visible";
}
