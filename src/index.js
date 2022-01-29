module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let closeBrakets = {};
  let openBackets = bracketsConfig.map(item => {
     closeBrakets[item[1]] = item[0];
     return item[0]});

     for (let i = 0; i < str.length; i++) {
       let simbol = str[i];
       if (openBackets.includes(simbol)) {
         if (simbol in closeBrakets) { 
           if (stack.length === 0) {stack.push(simbol)} else {
               if (stack[stack.length - 1] === simbol) {
                 stack.pop();
                } else {stack.push(simbol)};
           }
         } else {
           stack.push(simbol);}

       } else {
          if (stack.length === 0) {
             return false;
          } 
          let top = stack[stack.length - 1];
          if (closeBrakets[simbol] === top) {stack.pop()} else {return false};   
       }
     }

     return (stack.length === 0);
   

  // your solution
}
