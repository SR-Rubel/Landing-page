import 'bootstrap/dist/js/bootstrap.bundle';
import 'jquery';
import '../scss/style.scss';
import './base';


const button=document.getElementById('toggleButton');
const width=document.getElementById('offCanvas');

button.addEventListener('click',(e)=>{
    console.log("botton is clicked");
    console.log(width.style.width);

    if((width.style.width==='')||(width.style.width==='0px')){
        width.style.width='300px';
        button.children[0].style.transform='rotate(45deg)';
        button.children[0].style.marginLeft='250px';
        width.style.width='250px';
    }
    else{
        width.style.width='';
        button.children[0].style.transform='rotate(0deg)';
        button.children[0].style.marginLeft='0px';
        width.style.width='0px';
    }
    e.stopPropagation();
})