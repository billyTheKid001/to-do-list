
function toDo() {
    const Input = document.getElementById('input');
    const text = Input.value
    if (text !== '') {
        const list = document.getElementById('list')
        const li = document.createElement('li')
        li.innerHTML = text + '<button onclick="this.parentElement.remove()">remove</button>'
        list.appendChild(li)
        Input.value = ''
    }
    //drag and drop
    li.draggable = true
    li.ondragstart = function (e) {
        this.classList.add
    }
}



/*
l'utilisateur entre sa tâche
ensuite il appuie sur valider
le code récupre la valeur l'input
ensuite on la push
ensuite on reinitialise
*/