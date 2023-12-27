const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}



var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
   MainImg.src = smallimg[0].src;
}

smallimg[1].onclick = function(){
   MainImg.src = smallimg[1].src;
}

smallimg[2].onclick = function(){
   MainImg.src = smallimg[2].src;
}

smallimg[3].onclick = function(){
   MainImg.src = smallimg[3].src;
}


// var zooming_head = document.getElementById("zooming_head");
// var zooming_img = document.getElementById("zooming_img");
// zooming_head.addEventListener("mousemove",function(event){
//     clientX = event.clientX - zooming_head.offsetLeft
//     clientY = event.clientY - zooming_head.offsetTop

//     mWidth = zooming_head.offsetWidth
//     mHeight = zooming_head.offsetHeight

//     clientX = clientX / mWidth * 50
//     clientY = clientY / mHeight * 50



//     zooming_img.style.transform = 'translate(-'+clientX+'%,-'+clientY+'%) scale(2)'
//     // zooming_img.style.transform = 'translate(-50%,-50%) scale(2)'
// });




// zooming_head.addEventListener("mousemove",function(event){

//     // zooming_img.style.transform = 'translate(-50%,-50%) scale(1)'
// })
