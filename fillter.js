const a=["joko","made", "dono", "prabowo"]
const b=["saipul", "prabowo", "intan", "joko"]


const cari =(a,b)=> a.map(v => b.filter(b=> b === v))

console.log(cari(a,b))