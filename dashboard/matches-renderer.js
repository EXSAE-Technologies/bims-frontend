let matches = [
    {
        id:12,
        home:"Machester United",
        away:"Liverpool",
        homeOdds:1.44,
        drawOdds:1.13,
        awayOdds:2.01
    },
    {
        id:18,
        home:"New Castle",
        away:"Chelsea",
        homeOdds:1.64,
        drawOdds:2.03,
        awayOdds:2.11
    },
    {
        id:19,
        home:"Machester City",
        away:"Totenhum",
        homeOdds:2.54,
        drawOdds:1.13,
        awayOdds:1.01
    }
]

var tbody = document.querySelector("#matchesBody")

matches.forEach((item)=>{
    var tr = document.createElement("tr")
    
    var tdId = document.createElement("td")
    tdId.innerText = item.id
    tr.appendChild(tdId)

    var tdHome = document.createElement("td")
    tdHome.innerText = item.home
    tr.appendChild(tdHome)

    var tdAway = document.createElement("td")
    tdAway.innerText = item.away
    tr.appendChild(tdAway)

    var tdHomeOdds = document.createElement("td")
    tdHomeOdds.setAttribute("data-odd-id",item.id)
    tdHomeOdds.setAttribute("data-odd-name","home")
    tdHomeOdds.classList.add("odds")
    tdHomeOdds.innerText = item.homeOdds
    tr.appendChild(tdHomeOdds)

    var tdDrawOdds = document.createElement("td")
    tdDrawOdds.setAttribute("data-odd-id",item.id)
    tdDrawOdds.setAttribute("data-odd-name","draw")
    tdDrawOdds.classList.add("odds")
    tdDrawOdds.innerText = item.drawOdds
    tr.appendChild(tdDrawOdds)

    var tdAwayOdds = document.createElement("td")
    tdAwayOdds.setAttribute("data-odd-id",item.id)
    tdAwayOdds.setAttribute("data-odd-name","away")
    tdAwayOdds.classList.add("odds")
    tdAwayOdds.innerText = item.awayOdds
    tr.appendChild(tdAwayOdds)

    tbody.appendChild(tr)
})

var ticket = []

document.querySelectorAll(".odds").forEach((item)=>{
    item.addEventListener("click",(event)=>{
        var bet = {
            id:event.target.getAttribute("data-odd-id"),
            name:event.target.getAttribute("data-odd-name"),
            odds:event.target.innerText
        }
        var filteredTicket = ticket.filter((ticketItem,index,t)=>{
            return ticketItem.id != bet.id
        })
        filteredTicket.push(bet)
        ticket = filteredTicket
        console.log(ticket)

        var betOdds = document.querySelectorAll(".odds[data-odd-id='"+bet.id+"']")
        betOdds.forEach((betOdd)=>{
            if(betOdd.getAttribute("data-odd-name")==bet.name){
                betOdd.classList.add("text-bg-secondary")
            } else {
                betOdd.classList.remove("text-bg-secondary")
            }
        })
    })
})

function createTicket() {
    //
}