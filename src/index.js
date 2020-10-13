module.exports = function toReadable (number) {
 
const num = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];  

const dec = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']; 

if (number === 0) return 'zero';

let str = '000' + String(number);

let str3 = str.substring(str.length - 3);

let arr = Array.from(str3, Number);

console.log(arr);
let W1 = arr[0] === 0 ? '' : num[arr[0]] + ' hundred';

let W2 = (arr[2] === 0 ? dec[arr[1]] : dec[arr[1]] && dec[arr[1]]);

let W3;
if (arr[1] === 1) {
    W3 = num[(arr[2] + 10)];
} else if (arr[2] === 0) {
    W3 = '';
} else {
    W3 = num[arr[2]];
};


let rez = [W1, W2, W3];
let fin = rez.filter(element => element !== '');

let finit = fin.join(' ');

console.log(finit);
return finit;
}


