// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

function solve(n){
    const arr = n.split("")
    let count = 0
    
    if(!arr.includes('1')){
        return 0
    }
    
    do{
        if(arr[arr.length-1] == 0){
            arr.unshift(0)
            arr.pop()
        }else{
            arr.pop()
            arr.push(0)
        }
        count++
    }
    while (arr.includes('1'))
    
    return count
    
    // a = 50
    // b = 1
    // x = a >> b
    // console.log(a.toString(2));
    // console.log(b.toString(2));
    // console.log(x.toString(2));
}
console.log(solve('011100'))
// solve();