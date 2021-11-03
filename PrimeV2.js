let a =[40,98,76,5,32,12]


const funHit=(nilai)=>{

    for(let i =0; i<nilai.length; i++){
        
        if (i % 3 === 0){
            console.log(2)
        } else {
            console.log(Math.min.apply(Math,nilai) + 1)
        }
    }
}

console.log(funHit(a))