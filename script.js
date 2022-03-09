const criarItem = (tarefa, status="") => {
    const item = document.createElement("label");
    item.classList.add("todoItem");
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${tarefa}</div>
        <input type="button" value="X">
        `
    document.getElementById("todoList").appendChild(item);
}