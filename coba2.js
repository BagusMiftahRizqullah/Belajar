
function isPrime(n) {
    let nilai =0;
    for (let i=0; i <= n; i++){
        if ( n % i === 0){
            nilai++
        }
    }
    if (nilai === 2){
       return 1
    } else {
       let h = Math.floor(n)
       return h
    }

}

console.log(isPrime([1,2,3,4,5,6,7,8]))