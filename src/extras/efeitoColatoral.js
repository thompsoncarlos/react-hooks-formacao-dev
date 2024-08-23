// Função pura: Usa somente os parametros dentro da função e não altera nada fora da função
function soma(a, b) {
  return a + b;
}

// Função impura: altera valores que estão fora da função "resultado"
let resultado;
function soma2(a, b) {
  resultado = a + b;
}

// Função impura pode ser entendido como efeito colateral
soma2(1, 5);
soma2(0, 8);