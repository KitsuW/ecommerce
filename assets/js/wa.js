let array = [
    {
        letter:"a"
    },
    {
        letter:"b"
    },
    {
        letter:"c"
    },
    {
        letter:"d"
    },
    {
        letter:"e"
    },
    {
        letter:"f"
    },
    {
        letter:"g"
    }
]

function getRandomArbitrary(min, max) {
    let randomNum = Math.random() * (max - min) + min;
    return Math.trunc(randomNum)
}

let i = getRandomArbitrary(0, 11)

console.log(i)
