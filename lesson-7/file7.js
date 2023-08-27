// Task 1
let a = 1, b = 1; 

let c = ++a;
let d = b++;

alert( ++a ); // 2
alert( b++ ); //1
alert( a ); // 2
alert( b );// 2


// Task 2
"" + 1 + 0;//10
"" - 1 + 0;//-10
true + false; //1
6 / "3"; //2
"2" * "3"; //6
4 + 5 +"px"; // 9px
"$" + 4 + 5; //9px
"4" - 2; //2
"4px" - 2; // NaN
"  -9  " + 5; // " -9 5 " 
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
" \t \n" - 2; // -2

//Task 3
let a = prompt("Перше число?", 1);
let b = prompt("Друге число?", 2);

alert(a + b); // 12

let a = prompt("Перше число?", 1);
let b = prompt("Друге число?", 2);

alert(+a + +b); 
