


//let message = "Я учу JavaScript!"
//function showMessage() {
//    return message
//}
//console.log(message);

var slider_img = document.querySelector('.slider-img');
var images = ['cat_play.jpg','meow_cat.jpg','red_cat.jpg','white_cat.jpg'];
var i = 0; //current image index

function prev(){
    if(i <= 0 ) i = images.lenghth;
    i--;
    return setImg()
}
function next(){
    if(i >= images.lenghth-1 ) i = -1;
    i++;
    return setImg()
}

function setImg(){
    return slider_img.setAttribute('src','images/'+ images[i]);
}