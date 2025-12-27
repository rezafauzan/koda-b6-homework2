console.log("Masukan jari-jari lingkaran")
process.stdin.on('data', input => { 
    let jariJari = parseInt(input.toString().trim())
    let pi = 3.14
    // console.log(typeof input)
    // console.log(input)
    // console.log(jariJari)
    if(typeof jariJari === 'number'){
        if(jariJari % 7 === 0){
            pi = 22/7
        }else{
            pi = 3.14
        }
        
        const keliling = 2 * pi * jariJari
        const luas = pi * jariJari * jariJari
        
        console.log(`Keliling dari lingkaran dengan jari-jari = ${jariJari} adalah ${keliling}`)
        console.log(`Luas dari lingkaran dengan jari-jari = ${jariJari} adalah ${luas}`)
    }else{
        console.log("Masukan harus berupa angka")
    }
})