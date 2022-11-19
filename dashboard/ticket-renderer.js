var ticketId = localStorage.getItem("viewTicket")

var wrapper = betapi.apiWrapper()

var ticket = {}
wrapper.send(`/id/${ticketId}`,{
    method:"GET"
},(data)=>{
    ticket = data
    renderTicket()
},(error)=>{
    alert(`Error: ${JSON.stringify(error)}`)
})

function setData(selector,value){
    document.querySelector(selector).innerText = value
}

function renderTicket(){
    setData("#ticketId",ticket.id)
    setData("#wager",ticket.wager)
    setData("#bet_type",ticket.bet_type)
    setData("#odds",ticket.odds)
    setData("#profit",ticket.profit)
    var tbody = document.querySelector("#ticketBody")

    ticket.bets.forEach(item => {
        var tr = document.createElement("tr")
    
        var tdId = document.createElement("td")
        tdId.innerText = item.id
        tr.appendChild(tdId)

        var tdMatchId = document.createElement("td")
        tdMatchId.innerText = item.matchid
        tr.appendChild(tdMatchId)

        var tdName = document.createElement("td")
        tdName.innerText = item.name
        tr.appendChild(tdName)

        var tdOdds = document.createElement("td")
        tdOdds.innerText = item.odds
        tr.appendChild(tdOdds)

        tbody.appendChild(tr)
    });

}

function printTicket(){
    print()
}