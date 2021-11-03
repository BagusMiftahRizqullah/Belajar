const funsatu =(bil)=>{
    let newArr =[]
    for(let i =1; i<bil; i++){
        if(i % 3 === 0){
            
            newArr.push(i)
        } else if (i % 5 === 0){
          
            newArr.push(i)
        }
    }
    return newArr.map(v=> v).reduce((sat,dua)=> sat + dua);
}

console.log(funsatu(100))



// tentukan 1000
// const fundua =(bil)=>{
//     let newArr =[]
//     for(let i =1; i<bil; i++){
//         if(i % 3 === 0){
            
//             newArr.push(i)
//         } else if (i % 5 === 0){
          
//             newArr.push(i)
//         }
//     }
//     return newArr.length
// }


// console.log(fundua(1000))