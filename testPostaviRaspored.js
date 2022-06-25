let assert = chai.assert;
describe('FiltrirajRaspored', function () {

    describe('postaviRaspored()', function () {
        it('Postavljen prvi raspored, ima 7 aktivnosti, provjera RMA aktivnosti', function () {
            var rasporedDiv = document.getElementsByClassName("raspored-okvir");
            //Prvi raspored se postavlja
            var raspored = new FiltrirajRaspored().postaviRaspored(rasporedDiv[0].children[1]);
            var brojAktivnostiRasporeda = 0;
            var slucajnaAktivnost;
            var redovi = raspored.getElementsByTagName("tr");
            slucajnaAktivnost = redovi[1].getElementsByTagName("td")[9].children[0].innerHTML;
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                    brojAktivnostiRasporeda++;
            }
            assert.equal(brojAktivnostiRasporeda, 7, "Postoji 7 aktivnosti u ovom rasporedu");
            assert.equal(slucajnaAktivnost, "RMA", "Naziv ove aktivnosti je RMA");
        });

        it('Postavljen drugi raspored, ima 10 aktivnosti, provjera MUR1 aktivnosti', function () {
            var rasporedDiv = document.getElementsByClassName("raspored-okvir");
            //Drugi raspored se postavlja
            var raspored = new FiltrirajRaspored().postaviRaspored(rasporedDiv[1].children[1]);
            var brojAktivnostiRasporeda = 0;
            var slucajnaAktivnost;
            var redovi = raspored.getElementsByTagName("tr");
            slucajnaAktivnost = redovi[3].getElementsByTagName("td")[3].children[0].innerHTML;
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                    brojAktivnostiRasporeda++;
            }
            assert.equal(brojAktivnostiRasporeda, 10, "Postoji 10 aktivnosti u ovom rasporedu");
            assert.equal(slucajnaAktivnost, "MUR1", "Naziv ove aktivnosti je MUR1");
        });

        it('Postavljen treći raspored, ima 9 aktivnosti, provjera RP aktivnosti', function () {
            var rasporedDiv = document.getElementsByClassName("raspored-okvir");
            //Treći raspored se postavlja
            var raspored = new FiltrirajRaspored().postaviRaspored(rasporedDiv[2].children[1]);
            var brojAktivnostiRasporeda = 0;
            var slucajnaAktivnost;
            var redovi = raspored.getElementsByTagName("tr");
            slucajnaAktivnost = redovi[4].getElementsByTagName("td")[6].children[0].innerHTML;
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                    brojAktivnostiRasporeda++;
            }
            assert.equal(brojAktivnostiRasporeda, 9, "Postoji 9 aktivnosti u ovom rasporedu");
            assert.equal(slucajnaAktivnost, "RP", "Naziv ove aktivnosti je RP");
        });

        it('Postavljen četvrti raspored, ima 8 aktivnosti, provjera nepostojeće aktivnosti', function () {
            var rasporedDiv = document.getElementsByClassName("raspored-okvir");
            //Četvrti raspored se postavlja
            var raspored = new FiltrirajRaspored().postaviRaspored(rasporedDiv[3].children[1]);
            var brojAktivnostiRasporeda = 0;
            var slucajnaAktivnost;
            var redovi = raspored.getElementsByTagName("tr");
            slucajnaAktivnost = redovi[0].getElementsByTagName("td")[2].children[0];
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                    brojAktivnostiRasporeda++;
            }
            assert.equal(brojAktivnostiRasporeda, 8, "Postoji 8 aktivnosti u ovom rasporedu");
            assert.equal(slucajnaAktivnost, null, "Nema aktivnosti");
        });
    });
});