// funzione che genera un numero tra 1 e 100
function generateRandomNums() {
    return Math.floor(Math.random() * 100 + 1)
}

let random_nums = []
while (random_nums.length < 5) {
    let generate_num = generateRandomNums()
    if (!random_nums.includes(generate_num)) {
        random_nums.push(generate_num)
    }
}
console.log(random_nums)