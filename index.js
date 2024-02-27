const dragList = document.getElementById('dragList');
let draggedItem = null;

/* Drag Events */
    dragList.addEventListener('dragstart', handleDragStart);
    dragList.addEventListener('dragover', handleDragOver);
    dragList.addEventListener('drop', handleDrop);

//Drag Start Event Handler
    function handleDragStart(event){
        draggedItem = event.target;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/html', draggedItem.innerHTML);
        event.target.style.opacity = '0.5';
    }

//Drag Over Event Handler
    function handleDragOver(event){
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        const targetItem = event.target;

        if(targetItem !== draggedItem && targetItem.classList.contains('drag-item')){
            const offset = boundingRect.y + (boundingRect.height / 2);
            
            if(event.clientY - offset > 0){
                targetItem.style.borderBottom = 'solid 2px #000';
                targetItem.style.borderTop = '';
            } else {
                targetItem.style.borderTop = 'solid 2px #000';
                targetItem.style.borderBottom = '';
            }
        }
    }

//Drop Event Handler
    function handleDrop(event){
        event.preventDefault();
        const targetItem = event.target;
        getBoundingClientRect();
        if(target != draggedItem && targetItem.classList.contains('drag-item')){
            if(event.clientY > targetItem.getBoundingClientRect().top + (targetItem.offsetheight/2)){
                targetItem.parentNode.insertBefore(draggedItem, targetItem.nextSibling);
            } else {
                targetItem.parentNode.insertBefore(draggedItem, targetItem);
            }
        }

        targetItem.style.borderTop = '';
        targetItem.style.borderBottom = '';

        draggedItem.style.opacity = '';
        draggedItem = null;
    }

//Toggle Button
    const toggle = document.querySelector('.toggle');
    toggle.addEventListener('click', () =>{
        toggle.classList.toggle('on');
    });
