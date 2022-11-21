// 1. Buat Function menjumlahkan 4 digit angka
function sum(num) {
    const tempArr = Array.from(String(num));
    // let result = 0;

    // for(let i = 0; i < tempArr.length; i++){
    //     result = result + Number(tempArr[i]);
    // }

    // return result;

    let result = 0
    tempArr.forEach(e => {
        result += Number(e);
    });

    return result;
}

// sum(3456)
console.log(sum(3456))