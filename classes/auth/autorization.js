'use strict'
class Authorisation{
    constructor(){
        this.token = null;
        // this.secret = 
    }

    getSession(){
        var tmp;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://login.salesforce.com/services/oauth2/token');
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        
        xhr.onreadystatechange = function() {//Call a function when the state changes.
            if(xhr.readyState == 4 && xhr.status == 200) {
                console.log(JSON.parse(xhr.responseText).access_token);
                this.token = JSON.parse(xhr.responseText).access_token;
                // console.log(tmp);
            }
        }

        let param = 'grant_type=password&client_id=3MVG9d8..z.hDcPKiapQ.uS5RessdRAuilrgS0tIX3wG7SYStiS_Dasl6YeHcPhWMxSf3Fd7DrvSpEY6fTKOw&client_secret=2360969814915822973&username=volerey@vrpconsulting.com&password=S1mplepa55v2';
        xhr.send(param);
        //  return tmp;
    }

    getDialog(tocken){
        var tmp;
        console.log(tocken + 'dsfsdf');
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://volerey-dev-ed.my.salesforce.com/services/apexrest/DialogCreator');
        xhr.setRequestHeader('Authorization','Bearer ' + tocken);
        // xhr.setRequestHeader("Content-type", "ap");
        // xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.onload = function () {
            console.log(xhr.responseText);
          };
        xhr.send();
    }
    getTocken(){
        return this.token;
    }
}

let test = new Authorisation();
test.getSession();
test.getDialog(test.getTocken());
// test.getTocken;
// console.log(test.getTocken());
// curl -v https://login.salesforce.com/services/oauth2/token&"grant_type=password"&"client_id=3MVG9d8..z.hDcPKiapQ.uS5RessdRAuilrgS0tIX3wG7SYStiS_Dasl6YeHcPhWMxSf3Fd7DrvSpEY6fTKOw"&"client_secret=2360969814915822973"&"username=volerey@vrpconsulting.com"&"password=S1mplepa55v2" -H 'X-PrettyPrint:1'
