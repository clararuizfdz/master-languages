console.log("************** PRACTICE *********************");
console.log("************** HOISTING *********************");
// Hoisting

// function hoisting() {
//     console.log("Hoisting: ", hoistingA);
//     console.log(g());
  
//     var hoistingA = "good job!";
//     function g() {
//       return hoistingA;
//     }
//     console.log(hoistingA);
//   }
//   hoisting();
  
//   // Result:
//   // undefined
//   // good job!
//   // undefined
  
//   var a = 1;
  
//   (function() {
//     console.log(a);
//     var a = 2;
//     var b = 4;
//     var c = 3;
//   })();
  
//   console.log(a);
//   // console.log(b);
//   // console.log(c);
  
//   //Result:
//   // 1
//   //error
//   //error
  
//   f3();
//   var a = 1;
  
//   function f3() {
//     console.log(a);
//     var b = 4;
//     var c = 3;
//   }
  
//   console.log(a);
//   console.log(b);
//   console.log(c);
