// import object/fungsi/variable dari file lain dengan require
const objectsana = require('./case_four')
// ini PR ini masih gagal.. ga tau kenapa
// import {namesAndHobbies as objectsana} from './case_four.js'
// import * from './case_four'


// ini adalah object dari file case_four -> bisa di cek beneran di case_four.js
console.log(objectsana)


// // JSON javascript object notation
var fungsi = function get_name(){
    console.log('ini dari fungsi')
}

var object_kosong = {} // ini sama saja dengan suatu object, objectnya tapi kosong
//ini objnya.inikeynya = ini value nya
object_kosong.ini_isinya = 'hati'
// console.log(object_kosong)



// console.log(Orang ,'ini keselurhan detail object orang')
// console.log(Orang.name      ,'ini nama orangnya')
// console.log(Orang.umur    ,'ini umur orangnya')
// Orang.tas.unshift('batu bata')
// var add = 0

        
        
        
var Orang = {
    'key':'value' ,// string, int, array, object, array of object,fungsi, class
    'name':'jono',
    'umur':21,
    'tas':[
        'hp',
        'dompet'
    ],
    'jam_tangan':{
        'merk':'Bata',
        'warna':'item',
    },
    'fungsi':fungsi,
    'ini_object':object_kosong

}
console.log(Orang.ini_object)
console.log(Orang.ini_object.ini_isinya)
// tergantung kasusnya seprti apa ?
// temukan batu bata di dalam list tas
// for(i=0;i < Orang.tas.length;i++){
//         // add +=1
//         console.log(`ini adalah i tadi ${i+1} yang itu dan ini adalah item dari index i yang itu ${Orang.tas[i]}`)
//         if (Orang.tas[i] == 'batu bata'){
//                 console.log('orang ini mau tawuran')
//             }
//         }
// console.log(Orang.tas[0]  ,'ini di dalam tas orangnya, barang nomor 1')
// console.log(Orang.tas[1]  ,'ini di dalam tas orangnya, barang nomor 2 ')
// console.log(Orang.tas[2]  ,'ini di dalam tas orangnya, barang nomor 3 ')
// console.log( `ini jam tangan merk nya ${Orang.jam_tangan.merk}`)
// console.log( `ini jam tangan warnanya nya ${Orang.jam_tangan.warna}`)



// console.log(suhuBahan(12))