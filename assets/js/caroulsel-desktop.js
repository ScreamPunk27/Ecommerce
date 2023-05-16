/*const page=document.getElementById('page');
const myDesktopImages=document.querySelectorAll('.sneaker-img-desktop');


let indexDesktop=0;

document.querySelector('.main-img').addEventListener('click',()=>{
    page.insertAdjacentHTML('afterbegin',`
        <div class="dark-desktop">
            <div class="carousel-desktop">
                <div class="btn-close-desktop">
                    <img src="assets/img/icon-close-desktop.svg" alt="" srcset=""/>
                </div>
                <div class="container-carousel-desktop-img">
                    <img src="assets/img/image-product-1.jpg" alt="" srcset="" class="sneaker-img-desktop">
                    <img src="assets/img/image-product-2.jpg" alt="" srcset="" class="sneaker-img-desktop">
                    <img src="assets/img/image-product-3.jpg" alt="" srcset="" class="sneaker-img-desktop">
                    <img src="assets/img/image-product-4.jpg" alt="" srcset="" class="sneaker-img-desktop">
                    <div id="btn-previous-desktop">
                        <img src="assets/img/icon-previous.svg" alt="" srcset="">
                    </div>
                    <div id="btn-next-desktop">
                       <img src="assets/img/icon-next.svg" alt="" srcset="">
                    </div>
                </div>
                <div class="thumbnails-carousel">
                    <img src="assets/img/image-product-1-thumbnail.jpg" alt="" srcset="" class="thumbnail-img-desktop">
                    <img src="assets/img/image-product-2-thumbnail.jpg" alt="" srcset="" class="thumbnail-img-desktop">
                    <img src="assets/img/image-product-3-thumbnail.jpg" alt="" srcset="" class="thumbnail-img-desktop">
                    <img src="assets/img/image-product-4-thumbnail.jpg" alt="" srcset="" class="thumbnail-img-desktop">
                </div>
            </div>
        </div>
    `);
    mountSneakers();
});


const mountSneakers = ()=>{
    myDesktopImages[0].style.display="block";
}


