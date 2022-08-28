let txt = document.getElementById("txt");
let btn = document.getElementById("btn");
let img = document.getElementById("img")
let click =0;
let count =0;
let coins=0;
let time = 5;
/*let menu=document.getElementById("menu");
let menu_fon =document.getElementById("menu_fon"); */
let cc = document.getElementById("cc")
window.onclick = function (){
    count++;
    click++;
    let im =["https://media.discordapp.net/attachments/772164370406965271/1013157755315556503/IMG_9487.jpg?width=586&height=586", "https://media.discordapp.net/attachments/772164370406965271/1013157854858981487/IMG_9488.png"]
    if(count>=im.length){
        img.src=im[0];
        count=0;
        time++;
        if(time>=50) {
            time=50
        }
    }
    img.src=im[count]
    txt.innerHTML = click + " " +"жмаков";
if(click%2==0){
    coins++;
}
cc.innerHTML=coins;

}


/*function scroll() {
        window.scrollBy(0, 100)
    }
setInterval(scroll, 1000)
setInterval(function (){
    window.scrollTo(0,0)
}, 20000)
 */
var music = document.getElementById("music")
document.addEventListener("click", function() {
    music.play()
})
/*menu.onclick = function (){
    let menu_fon =document.getElementById("menu_fon");
    let flag=true;
    if(flag==true) {
        menu_fon.style.opacity = 0;

    }

    else{
        menu_fon.style.opacity = 1;
    }

}
*/
let flag=true;
document.getElementById("menu_fon").style.display="none";
/*let cls=document.getElementById("cls")
cls.style.display="none"; */
document.getElementById("cls").style.display="none";
let menu=document.getElementById("menu")
function showSkins() {

    if(flag){
menu.style.display="none";
cls.style.display="block";
/*time=time+1000000; */

        dsp="block"
        flag=false;
    }
    else{
       /* time=time-1000000; */

        menu.style.display="block";
        cls.style.display="none";
        dsp="none"
        flag=true;
    }
    document.getElementById("menu_fon").style.display=dsp;
}
/* let countt = 0;

let prev = document.getElementById("prev");
let next = document.getElementById("next");
let item_list =document.querySelector(".item_list");
let item_length =document.querySelectorAll(".item_list").length;
for(let i=0; i<=item_length; i++){
    item_list[0].style.display="block";
    item_list[i+1].style.display="none"
}
function next(){
    countt++;
}
next()
/*next.onclick = function(){
countt++;
    let item_length =document.querySelectorAll(".item_list").length;


}  */
let slideIndex =1;
function nextSlide(){
    showSld(slideIndex+=1);
}
function prevSlide(){
    showSld(slideIndex-=1);
}
function currentSlide(){
    showSld(slideIndex=n);
}
function showSld(n) {
    let slides = document.querySelectorAll(".item_list");
    if(n>slides.length){
        slideIndex=1;
    }
    if (n<1) {
        slideIndex = slides.length;
    }
    for (let slide of slides) {
        slide.style.display = "none";
        slides[slideIndex-1].style.display = "block";
    }

}





function nextSlide1(){
    showSld1(slideIndex+=1);
}
function prevSlide1(){
    showSld1(slideIndex-=1);
}
function currentSlide1(){
    showSld1(slideIndex=n);
}
function showSld1(n) {
    let slides = document.querySelectorAll(".item_list1");
    if(n>slides.length){
        slideIndex=1;
    }
    if (n<1) {
        slideIndex = slides.length;
    }
    for (let slide of slides) {
        slide.style.display = "none";
        slides[slideIndex-1].style.display = "block";
    }

}

/*function timerHealth(){
    let timer= document.getElementById("timer");
    timer.innerHTML = time;
    time--;
    if(time<0){
        let over=document.getElementById("over");
        over.style.display="block";
        click=0;
       timer.innerHTML ="0";
       txt.innerHTML =click;
    }

}
setInterval(timerHealth, 1000);
let restart = document.getElementById("restart");
restart.onclick= function (){
    time = 5;
    let over=document.getElementById("over");
    over.style.display="none";
}
/*
let menu_game=document.getElementById("menu_game");
menu_game.onclick =function () {
    time=10000;
    delete window.onclick;
    let over=document.getElementById("over");
    over.style.display="none";

} */
/*let body = document.querySelector("body")
/*let fonn = document.getElementById("fonn"); */
window.onload = function() {
    document.getElementById('fonn').onclick = function () {
        document.querySelector("body").style.backgroundImage = "url('http://pm1.narvii.com/7438/52a2de58044dc5e2bcc09db701f9e77e8fefa0b1r1-1600-900v2_uhq.jpg')";
        document.querySelector("body").backgroundAttachment = "fixed";
        document.querySelector("body").backgroundWidth = "3000px";
        document.querySelector("body").backgroundSize = "cover";
        document.querySelector("body").style.backgroundRepeat = "no-repeat";
    }
    document.getElementById('fonnn').onclick = function () {
        document.querySelector("body").style.backgroundImage = "url('https://phonoteka.org/uploads/posts/2021-05/1622467670_25-phonoteka_org-p-dom-terrariya-art-krasivo-25.jpg')";
        document.querySelector("body").backgroundAttachment = "fixed";
        document.querySelector("body").backgroundSize = "cover";
        document.querySelector("body").backgroundPosition="center, center";
        document.querySelector("body").style.backgroundRepeat = "no-repeat";
    }
    document.getElementById('fonnnn').onclick = function () {
        document.querySelector("body").style.backgroundImage = "url('https://i.rutab.net/upload/2020/userfiles/bedrock-rt-1.jpg')";
        document.querySelector("body").backgroundAttachment = "fixed";
        document.querySelector("body").backgroundSize = "cover";
        document.querySelector("body").style.backgroundRepeat = "no-repeat";
        document.querySelector("body").backgroundPosition="center, center";
    }
}

