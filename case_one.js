let people = ["Greg", "Mary", "Devon", "James"];

//Case_1 
//tampil semua data
const allOrang = (ao) => {
    for (let i = 0; i < ao.length; i++) {
        console.log(ao[i]);
    }

}

//Hapus Greg
const hapusGreeg = (hg) => {
    hg.shift();
    console.log(people, "=====> ini hapus Greg");

}

//Hapus James
const hapusJames = (hj) => {
    hj.pop();
    console.log(people, "=====> ini hapus James");

}

const tambahMatt = (tm) => {
    tm.unshift("Matt");
    console.log(people, "=====> ini Tambah Matt");

}

const tambahNmae = (nM) => {
    nM.push("Bagus");
    console.log(people, "=====> ini Tambah Namaku");

}


const maryKeluar = (mk) => {
    for (let i = 0; i < mk.length; i++) {
        console.log(mk[i]);
        if (mk[i] == 'Mary') {
            console.log(" Mary Keluar Dulu Yaa")
            break;
        }
    }

}

const makeCopy = (mC) => {
    let potong = mC.slice(2, 4);
    console.log(potong, " ======> hasil slice yaa");
}

const gantiMary = (gM) => {
    gM.splice(1, 1, "indexOf");
    console.log(people, " =======> hasil Ganti Mary")
}

const lokasi = (lO, nama) => {
    console.log(lO.indexOf(nama), "======> hasil lokasi")
}


allOrang(people);
hapusGreeg(people);
hapusJames(people);
tambahMatt(people);
tambahNmae(people);
maryKeluar(people);
makeCopy(people);
lokasi(people, "Mary");
lokasi(people, "Foo");

let orangs = ["Greg", "Mary", "Devon", "James"];
orangs.splice(2, 1, "Elizabeth", "Artie");
console.log(orangs, " ==========> hasil akhir")
let tamBob = orangs.concat("Bob");
console.log(tamBob, "============> bob berhasil di tambahkan");