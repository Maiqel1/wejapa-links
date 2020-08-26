var form = document.getElementById('form');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('link').value;

    var li = document.createElement('li');
    li.className = 'list-group-item';
    console.log(li);

    li.appendChild(document.createTextNode(newItem));

    var copy = document.createElement('button');

    copy.className = 'btn btn-md float-right '
    copy.style.marginLeft = '200px'
    copy.appendChild(document.createTextNode('copy'));

    copy.addEventListener('click', change);
    function change(){
        
        copy.textContent = 'copied!';
        copy.style.backgroundColor = ' hsl(257, 27%, 26%)';
    }

    li.appendChild(copy);

    itemList.appendChild(li);
}

