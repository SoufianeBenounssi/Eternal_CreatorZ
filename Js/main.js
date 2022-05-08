const bg = document.getElementById('bg');
const hero = document.querySelector('.hero');
let triggerHeight;

setTimeout(function(){
    triggerHeight = hero.offsetHeight -1200;
}, 300);

window.addEventListener('scroll', function(){

    let loc = window.scrollY;

    if (loc > triggerHeight+120) {
        bg.classList.add('scroll1')
    } else{
        bg.classList.remove('scroll1')
    };
    if (loc > triggerHeight + 150) {
        bg.classList.remove('scroll1')
        bg.classList.add('scroll2')
    } else{
        bg.classList.remove('scroll2')
    };
    if (loc > triggerHeight + 170) {
        bg.classList.remove('scroll2')
        bg.classList.add('scroll3')
    } else{
        bg.classList.remove('scroll3')
    };
    if (loc > triggerHeight + 190) {
        bg.classList.remove('scroll3')
        bg.classList.add('scroll4')
    } else{
        bg.classList.remove('scroll4')
    };
    if (loc > triggerHeight + 210) {
        bg.classList.remove('scroll4')
        bg.classList.add('scroll5')
    } else{
        bg.classList.remove('scroll5')
    };
    if (loc > triggerHeight + 230) {
        bg.classList.remove('scroll5')
        bg.classList.add('scroll6')
    } else{
        bg.classList.remove('scroll6')
    };
    if (loc > triggerHeight + 260) {
        bg.classList.remove('scroll6')
        bg.classList.add('scroll7')
    } else{
        bg.classList.remove('scroll7')
    };
    if (loc > triggerHeight + 280) {
        bg.classList.remove('scroll7')
        bg.classList.add('scroll8')
    } else{
        bg.classList.remove('scroll8')
    };
    if (loc > triggerHeight + 300) {
        bg.classList.remove('scroll8')
        bg.classList.add('scroll9')
    } else{
        bg.classList.remove('scroll9')
    };
    if (loc > triggerHeight + 320) {
        bg.classList.remove('scroll9')
        bg.classList.add('scroll10')
    } else{
        bg.classList.remove('scroll10')
    };
    if (loc > triggerHeight + 350) {
        bg.classList.remove('scroll10')
        bg.classList.add('scroll11')
    } else{
        bg.classList.remove('scroll11')
    };
    if (loc > triggerHeight + 370) {
        bg.classList.remove('scroll11')
        bg.classList.add('scroll12')
    } else{
        bg.classList.remove('scroll12')
    };
    if (loc > triggerHeight + 390) {
        bg.classList.remove('scroll12')
        bg.classList.add('scroll13')
    } else{
        bg.classList.remove('scroll13')
    };
    if (loc > triggerHeight + 410) {
        bg.classList.remove('scroll13')
        bg.classList.add('scroll14')
    } else{
        bg.classList.remove('scroll14')
    };
    if (loc > triggerHeight + 430) {
        bg.classList.remove('scroll14')
        bg.classList.add('scroll15')
    } else{
        bg.classList.remove('scroll15')
    };
    if (loc > triggerHeight + 450) {
        bg.classList.remove('scroll15')
        bg.classList.add('scroll16')
    } else{
        bg.classList.remove('scroll16')
    };
    if (loc > triggerHeight + 470) {
        bg.classList.remove('scroll16')
        bg.classList.add('scroll17')
    } else{
        bg.classList.remove('scroll17')
    };
    if (loc > triggerHeight + 490) {
        bg.classList.remove('scroll17')
        bg.classList.add('scroll18')
    } else{
        bg.classList.remove('scroll18')
    };
    if (loc > triggerHeight + 510) {
        bg.classList.remove('scroll18')
        bg.classList.add('scroll19')
    } else{
        bg.classList.remove('scroll19')
    };
    if (loc > triggerHeight + 530) {
        bg.classList.remove('scroll19')
        bg.classList.add('scroll20')
    } else{
        bg.classList.remove('scroll20')
    };
    if (loc > triggerHeight + 550) {
        bg.classList.remove('scroll20')
        bg.classList.add('scroll21')
    } else{
        bg.classList.remove('scroll21')
    };
    if (loc > triggerHeight + 570) {
        bg.classList.remove('scroll21')
        bg.classList.add('scroll22')
    } else{
        bg.classList.remove('scroll22')
    };
    if (loc > triggerHeight + 590) {
        bg.classList.remove('scroll22')
        bg.classList.add('scroll23')
    } else{
        bg.classList.remove('scroll23')
    };
    if (loc > triggerHeight + 610) {
        bg.classList.remove('scroll23')
        bg.classList.add('scroll24')
    } else{
        bg.classList.remove('scroll24')
    };
    if (loc > triggerHeight + 630) {
        bg.classList.remove('scroll24')
        bg.classList.add('scroll25')
    } else{
        bg.classList.remove('scroll25')
    };
    if (loc > triggerHeight + 650) {
        bg.classList.remove('scroll25')
        bg.classList.add('scroll26')
    } else{
        bg.classList.remove('scroll26')
    };
    if (loc > triggerHeight + 670) {
        bg.classList.remove('scroll26')
        bg.classList.add('scroll27')
    } else{
        bg.classList.remove('scroll27')
    };
    if (loc > triggerHeight + 690) {
        bg.classList.remove('scroll27')
        bg.classList.add('scroll28')
    } else{
        bg.classList.remove('scroll28')
    };
    if (loc > triggerHeight + 710) {
        bg.classList.remove('scroll28')
        bg.classList.add('scroll29')
    } else{
        bg.classList.remove('scroll29')
    };
    if (loc > triggerHeight + 730) {
        bg.classList.remove('scroll29')
        bg.classList.add('scroll30')
    } else{
        bg.classList.remove('scroll30')
    };
    
    
    
})