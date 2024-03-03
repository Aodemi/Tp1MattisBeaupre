////////////////// Obtenez le modal d'inscription ///////////////////////
// Vérifie les données entrées de l'utilisateur et les comparent à ceux du LocalStorage pour donner accès ou non à la liste de tâches.
function userInfo() {
  const userNameLog = document.getElementById("usernameLogin").value;
  const userPasswordLog = document.getElementById("pswLogin").value;
  const loginName = localStorage.getItem("userName");
  const loginPw = localStorage.getItem("userPw");
  if ((userPasswordLog == loginPw) && (userNameLog == loginName)) {
    document.location='accueil.html';
  }
  else {
    alert("Nom ou mot de passe incorrect.")
  }
  // Todo
}

// Fonction d'enregistrement des informations fournis pour l'inscription
function userRegist() {
  const userNameReg = document.getElementById("username").value;
  const userPwReg = document.getElementById("psw").value;
  if ((userNameReg != "") && (userPwReg != "")){
    localStorage.setItem("userName", userNameReg);
    localStorage.setItem("userPw", userPwReg);
    document.location='accueil.html';
  }
  else{
    alert("Veuillez les informations requisent")
  }
}


// ////////////////// Obtenez le modal d'inscription ///////////////////////
 var modal = document.getElementById('id01');

 // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }


// ///////////////// Obtenez le modal de connexion //////////////////////////
 var modal2 = document.getElementById('id02');

 // Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
 window.onclick = function(event) {
     if (event.target == modal2) {
         modal.style.display = "none";
     }
 }