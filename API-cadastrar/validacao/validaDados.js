function validaNome(nome) {
    
    const regexNome = /^(?=.{2,100}$)[A-Za-zÀ-ÿ]+(?:[ '-][A-Za-zÀ-ÿ]+)*$/;

    return regexNome.test(nome);
}


function validaEmail(email) {
    
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return regexEmail.test(email);
}

function validaTelefone(telefone) {
    
    const regexTelefone = /^(?:\+55\s?)?(?:\(?\d{2}\)?\s?)?(?:9\d{4}|\d{4})-?\d{4}$/;

    return regexTelefone.test(telefone);
}

export function validaUsuario(nome, email, telefone){
    
    const nomeValido = validaNome(nome);
    const emailValido = validaEmail(email);
    const telefoneValido = validaTelefone(telefone);


    if(!nomeValido){
        return {
            status: false, 
            mensagem: 'Nome inválido'
        };
    }
    
    if(!emailValido){
        return {
            status: false,
            mensagem: 'Email inválido'
        };
    }

    if(!telefoneValido){
        return{
            status: false,
            mensagem: 'Telefone inválido'
        };
    }

    return {
        status: true,
        mensagem: ''
    };

}