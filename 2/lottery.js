const lotteryNumbers = () => {
    const numbers = [];
    while(numbers.length < 6) { 
        const randomNumber = Math.floor(Math.random() * 60) + 1;
        if(!numbers.includes(randomNumber))
            numbers.push(randomNumber);
    }
    return numbers.sort( (a, b) => { 
        return a - b;
    })
};

const selectedBets = () => {
    const bets = [];
    while(bets.length < 3) { 
        let randomBet = lotteryNumbers();
        if(!bets.includes(randomBet))
            bets.push(randomBet);
    }
    return bets;
}

const populateTable = (bet) => {
    let body = "";
    for(i = 0; i < 6; i++) {
        body += `<tr>`
        for(j = 0; j < 10; j++) {
            const value = i * 10 + j + 1;
            body += bet.includes(value) ? 
                `<td style="background:#ff00ff; border-radius:50%; width:6%, padding:20px">${value}</td>` :
                `<td>${value}</td>`
        }
        body += `</tr>`
    }
    return body;
}

const loadContent = () => {
    const bets = [];
    bets.push(selectedBets());
    console.log(bets[0]);
    const table1 = document.querySelector("#table1");
    const table2 = document.querySelector("#table2");
    const table3 = document.querySelector("#table3");
    table1.innerHTML = populateTable(bets[0][0]);
    table2.innerHTML = populateTable(bets[0][1]);
    table3.innerHTML = populateTable(bets[0][2]);
}