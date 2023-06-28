
// get dos input
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const telefone = document.querySelector('#telefone')
const atualizar = document.getElementById('Atualizar')
const senha = document.getElementById('senha')


const nomeAlerta = document.getElementById('nomealerta')
const emailAlerta = document.getElementById('emailAlerta')
const telAlerta = document.getElementById('telAlerta')
const senhaAlerta = document.getElementById('senhaAlerta')


//impedindo que o formulário seja enviado
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});


//atualizando valores dos dados
atualizar.addEventListener('click', function (e) {
    let contador = 0


    const nomeValue = nome.value
    const emailValue = email.value
    const telValue = telefone.value
    const senhaValue = senha.value

    //verificar nome
    if (nomeValue.length > 3 && nomeValue.length < 200) {
        console.log("nome válido")
        nomeAlerta.innerHTML = ""
        nome.value = nomeValue
        contador++
    } else {
        nomeAlerta.innerHTML = "Nome inválido! por favor digite seu nome completo!"
        nome.value = ""
    }

    //verificar email
    if (emailValue.length > 10 && emailValue.length < 346
        && emailValue.includes("@") && emailValue.includes(".")
    ) {
        console.log("emailválido!")
        email.value = emailValue
        emailAlerta.innerHTML = ""
        contador++
    }
    else {
        email.value = ""
        emailAlerta.innerHTML = "Email inválido!"
    }

    //verificar telefone
    if (isNaN(telValue) || telValue.includes(' ') ||
        telValue.includes('-')
    ) {
        telefone.value = ""
        telAlerta.innerHTML = "Digite Apenas números! sem espaços ou sinais!"
    } else {
        if (verifiTamanho(telValue)) {
            telefone.value = telValue
            telAlerta.innerHTML = ""
            contador++
        } else {
            telAlerta.innerHTML = numeroPequenoeGrande
        }
    }

    //verificar senha
    if (LetrasEnumemeros(senhaValue) &&
        verifiTamanho(senhaValue, 4, 16)) {
        console.log("senha forte!, parabéns")
        senha.value = senhaValue
        senhaAlerta.innerHTML = ''
        contador++
        console.log(contador)
    } else {
        senha.value = ""
        senhaAlerta.innerHTML = senhaForte
    }

    if (contador !== 4) {
        e.preventDefault();
    } else {
        atualizarJSON()
    }

})

function verifiTamanho(variavel, menor = 8, maior = 14) {
    if (variavel.length >= menor && variavel.length <= maior) {
        return true
    }
    return false
}

const numeroPequenoeGrande = "número pequeno demais ou grande demais"

function LetrasEnumemeros(variavel) {
    return /[a-zA-Z]/.test(variavel) && /[0-9]/.test(variavel) && caracterEspeciais.test(variavel)
}

const senhaForte = "você precisa de uma senha forte!! <br> entre 4 e 16 números com letras e números! <br> e com a pelo menos um desses caracteres '!@#$%^&*()_+\-=[\]{};''\\|,.<>/?"
const caracterEspeciais = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/


