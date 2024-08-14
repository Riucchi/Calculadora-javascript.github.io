let operacionActual = '';
let numero1 = '';
let numero2 = '';
let resultado = '';
let memoria = '';

const pantallaInput = document.getElementById('pantalla');
const botones = document.querySelectorAll('.botones button');
const historial = document.getElementById('historial');

botones.forEach(boton => {
  boton.onclick = function() {
    const valor = boton.textContent;
    switch (valor) {
      case '+':
      case '-':
      case '*':
      case '/':
        operacionActual = valor;
        numero1 = pantallaInput.value;
        pantallaInput.value = '';
        break;
      case '=':
        numero2 = pantallaInput.value;
        resultado = eval(`${numero1} ${operacionActual} ${numero2}`);
        pantallaInput.value = resultado;
        agregarOperacion(`${numero1} ${operacionActual} ${numero2} = ${resultado}`);
        break;
      case 'C':
        pantallaInput.value = '';
        operacionActual = '';
        numero1 = '';
        numero2 = '';
        memoria = '';
        break;
      case 'sen':
        pantallaInput.value = Math.sin(pantallaInput.value * Math.PI / 180);
        break;
      case 'cos':
        pantallaInput.value = Math.cos(pantallaInput.value * Math.PI / 180);
        break;
      case 'tan':
        pantallaInput.value = Math.tan(pantallaInput.value * Math.PI / 180);
        break;
      case 'sqrt':
        pantallaInput.value = Math.sqrt(pantallaInput.value);
        break;
      case 'exp':
        pantallaInput.value = Math.exp(pantallaInput.value);
        break;
      case 'log':
        pantallaInput.value = Math.log(pantallaInput.value);
        break;
      case 'pi':
        pantallaInput.value = Math.PI;
        break;
      case 'frac':
        // Convertir a fracción
        const partes = pantallaInput.value.split('/');
        if (partes.length === 2) {
          const numerador = parseFloat(partes[0]);
          const denominador = parseFloat(partes[1]);
          if (denominador === 0) {
            alert('Error: no se puede dividir por cero');
          } else {
            pantallaInput.value = numerador / denominador;
          }
        } else {
          alert('Error: formato de fracción incorrecto');
        }
        break;
      case 'dec':
        // Convertir a decimal
        const fraccion = pantallaInput.value;
        const partesFraccion = fraccion.split('/');
        if (partesFraccion.length === 2) {
          const numerador = parseFloat(partesFraccion[0]);
          const denominador = parseFloat(partesFraccion[1]);
          if (denominador === 0) {
            alert('Error: no se puede dividir por cero');
          } else {
            pantallaInput.value = numerador / denominador;
          }
        } else {
          alert('Error: formato de fracción incorrecto');
        }
        break;
      case 'deg':
        // Convertir grados a radianes
        pantallaInput.value = pantallaInput.value * Math.PI / 180;
        break;
      case 'min':
        // Convertir minutos a grados
        pantallaInput.value = pantallaInput.value / 60;
        break;
      case 'sec':
        // Convertir segundos a grados
        pantallaInput.value = pantallaInput.value / 3600;
        break;
      case 'rec':
        // Cálculo recíproco
        pantallaInput.value = 1 / pantallaInput.value;
        break;
      case '%':
        // Cálculo de porcentaje
        pantallaInput.value = pantallaInput.value / 100;
        break;
      case '!':
        // Cálculo factorial
        let factorial = 1;
        for (let i = 1; i <= pantallaInput.value; i++) {
          factorial *= i;
        }
        pantallaInput.value = factorial;
        break;
      case 'e':
        // Número transcendental: e
        pantallaInput.value = Math.E;
        break;
      case ':':
        // Comando de multiestados
        memoria = pantallaInput.value;
        pantallaInput.value = '';
        break;
      case 'MR':
        // Recuperar memoria
        pantallaInput.value = memoria;
        break;
      case 'M+':
        // Sumar a memoria
        memoria = parseFloat(memoria) + parseFloat(pantallaInput.value);
        pantallaInput.value = '';
        break;
      case 'M-':
        // Restar de memoria
        memoria = parseFloat(memoria) - parseFloat(pantallaInput.value);
        pantallaInput.value = '';
        break;
        case '√':
            // Cálculo de raíz cuadrada
            pantallaInput.value = Math.sqrt(pantallaInput.value);
            break;
          case 'x^2':
            // Cálculo de potencia al cuadrado
            pantallaInput.value = Math.pow(pantallaInput.value, 2);
            break;
          case 'x^3':
            // Cálculo de potencia al cubo
            pantallaInput.value = Math.pow(pantallaInput.value, 3);
            break;
          case 'x^n':
            // Cálculo de potencia a la n
            const base = parseFloat(pantallaInput.value);
            const exponente = parseFloat(prompt('Ingrese el exponente'));
            pantallaInput.value = Math.pow(base, exponente);
            break;
          case 'round':
            // Función de redondeo
            pantallaInput.value = Math.round(pantallaInput.value);
            break;
          case 'repeat':
            // Función de repetición
            const valorRepetir = pantallaInput.value;
            pantallaInput.value = '';
            for (let i = 0; i < 10; i++) {
              pantallaInput.value += valorRepetir;
            }
            break;
          case 'multi':
            // Función de reproducción múltiple
            const valorMulti = pantallaInput.value;
            pantallaInput.value = '';
            for (let i = 0; i < 10; i++) {
              pantallaInput.value += valorMulti * (i + 1);
            }
            break;
          default:
            pantallaInput.value += valor;
        }
      };
    });
    
    function agregarOperacion(operacion) {
      const li = document.createElement('li');
      li.textContent = operacion;
      historial.appendChild(li);
    }