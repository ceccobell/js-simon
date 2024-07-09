// funzione che genera un numero tra 1 e 100
function generateRandomNums() {
    return Math.floor(Math.random() * 100 + 1)
}

// dichiaro l'array dove pushare i numeri
let random_nums = []

// ciclo per pushare 5 numeri casuali dentro l'array
while (random_nums.length < 5) {
    let generate_num = generateRandomNums()
    if (!random_nums.includes(generate_num)) {
        random_nums.push(generate_num)
        document.getElementById("numbers").innerHTML += " " + generate_num
    }

}
console.log(random_nums)

// funzione che elimina i numeri dopo x secondi
setTimeout(function () {
    document.getElementById("numbers").innerHTML = ""
}, 2000)

// funzione che serve per far compire il messaggio di inserire i numeri dopo la loro scomparsa dallo schermo
setTimeout(function () {

    let nums = prompt("Inserisci i numeri separati da virgole:");

    let nums_array = nums.split(',');
    console.log(nums_array)

    let count = 0
    let guessed_nums = []
    // cicli annidati per controllare quali numeri sono stati indovinati
    for (let i = 0; i < random_nums.length; i++) {
        for (let j = 0; j < nums_array.length; j++) {
            if (random_nums[i] == parseInt(nums_array[j])) {
                count++
                if (!guessed_nums.includes(random_nums[i])) {
                    guessed_nums.push(random_nums[i])
                }
            }
        }
    }
    console.log("I numeri indovinati sono:", guessed_nums)
}, 2500)