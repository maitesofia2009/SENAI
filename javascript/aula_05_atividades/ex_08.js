let valorcompra = 250
let desconto = 0
if (valorcompra > 500) {
    desconto = 0.20
    console.log(valorcompra - 0.20)
} else if (valorcompra > 200) {
    desconto = 0.10
    console.log(valorcompra - 0.10)
} else if (valorcompra > 100) {
    desconto = 0.05
    console.log(valorcompra - 0.05)
} else
console.log(valorcompra)
