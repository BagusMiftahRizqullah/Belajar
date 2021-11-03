//

//Object Literal // harus membuat object baru
// let mahasiswa = {
//     nama: 'Bagus',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama} Selamaat Makan`)
//     }
// }


// Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = [];
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama} Selamaat Makan`)
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama} Selamaat Bermain`)

//     }
//     return mahasiswa
// }

// let bagus = Mahasiswa('bagus', 10);
// let miftah = Mahasiswa('miftah', 10);

// Constructor Function

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama} Selamaat Makan`)
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama} Selamaat Bermain`)

//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Hallo ${this.nama} Selamaat Tidur yah`)
//     }
// }


// Object.Create
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     // mahasiswa.makan = methodMahasiswa.makan;
//     // mahasiswa.main = methodMahasiswa.main;
//     // mahasiswa.tidur = methodMahasiswa.tidur;

//     return mahasiswa;

// }




//Proptotype
// function Mahasiswa(nama, energi) {
//     // let mahasiswa = Object.create(methodMahasiswa);
//     this.nama = nama;
//     this.energi = energi;

// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama} Selamaat Makan`)
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama} Selamaat Bermain`)
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     console.log(`Hallo ${this.nama} Selamaat Tidur yah`)
// }

// let bagus = new Mahasiswa('bagus', 10);

//prototype Class
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;

    }

    makan(porsi) {
        this.energi += porsi;
        console.log(`Hallo ${this.nama} Selamaat Makan`)
    }

    main(jam) {
        this.energi -= jam;
        console.log(`Hallo ${this.nama} Selamaat Bermain`)
    }

    tidur(jam) {
        this.energi += jam * 2;
        console.log(`Hallo ${this.nama} Selamaat Tidur yah`)
    }
}

let bagus = new Mahasiswa('bagus', 10);




