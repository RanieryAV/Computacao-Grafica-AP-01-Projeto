// Esse código contém a função que, a partir do dia jupiteriano, arredondado para dez horas e da velocidade com que jupiter realiza uma volta por segundo na simulação, utlizando um padrão de 10 horas terrestres para um segundo virtual, calcula a velocidade de rotação dos outros planetas.

function calcularVelocidadesRotacao() {
  // Valor de radiano_jupiter
  const radiano_jupiter = 0.1047;

  // Valor em segundos para o tempo de rotação de Júpiter (9 horas e 48 minutos)
  const dia_jupiter = 36000;

  // Valores em segundos dos tempos de rotação dos outros planetas
  const valores_planetas = {
    Mercurio: 5034240,
    Venus: 19429200,
    Terra: 86160,
    Marte: 88620,
    Saturno: 36720,
    Urano: 64440,
    Netuno: 68760,
  };

  // Calcular a velocidade de rotação para cada planeta com 4 casas decimais
  const velocidades_rotacao = {};
  for (const planeta in valores_planetas) {
    const tempo = valores_planetas[planeta];
    const velocidade_rotacao = parseFloat(
      ((3600 / tempo) * radiano_jupiter).toFixed(4)
    );
    velocidades_rotacao[planeta] = velocidade_rotacao;
  }

  // Serializar o objeto com as velocidades de rotação em JSON
  const velocidades_rotacao_json = JSON.stringify(velocidades_rotacao, null, 4);

  return velocidades_rotacao_json;
}

// Chamar a função para calcular as velocidades de rotação e imprimir o resultado
const resultado = calcularVelocidadesRotacao();
console.log(resultado);
