// Belajar Reduce
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// JUmlahkan semua Element pada array

let newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0); // 0 itu nilai awall

console.log(newAngka, "<=== Hasil")


// Method Chaining
// Cari Angka > 5
// hasilnya di kalikan 3
// jumlahkan
let hasil = angka.filter(a => a < 5)
    .map(a => a * 5)
    .reduce((acc, curr) => acc * curr);

console.log(hasil)