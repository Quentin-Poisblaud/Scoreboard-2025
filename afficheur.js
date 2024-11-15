function call() {
    const hansokumake = "H" | "X" | "M" | "F" | null

    document.getElementById("name1").innerHTML = player1.playerInfo.name
    document.getElementById("surname1").innerHTML = player1.playerInfo.surname
    document.getElementById("club1").innerHTML = player1.playerInfo.club

    document.getElementById("ippon1").innerHTML = player1.scoreInfo.ippon
    document.getElementById("wazaari1").innerHTML = player1.scoreInfo.wazaari
    document.getElementById("kinza1").innerHTML = (
        "0" + player1.scoreInfo.kinza
    ).slice(-2)

    let tmp1 = ""
    switch (player1.penalInfo.hansokumake) {
        case null:
            if (player1.penalInfo.shido >= 1) {
                tmp1 += `<div class="penal shido">S1</div>`
            }
            if (player1.penalInfo.shido >= 2) {
                tmp1 += `<div class="penal shido">S2</div>`
            }
            if (player1.penalInfo.shido == 3) {
                tmp1 += `<div class="penal shido">S3</div>`
            }
            break
        case "H":
        case "X":
        case "M":
        case "F":
            tmp1 = `<div class="penal hansokumake">${player1.penalInfo.hansokumake}</div>`
    }
    document.getElementById("penal1").innerHTML = tmp1

    document.getElementById("name2").innerHTML = player1.playerInfo.name
    document.getElementById("surname2").innerHTML = player1.playerInfo.surname
    document.getElementById("club2").innerHTML = player1.playerInfo.club

    document.getElementById("ippon2").innerHTML = player1.scoreInfo.ippon
    document.getElementById("wazaari2").innerHTML = player1.scoreInfo.wazaari
    document.getElementById("kinza2").innerHTML = (
        "0" + player1.scoreInfo.kinza
    ).slice(-2)

    let tmp2 = ""
    switch (player2.penalInfo.hansokumake) {
        case null:
            if (player2.penalInfo.shido >= 1) {
                tmp2 += `<div class="penal shido">S1</div>`
            }
            if (player2.penalInfo.shido >= 2) {
                tmp2 += `<div class="penal shido">S2</div>`
            }
            if (player2.penalInfo.shido == 3) {
                tmp2 += `<div class="penal shido">S3</div>`
            }
            break
        case "H":
        case "X":
        case "M":
        case "F":
            tmp2 = `<div class="penal hansokumake">${player2.penalInfo.hansokumake}</div>`
    }
    document.getElementById("penal2").innerHTML = tmp2
    let tmpTime =
        ("0" + Math.floor(timer / 60)).slice(-2) +
        ":" +
        ("0" + (timer % 60)).slice(-2)
    let tmpColor = hajime ? (goldenscore ? "gold" : "lime") : "red"
    document.getElementById(
        "clock"
    ).innerHTML = `<div style="color:${tmpColor}">${tmpTime}</div>`
    document.getElementById(
        "p1"
    ).innerHTML = `<div>${nexts.p1.fullname}</div><div>${nexts.p1.club}</div>`
    document.getElementById(
        "p2"
    ).innerHTML = `<div>${nexts.p2.fullname}</div><div>${nexts.p2.club}</div>`
    document.getElementById("infos").innerHTML = infos
    if (osaekomiTimer > 0) {
        document.getElementById("osaekomi").innerHTML = `
            <div class="tempsEcoule"  style="background-color: #08f; width: calc(92% * ${osaekomiTimer}/20 )"></div>
            <div class="tempsRestant" style="background-color: ${
                osaekomiIsRed ? "#fcc" : "#ddd"
            }; width: calc(92% * (1 - ${osaekomiTimer}/20))"></div>
            <div class="digit"        style="background-color: ${
                osaekomiIsRed ? "#fcc" : "#ddd"
            }">${osaekomiTimer}</div>`
    }
    setTimeout(() => {
        window.location.reload()
    }, 1000)
}
