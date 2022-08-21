// let a = 0;

// function count() {
//   a++;
//   console.log(a);
// }

// count();
// count();
// count();

function cs2() {
  let fd = 0;
  return function () {
    fd++;
    console.log(fd);
  };
}
// console.log(cs2);
let d = cs2();
d();
d();
d();
