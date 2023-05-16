
document.querySelector('.nav__btn').addEventListener('click',()=>{
        document.querySelector('.nav__links').style.display="block";
        document.querySelector('.nav__links').style.position="fixed";
        document.querySelector('.dark').style.display="block";
        document.querySelector('.dark').style.position="fixed";
       
});


document.querySelector('.btn-close').addEventListener('click',()=>{
    document.querySelector('.nav__links').style.display="none";
    document.querySelector('.dark').style.display="none";

});