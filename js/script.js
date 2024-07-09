// funzione che genera un numero tra 1 e 100
function generateRandomNums() {
    return Math.floor(Math.random() * 100 + 1)
}

let random_nums = []
while (random_nums.length < 5) {
    let generate_num = generateRandomNums()
    if (!random_nums.includes(generate_num)) {
        random_nums.push(generate_num)
        document.getElementById("numbers").innerHTML += " " + generate_num
    }

}
console.log(random_nums)

setTimeout(function () {
    document.getElementById("numbers").innerHTML = ""
}, 2000)