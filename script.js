// // //print first 10 natural numbers-1,2,3,4,5,6,7,8,9,10
// // //using iterative statements- while, for
// // //while - 3 steps:initialization,condition(stop),updation (increment/decrement)
// // //conditions - relational operators(==,!=,<,>,<=,>=) - compare 2 values/variables
// // var i = 1;
// // while (i<=10){
// //     var result = document.write(i+"<br>");
   
// //     i += 1; //i=i+1 - += -> add and assign operator
// // }
// // document.write("End loop..");
// // var y = document.getElementById("id1").innerHTML = result;

// //for loop - for(initialize, condition(stop), updation)

// //print "Fullstack" for 5 times - for loop
// // for (var x=1; x<=5; x++){
// //     var output = document.write("Fullstack" + "<br>");
// // }
// // document.write ("End for loop..");
// // document.getElementById("id1").innerHTML = output;

// // //generate 10 random numbers between 1 - 20
// // //conditional statements - if, else if, else
// // var res = document.write(24!=24)//true/false
// var n = 35; //positive/negative/neutral
// if(n>0){
//     var res = document.write("Positive Integer");
// }
// else if(n<o){
//     var res = document.write("Negative Integer");
// }
// else{
//     var res = document.write("Neutral Integer");
// }
// document.getElementById("id1").innerHTML = res;
 
//generate even numbers between 1-20
// for(var z=1;z<=20;z++){
//     if(z%2==0){ //eve numbers
//         var res = document.write(z+"<br>");
//     }
// }
// DocumentTimeline.getElementById("id1").innerHTML = res;
for(var z = 2; z <= 20; z+=2){
    var res = document.write(z+"<br>");
}
document.getElementById("id1").innerHTML = res;
