// 21
function isEven(num){
   if (num % 2 == 0) {
       console.log("even");
   }
}

// 22
function getColor(phrase){
   if (phrase == 'stop') {
       console.log('red');
   } else if (phrase == 'slow') {
       console.log('yellow');
   } else if (phrase == 'go') {
       console.log('green');
   } else {
       console.log('purple');
   }
}

// 23
const num = 102; 

if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}

// 24
const mystery = 'Peache7';
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}
