function gerarSenha(){
    const tamanho = document.getElementById('tamanhoSenha').value;
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let senha = '';
    for (let i=0;i<tamanho;i++){
        const randomindex = Math.floor(Math.random()*caracteres.length);
        senha += caracteres[randomindex]
    }
    document.getElementById('senhaGerada').textContent=senha;
}