const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".resetbtn");
let winMsg = document.querySelector(".win-msg");
let Msg = document.querySelector("#msg");
let turnO = true;
let count=0;
const winPatterns = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


const checkWinner = () => {
    for(let val of winPatterns){
       let pos1 = boxes[val[0]].innerText;
       let pos2 = boxes[val[1]].innerText;
       let pos3 = boxes[val[2]].innerText;

       if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1===pos2 && pos2=== pos3){
            console.log("Winner", pos1);
            showWinner(pos1);
            return true;
            }
       }
    }
    return false;
};

const showWinner = (winner) => {
    Msg.innerText=`Congratulation, Winner is ${winner} !!!`;
    winMsg.classList.remove("hide");
    document.body.classList.add("show-msg");
    disableBox();
};

const gameDraw = () =>{
    Msg.innerText="Game Draw";
    winMsg.classList.remove("hide");
    disableBox();
    document.body.classList.add("show-msg");

}

const enableBox = () => {
    for(let val of boxes){
        val.disabled = false;
        val.innerText="";
    }
}

const disableBox = () => {
    for(let val of boxes){
        val.disabled = true;
    }
}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.style.color="green";
            turnO = false;
            count++;
        }
        else if(!turnO){
            box.innerText = "X";
            box.style.color="red";
            turnO = true;
            count++;
        }
        box.disabled = true;
        
        
        let isWinner=checkWinner();
        if(count==9 && !isWinner){
            gameDraw();
        }
    })
});




const resetGame = () => {
    turnO = true;
    winMsg.classList.add("hide");
    enableBox();
    document.body.classList.remove("show-msg");
    count=0;
}

resetBtn.addEventListener("click", resetGame);




