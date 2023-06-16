function myFunction() {
    let frm = document.querySelector("#frm1");
    let resultado = document.querySelector(".resultado")
    
    let pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();
        let nome = document.querySelector(".nome");
        let sobrenome = document.querySelector(".sobrenome");
        let peso = document.querySelector(".peso");
        let altura = document.querySelector(".altura");
        
        pesoNew = Number(peso.value);
        alturaNew = Number(altura.value);
        let imc = calcIMC(pesoNew,alturaNew);
        let nivel = nivelIMC(imc);

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: pesoNew,
            altura: alturaNew,
            imc:imc,
            nivel:nivel
        });

        console.log(pessoas);
        resultado.innerHTML = "<p>"+ pessoas[pessoas.length - 1].nome + ', seu IMC é: '+ imc + ' e seu nível é: ' + nivel + '</p>';
        document.getElementById('resposta').innerHTML = "<p>"+ pessoas[pessoas.length - 1].nome + ', seu IMC é: '+ imc + ' e seu nível é: ' + nivel + '</p>';
    }

    frm.addEventListener('submit',recebeEventoForm);

    function calcIMC(pesoNew,alturaNew){
        let imc = pesoNew/(alturaNew ** 2);
        return imc.toFixed(2);
    }

    function nivelIMC(imc){
        if (imc < 18.5){
            let texto = 'Abaixo do peso';
            return texto;
        }
        else if (18.6 < imc && imc < 24.9){
            let texto = 'Peso ideal.';
            return texto;
        }else if (25.0 < imc && imc < 29.9){
            let texto = 'Levemente acima do peso.';
            return texto;
        }else if (30.0 < imc && imc < 34.9){
            let texto = 'Obesidade I.';
            return texto;
        }else if (35.0 < imc && imc < 39.9){
            let texto = 'Obesidade II.';
            return texto;
        }else{
            let texto = 'Obesidade III.';
            return texto;
        }
    }
}

myFunction();