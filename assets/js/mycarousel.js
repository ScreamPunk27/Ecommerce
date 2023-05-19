const myDesktopImages=document.querySelectorAll('.sneaker-img-desktop');
const myThumbs=document.querySelectorAll('.mythumb');
const myThumbnailImages=document.querySelectorAll('.thumbnail-img-desktop');

let indice=0;


function mountSneakers(){
    myDesktopImages[indice].classList.add('mostrar-imagenes');
    myThumbs[indice].style.border="2px solid var(--orange)";
    myThumbnailImages[indice].style.filter="opacity(.4)";
}

const dismountSneakers=()=>{
    myDesktopImages[indice].classList.remove('mostrar-imagenes');
    myThumbs[indice].style.border="none";
    myThumbnailImages[indice].style.filter="opacity(1)";
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


myThumbnailImages[0].addEventListener('click',()=>{
    dismountSneakers();
    indice=0;
    mountSneakers();
});

myThumbnailImages[1].addEventListener('click',()=>{
    dismountSneakers();
    indice=1;
    mountSneakers();
});

myThumbnailImages[2].addEventListener('click',()=>{
    dismountSneakers();
    indice=2;
    mountSneakers();
});


myThumbnailImages[3].addEventListener('click',()=>{
    dismountSneakers();
    indice=3;
    mountSneakers();
});

mountSneakers();