// let string ='abcdef';
// let char = '';
// function isUniq(string) {
//     for(let i=0; i<string.length; i++){
//         const char= string[i];
//         console.log(string.lastIndexOf(char));
//         if(string.lastIndexOf(char)===-1){
//             return false;
//         }
//     }
//     return true
// }
console.log(isUniq("abcdef"));
// console.log(string.lastIndexOf(char));
function isUniq(string) {
  const set = new Set();
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (set.has(char)) {
      return false;
    }

    set.add(char);
  }
  return true;
}
