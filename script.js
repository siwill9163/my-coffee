let navbar = document.querySelector(' .navbar');

document.querySelector('#menu').onclick = () =>{
    navbar.classList.toggle('activate');
    searchForm.classList.remove('activate');
    cartItem.classList.remove('activate');
}

let searchForm = document.querySelector(' .search-form');

document.querySelector('#search').onclick = () =>{
    searchForm.classList.toggle('activate');
    navbar.classList.remove('activate');
    cartItem.classList.remove('activate');
}

let cartItem = document.querySelector(' .cart-item-container');

document.querySelector('#cart').onclick = () =>{
    cartItem.classList.toggle('activate');
    navbar.classList.remove('activate');
    searchForm.classList.remove('activate');
}

window.onscroll = () =>{
    navbar.classList.remove('activate');
    searchForm.classList.remove('activate');
    cartItem.classList.remove('activate');
}
// 1st save
