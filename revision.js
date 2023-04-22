const input1 = [1,2,3,4,5];


input1.map(Number => Math.pow(number, 2));

//Sum of every postive element
const numbers = [1, -4, 12, 0, -3, 29, -150];
/*
const ispos = num => num>0;
input2.filter(ispos)
*/
const isPositive = num => num > 0;
const sum = (a, b) => a + b;
numbers.filter(isPositive).reduce(sum);

//User spread with sum
const nums = [1231, 55454]
sum(...nums)
sum.apply(null,nums)
