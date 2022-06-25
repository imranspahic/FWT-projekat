let assert = chai.assert;
describe('FiltrirajRaspored', function () {

    describe('filtrirajPredmet()', function () {
        it('Podstring "RM", prikazani RMA predavanje i vježbe', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Prvi raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[0].children[1]);
            new FiltrirajRaspored().filtrirajPredmet("RM");
            var brojPrikazanih = 0;
            var redovi = raspored[0].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 2, "Postoje samo 2 aktivnosti koje sadrže 'RM' u nazivu predmeta");
        });

        it('Posljednje slovo u nazivu "t", prikazani FWT predavanje i FWT vježbe', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Drugi raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[1].children[1]);
            new FiltrirajRaspored().filtrirajPredmet("t");
            var brojPrikazanih = 0;
            var redovi = raspored[1].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 2, "Postoje samo 2 aktivnosti koje sadrže 't' u nazivu predmeta");
        });

        it('Broj "1" proslijeđen, prikazani IM1 predavanje, IM1 vježbe i MUR1 tutorijal', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Treći raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[2].children[1]);
            new FiltrirajRaspored().filtrirajPredmet("1");
            var brojPrikazanih = 0;
            var redovi = raspored[2].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++) 
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none') 
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 3, "Postoje 3 aktivnosti koje sadrže '1' u nazivu predmeta");
        });

        it('Nije pozvana metoda postaviRaspored(), ispisuje se u konzoli i ništa se ne sakriva na rasporedu', function () {
            console.log("TEST 4");
            var status = new FiltrirajRaspored().filtrirajPredmet("biloKojiString");
            assert.equal(status, -1, "Metoda postaviRaspored() nije pozvana prije metode filtrirajPredmet(), a nije se ispisalo da se treba postaviti raspored.");
        });

    });
});