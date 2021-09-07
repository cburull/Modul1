function nextPage(element, oppgave) {
    if (oppgave == 0) {
        location.href = 'https://imsern.github.io/The-unicorns/';
    }
}

//model:
var substantivFlertall1 = '';
let substantivFlertall2 = '';
let substantiv1 = '';
let substantiv2 = '';
let substantiv3 = '';
let adjektiv1 = '';
let adjektiv2 = '';
let adjektiv3 = '';
let adjektiv4 = '';
let adjektiv5 = '';
let adjektiv6 = '';
let adjektiv7 = '';
let adjektiv8 = '';
let verb1 = '';
let verb2 = '';
let tall = '';
let taco = '';
var wordIndex=1;
var maks=17;


//view:
function show(x){
    if (x==1){
        if (wordIndex==1) {
            visOrd("Taperne", 'De Derre', 'Gamlingene', 'De Kule Kidsa', 'Enhjørningene', 'Brødhuene');
        }
        else if (wordIndex==2) {
            visOrd('nervøse', 'morsomme', 'negative', 'onde', 'presise', 'ustabile');
        }
        else if (wordIndex==3) {
            visOrd('smarte', 'sterke', 'sure', 'trådløse', 'vide', 'kriminelle');
        }
        else if (wordIndex==4) {
            visOrd('nakke', 'hodebunn', 'hjerne', 'lilletå', 'kvise', 'fingernegl');
        }
        else if (wordIndex==5) {
            visOrd('annerledes', 'arbeidsledig', 'moderne', 'kapitalist', 'underutviklet', 'fattig');
        }
        else if (wordIndex==6) {
            visOrd('innlagte', 'glatte', 'frustrerte', 'ivrige', 'kompliserte', 'gravide');
        }
        else if (wordIndex==7) {
            visOrd('drikke', 'jogge', 'leke', 'skrike', 'vaske', 'kose');
        }
        else if (wordIndex==8) {
            visOrd('fremmede', 'gifte', 'ensomme', 'opptatte', 'selvstendige', 'forvirrede');
        }
        else if (wordIndex==9) {
            visOrd('være i godt humør', 'få Coivd 19', 'se i en vegg', 'trives', 'vokse opp', 'betale regninger');
        }
        else if (wordIndex==10) {
            visOrd('enkle', 'late', 'mørke', 'naturlige', 'stramme', 'urettferdige');
        }
        else if (wordIndex==11) {
            visOrd('ulykkelige', 'tilstrekkelige', 'rimelige', 'mistenkelige', 'menneskelige', 'løse');
        }
        else if (wordIndex==12) {
            visOrd('historien', 'kjæresten', 'uvanen', 'tilværelsen', 'barndommen', 'armen');
        }
        else if (wordIndex==13) {
            visOrd('lille', 'hemmelighetsfulle', 'langsomme', 'skyldige', 'strenge', 'avhengige');
        }
        else if (wordIndex==14) {
            visOrd('2', '4', '7', '11', '14', '99');
        }
        else if (wordIndex==15) {
            visOrd('nakenrotte', 'støvel', 'jente', 'nypolert bil', 'barbie-dukke', 'lego-kloss');
        }
        else if (wordIndex==16) {
            visOrd('fjerne', 'ustabile', 'uattraktive', 'underutviklet', 'skada', 'annerledes');
        }
        else if (wordIndex==17) {
            visOrd('lefse', 'lefse', 'lefse', 'lefse', 'lefse', 'skjell');
        }
    }
    else {
        document.getElementById('app').innerHTML = `
            <div class="endText">
                <p> Team 3, også kjent som <u>${substantivFlertall1}</u> består av fire <u>${adjektiv1}</u> medlemmer.
                
                Førstemann er <u>${adjektiv2}</u> Christian, som har en <u>${substantiv1}</u> som alle de andre i 
                gruppa skulle ønske var dems, men Christian er <u>${adjektiv3}</u> så han vil ikke dele.
                Andremann er <u>${adjektiv4}</u> Kenneth, som liker å <u>${verb1}</u> sammen med alle de andre 
                <u>${substantivFlertall2}</u> i Bergen, men de vil heller <u>${verb2}</u> enn å være med han.
                Medlem nummer tre er <u>${adjektiv5}</u> Kristoffer, som har den mest <u>${adjektiv6}</u> <u>${substantiv2}</u>
                av dem alle. Det er ikke noe han er veldig stolt av, og det vet de andre, så de mobber han for det.
                Og sistemann er <u>${adjektiv7}</u> Stian, som har skjeggveksten til en <u>${tall}</u> år gammel <u>${substantiv3}</u>.<br><br>
                
                Alle er litt <u>${adjektiv8}</u>, og det vet de godt. Men det bryr de seg ikke om.
                Alt de bryr seg om er at de alle er enige om at taco er best i <u>${taco}</u>.</p>
            </div>
            `;
    }
}


//controller:
function velgOrd(ord){
    if (wordIndex==1) {
        substantivFlertall1=ord;
    } else if (wordIndex==2) {
        adjektiv1=ord;
    } else if (wordIndex==3) {
        adjektiv2=ord;
    } else if (wordIndex==4) {
        substantiv1=ord;
    } else if (wordIndex==5) {
        adjektiv3=ord;
    } else if (wordIndex==6) {
        adjektiv4=ord;
    } else if (wordIndex==7) {
        verb1=ord;
    } else if (wordIndex==8) {
        substantivFlertall2=ord;
    } else if (wordIndex==9) {
        verb2=ord;
    } else if (wordIndex==10) {
        adjektiv5=ord;
    } else if (wordIndex==11) {
        adjektiv6=ord;
    } else if (wordIndex==12) {
        substantiv2=ord;
    } else if (wordIndex==13) {
        adjektiv7=ord;
    } else if (wordIndex==14) {
        tall=ord;
    } else if (wordIndex==15) {
        substantiv3=ord;
    } else if (wordIndex==16) {
        adjektiv8=ord;
    } else if (wordIndex==17) {
        taco=ord;
        if (ord=='skjell') alert('NOOOOOOOOOOOOOOOOOOOOOOOOOO!!!');
    }

    if (wordIndex != maks && ord !=='') {
        wordIndex++;
        show(1); //neste ord
    }
    else if (wordIndex==maks) {
        show(2);
    }
}

function tilbake(){
    if (wordIndex>1){
        wordIndex--;
        velgOrd('');
        show(1);
    }
}

function reset(){
    wordIndex=1;
    while (wordIndex<maks){
        velgOrd('');    
        wordIndex++;
    }
    wordIndex=1;
    show(1);
}

function visOrd(ord1, ord2, ord3, ord4, ord5, ord6){
    document.getElementById('app').innerHTML= `
    <div class="Kontrollpanel">
        <div class="wordBtn" onclick="velgOrd('${ord1}')">${ord1}</div>
        <div class="wordBtn" onclick="velgOrd('${ord2}')">${ord2}</div>
        <div class="wordBtn" onclick="velgOrd('${ord3}')">${ord3}</div>
        <div class="wordBtn" onclick="velgOrd('${ord4}')">${ord4}</div>
        <div class="wordBtn" onclick="velgOrd('${ord5}')">${ord5}</div>
        <div class="wordBtn" onclick="velgOrd('${ord6}')">${ord6}</div>
    </div>
    <div class="Kontrollpanel2">
        <div class="resetBtn" onclick="reset()">Reset</div>
        <div class="resetBtn" onclick="tilbake()">Back</div>
    </div>
    <div class="kontrollpanel3">
        <ol>
            <li>${substantivFlertall1}</li>
            <li>${adjektiv1}</li>
            <li>${adjektiv2}</li>
            <li>${substantiv1}</li>
            <li>${adjektiv3}</li>
            <li>${adjektiv4}</li>
            <li>${verb1}</li>
            <li>${substantivFlertall2}</li>
            <li>${verb2}</li>
            <li>${adjektiv5}</li>
            <li>${adjektiv6}</li>
            <li>${substantiv2}</li>
            <li>${adjektiv7}</li>
            <li>${tall}</li>
            <li>${substantiv3}</li>
            <li>${adjektiv8}</li>
            <li>${taco}</li>
        </ol>
    </div>
    `;
}

//                                ,|
//                              //|                              ,|
//                            //,/                             -~ |
//                          // / |                         _-~   /  ,
//                        /'/ / /                       _-~   _/_-~ |
//                        \~\/'/|             __--~~__--\ _-~  _/,
//                ,,)))))));, \/~-_     __--~~  --~~  __/~  _-~ /
//             __))))))))))))));,>/\   /        __--~~  \-~~ _-~
//     --==//////((''  .     `)))))), /     ___---~~  ~~\~~__--~
//             ))| @    ;-.     (((((/           __--~~~'~~/
//            ( `|    /  )      )))/      ~~~~~__\__---~~__--~~--_
//               |   |   |       (/      ---~~~/__-----~~  ,;::'  \         ,
//               o_);   ;        /      ----~~/           \,-~~~\  |       /|
//                     ;        (      ---~~/         `:::|      |;|      < >
//                    |   _      `----~~~~'      /      `:|       \;\_____//
//              ______/\/~    |                 /        /         ~------~
//            /~;;.____/;;'  /          ___----(   `;;;/
//           / //  _;______;'------~~~~~    |;;/\    /
//          //  | |                        /  |  \;;,\
//         (<_  | ;                      /',/-----'  _>
//          \_| ||_                     //~;~~~~~~~~~
//              `\_|                   (,~~
//                                      \~\
//                                       ~~