 $(document).ready(function() {
 	$("form#form").submit(function (event) {
 		event.preventDefault();
 		var word = $("#word-input").val();
 		$("#output").append("<li>" + word + "</li>");
 	});
 });








































 // var scrabbleScore = {
 // 	oneP: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  // 	twoP: ["D", "G"],
 	// threeP: ["B", "C", "M", "P"],
 	// fourP: ["F", "H", "V", "W", "Y"],
 	// fiveP: ["k"],
 	// sixP: ["J", "X"],
 	// sevenP: ["Q", "Z"],

// if ("A" === "A") {
 	// 	return 1;
 	// } else {
 	// 	return false;
 	// };
