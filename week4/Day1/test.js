
//question 1 ( Portée de la fonction)

// //function autoexecute() { let x = 1;};console.log(x);
//Uncaught ReferenceError: x is not defined

//question 2 (Accès avant déclaration)

//function doSomething(){console.log(x); //undefined var x = 1;  console.log("x: ", x); //x: 1 } doSomething(); RETUNE 

//function doSomething(){ console.log(x); let x = 1; } doSomething(); RETORN NOTHING 
//Uncaught ReferenceError: x is not defined

//function doSomething(){ var x = 1 var x = 2; console.log("x: ",x); //x: 2 } doSomething(); RETOURN 2 CAR C EST LA DERNIER VALEUR DECLARE 

//function doSomething(){ let x = 1  let x = 2; } doSomething() NOTHING 

//EXERCICE
//function checkAge(age) {if (age < 18) {  const message = "Sorry, you're too young.";} else {const message = "Yay! You're old enough!"; } return message;}console.log(checkAge(21)); // return error because we did nt declared message befor we did do let message befor if 

function myFunc (x, y) {
  return x + y;
}

myFunc(2,9);

const myFunc1 = (x, y) => {
  return x + y;
}

myFunc1(6,7)