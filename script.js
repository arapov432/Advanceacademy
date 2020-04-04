function fun(){
  document.getElementById('demo').innerHTML='Welcome to JS. Hail JS';
}
function change(){
  document.getElementById('demo2').style.fontFamily='verdana';
  document.getElementById('demo2').style.fontSize='50px';
  document.getElementById('demo2').style.backgroundColor='Red';
}
function next(as){
  var photo;
  if(as == 0){
    photo='https://www.w3schools.com/images/picture.jpg';
  }
  else{
    photo='logo.png';
  }
  document.getElementById('imgslide').src=photo;
}