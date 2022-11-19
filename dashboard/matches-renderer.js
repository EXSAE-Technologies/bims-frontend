var wrapper = betapi.apiWrapper()
var leagues =[237,314]

leagues.forEach((league)=>{
    fetch(`https://app.sportdataapi.com/api/v1/soccer/seasons?league_id=${league}`,{
        method:"GET",
        headers: {
            "Content-Type":"application/json",
            "apikey":"66699ec0-673c-11ed-8ab6-57882caea9ab"
        },
    }).then((response)=>response.json()).then((data)=>{
        //console.log(data.data[data.data.length-1])
        get_matches(data.data[data.data.length-1].season_id)
    }).catch((error)=>{
        alert("Error: "+JSON.stringify(error))
    })
})

function get_matches(season_id) {
    fetch(`https://app.sportdataapi.com/api/v1/soccer/matches?season_id=${season_id}`,{
        method:"GET",
        headers: {
            "Content-Type":"application/json",
            "apikey":"66699ec0-673c-11ed-8ab6-57882caea9ab"
        },
    }).then((response)=>response.json()).then((data)=>{
        console.log(data)
        //get_matches(data.data[data.data.length-1])
    }).catch((error)=>{
        alert("Error: "+JSON.stringify(error))
    })
    fetch("")
}

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
/*
var myMatches = []
fetch("https://app.sportdataapi.com/api/v1/soccer/odds/120423?type=prematch",{
    method:"GET",
    headers: {
        "apikey":"66699ec0-673c-11ed-8ab6-57882caea9ab"
    }
}).then(response=>response.json()).then(result=>{
    console.log(result.data["1X2, Full Time Result"]["bookmakers"][0]["odds_data"])
}).catch(error=>{
    console.log(error)
})
*/
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
            matchid:event.target.getAttribute("data-odd-id"),
            name:event.target.getAttribute("data-odd-name"),
            odds:event.target.innerText
        }
        var filteredTicket = ticket.filter((ticketItem,index,t)=>{
            return ticketItem.matchid != bet.matchid
        })
        filteredTicket.push(bet)
        ticket = filteredTicket

        var betOdds = document.querySelectorAll(".odds[data-odd-id='"+bet.matchid+"']")
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
    var wager = document.querySelector("#wager").value
    if(wager === ""){
        alert("Enter wager.")
        return null
    }
    fetch(wrapper.apiBaseUrl+"/",{
        method:"POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            wager:wager,
            bets:ticket
        })
    }).then((response)=>response.json()).then((data)=>{
        //alert(JSON.stringify(data))
        betapi.viewTicket(data.data.id)
    }).catch((error)=>{
        alert("Error: "+JSON.stringify(error))
    })
}
get_league()