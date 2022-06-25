function trenutniCas(divRaspored, trenutnoVrijeme) {
    var datum = new Date(Date.parse(trenutnoVrijeme));
    var trenutniDan = datum.getDay();
    var trenutniSat = datum.getHours();
    var trenutneMinute = datum.getMinutes();
    var brojMinuta = parseInt(trenutniSat) * 60 + parseInt(trenutneMinute)
    var red;
    var indexReda;

    switch (trenutniDan) {
        case 1:
            indexReda = 0;
            break;
        case 2:
            indexReda = 1;
            break;
        case 3:
            indexReda = 2;
            break;
        case 4:
            indexReda = 3;
            break;
        case 5:
            indexReda = 4;
            break;
    }

    red = divRaspored[0].children[1].getElementsByTagName("tr")[indexReda];
    var kFaktor = 26;
    var brojKolone = 0;
    for (let index = 0; index < kFaktor; index++) {
        if (brojKolone != 0) brojKolone--;
        var kolonaColSpan = red.getElementsByTagName("td")[index].getAttribute("colspan");


        if (red.getElementsByTagName("td")[index].classList.contains("popunjeno")) {
            var pocetakVremena;
            var krajVremena;
            var trajanje;
            var minute = 30 * (brojKolone + index);
            var sati = parseInt(parseInt(minute) / 60);
            minute = 30 * (brojKolone + index) - sati * 60;
            sati += 8;
            pocetakVremena = sati * 60 + minute;
            trajanje = parseInt(kolonaColSpan) * 30;

            var trajanjeSati = parseInt(trajanje / 60);
            sati += trajanjeSati;
            minute = trajanje - trajanjeSati * 60 + minute;
            krajVremena = sati * 60 + minute;

            if (brojMinuta >= pocetakVremena && brojMinuta < krajVremena) {
                red.getElementsByTagName("td")[index].style.backgroundColor = "#aef582";
                red.getElementsByTagName("td")[index].style.border = "3px solid black";
            }
        }

        if (kolonaColSpan != null) {
            kFaktor -= parseInt(kolonaColSpan) - 1;
            brojKolone += parseInt(kolonaColSpan);
        }

        else brojKolone++;
    }

}