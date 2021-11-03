const baju = (a,b,c)=>{
    let warna = a;
    let bentuk = b;

    return console.log(`warna Baju saya ${warna} dan ${bentuk}`)
    
}


baju('biru','bulat')
baju('merah','kotak')

const data = [1,2,3,4,5]

console.log(data.reverse())
console.log(data.reduce((v,i)=> v +i))
console.log(data.filter(a => a === 3))
console.log(data.shift(0,3))
