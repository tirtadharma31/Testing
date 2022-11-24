// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

function solve(a, k){
    // x = [3,2,1]
    // newX=[];
    
    // i = 0;
    // while(i<(x.length-1)){
    //     if(i==0){
    //         newX.push(x[x.length - 1]);
    //     }
        
    //     newX.push(x[i]);
    //     i++;
    // }
    
    i=0;
    while (i<k){
        let lastElement = a[a.length - 1]
        a.unshift(lastElement)
        a.pop()
        i++
    }
    
    return a;
}

let arr = [3, 8, 9, 7, 6]
k = 3
console.log(solve(arr, k));
// solve(arr, k);