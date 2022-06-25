let assert = chai.assert;
describe('Raspored', function () {

    it('Tačno kraj WT predavanja ponedjeljkom (12:00), aktivnost WT predavanje ne treba biti aktivna/zelena', function () {
        var raspored = document.getElementsByClassName("raspored-okvir");
        trenutniCas(raspored, "2021-01-04T12:00");
        var aktivnost = raspored[0].children[1].getElementsByTagName("tr")[0].getElementsByTagName("td")[2];
        var aktivno = false;
        if(aktivnost.style.backgroundColor =="rgb(174, 245, 130)") aktivno = true;
        assert.equal(aktivno, false, "Aktivnost WT predavanje ne treba biti aktivna!")
    });

    it('Nema aktivnosti petkom, ništa nije zeleno', function () {
        var raspored = document.getElementsByClassName("raspored-okvir");
        trenutniCas(raspored, "2021-01-01T09:00");
        var aktivnost = raspored[0].children[1].getElementsByTagName("tr")[4].getElementsByTagName("td")[2];
        var aktivno = false;
        if(aktivnost.style.backgroundColor =="rgb(174, 245, 130)") aktivno = true;
        assert.equal(aktivno, false, "Aktivnost treba biti aktivna jer ne postoji!")
        trenutniCas(raspored, "2021-01-01T12:37");
        var aktivnost = raspored[0].children[1].getElementsByTagName("tr")[4].getElementsByTagName("td")[9];
        var aktivno = false;
        if(aktivnost.style.backgroundColor =="rgb(174, 245, 130)") aktivno = true;
        assert.equal(aktivno, false, "Aktivnost treba biti aktivna jer ne postoji!")
        trenutniCas(raspored, "2021-01-01T15:13");
        var aktivnost = raspored[0].children[1].getElementsByTagName("tr")[4].getElementsByTagName("td")[14];
        var aktivno = false;
        if(aktivnost.style.backgroundColor =="rgb(174, 245, 130)") aktivno = true;
        assert.equal(aktivno, false, "Aktivnost treba biti aktivna jer ne postoji!")
    });

    it('DM tutorijal aktivan (15:00)', function () {
        var raspored = document.getElementsByClassName("raspored-okvir");
        trenutniCas(raspored, "2021-01-05T15:00");
        var aktivnost = raspored[0].children[1].getElementsByTagName("tr")[1].getElementsByTagName("td")[10];
        var aktivno = false;
        console.log(aktivnost);
        if(aktivnost.style.backgroundColor == "rgb(174, 245, 130)") aktivno = true;
        assert.equal(aktivno, true, "Aktivnost DM tutorijal je trenutno aktivna!")
    });

    it('Nema aktivnosti poslije 19:00', function () {
        var raspored = document.getElementsByClassName("raspored-okvir");
        trenutniCas(raspored, "2021-01-04T19:00");
        var aktivnost = raspored[0].children[1].getElementsByTagName("tr")[0].getElementsByTagName("td")[10];
        var aktivno = false;
        if(aktivnost.style.backgroundColor =="rgb(174, 245, 130)") aktivno = true;
        assert.equal(aktivno, false, "Nema aktivnosti poslije 19:00!")
    });

    it('Tek početak OI predavanja, aktivno (12:01)', function () {
        var raspored = document.getElementsByClassName("raspored-okvir");
        trenutniCas(raspored, "2020-12-30T12:01");
        var aktivnost = raspored[0].children[1].getElementsByTagName("tr")[2].getElementsByTagName("td")[8];
        var aktivno = false;
        if(aktivnost.style.backgroundColor =="rgb(174, 245, 130)") aktivno = true;
        assert.equal(aktivno, true, "OI predavanje treba biti aktivno!")
    });

    it('Posljednja minuta RMA vježbi, aktivno (13:59)', function () {
        var raspored = document.getElementsByClassName("raspored-okvir");
        trenutniCas(raspored, "2021-01-05T13:59");
        var aktivnost = raspored[0].children[1].getElementsByTagName("tr")[1].getElementsByTagName("td")[9];
        var aktivno = false;
        if(aktivnost.style.backgroundColor =="rgb(174, 245, 130)") aktivno = true;
        assert.equal(aktivno, true, "OI predavanje treba biti aktivno!")
    });
});