'use strict'
// const tester = require('../../config/config.json');
// import configer from '../../config/config.json';
// import * as dada from '../../config/config.json'
class Authorisation {
    constructor() {
        this.token = null;
        this.token2 = 123;
    }
    getSession() {
        var tmp;
        console.log(require('../../config/config.js'));
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://login.salesforce.com/services/oauth2/token', false);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // let param = 'grant_type=password&client_id=3MVG9d8..z.hDcPKiapQ.uS5RessdRAuilrgS0tIX3wG7SYStiS_Dasl6YeHcPhWMxSf3Fd7DrvSpEY6fTKOw&client_secret=2360969814915822973&username=volerey@vrpconsulting.com&password=S1mplepa55v2';
        // xhr.send(param);
        let param = 'grant_type=password&client_id=3MVG9d8..z.hDcPKiapQ.uS5RessdRAuilrgS0tIX3wG7SYStiS_Dasl6YeHcPhWMxSf3Fd7DrvSpEY6fTKOw&client_secret=2360969814915822973&username=volerey@vrpconsulting.com&password=S1mplepa55v2';
        let test;
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;

            if (xhr.status != 200) {
                // обработать ошибку
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                try {
                    test = JSON.parse(xhr.responseText);
                    // console.log(JSON.parse(xhr.responseText));
                } catch (e) {
                    alert("Некорректный ответ " + e.message);
                }
                // setTocken(phones);
            }
        }
        xhr.send(param);
        // let param = 'grant_type=password&client_id=3MVG9d8..z.hDcPKiapQ.uS5RessdRAuilrgS0tIX3wG7SYStiS_Dasl6YeHcPhWMxSf3Fd7DrvSpEY6fTKOw&client_secret=2360969814915822973&username=volerey@vrpconsulting.com&password=S1mplepa55v2';
        // xhr.send(param);
        //  return tmp;
        this.setTocken(test.access_token);
    }

    getDialog(tocken) {
        var tmp;
        console.log(tocken + '   ===////');
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://volerey-dev-ed.my.salesforce.com/services/apexrest/DialogCreator');
        xhr.setRequestHeader('Authorization', 'Bearer ' + tocken);
        // xhr.setRequestHeader("Content-type", "ap");
        // xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.onload = function() {
            console.log(JSON.parse(xhr.responseText));
        };
        xhr.send();
    }

    getTest() {
        // console.log(this.token2);
    }
    getTocken() {
        return this.token;
    }
    setTocken(tocken) {
        // console.log(tocken + '  |||||');
        this.token = tocken;
    }
}

let test = new Authorisation();
// test.getTest();
test.getSession();
// test.setTocken(test.getSession().access_token);
console.log(test.getTocken());
test.getDialog(test.getTocken());
// test.getTocken;
// console.log(test.getTocken());
// curl -v https://login.salesforce.com/services/oauth2/token&"grant_type=password"&"client_id=3MVG9d8..z.hDcPKiapQ.uS5RessdRAuilrgS0tIX3wG7SYStiS_Dasl6YeHcPhWMxSf3Fd7DrvSpEY6fTKOw"&"client_secret=2360969814915822973"&"username=volerey@vrpconsulting.com"&"password=S1mplepa55v2" -H 'X-PrettyPrint