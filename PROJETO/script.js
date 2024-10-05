let list = document.querySelector('.list');
let input = document.querySelector('.input');

let tasks = [{
        done: false,
        title: 'comprar corante para o bolo'
    },
    {
        done: true,
        title: 'fazer academia'
    },
    {
        done: false,
        title: 'estudar JS'
    }
];



input.addEventListener( 'keyup', (event) => {
    if(event.key.toLowerCase() === 'enter' && input.value !== ''){
        tasks.push({
            done: false,
            title: input.value
        });
        input.value = '';
        rederList()
    }
})





function rederList() {
    list.innerHTML = '';

    for (let i in tasks) {

        let taskLi = document.createElement('li');
        list.appendChild(taskLi);

        let taskInput = document.createElement('input');
        taskInput.setAttribute('type', 'checkbox');
        
        if(tasks[i].done === true){
            taskInput.setAttribute( 'checked', 'true');
            taskLi.classList.add('done');
        }

        taskInput.addEventListener( 'click', ()=>{
            tasks[i].done = !tasks[i].done;
            rederList();
        })
        taskLi.appendChild(taskInput);

        


        let taskSpan = document.createElement('span');
        taskSpan.innerHTML = tasks[i].title;
        taskLi.appendChild(taskSpan)


        
    }
};

rederList();