// Stampare in console numeri da 1 a 100
let n = 100
const numeriElement = document.getElementById("numeri")
// const numeri5Element = document.getElementById("numeri")

for (let i = 0; i < 100; i++){
    let num = i + 1
    let multiplo3 = num % 3
    let multiplo5 = num % 5

    // console.log(num)

    // Per i multipli di 3 stampare "Fizz" al posto del numero
    if (multiplo3 === 0){
        num = "Fizz"
        numeriElement.innerHTML += `<li> ${num} </li>`
        console.log(num)
      // Per i multipli di 5 stampare "Buzz" al posto del numero
    }   else if (multiplo5 === 0){
             num = "Buzz"
             numeriElement.innerHTML += `<li>${num}</li>`
             console.log(num)
              // Per i numeri che sono sia multipli di 3 che di 5 stampare "FizzBuzz" al posto del numero
        }   else if (multiplo3 === 0 && multiplo5 === 0){
                    num = "FizzBuzz"
                    console.log(num)

            }
            
}


