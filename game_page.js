player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question").innerHTML = "Question turn -" + player1_name;
document.getElementById("answer").innerHTML = "Answer turn -" + player2_name;

function send (){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    C1 = word.charAt(1);

    length =Math.floor(word.length/2);
    C2 = word.charAt(length);

    Minus = word.length -1;
    C3 = word.charAt(Minus);

    R1 = word.replace(C1,"_");
    R2 = R1.replace(C2,"_");
    R3 = R2.replace(C3,"_");

    question ="<h4 id='word_display'> Q."+R3+"</h4>";
    input = "<br><br> Answer: <input typer ='text'id ='input_box'>";
    button ="<br><br> <button class='btn btn-info' onclick ='check()'> Check </button>";
    row = question+input+button;
    
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value ="";

}
 question_turn = "player1";
 answer_turn ="player2";

 function check(){
     get_answer = document.getElementById("input_box").value;
     answer = get_answer.toLowerCase();

     if (answer == word){
         if(answer_turn == "player1"){
             player1_score = player1_score +1;
             document.getElementById("player1_score").innerHTML = player1_score;
         }
         else{
             player2_score = player2_score +1;
             document.getElementById("player2_score").innerHTML = player2_score;
         }
     }
     if( question_turn == "player1"){
         question_turn = "player2";
         document.getElementById("question").innerHTML = "Question Turn - " +player2_name;
     }
     else{
        question_turn = "player1";
        document.getElementById("question").innerHTML = "Question Turn - " +player1_name;
     }
     if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("answer").innerHTML = "Answer Turn - " +player2_name;
     }
     else{
        answer_turn = "player1";
        document.getElementById("answer").innerHTML = "Answer Turn - " +player1_name;
     }
     document.getElementById("output").innerHTML ="";
 }