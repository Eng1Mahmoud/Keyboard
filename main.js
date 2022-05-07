let buttom = document.querySelectorAll(".contener .buttons .buttom");
let text = document.querySelector(".contener .text input");
console.log(text);

for (e of buttom) {
    e.addEventListener('click', function() {
        text.focus();
        if(this.textContent.trim().length != 1){
            text.value += " ";
        
        }
        else{
            text.value += this.textContent.trim().toLowerCase();
        
        }
      
      });
    }
   

/* buttom.forEach((e) =>{
    
    //console.log(e.textContent.trim());
    e.onClick = () =>{
        console.log("hgc b");
        text.value = e.textContent;
        console.log(e.textContent.trim());
        if(e.textContent.length != 1){
            text.textContent += " ";
        }
    };
})
 */