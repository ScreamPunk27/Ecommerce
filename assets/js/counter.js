const count=document.getElementById('count');
const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const addButton=document.getElementById('btn-add');

const deleteSneakers=document.querySelector('.article-top__btn');

let number=0;
let saveNumber=[];

document.querySelector('.cart-icon-count').style.display="none";

const mountCount = ()=>{
    count.textContent=number;
}

const mountCart = (number)=>{

    saveNumber.push(number);
        let sum=0;
        
        for (let i=0;i<saveNumber.length;i++){
            sum += saveNumber[i];
        }

    if(number>0){
        document.querySelector('.cart-icon-count').style.display="flex";
        document.querySelector('.cart-icon-count').textContent=sum;
    }else{
        document.querySelector('.cart-icon-count').style.display="none";
    }

}

const mountProducts = (products)=>{
    if(products>0){
        document.querySelector('.sneaker').style.display="block";
        document.getElementById('products').textContent=products;
        document.getElementById('total').textContent=`$${125*products}`;
        document.getElementById('cart-empty').style.display="none";

    }else{
        document.querySelector('.sneaker').style.display="none";
        document.getElementById('cart-empty').style.display="block";
    }
}

plus.addEventListener('click',()=>{
    number++;
    mountCount();
});

minus.addEventListener('click',()=>{
    if(number>0){
        number--;
    }else{
        number=0;
    }
    mountCount();
});

addButton.addEventListener('click',()=>{
    mountCart(number);
    mountProducts(number);
    number=0;
    mountCount();

});

deleteSneakers.addEventListener('click',()=>{
    saveNumber=[];
    number=0;
    mountCount();
    mountCart(number);
    mountProducts(number);
});

mountCount();