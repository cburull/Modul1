const brett=
['a1','a2','a3','a4','b1','b2','b3','b4','c1','c2','c3','c4','d1','d2','d3','d4'];

const brikker=
['p1','p2','p3','p4','q1','q2','q3','q4','r1','r2','r3','r4','s1','s2','s3','s4'];

const riktigeBildeNr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const tilfeldigeBildeNr=[...riktigeBildeNr];

var brikkeHTML='';
var brikkeID='';

function fyllBrikker(){
    for (i in brikker){
        // document.getElementById(brikker[i]).innerHTML=tilfeldigeBildeNr[i];
        var bildeNavn = tilfeldigeBildeNr[i]+'.jpg';
        document.getElementById(brikker[i]).innerHTML='<img src="Images/Pieces/'+bildeNavn+'" alt="brikke">';
    }
}
function klikk(denne){
    if (denne.innerHTML!='') velgbrikke(denne);
    else limInn(denne);
}

function velgbrikke(brikke){
    if (brikkeID!=''){
        document.getElementById(brikkeID).classList.remove('valgtBrikke');}
    brikke.classList.add('valgtBrikke');
    brikkeHTML=brikke.innerHTML;
    brikkeID=brikke.id;
}

function limInn(rute){
    if (brikkeHTML !=''){
        rute.innerHTML=brikkeHTML;
        brikkeHTML='';
        document.getElementById(brikkeID).innerHTML='';
        document.getElementById(brikkeID).classList.remove('valgtBrikke');
        testVinn();
    }
}

function tilfeldiggjørBildeNr() {
    var kopiBildeNr=[...tilfeldigeBildeNr];
    for (i in tilfeldigeBildeNr){
        var randomIndex=Math.floor(Math.random()*kopiBildeNr.length);
        tilfeldigeBildeNr[i]=kopiBildeNr.splice(randomIndex,1)[0];
    }
}

function testVinn(){
    var antallRiktige=0;
    for (i in brett){
        // var bildeHTML = riktigeBildeNr[i];
        var bildeNavn = riktigeBildeNr[i]+'.jpg';
        var bildeHTML='<img src="Images/Pieces/'+bildeNavn+'" alt="brikke">';
        var ruteHTML = document.getElementById(brett[i]).innerHTML;
        if (ruteHTML==bildeHTML) antallRiktige++;
    }
    if (antallRiktige==brett.length) alert('Installing Virus!')
}