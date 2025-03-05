let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-id")

const winPatterns = [
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];
let turnO = false;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO){
            box.innerText = "O";
            turnO=false;
        }
        else {
            box.innerText = "X";
            turnO=true;
        }
        box.disabled = true;
    checkWinner();    
    });
});

const checkWinner = ()  => {
    for(pattern of winPatterns)
    {
    
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[1]].innerText!="" && boxes[pattern[2]].innerText!=""){
            if (boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText &&   boxes[pattern[0]].innerText === boxes[pattern[2]].innerText) 
                {
                alert(`Winner ${boxes[pattern[0]].innerText}`);
                for(let box of boxes)
                {
                    box.disabled = true;
                }
            }
            
    }
}
};