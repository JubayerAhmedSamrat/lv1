const buttons = document.querySelectorAll('.player-btn');
const selectedList = document.getElementById('selectedList');
count = 0;
let totalPlayerCost = 0;


buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const playerName = button.getAttribute('data-name');
        const listItem = document.createElement('li');
        listItem.textContent = playerName;
        selectedList.appendChild(listItem);
        count++;
        
    });
});

document.getElementById('calculate').addEventListener('click', function (){
    
    const perPlayerCost = parseFloat(document.getElementById('perPlayerCost').value) || 0;
    totalPlayerCost = perPlayerCost * count;
    document.getElementById('playerExpensePara').innerText = totalPlayerCost;
    console.log(totalPlayerCost);

});

document.getElementById('calculate-total').addEventListener('click', function (){
    const managerCost = parseFloat(document.getElementById('managerCost').value) || 0;
    const coachCost = parseFloat(document.getElementById('coachCost').value) || 0;
    const totalCal = totalPlayerCost + managerCost + coachCost;
    document.getElementById('totalCalPara').innerText = totalCal;
});