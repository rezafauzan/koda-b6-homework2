let x = 0
let temp, tempSource, tempDestination 
console.log("Masukan angka derajat suhu :")
process.stdin.on('data', input => {
    if(x === 0 ){
        temp = parseInt(input.toString().trim())
        x = 1 
        console.log("Masukan satuan suhu awal ['celcius', 'reamur', 'kelvin', 'fahrenheit'] :")
    } else if(x === 1 ){
        tempSource = input.toString().trim() 
        x = 2
        console.log("Masukan satuan suhu tujuan ['celcius', 'reamur', 'kelvin', 'fahrenheit'] :")
    }
    else if (x === 2){
        tempDestination = input.toString().trim() 
        if (Number.isNaN(temp) !== true) {
            tempSource === 'celcius' && tempDestination === 'reamur'
                ? console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp * 4 / 5)}`)
                : tempSource === 'celcius' && tempDestination === 'kelvin'
                    ? console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp + 273.15)}`)
                    : tempSource === 'celcius' && tempDestination === 'fahrenheit'
                        ? console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp * 9 / 5 + 32)}`)
                        : tempSource === 'celcius' && tempDestination === 'celcius'
                            ? console.log('Satuan unit asal tidak boleh sama dengan satuan unit yang sama dengan satuan unit tujuan')
                            : tempSource === 'reamur' && tempDestination === 'kelvin'
                                ? console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp * 5 / 4 + 273.15)}`)
                                : tempSource === 'reamur' && tempDestination === 'fahrenheit'
                                    ? console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp * 9 / 4 + 32)}`)
                                    : tempSource === 'reamur' && tempDestination === 'celcius'
                                        ? console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp * 5 / 4)}`)
                                        : tempSource === 'reamur' && tempDestination === 'reamur'
                                            ? console.log('Satuan unit asal tidak boleh sama dengan satuan unit yang sama dengan satuan unit tujuan')
                                            : tempSource === 'fahrenheit' && tempDestination === 'kelvin'
                                                ? console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = (temp + 459.67) * 5 / 9)}`)
                                                : tempSource === 'fahrenheit' && tempDestination === 'celcius'
                                                    ? console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = (temp - 32) * 5 / 9)}`)
                                                    : tempSource === 'fahrenheit' && tempDestination === 'reamur'
                                                        ? console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = (temp - 32) * 4 / 9)}}`)
                                                        : tempSource === 'fahrenheit' && tempDestination === 'fahrenheit'
                                                            ? console.log('Satuan unit asal tidak boleh sama dengan satuan unit yang sama dengan satuan unit tujuan')
                                                            : tempSource === 'kelvin' && tempDestination === 'celcius'
                                                                ? console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp - 273.15)}`)
                                                                : tempSource === 'kelvin' && tempDestination === 'reamur'
                                                                    ? console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = (temp - 273.15) * 4 / 5)}`)
                                                                    : tempSource === 'kelvin' && tempDestination === 'fahrenheit'
                                                                        ? console.log(`Konversi suhu bernilai ${temp} dari ${tempSource} ke ${tempDestination} adalah ${(temp = temp * 9 / 5 - 459.67)}`)
                                                                        : tempSource === 'kelvin' && tempDestination === 'kelvin'
                                                                            ? console.log('Satuan unit asal tidak boleh sama dengan satuan unit yang sama dengan satuan unit tujuan')
                                                                            : console.log('Pilihan sumber atau tujuan tidak valid')
        }
        else {
            console.log("Masukan harus berupa angka")
        }
        x=0
        console.log("Masukan angka derajat suhu :")
    }
})