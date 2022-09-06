function show_nav(){
    document.getElementById('navbar').classList.add('opeNnav');
}
function hide(){
    document.getElementById('navbar').classList.remove('opeNnav');
}


let right = document.getElementById('right');
let left = document.getElementById('left');


  
right.addEventListener('click', function(){
    document.getElementById('prodected').scrollLeft += 120
  })
  left.addEventListener('click', function(){
    document.getElementById('prodected').scrollLeft -= 120
  })

  let img =document.querySelector('.main_img');
function photo(photo){
  img.src=photo;
};
