showNotes();// change time to ⏱, hover ⏱: - dropdown remove time, hover countdown: dropdown edit countdown. possibly hover startStop dropdown reset(if countdown).
    function showNotes(){
        let html = '';
        for (i in model.notes){
            const note = model.notes[i];
            html +=`
            <div class="note">
                <div class="descriptionDiv">
                    <div class="editDescription" onclick="toggleEditDescription(this, ${i})">${note.editDescription?'✓':'✍'}</div>
                    <div class="description" contenteditable="${note.editDescription}" oninput="editDescription(this, ${i})">${note.description}</div>
                </div>
                <div class="resetCountdownDiv">
                    <div class="resetCountdown" onclick="resetCountdown(${i})">↻</div>
                </div>
                <div class="startStopDiv">
                    <img class="startStop" src="${note.started?'stop.svg':'start.svg'}" alt="${note.started?'stop':'start'}-button" onclick="startStopCountdown(${i})"></img>
                </div>
                <div class="timeDisplay" onclick="switchTimerType(${i})">time:</div>
                <div class="deleteNote" onclick="deleteNote(${i})">✖</div>
            </div>
            `;// change buttons: ✗✘✕✔?                                         <input type="text" spellcheck="false"> ondeselect?center input..
        }
        html +=`<div class="addNote" onclick="addNote()">add note</div>`;
        document.getElementById('notes').innerHTML = html;
    }

    function showTimers(){
        let html = '';
        for (i in model.notes){
            const note = model.notes[i];
            let styleHtml = `top:${note.timeDivTop}px;`;
            if (note.countdown) html +=`<div class="time" style="${styleHtml}">${getCountdownText(i)}</div>`;
            else if (note.time) html +=`<div class="time" style="${styleHtml}">${getTimeText(i)}</div>`;
            else html +=`<div class="time" style="${styleHtml}"></div>`;
        }
        document.getElementById('timers').innerHTML = html;
    }

    showEditTimers();
    function showEditTimers(){
        let html = '';
        for (i in model.notes){
            const note = model.notes[i];
            let styleHtml = `top:${note.timeDivTop}px;`;
            if (note.editCountdownTime) html +=`<input class="time" style="${styleHtml}" type="time" step="1" value="00:00:00" onchange="setTimeRemainingCountdown(this.value,${i})"></input>`;
            else if (note.editTime) html +=`<input class="time" style="${styleHtml}" type="time" value="00:00" onchange="setEndTime(this.value,${i})"></input>`;
            else if (!note.time && !note.countdown) html +=`<div class="time" style="${styleHtml}" onclick="editCountdown(${i})">⏱?</div>`;
            else if (note.time) html +=`<div class="time editTime" style="${styleHtml}" onclick="editTime(${i})"></div>`;
            else html +=`<div class="time editTime" style="${styleHtml}" onclick="editCountdown(${i})"></div>`;
        }
        document.getElementById('editTimers').innerHTML = html;
    }