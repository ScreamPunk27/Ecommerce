const myDesktopImages=document.querySelectorAll('.sneaker-img-desktop');

let indice=0;


function mountSneakers(){
    myDesktopImages[indice].classList.add('mostrar-imagenes');
}

const dismountSneakers=()=>{
    myDesktopImages[indice].classList.remove('mostrar-imagenes');
}

document.getElementById('btn-next-desktop').addEventListener('click',()=>{
    dismountSneakers();
    if(indice<myDesktopImages.length-1){
        indice++;
    }else{
        indice=0;
    }
    mountSneakers();
});

document.getElementById('btn-previous-desktop').addEventListener('click',()=>{
    dismountSneakers();

    if(indice>0){
        indice--;
    }else{
        indice=3;
    }
    mountSneakers();
});


document.getElementById('btn-modal').addEventListener('click',()=>{
    document.querySelector('.dark-desktop').style.display="none";
});

document.querySelector('.main-img').addEventListener('click',()=>{
    document.querySelector('.dark-desktop').style.display="flex";
});

mountSneakers();