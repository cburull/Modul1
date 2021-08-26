const rc = [    'r1c1','r1c2','r1c3','r1c4','r1c5',
                'r2c1','r2c2','r2c3','r2c4','r2c5',
                'r3c1','r3c2','r3c3','r3c4','r3c5',
                'r4c1','r4c2','r4c3','r4c4','r4c5',
                'r5c1','r5c2','r5c3','r5c4','r5c5']

const lys = [   0,0,0,0,0,
                0,0,0,0,0,
                0,0,0,0,0,
                0,0,0,0,0,
                0,0,0,0,0]

var clicks=0;
function klikk(liste) {
    clicks+=1;
    document.getElementById("clicks").innerHTML = clicks;
  for (a in liste) {
    onOff(liste[a]);
  }
}

  testVictory();
function onOff(x) {
    if (lys[x]==0){
        document.getElementById(rc[x]).style.backgroundColor ="rgb(100,100,100)";
        lys[x]=1;
    }
    else {
        document.getElementById(rc[x]).style.backgroundColor ="rgb(50,50,50)";
        lys[x]=0;
    }
}

function testVictory() {
    l=0;
    for (i in lys) {
        l += lys[i];
    }
    if (l==25){
        document.getElementById('victory').style.display="block";
        document.getElementById('fivebyfive').style.backgroundColor ="rgb(100,100,100)";
    }
}

function reset() {
    window.location.reload(true);
}