function save(){
    let nom = document.getElementById("lastname").value;
    let prenom = document.getElementById("firstname").value;

    alert(nom + ", " + prenom)
    localStorage.setItem("nom", nom);
    localStorage.setItem("prénom", prenom);

    window.location.replace(acceuil.html);
}
// Constantes utiles au fonctions _!NE PAS MODIFIER!_
const taskInput = document.getElementById("taskInput") ;

const addTaskBtn = document.getElementById("addTask") ;

const taskList = document.getElementById("taskList") ;

const clearAll = document.getElementById("clearAll")


var task = "undone task ";
var done = "task done ";
var i = 0;
var j = 0;
// La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et

//nouvelles lignes) au début et à la fin d'une chaîne.


addTaskBtn.addEventListener("click", addTask);


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
 
 function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}


// Ajoute une tâche indiqué dans l'input avec tout ses fonctionnalités
function addTask() {

    const taskText = taskInput.value.trim();
// Création de la tâche et ses variables.
    if (taskText != ""){

        const listItem = document.createElement("li");

        listItem.textContent = taskText;

        taskList.appendChild(listItem);

        taskInput.value = "";
        
        listItem.id = task.concat(localStorage.length);

        localStorage.setItem(listItem.id, (taskText));

// Ajout de l'image cliquable pour indiquer un statut 'Terminer' à celle-ci.
        const doneBtn = document.createElement("img");

        doneBtn.setAttribute("src", "./Images/success_icon.png");
        doneBtn.setAttribute('height', '24px');
        doneBtn.setAttribute('width', '24px');

        listItem.appendChild(doneBtn);

// Fonction de tâche terminée pour indiquer sont statut visuellement
        doneBtn.addEventListener("click", () => {
            localStorage.removeItem(listItem.id);
            listItem.className = "taskDone";
            listItem.id = done.concat(listItem.id.charAt(listItem.id.length - 1));
            localStorage.setItem(listItem.id, (taskText));
        });

// Ajout de l'image cliquable pour modifier une tâche
        const editBtn = document.createElement("img");

        editBtn.setAttribute("src", "./Images/icons8-edit-file-50.png");
        editBtn.setAttribute('height', '24px');
        editBtn.setAttribute('width', '24px');

        listItem.appendChild(editBtn);
// Modifie la tâche choisie en supprimant l'ancienne et la remplace par la nouvelle
        editBtn.addEventListener("click", () => {
            addTaskBtn.style.backgroundColor = "dodgerblue"
            addTaskBtn.textContent = "Modifier"
            taskInput.value = listItem.textContent;
            listItem.remove();
            localStorage.removeItem(listItem.id);
            addTaskBtn.addEventListener("click", () => {
                addTaskBtn.style.backgroundColor = "gold"
                addTaskBtn.textContent = "Ajouter"
            })
        });
// Ajout de l'image cliquable pour Supprimer une tâche.
        const deleteBtn = document.createElement("img");

        deleteBtn.setAttribute("src", "./Images/recycle-bin.webp");
        deleteBtn.setAttribute('height', '24px');
        deleteBtn.setAttribute('width', '24px');

        listItem.appendChild(deleteBtn);
// Supprime la tâche de la liste et aussi du LocalStorage
        deleteBtn.addEventListener("click", () => {
            listItem.remove();
            localStorage.removeItem(listItem.id);
        });
    }
    else{
        alert("Veuillez entrer une tâche valide.");
    }
}


// Lis le LocalStorage et ajoute tout les tâches qui s'y trouvent.
function loadLocalStorage() {
    for (var k = 0; k <= localStorage.length; k++) {
        let localKey = localStorage.key(k);
        let localValue = localStorage.getItem(localKey);

        if (localKey.includes("task")) {
            const oldListItem = document.createElement("li");
            oldListItem.textContent = localValue;
            taskList.appendChild(oldListItem);
            oldListItem.id = localKey;
// Enregistre localValue pour être sur de bien récupérer le bon texte de la tâche au rechargement de la page.
            oldListItem.dataset.taskText = localValue;
// Ajout de l'image cliquable pour indiquer un statut 'Terminer' à celle-ci.
            const doneBtn = document.createElement("img");

            doneBtn.setAttribute("src", "./Images/success_icon.png");
            doneBtn.setAttribute('height', '24px');
            doneBtn.setAttribute('width', '24px');
    
            oldListItem.appendChild(doneBtn);
// Fonction de tâche terminée pour indiquer sont statut visuellement
            doneBtn.addEventListener("click", () => {
                localStorage.removeItem(oldListItem.id);
                oldListItem.className = "taskDone";
                oldListItem.id = done.concat(oldListItem.id.charAt(oldListItem.id.length - 1));
                localStorage.setItem(oldListItem.id, oldListItem.dataset.taskText);
            });

// Ajout de l'image cliquable pour modifier une tâche
            const editBtn = document.createElement("img");

            editBtn.setAttribute("src", "./Images/icons8-edit-file-50.png");
            editBtn.setAttribute('height', '24px');
            editBtn.setAttribute('width', '24px');
        
            oldListItem.appendChild(editBtn);
// Modifie la tâche choisie en supprimant l'ancienne et la remplace par la nouvelle
            editBtn.addEventListener("click", () => {
                addTaskBtn.style.backgroundColor = "dodgerblue"
                addTaskBtn.textContent = "Modifier";
                taskInput.value = oldListItem.textContent;
                oldListItem.remove();
                localStorage.removeItem(oldListItem.id);
                addTaskBtn.addEventListener("click", () => {
                    addTaskBtn.style.backgroundColor = "gold";
                    addTaskBtn.textContent = "Ajouter";
                })
            });

            const deleteBtn = document.createElement("img");
// Ajout de l'image cliquable pour Supprimer une tâche.
            deleteBtn.setAttribute("src", "./Images/recycle-bin.webp");
            deleteBtn.setAttribute('height', '24px');
            deleteBtn.setAttribute('width', '24px');

            oldListItem.appendChild(deleteBtn);

// Supprime la tâche de la liste et aussi du LocalStorage
            deleteBtn.addEventListener("click", () => {
                localStorage.removeItem(oldListItem.id);
                oldListItem.remove();
            });
        }
    }
}

// Vide tout le LocalStorage et le contenu de la liste de tache ul.
clearAll.addEventListener("click", () => {
    localStorage.clear();
    let ulList = document.getElementById("taskList");
    ulList.innerHTML = "";
});



