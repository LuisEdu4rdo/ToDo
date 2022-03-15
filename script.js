
var banco = [
    { 'tarefa': 'assistir jogo do vasco', 'status': 'checked' },
    { 'tarefa': 'tomar um sorvetinho do bão', 'status': '' },
    { 'tarefa': 'alfafa', 'status': '' },
];

const criarItem = (tarefa, status) => {
    const item = document.createElement("label");
    item.classList.add("todoItem");
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${tarefa}</div>
        <input type="button" value="X">
        `
    document.getElementById("todoList").appendChild(item);
}

const limparTarefa = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefa();
    banco.forEach(item => criarItem(item.tarefa, item.status));
}

const addNovoItem = (evento) => {
    const tecla = evento.key
    const texto = evento.target.value;

    function limparTexto() {
        evento.target.value = '';
    }

    if (tecla === 'Enter') {
        banco.push({ 'tarefa': texto, 'status': '' });
        atualizarTela();
        limparTexto();
    }
}

document.getElementById('addNovoItem').addEventListener('keypress', addNovoItem);

atualizarTela(); 
