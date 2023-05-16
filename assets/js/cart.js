
let switchCart=false;

document.querySelector('.nav__cart').addEventListener('click',()=>{
    if(switchCart==true){
        document.querySelector('.container-cart').style.display="none";
        switchCart=false;
    }else{
        document.querySelector('.container-cart').style.display="block";
        switchCart=true;
    }
});
