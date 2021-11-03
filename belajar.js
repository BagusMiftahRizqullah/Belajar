// //callback
// function halo(nama) {
//     console.log(`Halo, ${nama}`);
// }

// function tampil(callback) {
//     const nama = "miftah"
//     callback(nama);
// }

// tampil(halo)

// const angkaGanjil = (angka) => {
//     for (let i = 1; i <= angka; i++) {
//         if (i % 2 == 0) {
//             console.log(i, "ini genap")
//         }
//         else {
//             console.log(i, "ini ganjil")
//         }

//     }
// }
let piket = {

    senin: ["bagus", "dany"],
    selasa: ["dewi", "dany"],
    rabu: ["bagus", "endi"],
    kamis: ["dany", "dewi"],
    jummat: ["bagus", "saiful"],

}

let days = Object.keys(piket);
// console.log(days)

const findOrang = (a) => {
    for (let i = 0; i < days.length; i++) {

        if (days[i] == "senin") {
            console.log("halo senin")
            let temu = piket.senin.includes(a)
            console.log(temu)
        }

        else if (days[i] == "selasa") {
            console.log("halo selasa")
        }

        else if (days[i] == "rabu") {
            console.log("halo rabu")
        }

        else if (days[i] == "kamis") {
            console.log("halo kamis")
        }

        else if (days[i] == "jummat") {
            console.log("halo jummat")
        }
    }

}


findOrang("bagus")

