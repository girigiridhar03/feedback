const stars = document.querySelectorAll(".fa-star");
const emoji = document.querySelectorAll(".fa-regular");
const color = ["red","orange","lightblue","ligthgreen","green"];
stars.forEach((star,index)=>{
    star.addEventListener("click",()=>{
         updateStar(index)
    })
})

function updateStar(index){
     stars.forEach((star,idx)=>{

      if(idx<index+1){
         star.classList.add("active");

      }
      else{
        star.classList.remove("active")
      }
      
     })
    
     emoji.forEach(emj=>{
        emj.style.transform = `translateX(-${index * 50}px)`;
        emj.style.color = color[index]
     })
    }