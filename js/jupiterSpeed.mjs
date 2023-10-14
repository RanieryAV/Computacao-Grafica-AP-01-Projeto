// Fontes: https://www.tecmundo.com.br/ciencia/238065-veja-escala-real-sistema-solar-animacao-feita-astronomo.htm

// https://brasilescola.uol.com.br/geografia/movimento-rotacao.htm

// Esse código definiu a velocidade básica de rotação de Júpiter e a partir disso, definiu a dos outros planetas.

const pi = Math.PI;

const rotacao_jupiter = pi / 30;

// Essa velocidade é uma estimativa entre quadros por segundo e graus de rotação de jupiter fazendo com que ele dê exatamente uma volta em torno de seu próprio eixo em 60 segundos.

// Essa base vem de um estudo que considerou 10 horas na terra como um segundo na simulação, como a rotação de Júpiter na realidade corresponde a quase 10 horas terrenas utilizou-se essa base para calcular a velocidade de rotação de Júpiter. Logo, 10 horas = 1 segundo, que é igual a uma rotação de Júpiter

console.log(rotacao_jupiter);
