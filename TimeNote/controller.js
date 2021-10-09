// Ticking time.
setInterval(updateTimers,100);
function updateTimers(){
    updateCurrentTime();
    for (i in model.notes){
        let note = model.notes[i];
        if (note.started){
            if (note.countdown) {
                updateTimeRemaining(i);
                showTimers();
            }
        }
    }
}

function addNote(){
    const currentLength = model.notes.length;
    model.notes[currentLength] = {
        description: `Note ${currentLength+1}`,
        endTime: [0,0,0,0],             // [hour,min,sec,ms]
        totalTime: [0,0,0,0],           // [hour,min,sec,ms]
        timeRemaining: [0,0,0,0],       // [hour,min,sec,ms]
        time: false,
        started: false,
        countdown: false,
        editDescription: false,
        editTime: false,
        editCountdownTime: false,
        height: 82,
        timeDivTop: currentLength==0 ? 26 : model.notes[currentLength-1].timeDivTop + model.notes[currentLength-1].height/2 + 46,
    }
    showNotes();
    showEditTimers();
}

// Switches between clock and countdown timer.
function switchTimerType(i){
    const note = model.notes[i];
    if (note.countdown) {note.countdown = false; note.time = true;}
    else if (note.time) {note.countdown = true; note.time = false;}
    showTimers();
}

// Enables editing of note description.
function toggleEditDescription(x, i){
    model.notes[i].editDescription ? model.notes[i].editDescription=false : model.notes[i].editDescription=true;
    getNoteHeight(x.parentElement.parentElement, i);
    showNotes();
}

// Updates the note's description in the model every time it's changed through input.
function editDescription(x, i){
    const txt = x.innerHTML;
    model.notes[i].description=txt;
    getNoteHeight(x.parentElement.parentElement, i);
}

function getNoteHeight(x, i){
    const rect = x.getBoundingClientRect();
    model.notes[i].height = rect.height;
    if (i<=model.notes.length-1){
        let z=i;
        while (z<=model.notes.length-1){
            getTimeDivTop(z);
            z++;
        }
    }
    showEditTimers();
}

function getTimeDivTop(i){
    const notes = model.notes;
    notes[i].timeDivTop = (i > 0) ? 
        notes[i-1].timeDivTop + 5 + (notes[i].height + notes[i-1].height)/2 : 
        notes[i].timeDivTop = (notes[i].height/2)-15;
}

function editCountdown(i){
    if (model.notes[i].started) return;
    model.notes[i].editCountdownTime = true;
    showNotes();
    showEditTimers();
}


function getCountdownText(i){
    const timeRemaining = model.notes[i].timeRemaining;
    return `${timeRemaining[0]>9 ? timeRemaining[0] : '0' + timeRemaining[0]}:
            ${timeRemaining[1]>9 ? timeRemaining[1] : '0' + timeRemaining[1]}:
            ${timeRemaining[2]>9 ? timeRemaining[2] : '0' + timeRemaining[2]}`;
}

// Sets the time reamining for the note's countdown timer.
function setTimeRemainingCountdown(t,i){
    const note = model.notes[i];
    const totalTime = note.totalTime;
    const timeRemaining = note.timeRemaining;
    timeRemaining[0] = parseInt(t[0] + t[1]);
    timeRemaining[1] = parseInt(t[3] + t[4]);
    timeRemaining[2] = parseInt(t[6] + t[7]);
    timeRemaining[3] = 0;
    for (let i in timeRemaining) {totalTime[i] = timeRemaining[i];}
    note.editCountdownTime = false;
    note.countdown = true;
    showNotes();
    showTimers();
    showEditTimers();
}

// Sets the note's endTime (countdown timer) (when the timer is started).
function setEndTimeCountdown(i){
    const note = model.notes[i];
    const endTime = note.endTime;
    const timeRemaining = note.timeRemaining; // won't update since countdown is paused.
    const currentTime = [...model.currentTime];         // copying to avoid changes to model.currentTime mid calculations.
    endTime[0] = timeRemaining[0] + currentTime[0];
    endTime[1] = timeRemaining[1] + currentTime[1];
    endTime[2] = timeRemaining[2] + currentTime[2];
    endTime[3] = timeRemaining[3] + currentTime[3];
    if (endTime[3]>999){endTime[3] -= 1000; endTime[2]++}
    if (endTime[2]>59) {endTime[2] -= 60; endTime[1]++}
    if (endTime[1]>59) {endTime[1] -= 60; endTime[0]++}
    if (endTime[0]>23) {endTime[0] -= 24}
}

// Updates note's timeRemaining based on its endTime and model's currentTime
function updateTimeRemaining(i){
    const note = model.notes[i];
    if (note.started == false) return;
    const timeRemaining = note.timeRemaining;
    const currentTime = [...model.currentTime];         // copying to avoid changes to model.currentTime mid calculations.
    const t = [...note.endTime];
    for (let i in t) {t[i] -= currentTime[i];}
    if (t[0]<0) {t[0] += 24}
    if (t[3]<0) {t[3] += 1000; t[2]--}
    if (t[2]<0) {t[2] += 60; t[1]--}
    if (t[1]<0) {t[1] += 60; t[0]--}
    if (t[0]<0) {
        note.started = false;
        showNotes();
        for (let i in t) {t[i] = 0;}
    }
    for (let i in t) {timeRemaining[i] = t[i];}
}

// Toggles between starting and stopping the note's countdown timer.
function startStopCountdown(i){
    const note=model.notes[i];
    if (!note.time && !note.countdown) return;
    if (!note.started && note.countdown) setEndTimeCountdown(i);    // sets end time if countdown.
    note.started ? note.started=false : note.started=true;
    showNotes();
}

// Resets countdown by setting the note's timeRemaining equal to it's totalTime.
function resetCountdown(i){
    const note=model.notes[i];
    const totalTime = note.totalTime;
    const timeRemaining = note.timeRemaining;
    const isStarted=note.started;
    note.started=false;
    for (let i in totalTime) {timeRemaining[i]=totalTime[i];}
    setEndTimeCountdown(i); // updates end time based on time remaining.
    note.started=isStarted;
    showNotes();
    showTimers();
}

// Updates the model's currentTime.
function updateCurrentTime(){
    const d = new Date();
    const currentTime = [d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds()]
    for (i in currentTime) model.currentTime[i]=currentTime[i];
}

// Deletes note.
function deleteNote(i){
    if (model.notes.length>i+1){
        const timeDivTopReduction = model.notes[i].height +5;
        let z = i+1;
        while (z<model.notes.length) {
            model.notes[z].timeDivTop -= timeDivTopReduction;
            z++;
        }
    }
    model.notes.splice(i,1);
    showNotes();
    showTimers();
    showEditTimers();
}
