
const selectArray = [];

function player(playerlist){
    const listBody = document.getElementById('select-players');
    listBody.innerHTML = "";

    for(let i = 0; i < playerlist.length; i++){
        const name = selectArray[i];
        // console.log(name);
        const ul = document.createElement("ul");
        ul.innerHTML = `
        <li>${i+1}. ${name}</li>
        `;
        listBody.appendChild(ul);
    }
}

function addToSelect(element){
    // console.log(element.parentNode.parentNode.children)
    // console.log(element.parentNode.parentNode.children[0].innerText)
    // console.log(element.parentNode.parentNode.children[0])

    const playerName = element.parentNode.parentNode.children[0].innerText;

    selectArray.push(playerName);
    player(selectArray);
}

document.getElementById('calculate-btn').addEventListener('click',function(){
    const playerAmount = document.getElementById('player-filed');
    const playerAmountString = playerAmount.value;
    const perPlayerAmount = parseInt(playerAmountString);

    const list = document.getElementById('select-players')
    const listLenght = list.children.length
    const playerSalary = listLenght * perPlayerAmount;
    console.log(playerSalary);

    const element = document.getElementById('player-expenses');
    element.innerText = playerSalary;
});

document.getElementById('calculate-btn-total').addEventListener('click', function(element){
    const managerAmount = document.getElementById('Manager-filed');
    const managerAmountString = managerAmount.value;
    const managerAmountTotal = parseInt(managerAmountString);
    console.log(managerAmountTotal);

    const CoachAmount = document.getElementById('Coach-filed');
    const CoachAmountString = CoachAmount.value;
    const CoachAmountTotal = parseInt(CoachAmountString);
    console.log(CoachAmountTotal);
   
    const playerCost = document.getElementById('player-expenses');
    const playerCostString = playerCost.innerHTML;
    const perPlayerSalary = parseFloat(playerCostString);

    const allAmount = perPlayerSalary  + managerAmountTotal + CoachAmountTotal;
    console.log(allAmount);

    const totalValue = document.getElementById('totalAmount');
    totalValue.innerText = allAmount;

    console.log(allAmount);
});





