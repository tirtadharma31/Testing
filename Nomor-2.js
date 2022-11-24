// Buat function konversi data dari csv ke array
const fs = require("fs");
const readline = require("readline")

const stream = fs.createReadStream("./sampleData.csv");
const reader = readline.createInterface({ input: stream });

let catchData = [];

reader.on("line", data => {
    catchData.push.apply(catchData, data.split(' '));
    console.log(catchData);
})