var wrapper = betapi.apiWrapper()

tickets = []
wrapper.send("/",{
    method:"GET"
},(data)=>{
    tickets = data
    renderTickets()
},(error)=>{
    alert(`Error: ${JSON.stringify(error)}`)
})

function renderTickets(){
    var tbody = document.querySelector("#ticketsBody")

    tickets.forEach(item => {
        var tr = document.createElement("tr")
    
        var tdId = document.createElement("td")
        tdId.innerText = item.id
        tr.appendChild(tdId)

        var tdBetType = document.createElement("td")
        tdBetType.innerText = item.bet_type
        tr.appendChild(tdBetType)

        var tdOdds = document.createElement("td")
        tdOdds.innerText = item.odds
        tr.appendChild(tdOdds)

        var tdWager = document.createElement("td")
        tdWager.innerText = item.wager
        tr.appendChild(tdWager)

        var tdProfit = document.createElement("td")
        tdProfit.innerText = item.profit
        tr.appendChild(tdProfit)

        var tdView = document.createElement("a")
        tdView.innerText = "View"
        tdView.setAttribute("href",`ticket.html?id=${item.id}`)
        tdView.classList.add("btn","btn-outline-primary")
        tr.appendChild(tdView)

        tbody.appendChild(tr)
    });

}