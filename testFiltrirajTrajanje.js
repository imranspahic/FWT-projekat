let assert = chai.assert;
describe('FiltrirajRaspored', function () {

    describe('filtrirajTrajanje()', function () {
        it('Proslijeđeno 100 minuta, prikazane 2 aktivnosti od 90 minuta', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Prvi raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[0].children[1]);
            new FiltrirajRaspored().filtrirajTrajanje(100);
            var brojPrikazanih = 0;
            var redovi = raspored[0].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 2, "Postoje samo 2 aktivnosti čije je trajanje u okviru 100 minuta");
        });

        it('Proslijeđeno 500 minuta, prikazane sve aktivnosti', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Drugi raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[1].children[1]);
            new FiltrirajRaspored().filtrirajTrajanje(500);
            var brojPrikazanih = 0;
            var redovi = raspored[1].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 10, "Sve aktivnosti trebaju biti prikazane jer su u okviru 500 minuta");
        });

        it('Proslijeđeno 0 minuta, sve je sakriveno', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Treći raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[2].children[1]);
            new FiltrirajRaspored().filtrirajTrajanje(0);
            var brojPrikazanih = 0;
            var redovi = raspored[2].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 0, "Ništa se ne treba prikazati");
        });


        it('Proslijeđeno 150 minuta, aktivnosti od 150 minuta se također prikazuju', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Četvrti raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[3].children[1]);
            new FiltrirajRaspored().filtrirajTrajanje(150);
            var brojPrikazanih = 0;
            var redovi = raspored[3].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 4, "Postoje 4 aktivnosti u okviru trajanja 150 minuta");
        });
    });
});