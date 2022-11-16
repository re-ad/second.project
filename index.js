let botton=document.querySelector("button");
window.onscroll=function(){
    if(window.scrollY>=500){
        botton.style.display="block";
    }
    else{
        botton.style.display="none";
    }
};
botton.onclick=function(){
    window.scrollTo({left:0,top:0,behavior:"smooth"});
}