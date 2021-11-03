
// function solution(record) {
//     let res =''
//     let num = 1
//     for (let i=0; i<record.length; i++){
//         let dat = record[i];
//         console.log(dat, "ini dat")
//         let newDat = record[i + 1];
//         console.log(newDat, "ini New")
        
//         if(dat === newDat){
//             num++;
          
//         }
        
//         else{
//            res += dat + '' + num ;
//            num = 1;
//         };
        
//     }
//     console.log(res.length)
//     return res.length < record.length ? res : record ;

//     }

// console.log(solution('aabb'))
const dat =[[100,"ryan","music",2],
[200,"apeach","math",2],
[300,"tube","computer",3],
[400,"con","computer",4],
[500,"muzi","music",3],
[600,"apeach","music",2]]


function solution(relation) {
    let count=0
    let newDat=[]
    let newRes=[]


    for (let i=0; i<relation.length; i++){
        console.log(relation[i])
        let relDat = relation[i]
        const res = newDat.push(relDat[2])
        console.log(newDat, "ini new data")
       let cari= newRes.push(newDat.filter(newDat => newDat[i] == 'music'))
       if (cari.length > 0) {
        newRes.splice(newRes.indexOf(cari[0]), 1)
        count++
    }
    console.log(cari, "data sama", i);
   
    }

  
    console.log(newRes, "ini new res")
    console.log(count, "ini new res length")
    
    
    
}

console.log(solution(dat))