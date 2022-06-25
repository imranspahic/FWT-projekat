var postavljeniRaspored;

class FiltrirajRaspored {

    postaviRaspored(divRaspored) {
        postavljeniRaspored = divRaspored;
        var redovi = divRaspored.getElementsByTagName("tr");
        for (let i = 0; i < redovi.length; i++) {
            var koloneReda = redovi[i].getElementsByTagName("td");
            for (let j = 0; j < koloneReda.length; j++) {
                if (koloneReda[j].style.display == 'none') {
                    koloneReda[j].style.display = 'table-cell';
                    var kolonaSpan = koloneReda[j].colSpan;
                    for (let k = j; k >  j - kolonaSpan; k--) {
                        redovi[i].deleteCell(k);
                    }
                  j-=kolonaSpan;        
                }
            }
        }
        return postavljeniRaspored;
    }

    filtrirajPredmet(predmetPretraga) {
        if(postavljeniRaspored == null) {
            console.log("Potrebno je prvo postaviti raspored");
            return -1;
        }
        const nazivReg = /[A-ZČĆŠŽĐ0a-zčćšđž0-9]/;
        if (!nazivReg.test(predmetPretraga)) return;
        predmetPretraga = predmetPretraga.toUpperCase();
        var raspored = postavljeniRaspored;
        var redovi = raspored.getElementsByTagName("tr");
        for (let i = 0; i < redovi.length; i++) {
            var koloneReda = redovi[i].getElementsByTagName("td");
            for (let j = 0; j < koloneReda.length; j++) {
                if (koloneReda[j].children[0] != null) {
                    var nazivPredmeta = koloneReda[j].children[0].innerHTML;
                    if (!nazivPredmeta.includes(predmetPretraga) && koloneReda[j].classList.contains("popunjeno")) {
                        if (koloneReda[j].style.display == "none") return;
                        koloneReda[j].style.display = "none";
                        var kolonaSpan = koloneReda[j].colSpan;
                        for (let k = 0; k < kolonaSpan; k++) {
                            redovi[i].insertCell(j + 1 + k);
                        }
                        j += kolonaSpan;
                    }
                }

            }
        }
        postavljeniRaspored = null;
    }

    filtrirajTip(tipPretraga) {
        const tipRegex = /[A-ZČĆŠŽĐ0a-zčćšđž0-9]/;
        if (!tipRegex.test(tipPretraga)) return;
        tipPretraga = tipPretraga.toLowerCase();
        var tipPretraga2;
        if (tipPretraga == "predavanje") {
            tipPretraga2 = "Predavanje";
        }
        else tipPretraga2 = "Vježbe"
        var raspored = postavljeniRaspored;
        var redovi = raspored.getElementsByTagName("tr");
        for (let i = 0; i < redovi.length; i++) {
            var koloneReda = redovi[i].getElementsByTagName("td");
            for (let j = 0; j < koloneReda.length; j++) {
                if (koloneReda[j].children[0] != null) {
                    var tipPredmeta = koloneReda[j].children[1].innerHTML;
                    if ((!tipPredmeta.includes(tipPretraga) && !tipPredmeta.includes(tipPretraga2)) && koloneReda[j].classList.contains("popunjeno")) {
                        if (koloneReda[j].style.display == "none") return;
                        koloneReda[j].style.display = "none";
                        var kolonaSpan = koloneReda[j].colSpan;
                        for (let k = 0; k < kolonaSpan; k++) {
                            redovi[i].insertCell(j + 1 + k);
                        }
                        j += kolonaSpan;
                    }
                }

            }
        }
    }

    filtrirajTrajanje(trajanjePretraga) {
        var raspored = postavljeniRaspored;
        var redovi = raspored.getElementsByTagName("tr");
        for (let i = 0; i < redovi.length; i++) {
            var koloneReda = redovi[i].getElementsByTagName("td");
            for (let j = 0; j < koloneReda.length; j++) {
                var kolonaSpan = koloneReda[j].colSpan;
                if (kolonaSpan != null) {
                    var trajanjePredmeta = parseInt(kolonaSpan) * 30;
                    if ((trajanjePredmeta > trajanjePretraga || trajanjePretraga == 0) && koloneReda[j].classList.contains("popunjeno")) {
                        if (koloneReda[j].style.display == "none") return;
                        koloneReda[j].style.display = "none";
                        var kolonaSpan = koloneReda[j].colSpan;
                        for (let k = 0; k < kolonaSpan; k++) {
                            redovi[i].insertCell(j + 1 + k);
                        }
                        j += kolonaSpan;
                    }
                }
            }
        }
    }

    filtrirajProslo(danPretrage) {
        danPretrage = danPretrage.substring(1);
        danPretrage = danPretrage.toLowerCase();
        var indexReda;
        switch (danPretrage) {
            case "ponedjeljak":
                indexReda = 0;
                break;
            case "utorak":
                indexReda = 1;
                break;
            case "srijeda":
                indexReda = 2;
                break;
            case "četvrtak":
                indexReda = 3;
                break;
            case "petak":
                indexReda = 4;
                break;
            default:
                indexReda = -1;
                break;
        }

        if (indexReda == -1) return;
        var raspored = postavljeniRaspored;
        var redovi = raspored.getElementsByTagName("tr");
        for (let i = 0; i < indexReda; i++) {
            var koloneReda = redovi[i].getElementsByTagName("td");
            for (let j = 0; j < koloneReda.length; j++) {

                if (koloneReda[j].classList.contains("popunjeno")) {
                    if (koloneReda[j].style.display == "none") return;
                    koloneReda[j].style.display = "none";
                    var kolonaSpan = koloneReda[j].colSpan;
                    for (let k = 0; k < kolonaSpan; k++) {
                        redovi[i].insertCell(j + 1 + k);
                    }
                    j += kolonaSpan;
                }
            }
        }
    }

    filtrirajBuduce(danPretrage) {
        danPretrage = danPretrage.substring(1);
        danPretrage = danPretrage.toLowerCase();
        var indexReda;
        switch (danPretrage) {
            case "ponedjeljak":
                indexReda = 0;
                break;
            case "utorak":
                indexReda = 1;
                break;
            case "srijeda":
                indexReda = 2;
                break;
            case "četvrtak":
                indexReda = 3;
                break;
            case "petak":
                indexReda = 4;
                break;
            default:
                indexReda = -1;
                break;
        }

        if (indexReda == -1) return;
        var raspored = postavljeniRaspored;
        var redovi = raspored.getElementsByTagName("tr");
        for (let i = redovi.length - 1; i > indexReda; i--) {
            var koloneReda = redovi[i].getElementsByTagName("td");
            for (let j = 0; j < koloneReda.length; j++) {

                if (koloneReda[j].classList.contains("popunjeno")) {
                    if (koloneReda[j].style.display == "none") return;
                    koloneReda[j].style.display = "none";
                    var kolonaSpan = koloneReda[j].colSpan;
                    for (let k = 0; k < kolonaSpan; k++) {
                        redovi[i].insertCell(j + 1 + k);
                    }
                    j += kolonaSpan;
                }
            }
        }
    }


};