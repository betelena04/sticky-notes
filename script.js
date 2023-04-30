const buttonCreateNote = document.querySelector('.btn-success');

buttonCreateNote.addEventListener('click', typeNote);

const stickyContainer = document.querySelector('.sticky-container');
const formContainer= document.querySelector('.form-container');
const checkIcon = document.querySelector('#check-icon');
const xIcon = document.querySelector('#x-icon');
var i = 0;

xIcon.addEventListener('click', typeNote);


checkIcon.addEventListener('click', createNote);

function typeNote() {
    if(formContainer.style.display == "none") {
        formContainer.style.display = 'block';
    }
    else {
        formContainer.style.display = "none";
    }
}

function createNote() {
    let noteText = document.querySelector('#note-text').value;
    let node0 = document.createElement('div');
    let node1 = document.createElement('h1');

    console.log('t');

    node1.innerHTML = noteText;
    
    node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding: 25px; margin-top: 10px; overflow: hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)");

    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    node0.appendChild(node1);

    stickyContainer.insertAdjacentElement('beforeend', node0);

    node0.addEventListener('mouseenter', function(){
        node0.style.transform = 'scale(1.1)';
    })

    node0.addEventListener('mouseleave', function(){
        node0.style.transform = 'scale(1)';
    })
    
    node0.addEventListener('dblclick', function(){
        node0.remove();
    })

    document.querySelector('#note-text').value = '';
}

function margin() {
    let randomMargin = ['-5px', '1px', '5px', '10px', '15px', '20px'];

    return randomMargin[Math.floor(Math.random() * randomMargin.length)];
}

function rotate() {
    let randomRotate = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-deg)', 'rotate(-10deg)'];

    return randomRotate[Math.floor(Math.random() * randomRotate.length)];
}

function color() {
    let randomColor = ['#BCF4F5', '#B4EBCA', '#D9F2B4', '#D3FAC7', '#FFB7C3', '#81C14B'];
    
    if(i > randomColor.lenght - 1){
        i = 0;
    }
    return randomColor[i++];
}