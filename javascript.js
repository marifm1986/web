function addition() {
	var ourAnswer = document.getElementById('answer').value;
	isNaN(ourAnswer);
	if(isNaN(ourAnswer)){
	document.getElementById('msg').innerHTML = "Hey! " + "[ "+ourAnswer +" ]"+ " is not a number" ;		
	}else{
		if(ourAnswer==currectAnswer){
		document.getElementById('msg').innerHTML = "Your Asnwer is Currect " + "("+ourAnswer+")";			
		}else{
			document.getElementById('msg').innerHTML = "Your Asnwer is no Currect. <br> Currect is " + "("+currectAnswer+")" ;			
		}
	}
} 


function newCard(){
			document.getElementById('msg').innerHTML = "";	
			document.getElementById('answer').value = "";	
		numOne = Math.floor(Math.random() *10) +1;
		numTwo = Math.floor(Math.random() *10) +1;
		document.getElementById('demo').innerHTML = numOne + " + " + numTwo;
		currectAnswer = numOne + numTwo;


}

