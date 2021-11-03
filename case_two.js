let hege = ["Cecilie", "Lone", "Linus", "Totok", "Miftah"]; //lis A
let stale = ["Totok", "Cecilie", "Linus", "Bagus"];        //Lis B
// let newHege = [...hege]

console.log(hege)
console.log(stale)

const cari_sama = (a, b) => {
    for (let i = 0; i < a.length; i++) {
        let arr_a = a[i];
        let cari = b.filter(b => b == arr_a);
        if (cari.length > 0) {
            a.splice(a.indexOf(cari[0]), 1)
        }
        console.log(cari, "data sama", i);
        // console.log(cari.indexOf(cari[0]), "<==== Urutan ")
    }
    console.log(a, "<======= Hasil");
}
cari_sama(hege, stale);


// var hege = ["Totok", "Cecilie", "Lone", "Linus", "Bagus"]; //lis A
// var stale = ["Emil", "Totok", "Linus", "Cecilie"];        //Lis B
// console.log(hege)
// console.log(stale)

// const cari_sama = () => {

//     return [...new Set(hege.concat(stale))]
// }
// console.log(cari_sama(), "<===== Hasil Hapus Data Sama Selesai");