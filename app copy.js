$(document).ready(function(){
	$("#submit").click(function(){

		for(var i=1; i<=100; i++){
				if(i%3===0 && i%5===0){
					$(".middle").append("FizzBuzz<br>");
				}
				else if(i%3===0){
					$(".middle").append("Fizz<br>");
				}
				else if(i%5===0){
					$(".middle").append("Buzz<br>");
				}
				else{
					$(".middle").append(i+"<br>");
				}

			}

		
	});	

	$("#clear").click(function(){
		$(".middle").empty();

	});

	$

});


