// Buat function untuk menampilkan product dengan prefix tertentu
const fs = require("fs");
const readline = require("readline")

const stream = fs.createReadStream("./sampleData.csv");
const reader = readline.createInterface({ input: stream });

let catchData = [];
let str = "";

reader.on("line", data => {
    catchData.push.apply(catchData, data.split(' '));
    // let products = catchData.filter(e => {
    //     return e.substring(0, 1) === 'A';
    // });
    // console.log(products);

    console.log(filterProducts('A', catchData));
    console.log(filterProducts('S', catchData));
})

function filterProducts(key, products) {
    let filtered = products.filter(e => {
        return e.startsWith(key);
    });

    return filtered;
}