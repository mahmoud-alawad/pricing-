const headerBtn = document.getElementById('header_btn_togg');
let basic = document.querySelector('.price_basic');
let professional = document.querySelector('.price_professional');
let master = document.querySelector('.price_master');
let clicked = false;
//to switch the btn 
headerBtn.addEventListener('click', ()=>{
headerBtn.classList.toggle('animateBtn');
if (!clicked) {
    clicked = true;
    basic.innerHTML =  "&dollar;199.99";
    professional.innerHTML =  "&dollar;249.99";
    master.innerHTML =  "&dollar;399.99";

}else{

    clicked = false;
    basic.innerHTML =  "&dollar;19.99";
    professional.innerHTML =  "&dollar;24.99";
    master.innerHTML =  "&dollar;39.99";
}
});

// basic.innerHTML =  "&dollar;199.99";
// professional.innerHTML =  "&dollar;249.99";
// master.innerHTML =  "&dollar;399.99";