var naziv = document.getElementById("predmet");
var pocetak = document.getElementById("vrijemeP");
var kraj = document.getElementById("vrijemeK");
var tip = document.getElementById("tip");

naziv.addEventListener("focusout", () => validirajNaziv(naziv));
pocetak.addEventListener("focusout", () => validirajPocetak(pocetak));
kraj.addEventListener("focusout", () => validirajKraj(pocetak, kraj));
tip.addEventListener("focusout", () => validirajTip(tip, pocetak, kraj));
