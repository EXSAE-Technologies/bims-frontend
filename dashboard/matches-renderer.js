let matches = [
    {
        id:12,
        home:"Machester United",
        away:"Liverpool",
        homeOdds:1.44,
        drawOdds:1.13,
        awayOdds:2.01
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
    tdHomeOdds.innerText = item.homeOdds
    tr.appendChild(tdHomeOdds)

    var tdDrawOdds = document.createElement("td")
    tdDrawOdds.innerText = item.drawOdds
    tr.appendChild(tdDrawOdds)

    var tdAwayOdds = document.createElement("td")
    tdAwayOdds.innerText = item.awayOdds
    tr.appendChild(tdAwayOdds)

    tbody.appendChild(tr)
})

document.querySelectorAll(".odds").forEach((item)=>{
    item.addEventListener("click",(event)=>{
        alert(event.target.getAttribute("data-odd-name"))
    })
})

function addToTicket(event) {
    alert(event)
}