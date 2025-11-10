function toDo() {
    const Input = document.getElementById('input');
    const text = Input.value.trim()
    if (text !== '') {
        const list = document.getElementById('list')
        const li = document.createElement('li')
        li.innerHTML = '<input id="Checkbox" onclick="Rayure()" class type="checkbox">' + text + '  <button class="bg-red-500 text-white ml-4 px-3 py-1 rounded-lg" onclick="this.parentElement.remove()">remove</button>'
        list.appendChild(li)
        Input.value = ''
    }
    //drag and drop
    li.draggable = true
    li.ondragstart = function (e) {
        this.classList.add
    }
}


function Rayure() {
    const Rayure = document.getElementById
}

function RemoveAll() {
    location.reload()
    
}

/*
faire en sorte que des que l'utilisateur clique dessu toutez les tâches qui ont été efféctuer soient supprimer
*/