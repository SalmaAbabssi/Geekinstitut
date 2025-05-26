// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`); // Prediction: 3
}

// #1.1 - run in the console:
funcOne(); 
// Affiche : inside the funcOne function 3

// #1.2 - Que se passe-t-il si la variable est déclarée avec const ?
/*
   → Si on utilise `const` au lieu de `let`, on ne pourra pas réassigner la valeur de `a` dans le `if`.
   Cela générera une erreur du type : "Assignment to constant variable."
*/


// #2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1
funcThree(); // Affiche : inside the funcThree function 0
funcTwo();   // modifie la variable globale a = 5
funcThree(); // Affiche : inside the funcThree function 5

// #2.2 - Que se passe-t-il si la variable est déclarée avec const ?
/*
   → Si `a` est déclaré avec `const`, alors on ne pourra pas la modifier dans `funcTwo()`.
   Cela générera une erreur : "Assignment to constant variable."
*/


// #3
function funcFour() {
    window.a = "hello"; // déclare une variable globale via l'objet global `window`
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1
funcFour(); // définit a = "hello" dans l'objet global
funcFive(); // Affiche : inside the funcFive function hello


// #4
let a = 1;
function funcSix() {
    let a = "test"; // portée locale à la fonction
    alert(`inside the funcSix function ${a}`);
}

// #4.1
funcSix(); // Affiche : inside the funcSix function test

// #4.2 - Que se passe-t-il si on utilise const au lieu de let ?
/*
   → Pas de problème ici. `const a = "test"` fonctionne aussi, car on ne change pas sa valeur.
*/


// #5
let a = 2;
if (true) {
    let a = 5; // portée locale au bloc if
    alert(`in the if block ${a}`); // Affiche : in the if block 5
}
alert(`outside of the if block ${a}`); // Affiche : outside of the if block 2

// #5.2 - Que se passe-t-il si on utilise const ?
/*
   → Le comportement est identique si on utilise `const`, tant qu'on ne tente pas de réassigner la variable.
   Les blocs `let` et `const` ont la même portée (`block scope`)
