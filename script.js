


class Leerling { //maak een class voor leerling, LL = leerling
    constructor(id, voornaam, achternaam, adres, telefoonnummer, email, klas) {
        this.idLL = id;
        this.voornaamLL = voornaam;
        this.achternaamLL = achternaam;
        this.adresLL = adres;
        this.telefoonnummerLL = telefoonnummer;
        this.emailLL = email;
        this.klasLL = klas;
    }
}

class Leraar { //maak een class voor leraar, LR = leraar
    constructor(id, voornaam, achternaam, afkorting, email, mentorklas) {
        this.idLR = id;
        this.voornaamLR = voornaam;
        this.achternaamLR = achternaam;
        this.afkortingLR = afkorting;
        this.emailLR = email;
        this.mentorklasLR = mentorklas;
    }
}
//maak variabele leerling en gebruik hiervoor de class Leerling
var leerling = [new Leerling(1, "Henk", "de Steen", "randomstraat 69", "0612345678", "email@gmail.com","6VA"),
                new Leerling(2, "Piet", "Pieterson", "smokestraat 420", "0687654321", "help@hotmail.com", "6VB")];
//maak variabele leraar en gebruik hiervoor de class Leraar
var leraar =   [new Leraar(1, "Bart", "van der Bert", "BER", "bartvanderbert@gmail.com", "6VA"),
                new Leraar(2, "Susanne", "Asbest", "ASB", "susanneasbest@gmail.com", "6VB")];


function setup() {//code wordt 1x uitgevoerd aan het begin
// Maak een canvas
    //createCanvas(1280, 720);
}

function draw() {//code wordt telkens herhaald
    //background(211, 211, 211);
    document.getElementById("test").innerHTML = leerling[0].emailLL;
    document.getElementById("test2").innerHTML = leerling[1].emailLL;
    document.getElementById("test3").innerHTML = leraar[0].voornaamLR + leraar[0].achternaamLR;
}


