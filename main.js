/* 
Write a function that takes a number and returns that number in descending order
descendingOrder(123) should return (321)
descendingOrder(89754258) should return (98875542)
descendingOrder(4446669) should return (9666444)
*/

//👉 Write the function your CodeWarriors will start with below here:
export function descendingOrder(n){
    //Your code goes here..
    return parseInt(n.toString().split('').sort().reverse().join(""))
};

