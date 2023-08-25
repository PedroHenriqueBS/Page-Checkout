let menos1 = document.getElementById('menos1');
let menos2 = document.getElementById('menos2');
let mais1 = document.getElementById('mais1');
let mais2 = document.getElementById('mais2');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let frete = document.getElementById('frete');
frete.innerHTML = 'Grátis'
let valor1 = document.getElementById('valor1');
valor1 = 249.99
let valor2 = document.getElementById('valor2')
valor2 = 139.99
let tot = document.getElementById('tot')



/* CONTADOR DO BOX 1 */

soma = 0
let contador1 = 0;
num1.innerHTML = contador1;

menos1.addEventListener('click', function () {
    if (contador1 <= 0 ) {
        contador1;
    } else {
        contador1 --;
        num1.innerHTML = contador1;
    }

    if (contador1 == 0) {
        soma = 0 + (valor2 * contador2);
        tot.innerHTML = `${soma.toFixed(2)}`
    } else if (contador1 > 0) {
        soma = soma - valor1
        tot.innerHTML = `${soma.toFixed(2)}`
    }

})

mais1.addEventListener('click', function () {
    contador1++;
    num1.innerHTML = contador1;

    if (contador1 > 0) {
        soma = soma + valor1;
        tot.innerHTML = `${soma.toFixed(2)}`
    }
})
 
/* CONTADOR DO BOX 2 */

let contador2 = 0
num2.innerHTML = contador2;

menos2.addEventListener('click', function () {
    if (contador2 <= 0 ) {
        contador2;
    } else {
        contador2--;
        num2.innerHTML = contador2;
    }

    if (contador2 == 0) {
        soma = 0 + (valor1 * contador1);
        tot.innerHTML = `${soma.toFixed(2)}`
    } else if (contador2 > 0) {
        soma = soma - valor2
        tot.innerHTML = `${soma.toFixed(2)}`
    }
})

mais2.addEventListener('click', function () {
    contador2++;
    num2.innerHTML = contador2

    if (contador2 > 0) {
        soma = soma + valor2;
        tot.innerHTML = `${soma.toFixed(2)}`
    }

})

/* PEGANO O VALOR DO FORMULÁRIO */

let btn = document.getElementById('btn');
        
btn.addEventListener('click', function(e){
    e.preventDefault();

    let email = document.querySelector("#email");
    let valueEmail = email.value

    let phone = document.querySelector("#phone");
    let valuePhone = phone.value

    let nome = document.querySelector("#nome");
    let valueNome = nome.value
    
    let address = document.querySelector("#address");
    let valueAddress = address.value
    
    let cidade = document.querySelector("#cidade");
    let valueCidade = cidade.value

    let paises = document.querySelector("#paises")
    let valuePaises = paises.value

    let postal = document.querySelector("#postal")
    let valuePostal = postal.value

    /* VALIDANDO FORMULÁRIO */

    const spanEmail = document.getElementById('spanEmail') 
    const spanPhone = document.getElementById('spanPhone') 
    const spanName = document.getElementById('spanName') 
    const spanAddress = document.getElementById('spanAddress') 
    const spanCity = document.getElementById('spanCity') 
    const spanCountry = document.getElementById('spanCountry')
    const spanPostal = document.getElementById('spanPostal')

    let campoEmail = document.getElementById('campoEmail')
    let campoPhone = document.getElementById('campoPhone')
    let campoName = document.getElementById('campoName')
    let campoAddress = document.getElementById('campoAddress')
    let campoCity = document.getElementById('campoCity')
    let campoCountry = document.getElementById('campoCountry')
    let campoPostal = document.getElementById('campoPostal')

    function validando() {
        if (valueEmail === '') { 
            campoEmail.style.borderColor = 'red';   
            spanEmail.innerHTML = 'Adicione um E-mail'
            spanEmail.style.color = 'red'

        } else if (!valueEmail === '') {
            campoEmail.style.borderColor = 'gray';
            spanEmail.innerHTML = ''
        } 
        
        if (valuePhone === '') { 
            campoPhone.style.borderColor = 'red';   
            spanPhone.innerHTML = 'Adicione um Telefone'
            spanPhone.style.color = 'red'

        } else if (!valueEmail === '') {
            campoEmail.style.borderColor = 'gray';
            spanEmail.innerHTML = '';
        }

        if (valueNome === '') { 
            campoName.style.borderColor = 'red';   
            spanName.innerHTML = 'Adicione um Nome'
            spanName.style.color = 'red'

        } else if (!valueEmail === '') {
            campoName.style.borderColor = 'gray';
            spanName.innerHTML = ''
        }

        if (valueAddress === '') { 
            campoAddress.style.borderColor = 'red';   
            spanAddress.innerHTML = 'Adicione um Endereço'
            spanAddress.style.color = 'red'

        } else if (!valueAddress === '') {
            campoAddress.style.borderColor = 'gray';
            spanAddress.innerHTML = ''
        }

        if (valueCidade === '') { 
            campoCity.style.borderColor = 'red';   
            spanCity.innerHTML = 'Adicione uma cidade'
            spanCity.style.color = 'red'

        } else if (!valueCidade === '') {
            campoCity.style.borderColor = 'gray';
            spanCity.innerHTML = ''
        }

        if (valuePaises === '') { 
            campoCountry.style.borderColor = 'red';   
            spanCountry.innerHTML = 'Adicione um país'
            spanCountry.style.color = 'red'

        } else if (!valuePaises === '') {
            campoCountry.style.borderColor = 'gray';
            spanCountry.innerHTML = ''
        }

        if (valuePostal === '') { 
            campoPostal.style.borderColor = 'red';   
            spanPostal.innerHTML = 'Adicione um código'
            spanPostal.style.color = 'red'

        } else if (!valuePostal === '') {
            campoPhone.style.borderColor = 'gray';
            spanPostal.innerHTML = ''
        } else {
            alert ('Enviado com sucesso!')
        

        /* Checkbox */

        let save = document.getElementById('save')

        if (save.checked){
            console.log('opção marcada');
        } else if (campoEmail && campoPhone && campoName && campoAddress && campoCity && campoPostal){
            campoEmail.style.borderColor = 'gray';
            spanEmail.innerHTML = '';
            email.value = ''
        
            campoPhone.style.borderColor = 'gray';
            spanPhone.innerHTML = '';
            phone.value = ''
        
            campoName.style.borderColor = 'gray';
            spanName.innerHTML = '';
            nome.value = ''
        
            campoAddress.style.borderColor = 'gray';
            spanAddress.innerHTML = '';
            address.value = ''
        
            campoCity.style.borderColor = 'gray';
            spanCity.innerHTML = '';
            cidade.value = ''
        
            campoCountry.style.borderColor = 'gray';
            spanCountry.innerHTML = '';
        
            campoPostal.style.borderColor = 'gray';
            spanPostal.innerHTML = '';
            postal.value = '';
        }

        }

    }
    let form = document.getElementById('form__ok')

    if (email.value === '' || phone.value === '' || nome.value === '' || address.value === '' || cidade.value === '' || paises.value === '' || postal.value === '') {
        form.innerHTML = ''
    } else {
        form.innerHTML = `
        <h4>Informações de cadastro:</h4>
        <br>
        <hr>
        <br>
        <span>E-mail: ${valueEmail}</span> 
        <br> 
        <span>Phone: ${valuePhone}</span>
        <br>
        <span>Name: ${valueNome} </span>
        <br> 
        <span>Address: ${valueAddress}</span>
        <br>
        <span>City: ${valueCidade}</span> 
        <br> 
        <span>Country: ${valuePaises}</span>
        <br>
        <span>Code Postal: ${valuePostal}</span>   
        `}

    validando();   
    
})


