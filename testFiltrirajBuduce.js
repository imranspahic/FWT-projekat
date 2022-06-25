let assert = chai.assert;
describe('FiltrirajRaspored', function () {

    describe('filtrirajBuduce()', function () {
        it('Proslijeđen "petak", prikazuju se sve aktivnosti', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Prvi raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[0].children[1]);
            new FiltrirajRaspored().filtrirajBuduce("+petake");
            var brojPrikazanih = 0;
            var redovi = raspored[0].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 7, "Prikazane su sve aktivnosti");
        });

        it('Proslijeđen "utorak"', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Drugi raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[1].children[1]);
            new FiltrirajRaspored().filtrirajBuduce("+utorak");
            var brojPrikazanih = 0;
            var redovi = raspored[1].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 6, "Postoje 4 aktivnosti poslije utorka");
        });

        it('Proslijeđen neispravan string "ssoubota", prikazuju se sve aktivnosti', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Treći raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[2].children[1]);
            new FiltrirajRaspored().filtrirajBuduce("+ssoubota");
            var brojPrikazanih = 0;
            var redovi = raspored[2].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 9, "Sve aktivnosti su prikazane");
        });

        it('Proslijeđen ponedjeljak, za ovaj raspored sve je sakriveno', function () {
            var raspored = document.getElementsByClassName("raspored-okvir");
            //Četvrti raspored se postavlja
            new FiltrirajRaspored().postaviRaspored(raspored[3].children[1]);
            new FiltrirajRaspored().filtrirajBuduce("+ponedjeljak");
            var brojPrikazanih = 0;
            var redovi = raspored[3].children[1].getElementsByTagName("tr");
            for (let i = 0; i < redovi.length; i++) {
                var koloneReda = redovi[i].getElementsByTagName("td");
                for (let j = 0; j < koloneReda.length; j++)
                    if (koloneReda[j].children[0] != null && koloneReda[j].style.display != 'none')
                        brojPrikazanih++;
            }
            assert.equal(brojPrikazanih, 0, "Ne postoji aktivnost ponedjeljkom");
        });
    });
});