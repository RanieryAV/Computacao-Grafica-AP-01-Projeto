// Esse código contém a função que, a partir do dia jupiteriano, arredondado para dez horas e da velocidade com que jupiter realiza uma volta por segundo na simulação, utlizando um padrão de 10 horas terrestres para um segundo virtual, calcula a velocidade de rotação dos outros planetas e também do Sol, a estrela do sistema solar

function calcularVelocidadesRotacao() {
  // Valor de jupiter em radianos nessa simulação
  const radiano_jupiter = 0.1047;

  // Valor em segundos para o tempo de rotação de Júpiter (9 horas e 48 minutos)
  const dia_jupiter = 36000;

  // Valores em segundos dos tempos de rotação dos outros planetas e do Sol
  const valores_astros = {
    Sol: 2356340,
    Mercurio: 5034240,
    Venus: 19429200,
    Terra: 86160,
    Marte: 88620,
    Saturno: 36720,
    Urano: 64440,
    Netuno: 68760,
  };

  // Calcular a velocidade de rotação para cada astro com 4 casas decimais
  const velocidades_rotacao = {};
  for (const astro in valores_astros) {
    const tempo = valores_astros[astro];
    const velocidade_rotacao = parseFloat(
      ((dia_jupiter / tempo) * radiano_jupiter).toFixed(4)
    );
    velocidades_rotacao[astro] = velocidade_rotacao;
  }

  // Serializar o objeto com as velocidades de rotação em JSON
  const velocidades_rotacao_json = JSON.stringify(velocidades_rotacao, null, 4);

  return velocidades_rotacao_json;
}

// Chamar a função para calcular as velocidades de rotação e imprimir o resultado
const resultado = calcularVelocidadesRotacao();
console.log(resultado);
