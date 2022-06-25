function validirajNaziv(ieNaziv) {
    const nazivRegExp = /^[A-ZŠČĆŽĐ]{5}$|^[A-ZŠČĆŽĐ]{2,4}[0-9]?$/;
    var validno = nazivRegExp.test(ieNaziv.value);
    if (validno) naziv.style.backgroundColor = "#c5efb6";
    else naziv.style.backgroundColor = "#f4cccc";
    return;
}

function validirajPocetak(iePocetak) {
    const pocetakRegExp = /[0,1]{1}[0-9]{1}:[0-5]{1}[0-9]{1}/;
    var validno = pocetakRegExp.test(iePocetak.value);
    if (validno) iePocetak.style.backgroundColor = "#c5efb6";
    else iePocetak.style.backgroundColor = "#f4cccc";
    return;
}

function validirajKraj(iePocetak, ieKraj) {
    const krajRegExp = /[0,1]{1}[0-9]{1}|2{1}[0-3]{1}:[0-5]{1}[0-9]{1}/;
    var validno = krajRegExp.test(ieKraj.value);
    var izaPocetka = false;

    if (validno) {
        let satPocetka = iePocetak.value.split(":")[0];
        let minutaPocetka = iePocetak.value.split(":")[1];
        let satKraja = ieKraj.value.split(":")[0];
        let minutaKraja = ieKraj.value.split(":")[1];
        if (parseInt(satKraja) > parseInt(satPocetka))
            izaPocetka = true;
        else if (parseInt(satKraja) == parseInt(satPocetka) && parseInt(minutaKraja) > parseInt(minutaPocetka))
            izaPocetka = true;
        else izaPocetka = false;
    }
    if (izaPocetka) ieKraj.style.backgroundColor = "#c5efb6";
    else ieKraj.style.backgroundColor = "#f4cccc";
    return;
}

function validirajTip(ieTip, iePocetak, ieKraj) {
    var trajanjeIspravno = false;
    var max = false;
    var min = false;
    const satPocetka = iePocetak.value.split(":")[0];
    const minutaPocetka = iePocetak.value.split(":")[1];
    const satKraja = ieKraj.value.split(":")[0];
    const minutaKraja = ieKraj.value.split(":")[1];

    if (ieTip.value == 'predavanje') {
        if (parseInt(satKraja) - parseInt(satPocetka) == 3 && parseInt(minutaKraja) - parseInt(minutaPocetka) == 0)
            max = true;
        else if (parseInt(satKraja) - parseInt(satPocetka) < 3)
            max = true;
        else max = false;

        if (parseInt(satKraja) - parseInt(satPocetka) == 1 && parseInt(minutaKraja) >= parseInt(minutaPocetka))
            min = true;
        else if (parseInt(satKraja) - parseInt(satPocetka) > 1)
            min = true;
        else min = false;

        if (min && max) trajanjeIspravno = true;

    }

    else {
        if (parseInt(satKraja) - parseInt(satPocetka) == 3 && parseInt(minutaKraja) - parseInt(minutaPocetka) == 0)
            max = true;
        else if (parseInt(satKraja) - parseInt(satPocetka) < 3)
            max = true;
        else max = false;

        if (parseInt(satKraja) == parseInt(satPocetka) && parseInt(minutaKraja) - parseInt(minutaPocetka) >= 45)
            min = true;
        else if (parseInt(satKraja) - parseInt(satPocetka) == 1 && (parseInt(minutaKraja) + 60 - parseInt(minutaPocetka)) >= 45)
            min = true;
        else if (parseInt(satKraja) - parseInt(satPocetka) > 1)
            min = true;
        else min = false;

        if (min && max) trajanjeIspravno = true;
    }

    if (trajanjeIspravno) ieTip.style.backgroundColor = "#c5efb6";
    else ieTip.style.backgroundColor = "#f4cccc";
    return;
}