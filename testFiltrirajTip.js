let assert = chai.assert;
describe('FiltrirajRaspored', function () {

    describe('filtrirajTip()', function () {
        it('Proslijeđen "tutorijal", prikazan DM tutorijal', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Prvi raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[0].children[1]);
            new FiltrirajRaspored().filtrirajTip("tutorijal");
            var brojPrikazanih = 0;
            var redovi = raspored[0].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 1, "Postoji samo 1 aktivnosti koja je tipa 'tutorijal'");
        });

        it('Proslijeđen podstring "pred", prikazana predavanja', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Drugi raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[1].children[1]);
            new FiltrirajRaspored().filtrirajTip("pred");
            var brojPrikazanih = 0;
            var redovi = raspored[1].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 6, "Postoji 6 aktivnosti koje su tipa predavanje");
        });

        it('Proslijeđen prazan string " ", ne sakriva se ništa', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Treći raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[2].children[1]);
            new FiltrirajRaspored().filtrirajTip(" ");
            var brojPrikazanih = 0;
            var redovi = raspored[2].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 9, "Ništa se ne treba sakriti");
        });


        it('Proslijeđen tip "kurs", sve je sakriveno', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Četvrti raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[3].children[1]);
            new FiltrirajRaspored().filtrirajTip("kurs");
            var brojPrikazanih = 0;
            var redovi = raspored[3].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 0, "Ne postoji aktivnost tipa 'kurs'");
        });
    });
});