'use strict'

class Role{
    constructor(id, name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setName(name){

    }
}

module.exports = Role;

// curl -v https://login.salesforce.com/services/oauth2/token -d "grant_type=password" -d "client_id=3MVG9d8..z.hDcPKiapQ.uS5RessdRAuilrgS0tIX3wG7SYStiS_Dasl6YeHcPhWMxSf3Fd7DrvSpEY6fTKOw" -d "client_secret=2360969814915822973" -d "username=volerey@vrpconsulting.com" -d "password=S1mplepa55v2" -H 'X-PrettyPrint:1'
