// set Initial
let counting = 0;
// Select value and Buttons
const value = document.querySelector("#value");
const  buttons = document.querySelectorAll(".btn");
 
buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
       const styles = e.currentTarget.classList;
       if(styles.contains('decrement')){
           counting--;
       }
        else if(styles.contains("increment")){
            counting++;
        }else{
            counting = 0;
        }
         if(counting > 0){
             value.style.color ="green";
         }
         else if(counting < 0){
             value.style.color="red"; 
                    }
                    else{
                        value.style.color ="blue";
                    }
       value.textContent = counting
    });
});
