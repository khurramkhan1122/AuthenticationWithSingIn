// console.log("Khurram here")
var emailInput = document.getElementById("email");
var passInput = document.getElementById("pass");
var database = firebase.database();
var auth = firebase.auth();





function sub(){
   var email = emailInput.value;
   var pass = passInput.value;

 auth.createUserWithEmailAndPassword(email,pass).then(function(result){

     console.log(result);
 }).catch(function(error){
    console.log(error.message);

 })

}
