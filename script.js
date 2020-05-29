document.getElementById('right').onclick = rightFn;
let row = document.getElementById('image-slider-wrapper');
let timer;
let left = 0;
autoSlide()
function rightFn (){
  left = left - 1000
  if(left < -3000){
      left =0
  }
  row.style.left = left + 'px';
  
}
document.getElementById('left').onclick = leftFn    
function leftFn (){
  if(left >= 0){
    left = -3000
  }else{
    left = left + 1000
  }
  row.style.left = left + 'px';

}

function autoSlide(){
   timer = setInterval(rightFn,2000)
}
document.getElementById('int').addEventListener('click',function pauseFn (){
    if(timer != undefined){
        clearInterval(timer)
     timer = undefined
    }else{
        autoSlide()  
    }
}) 


let pauseBtn = document.getElementById('int')
pauseBtn.addEventListener('click',function(){
    if(pauseBtn.className === 'fas fa-play-circle'){
        pauseBtn.className = 'fas fa-pause-circle' 
   
    }else{
        pauseBtn.className = 'fas fa-play-circle' 
           
    }
})



