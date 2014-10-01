$(document).ready(function(){
	$("#submit").click(function(e){
		var addNum=$("#number").val();
		e.preventDefault();



	
		for(var i=1; i<=addNum; i++){

				var numval=$("#number").val("");
				if(i%3===0 && i%5===0){
					numval='FizzBuzz';
				}
				else if(i%3===0){
					numval ='Fizz';
				}
				 else if(i%5===0){
					numval ='Buzz';
				}
				else {
					numval=i;
				}

				
				

				$(".middle").append('<li class="numStyle">'+numval+'</li>');

			}




});

	


	$("#clear").click(function(){
		$(".middle").empty();

	});


});
