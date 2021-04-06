
// Sports column dropdown JS--------------------------------------------

const lsTop = document.getElementsByClassName('ls-top');
const lsArrow = document.getElementsByClassName('ls-arrow');
const lsBottom = document.getElementsByClassName('ls-bottom');
const liveSportsItem = document.getElementsByClassName('live-sports-item');

// console.log(lsTop)

// Functions 

const showTeam = i => {
    lsBottom[i].classList.toggle('ls-on');
    lsArrow[i].classList.toggle('arrow-do');
    // liveSportsItem[i].classList.toggle('zip');
}


// Eventlisteners -------

for(let i = 0 ; i < lsTop.length ; i++){
    lsTop[i].addEventListener('click', () => showTeam(i));
}


// Sports column sub dropdown JS--------------------------------------------

const playTop = document.getElementsByClassName('play-top');
const playArrow = document.getElementsByClassName('play-arrow');
const playBottom = document.getElementsByClassName('play-bottom');
// const liveSportsItem = document.getElementsByClassName('live-sports-item');

// console.log(playTop)

// Functions 

const showTeamSub = i => {
    playBottom[i].classList.toggle('ps-on');
    playArrow[i].classList.toggle('arrow-do');
    // liveSportsItem[i].classList.toggle('zip');
}


// Eventlisteners -------

for(let i = 0 ; i < playTop.length ; i++){
    playTop[i].addEventListener('click', () => showTeamSub(i));
}




// Collopse All JS ---------------------------

const collopseBoxA = document.getElementById('collopse-box-a');
const collopseBoxB = document.getElementById('collopse-box-b');
const allLsBottom = document.getElementsByClassName('ls-bottom');


const collopseIt = () => {

    collopseBoxA.classList.add('ls-on');
    collopseBoxB.classList.remove('ls-on');

    for(let i = 0; i < allLsBottom.length; i++){
        allLsBottom[i].classList.add('ls-on');
    }
}
const collopseItAgain = () => {

    collopseBoxA.classList.remove('ls-on');
    collopseBoxB.classList.add('ls-on');

    for(let i = 0; i < allLsBottom.length; i++){
        allLsBottom[i].classList.remove('ls-on');
    }
}

collopseBoxA.addEventListener('click', collopseIt);
collopseBoxB.addEventListener('click', collopseItAgain);



// Show/Hide Sport sidebars -------------------------------------------

const sportColA = document.getElementById('sport-col-a');
const sportColB = document.getElementById('sport-col-b');
const resizeBoxA = document.getElementById('resize-box-a');
const resizeBoxB = document.getElementById('resize-box-b');

const liveTwo = document.getElementById('live-two');
const liveOne = document.getElementById('live-one');

const appearCol = () => {
    sportColA.classList.toggle('show-off');
    sportColB.classList.toggle('show-off');
    
    if(sportColB.classList.contains('show-off')){
        liveTwo.checked = true;
    }
    
}

resizeBoxA.addEventListener('click', appearCol);
resizeBoxB.addEventListener('click', appearCol);


// Show/Hide Sport Sidebar on Tabs click --------------------------------

const liveOneTab = document.getElementById('live-one-tab');
const liveTwoTab = document.getElementById('live-two-tab');
const liveThreeTab = document.getElementById('live-three-tab');
const liveFourTab = document.getElementById('live-four-tab');
const sportCol = document.getElementById('sport-col');

const hideAllCols = () => {
    
    if(!sportCol.classList.contains('drop')){
        sportCol.classList.add('drop');
    }
}

const showAllCols = () => {
    
    if(sportCol.classList.contains('drop')){
        sportCol.classList.remove('drop');
    }

    setTimeout(()=>{
        if(liveOne.checked == true){
            // console.log('showAllCols')
            sportColA.classList.add('show-off');
            sportColB.classList.remove('show-off');
        }
    }, 100);

    if(liveOne.checked == true){
        // console.log('showAllCols')
        sportColA.classList.add('show-off');
        sportColB.classList.remove('show-off');
    }
}

liveOneTab.addEventListener('click', showAllCols);
liveTwoTab.addEventListener('click', showAllCols);
liveThreeTab.addEventListener('click', hideAllCols);
liveFourTab.addEventListener('click', hideAllCols);

// liveOneTab.addEventListener('click', appearCol, { once:true });

// Table Col movements & exp/collaps func --------

const evTables = document.getElementById('ev-tables');
const evMulticols1 = document.getElementById('ev-multicols-1');
const evMulticols2 = document.getElementById('ev-multicols-2');
const evMulticols3 = document.getElementById('ev-multicols-3');


const colOptions = (options) => {
    if(evTables.classList.contains('two-cols')){
        evTables.classList.remove('two-cols');
    }else if(evTables.classList.contains('three-cols')){
        evTables.classList.remove('three-cols');
    }
    
    evTables.classList.add(options);

    if(options === 'one-col'){
        evMulticols1.classList.add('sel');
        evMulticols2.classList.remove('sel');
        evMulticols3.classList.remove('sel');
    }else if(options === 'two-cols'){
        evMulticols2.classList.add('sel');
        evMulticols1.classList.remove('sel');
        evMulticols3.classList.remove('sel');
    }else if(options === 'three-cols'){
        evMulticols3.classList.add('sel');
        evMulticols2.classList.remove('sel');
        evMulticols1.classList.remove('sel');
    }
    
}


evMulticols1.addEventListener('click', () => colOptions('one-col'));
evMulticols2.addEventListener('click', () => colOptions('two-cols'));
evMulticols3.addEventListener('click', () => colOptions('three-cols'));


// Tables Exp/Collapse Func --------------------------------------------------

const tabMin = document.getElementsByClassName('ev-table-ico-min');
const evTableB = document.getElementsByClassName('ev-table-b');


const tabCollapse = i => {
    evTableB[i].classList.toggle('h-zero');
}



// Eventlisteners -------

for(let i = 0 ; i < tabMin.length ; i++){
    tabMin[i].addEventListener('click', () => tabCollapse(i));
}


const evMulticols4 = document.getElementById('ev-multicols-4');
const evMulticols5 = document.getElementById('ev-multicols-5');

const hideTableData = () => {

    evMulticols4.classList.add('show-off');
    evMulticols5.classList.remove('show-off');

    for(let i = 0; i < evTableB.length; i++){
        evTableB[i].classList.add('h-zero');
    }
}
const showTableData = () => {

    evMulticols4.classList.remove('show-off');
    evMulticols5.classList.add('show-off');

    for(let i = 0; i < evTableB.length; i++){
        evTableB[i].classList.remove('h-zero');
    }
}

evMulticols4.addEventListener('click', hideTableData);
evMulticols5.addEventListener('click', showTableData);



// Calendar Tab JS below ----------------------------------------------------------------------------

const rubyTop = document.getElementsByClassName('ruby-top');
const rubyTopArrow = document.getElementsByClassName('ruby-top-a');
const rubyBot = document.getElementsByClassName('ruby-bot');


// console.log(rubyTopArrow)

const rubyShow = (j) => {

    // const rubyHeight = rubyBot[j].scrollHeight;
    

    // if(rubyBot[j].offsetHeight == 0){
    //     rubyBot[j].style.height = rubyHeight + 'px';
    // }else{
    //     rubyBot[j].style.height = 0;
    // }

    rubyTopArrow[j].classList.toggle('arrow-do');
    rubyBot[j].classList.toggle('ls-on');


}


// rubyTop[0].addEventListener('click', rubyShow);


// Eventlisteners -------

for(let j = 0 ; j < rubyTop.length ; j++){
    rubyTop[j].addEventListener('click', () => rubyShow(j));
}

liveFourTab.addEventListener('click', ()=>{

    setTimeout(() => {
    
        for(let j = 0 ; j < rubyTop.length ; j++){
            rubyShow(j);
            rubyShow(j);
        }
    }, 100);

}, {once: true});



// Multibet Tab (dropdown/sport list) JS below ----------------------------------------------------------------------------

// Sport list js 

const mbTop = document.getElementsByClassName('mb-top');
const mbBot = document.getElementsByClassName('mb-bot');

// console.log(mbTop, mbBot)

const showElement = (i) => {

    mbBot[i].classList.toggle('ls-on');
}

// mbTop[0].addEventListener('click', showElement)

for(let i = 0; i < mbTop.length; i++){

    mbTop[i].addEventListener('click', ()=> showElement(i));
}

// Sub-Sport list js 

const basTop = document.getElementsByClassName('bas-top');
const basBot = document.getElementsByClassName('bas-bot');

// console.log(basTop, basBot)

const showSubElement = (i) => {

    basBot[i].classList.toggle('ls-on');
}

// basTop[0].addEventListener('click', showElement)

for(let i = 0; i < basTop.length; i++){

    basTop[i].addEventListener('click', ()=> showSubElement(i));
}