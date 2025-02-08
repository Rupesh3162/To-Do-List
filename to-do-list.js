const inputarr = JSON.parse(localStorage.getItem('inputarr')) || [];
createEle();
function createEle(){
let inputstored = '';
inputarr.forEach((arrobj, index) => {
    const {name , DOB , mobilno , email}=arrobj;
    const divtag=`<div class="">${name}</div>
     <div>${email}</div>
     <div>${mobilno}</div>
     <div>${DOB}</div> 
     <button  class="del Delete-Button">Delete</button>`;   /* // onclick="
     //  inputarr.splice(${index},1);
     //  createEle();
     //  Storages();
     //  "
     */
    inputstored +=divtag;
    
    });
    console.log(inputstored);
    document.querySelector('.html').innerHTML=inputstored;

    document.querySelectorAll('.Delete-Button').forEach((deleteele, index) => {deleteele.addEventListener('click', () => {
        inputarr.splice(index, 1);
        createEle();
        Storages();
        })
            });
    }

    document.querySelector('.Add-Button').addEventListener('click', () => {
                addTodo();});
function addTodo(){
    const input=document.querySelector('.input-value');
    const inputvlaue=input.value;
    const date=document.querySelector('.input-date');
    const datevalue=date.value;
    const mobilno=document.querySelector('.mobile-no');
    const number=mobilno.value
    const emailid=document.querySelector('.input-email');
    const email=emailid.value
    inputarr.push({
        name : inputvlaue,
        DOB : datevalue,
        mobilno : number,
        email : email
    })
    //console.log({inputvlaue , datevalue , mobilno , email});
    createEle();
    Storages();
}
function Storages(){
    localStorage.setItem('inputarr', JSON.stringify(inputarr));
}
