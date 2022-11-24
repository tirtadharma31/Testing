let fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];
let sayur = ["Kangkung", "Bayam", "Tomat", "Bawang", "Bayam"];

// 1a. Sintak array push
/*
function arrPush(input){
    fruits.push.apply(fruits, input);
    return fruits;
}
console.log(arrPush(["Anggur", "Banana", "Sirsak"]));
*/

fruits.push("Anggur", "Banana", "Sirsak");
console.log(fruits);


// 1b. Sintak array pop
fruits.pop();
console.log(fruits);


// 1c. Sintak array splice hapus 1 items
fruits.splice(2, 1);
console.log(fruits);


// 1d. Sintak array splice hapus
fruits.splice(0, fruits.length, "Jeruk", "Mangga", "Banana");
console.log(fruits);


// 1e. Sintak array splice add
fruits.splice(2, 0, "Rambutan", "Bangkuang");
console.log(fruits);


// 1f. Sintak array splice replace
fruits.splice(4, 1, "Nangka");
console.log(fruits);


// 1g. Sintak array concat
let newArray = fruits.concat(sayur);
console.log(newArray);


// 1h. Sintak array reverse
console.log(newArray.reverse());


// 1j. Buat function dengan 3 parameter
function switchElement(vege, str1, str2) {
    let tempStr1 = str1.charAt(0);
    tempStr1 += str1.substring(1, str1.length).toLowerCase();

    let tempStr2 = str2.charAt(0);
    tempStr2 += str2.substring(1, str1.length).toLowerCase();

    let indexStr1 = newArray.indexOf(tempStr1);
    let indexStr2 = newArray.indexOf(tempStr2);

    newArray.splice(indexStr1, 1, ' ');
    newArray.splice(indexStr2, 1, str1);

    newArray.reverse();
    return newArray;
}

console.log(switchElement('vege', 'TOMAT', 'JERUK'));
