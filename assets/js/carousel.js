const images=document.querySelectorAll('.sneaker-img');

let index=0;

const mount = ()=>{
    images[index].classList.add('show-images');
}

const dismount = ()=>{
    images[index].classList.remove('show-images');
}


document.getElementById('btn-next').addEventListener('click',()=>{
    dismount();

    if(index >= images.length -1){
        index=0;
    }else{
        index++;
    }

    mount();
});


document.getElementById('btn-previous').addEventListener('click',()=>{
    dismount();

    if(index<=0){
        index=images.length-1;
    }else{
        index--;
    }

    mount();
});

mount();