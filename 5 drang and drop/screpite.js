function permitirSoltar(event) {
    event.preventDefault();
}

function arrastar(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function soltar(event) {
    event.preventDefault();
    const dados = event.dataTransfer.getData("text");
    const tarefaArrastada = document.getElementById(dados);

    if (event.target.id === 'listaTarefas'){
        event.target.appendChild(tarefaArrastada)
    } else if (event.target.classList.contains('item-tarefa')){
        event.target.parentNode.insertBefore(tarefaArrastada, event.target);
    }
}

function adicionarTarefa() {
    const textoTarefa = document.getElementById('novaTarefa').value;
    if (textoTarefa) {
        const tarefa = document.createElement('div');
        tarefa.id = `tarefa-${Date.now()}`;
        tarefa.className = 'item-tarefa';
        tarefa.draggable = true;
        tarefa.ondragstart = arrastar;
        tarefa.textContent = textoTarefa;
        document.getElementById('listaTarefas').appendChild(tarefa);
        document.getElementById('novaTarefa').value = '';
    }
}