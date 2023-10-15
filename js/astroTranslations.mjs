// Esse código contém a função que, a partir do dia jupiteriano, arredondado para dez horas e da velocidade com que jupiter realiza uma volta por segundo na simulação, utlizando um padrão de 10 horas terrestres para um segundo virtual, calcula a velocidade de rotação dos outros planetas e também do Sol, a estrela do sistema solar

function calcularVelocidadesTranslacao() {
  // Valor de radiano_jupiter
  const radiano_mercurio = 0.05;

  // Valor em segundos para o tempo de rotação de Júpiter (9 horas e 48 minutos)
  const ano_mercurio = 2118.48;

  // Valores em segundos dos tempos de rotação dos outros planetas e do Sol
  const valores_astros = {
    Lua: 655.728,
    Tita: 382.68,
    Europa: 85.23,
    Vênus: 5392.8,
    Terra: 8766.24,
    Marte: 16848,
    Júpiter: 103224,
    Saturno: 257256,
    Urano: 735624,
    Netuno: 1447496,
  };

  // Calcular a velocidade de rotação para cada astro com 4 casas decimais
  const velocidades_translacao = {};
  for (const astro in valores_astros) {
    const tempo = valores_astros[astro];
    const velocidade_translacao = parseFloat(
      ((ano_mercurio / tempo) * radiano_mercurio).toFixed(4)
    );
    velocidades_translacao[astro] = velocidade_translacao;
  }

  // Serializar o objeto com as velocidades de rotação em JSON
  const velocidades_translacao_json = JSON.stringify(
    velocidades_translacao,
    null,
    4
  );

  return velocidades_translacao_json;
}

// Chamar a função para calcular as velocidades de rotação e imprimir o resultado
const resultado = calcularVelocidadesTranslacao();
console.log(resultado);
