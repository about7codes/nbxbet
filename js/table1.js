// Variables below *******************************************************

const listTop = document.getElementsByClassName('list-top')
const listBottom = document.getElementsByClassName('list-bottom')
const subItemTop = document.getElementsByClassName('sub-item1-top');
const subItemBottom = document.getElementsByClassName('item1-list');



// Functions below ********************************************************

// Main drop down function
function expand(node){
    
    const a = listBottom.item(node);
    
    if(a.classList.contains('drop')){
        a.classList.remove('drop')
    }else {
        a.classList.add('drop')
    }
}


// Sub drop down function
function expandSub(node){
    
    let a = subItemBottom.item(node);

    subItemTop[node].classList.toggle('minus');
    
    if(a.classList.contains('drop')){
        a.classList.remove('drop')
    }else {
        a.classList.add('drop')
    }
}


//  Event Listeners below *******************************************************

// Main drop down event
for (let i = 0 ; i < listTop.length; i++) {
    listTop[i].addEventListener('click' , ()=> expand(i) ); 
}

// Sub drop down event
for (let i = 0 ; i < subItemTop.length; i++) {
    subItemTop[i].addEventListener('click' , ()=> expandSub(i)); 
}
