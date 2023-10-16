// Esta função calcula a velocidade de translação de diferentes astros em relação a Mercurio,

function calcularVelocidadesTranslacao() {
  // Valor do radiano de Mercúrio (velocidade de translação de Mercúrio na simulação)
  const radiano_mercurio = 0.05;

  // Valor em horas para o tempo de rotação de um ano de Mercúrio
  const ano_mercurio = 2118.48;

  // Valores em horas dos tempos de translação dos astros e do Sol
  const valores_astros = {
    Vênus: 5392.8, // Período de translação de Vênus em relação ao Sol
    Terra: 8766.24, // Período de translação da Terra em relação ao Sol
    Marte: 16848, // Período de translação de Marte em relação ao Sol
    Júpiter: 103224, // Período de translação de Júpiter em relação ao Sol
    Saturno: 257256, // Período de translação de Saturno em relação ao Sol
    Urano: 735624, // Período de translação de Urano em relação ao Sol
    Netuno: 1447496, // Período de translação de Netuno em relação ao Sol
  };

  // Calcular a velocidade de translação para cada astro com 4 casas decimais
  const velocidades_translacao = {};
  for (const astro in valores_astros) {
    const tempo = valores_astros[astro];
    // Cálculo da velocidade de translação baseada na escala
    const velocidade_translacao = parseFloat(
      ((ano_mercurio / tempo) * radiano_mercurio).toFixed(4)
    );
    velocidades_translacao[astro] = velocidade_translacao;
  }

  // Serializar o objeto com as velocidades de translação em formato JSON
  const velocidades_translacao_json = JSON.stringify(
    velocidades_translacao,
    null,
    4
  );

  return velocidades_translacao_json;
}

// Chamar a função para calcular as velocidades de translação e imprimir o resultado
const resultado = calcularVelocidadesTranslacao();
console.log(resultado);
