
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0 ;
player2_score = 0 ;

document.getElementById("player1_name").innerHTML = player1_name + " : " ;
document.getElementById("player2_name").innerHTML = player2_name + " : " ;

document.getElementById("player1_score").innerHTML = player1_score   ;
document.getElementById("player2_score").innerHTML = player2_score   ;

document.getElementById("player_question").innerHTML = "Question turn - " + player1_name  ;
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name  ;


function send()
{
    number1 = document.getElementById("num1").value ;
    number2 = document.getElementById("num2").value ;
    actual_answer = parseInt(number1) * parseInt(number2) ;

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    answer_number = "<br> <h4> Answer </h4> <input type='text' id = 'ans_num'><br><br><br>";
    check_button = "<br> <button type = 'button' id = 'ch_button' class = 'btn btn-info' onclick = 'check();' > Check </button>"
    row = question_number + answer_number + check_button ;

    document.getElementById("output").innerHTML = row ;
    document.getElementById("number1").value = "" ;
    document.getElementById("number2").value = "" ;
    
}