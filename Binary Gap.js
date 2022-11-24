// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

function solve(n){
    x = (n>>>0).toString(2);
    console.log(x);
    
    maxgap = 0;
    gap = 0;
    i = 0;
    while (i<x.length){
        if(x[i] == 0){
            gap++;
        }
        else if(gap != 0 && x[i] == 1) {
            if (maxgap < gap){
                maxgap = gap;
                gap = 0;
            }
            else{
                gap = 0;
            }
        }
        else{
            //no gap
        }
        
        i++;
    }
    // console.log(maxgap);
    // console.log(gap);
    return maxgap;
}

console.log(solve(1041));