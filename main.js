const correctAnswers=["B","A","B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

let  colorText = document.querySelector(".my-5")


let textPrimary= document.querySelector(".text-primary");

let textAlert= document.querySelector(".text-alert");
let textError= document.getElementById("fname")
console.log(textError);

//event keydown
textError.addEventListener("keydown", function () {
    if(textError.value.length >=3){
        textError.classList.add("bg-red")

    }
   
     else{
        textError.classList.remove("bg-red");
       
    }

    
})

 

//Event Mouseover og mouseout
textPrimary.addEventListener("mouseover", function(){
    textPrimary.classList.add("bg-red")
})
textPrimary.addEventListener("mouseout", function(){
    textPrimary.classList.remove("bg-red")
})
//event click
colorText.addEventListener("click", function () {
    colorText.classList.add("green");
})

//event Alert
textAlert.addEventListener("click",function () {
    alert("Whats up Bro!!")
} )




form.addEventListener("submit" , e =>{
    e.preventDefault();

    let score = 0;
    const userAnswers= [form.q1.value, form.q2.value,form.q3.value]

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score= score+1;
        }
    });
    console.log(score);
    //Points show on page
    result.querySelector("span").textContent = `${score}`;
    result.classList.remove("d.node");
    
    //
    

    

});
