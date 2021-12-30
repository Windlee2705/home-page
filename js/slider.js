const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const check = $('.slider')
console.log([check]);
const dots = $$('.dot-item')
const slider = $('.slider');
const box_slider = $('.box');
const box_review = $('.review-box');
const item_slider = $$('.box-item');
const animationName = $$('.ig-2');
const animationImg = $$('.slider-img');
const animationHeading = $$('.text-title');
const animationContent = $$('.text-title-content');
const animationLink = $$('.ig-animation');
const btnNext = $('.btn-next');
window.onscroll = function() {
    myFunction();
    Animation_Benefit();
};
function myFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      $('.banner-content__heading').classList.add('animation-fadeInUp');
      $('.banner-content__para').classList.add('animation-fadeInUp');
      $('.btn-animation ').classList.add('animation-fadeInUp');
      $('.banner-img').classList.add('animation-fadeInUp');
  } else {
    $('.banner-content__heading').classList.remove('animation-fadeInUp');
    $('.banner-content__para').classList.remove('animation-fadeInUp');
    $('.btn-animation ').classList.remove('animation-fadeInUp');
    $('.banner-img').classList.remove('animation-fadeInUp');
  }
}
function Animation_Benefit(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 600) {
        $('.benefit-heading').classList.add('animate__fadeInUp');
        $('.benefit-para').classList.add('animate__fadeInUp');
        $('.benefit-list ').classList.add('animate__fadeInUp');
        $('.ct-img').classList.add('animate__fadeInUp');
    } else {
        $('.benefit-heading').classList.remove('animate__fadeInUp');
        $('.benefit-para').classList.remove('animate__fadeInUp');
        $('.benefit-list ').classList.remove('animate__fadeInUp');
        $('.ct-img').classList.remove('animate__fadeInUp');
    }
}
 console.log(Window.scrollTop);
console.log(animationLink);
console.log([animationName]);
// width của thẻ cha
const widthAllBox = box_slider.offsetWidth;
console.log(widthAllBox);
// width của 1 slider
const widthItem = widthAllBox / 1;
console.log(widthItem);
// width cần dịch đi đẻ hiện slider khác
const widthSlider = widthItem ;
let space = 0;
let count = 0;
btnNext.onclick = function(){
    count++;
    space += widthSlider;
    if(count > 3){
        space = 0;
        count = 0;
    }
    box_review.style.transform = `translateX(-${space}px)`;
    SwitchImg(count,space)
    dotActive(count);
    Animation(count);
}  
dots.forEach((element,index) => {
    element.onclick = ()=>{
        space = index * widthSlider;
        box_review.style.transform = `translateX(-${space}px)`;
        SwitchImg(index,space)
        dotActive(index);
        Animation(index);
        count = index;
    }
});
function SwitchImg(id,space){
    if(id === 1 ){
        $('.img-2').style.display = 'block'
        $('.img-2').style.transform =  `translateX(${space}px)`;
    }
    if(id === 2 ){
        $('.img-3').style.display = 'block'
        $('.img-3').style.transform =  `translateX(${space}px)`;
    }
    if(id === 3 ){
        $('.img-4').style.display = 'block'
        $('.img-4').style.transform =  `translateX(${space + 200}px)`;
    }
}
function dotActive(index){
    $('.dot-item.active').classList.remove('active');
    dots[index].classList.add('active');
}
function Animation(index){
    $('.slider-img.animation-img').classList.remove('animation-img');
    $('.text-title.animation-text__heading').classList.remove('animation-text__heading');
    $('.text-title-content.animation-text__content').classList.remove('animation-text__content');
    $('.btn.animation-text__link').classList.remove('animation-text__link')
    animationImg[index].classList.add('animation-img')
    animationHeading[index].classList.add('animation-text__heading');
    animationContent[index].classList.add('animation-text__content');
    animationLink[index].classList.add('animation-text__link');
    $('.box-img__item').classList.toggle('animation-img-item')
}
var run = setInterval(function(){
        btnNext.click();
    },6000)


