window.onload = () => {
    let ans_btn = document.querySelector("#ans_btn");  

    startUp();
    
   //listeners
   ans_btn.addEventListener("click", answerCheck);

}; 



let questions = [`What color is the sky?`, `What avenger is green?`, `Which country gifted the Statue of Liberty to the US?`, `How many bones are there in the human body?
`, `Which U.S. state is known for peaches?`, `What is the name of the character that Johnny Depp plays in Pirates of the Caribbean?`, `What temperature (in Fahrenheit) does water freeze at?
`, `What has a gravitational pull so strong that light cannot even escape it?`, `What is the scientific name of the process where plants prepare their food?`, `Which U.S. State is the largest?
`, `“I see dead people” is a line from which horror film?`, `Who founded Microsoft?`];

let answers = [`blue`, `hulk`, `france`, `206`, `Georgia`, `Captain Jack Sparrow`, `32 degrees`, `Black hole`, `Photosynthesis`, `Alaska`, `The Sixth Sense`, `Bill Gates`];

let rndNum = 0; 
let attempts = 3; 
let the_score = 0; 

function startUp(){
	console.log("FIRST");
	let qst = document.querySelector("#qst");
	qst.innerHTML = questions[rndNum];
}

function randomNum(){
	rndNum = Math.floor(Math.random()*questions.length);  
}

function answerCheck(){
    let ans = (document.querySelector("#ans").value).toString().toLowerCase();
    let att = document.querySelector("#atmp");
    let score = document.querySelector("#score");
    let qst = document.querySelector("#qst");

    if (ans == (answers[rndNum]).toString().toLowerCase()){
    	console.log("WIN"); 
    	randomNum();
    	the_score = the_score + 1; 
    	score.innerHTML = the_score;
    	qst.innerHTML = questions[rndNum];
    }else {
  		console.log(ans, answers[rndNum]);
    	attempts -= 1;
        att.innerHTML = attempts;

    	if (attempts < 1){
    		sessionStorage.setItem("sc", the_score);
            document.location.href = 'index';    		
    	} 
    }
    

}