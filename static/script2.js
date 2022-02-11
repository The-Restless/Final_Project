window.onload = () => {
   
    setScore();
  
    let ans_btn = document.querySelector("#ans_btn");

    ans_btn.addEventListener("click", passVar);
}; 

 /*

 function passVar(){
        let score = document.querySelector("#score");
        var data1 = {value : score.innerHTML}; //Pass the javascript variables to a dictionary.
        console.log(data1); // Prints the variables to console window, which are in the JSON format
        window.alert(data1)
        $.ajax({
            url:"/test",
            type:"POST",
            data: JSON.stringify(data1),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
        });

        
}

*/

function setScore(){
	let nscor = document.querySelector("#score");
	if (sessionStorage.getItem("sc")){
    	nscor.innerHTML = sessionStorage.getItem("sc");    
    }	
}


