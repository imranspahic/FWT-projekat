var naziv = document.getElementById("filtriraj-naziv");
var tip = document.getElementById("filtriraj-tip-predmeta");
var trajanje = document.getElementById("filtriraj-vrijeme-trajanja");
var dan = document.getElementById("filtriraj-dan");
var filtriraj = document.getElementById("filtriraj");
var raspored = document.getElementsByClassName("raspored-okvir");

filtriraj.addEventListener("click", function () {
    if (naziv.value == "" && tip.value == "" && trajanje.value == "" && dan.value == "") {
        return;
    }
    if (naziv.value != "") {
        new FiltrirajRaspored().filtrirajPredmet(naziv.value);
    }
    else if (tip.value != "") {
        new FiltrirajRaspored().filtrirajTip(tip.value);
    }
    else if (trajanje.value != "") {
        new FiltrirajRaspored().filtrirajTrajanje(trajanje.value);
    }
    else {
        const danRegexProslo = /^-/;
        const danRegexBuduce = /^\+/;

        if (danRegexProslo.test(dan.value)) {
            new FiltrirajRaspored().filtrirajProslo(dan.value);
        }
        else if (danRegexBuduce.test(dan.value)) {
            new FiltrirajRaspored().filtrirajBuduce(dan.value);
        }
    }
});

naziv.addEventListener("input", function () {
    new FiltrirajRaspored().postaviRaspored(raspored[0].children[1]);
    tip.value = "";
    trajanje.value = "";
    dan.value = "";
});

tip.addEventListener("input", function () {
    new FiltrirajRaspored().postaviRaspored(raspored[0].children[1]);
    naziv.value = "";
    trajanje.value = "";
    dan.value = "";
});

trajanje.addEventListener("input", function () {
    new FiltrirajRaspored().postaviRaspored(raspored[0].children[1]);
    naziv.value = "";
    tip.value = "";
    dan.value = "";
});

dan.addEventListener("input", function () {
    new FiltrirajRaspored().postaviRaspored(raspored[0].children[1]);
    naziv.value = null;
    tip.value = null;
    trajanje.value = null;
});