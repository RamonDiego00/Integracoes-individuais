document.querySelector('#push').onclick = function() {
    if(document.querySelector('#newtask input').value.length == 0) {
        alert("Por favor coloque uma tarefa")
    }
    else{
        document.querySelector('#tasks').innerHTML+= `
        <div class = "task">
             <span id ="tasksname" >
                 ${document.querySelector('#newtask input').value}
             </span>   
             <button class="delete">
            <i class="far fa-trash-alt"></i>
             </button>
        </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll('.task');
        for(var i=0; i<tasks.length;i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('feito')
            }
        }

        document.querySelector('#newtask input').value = ""
    }
}
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);