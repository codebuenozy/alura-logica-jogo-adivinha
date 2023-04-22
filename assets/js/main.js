const output = document.getElementById('output');
    const enviarBtn = document.getElementById('enviar');
    const tentarNovamenteBtn = document.getElementById('tentar-novamente');
    let numeroPensado = sorteia(10);
    let tentativas = 3;

    function pulaLinha() {
      output.innerHTML += "<br>";
    }

    function mostra(frase) {
      output.innerHTML += frase;
      pulaLinha();
    }

    function sorteia(n) {
      return Math.round(Math.random() * n);
    }

    enviarBtn.addEventListener('click', () => {
      const chute = parseInt(document.getElementById('chute').value);

      if (isNaN(chute) || chute < 0 || chute > 10) {
        mostra('Por favor, digite um número válido.');
      } else if (chute === numeroPensado) {
        mostra(`Parabéns, você acertou! O número era ${numeroPensado}.`);
        enviarBtn.disabled = true;
        tentarNovamenteBtn.disabled = false;
      } else {
        tentativas--;
        if (tentativas === 0) {
          mostra(`Suas tentativas acabaram! O número era ${numeroPensado}.`);
          enviarBtn.disabled = true;
          tentarNovamenteBtn.disabled = false;
        } else if (chute > numeroPensado) {
          mostra(`Seu chute é maior que o número pensado! Você tem ${tentativas} tentativas restantes.`);
        } else {
          mostra(`Seu chute é menor que o número pensado! Você tem ${tentativas} tentativas restantes.`);
        }
      }
    });

    tentarNovamenteBtn.addEventListener('click', () => {
      numeroPensado = sorteia(10);
      tentativas = 3;
      output.innerHTML = '';
      enviarBtn.disabled = false;
      tentarNovamenteBtn.disabled = true;
    });