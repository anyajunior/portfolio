// check off todos by clicking

$("ul").on("click", "li", function(){
	//BEFORE INTRODUCING A CLASS: 
	// if li is gray turn to black, else turn to gray
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		textDecoration: "none",
	// 		color: "black"
	// 	});	
	// }
	// else{
	// $(this).css({
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// 	});
	// }
	$(this).toggleClass("completed");
});

// click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grab a todo text from input
		var todoText = $(this).val();
		// clear the input field
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-minus-circle'></i><span> " + todoText + "</li>")
	}
})

$("#plus").click(function(){
	$("input[type='text']").fadeToggle();
})