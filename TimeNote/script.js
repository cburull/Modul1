const timeNote = Vue.createApp({
    mounted() {
        this.updateTime();
    },
    data() {
        return {
            currentTime: [0,0,0,0],
            notes: [
                {
                    description: "Note 1",
                    inputTime: '',
                    inputCountdown: '00:00:00',
                    endTime: [0,0,0,0],             // [hour,min,sec,ms]
                    totalTime: [0,0,0,0],           // [hour,min,sec,ms]
                    timeRemaining: [0,0,0,0],       // [hour,min,sec,ms]
                    started: false,
                    timeSet: false,
                    time: false,
                    countdown: true,
                    editTime: false,
                    editCountdown: false,
                    editDescription: false,
                },
            ],
        }
    },
    methods: {
        updateTime() {
            setInterval(()=>{
                const d = new Date();
                const dTime = [d.getHours(),d.getMinutes(),d.getSeconds(),d.getMilliseconds()]
                for (i in dTime) this.currentTime[i]=dTime[i];
                for (note of this.notes) {if (note.started) this.updateTimeRemaining(note);}
            },100)
        },
        currentTimeString() {
            const T = this.currentTime;
            return `${T[0]>9 ? T[0] : '0' + T[0]}:${T[1]>9 ? T[1] : '0' + T[1]}:${T[2]>9 ? T[2] : '0' + T[2]}`
        },
        timeString(note) {
            const T = note.endTime;
            return `${T[0]>9 ? T[0] : '0' + T[0]}:${T[1]>9 ? T[1] : '0' + T[1]}${T[2]==0 ? '' : `:${T[2]>9 ? T[2] : '0' + T[2]}`}`
        },
        timeRemainingString(note) {
            const T = note.timeRemaining;
            return `${T[0]>9 ? T[0] : '0' + T[0]}:${T[1]>9 ? T[1] : '0' + T[1]}:${T[2]>9 ? T[2] : '0' + T[2]}`
        },
        switchTimerType(note) {
            note.time = !note.time;
            note.countdown = !note.countdown;
        },
        editTimer(note) {
            if (note.time) note.editTime = !note.editTime;
            if (note.countdown) note.editCountdown = !note.editCountdown;
        },
        setTimer(note) {
            const t = note.editTime ? note.inputTime : note.inputCountdown;
            if (note.editTime) this.setEndTime(note);
            else this.setTimeRemaining(note);
            note.timeSet = true;
        },
        setEndTime(note) {
            const T = note.endTime;
            const t = note.inputTime;
            T[0] = parseInt(t[0] + t[1]);
            T[1] = parseInt(t[3] + t[4]);
            T[2] = 0;
            T[3] = 0;
            note.editTime = false;
            note.started=true;
            setTimeout(()=>{    // sets totalTime after timeRemaining has been auto updated.
                const T = [...note.timeRemaining];
                for (let i in note.timeRemaining) {note.totalTime[i] = T[i];}
            },100)
        },
        setTimeRemaining(note) {
            const T = note.timeRemaining;
            const t = note.inputCountdown;
            T[0] = parseInt(t[0] + t[1]);   //hours.
            T[1] = parseInt(t[3] + t[4]);   //minutes.
            T[2] = parseInt(t[6] + t[7]);   //seconds.
            T[3] = 0;                       //milliseconds.
            this.setEndTimeCountdown(note);
            for (let i in T) {note.totalTime[i] = T[i];}    // sets totalTime.
            note.editCountdown = false;
        },
        startStopTimer(note) {
            if (!note.started && note.countdown) this.setEndTimeCountdown(note);     // sets end time if countdown.
            note.started = !note.started;
        },
        resetCountdown(note) {
            const isStarted = note.started;
            note.started = false;
            for (let i in note.totalTime) {note.timeRemaining[i] = note.totalTime[i];}
            this.setEndTimeCountdown(note);     // updates end time based on time remaining.
            note.started = isStarted;
        },
        setEndTimeCountdown(note) {
            const cT = [...this.currentTime];   // copying to avoid changes mid calculations.
            const TR = [...note.timeRemaining];
            const eT = note.endTime;
            for (let i in eT) {eT[i] = TR[i] + cT[i];}
            if (eT[3]>999) {eT[3] -= 1000; eT[2]++}
            if (eT[2]>59)  {eT[2] -= 60;   eT[1]++}
            if (eT[1]>59)  {eT[1] -= 60;   eT[0]++}
            if (eT[0]>23)  {eT[0] -= 24}
        },
        updateTimeRemaining(note){
            if (!note.started) return;
            const timeRemaining = note.timeRemaining;
            const currentTime = [...this.currentTime];  // copying to avoid changes mid calculations.
            const t = [...note.endTime];
            for (let i in t) {t[i] -= currentTime[i];}
            if (t[0]<0) {t[0] += 24}
            if (t[3]<0) {t[3] += 1000; t[2]--}
            if (t[2]<0) {t[2] += 60; t[1]--}
            if (t[1]<0) {t[1] += 60; t[0]--}
            if (t[0]<0) {
                note.started = false;
                for (let i in t) {t[i] = 0;}
            }
            for (let i in t) {timeRemaining[i] = t[i];}
        },
        deleteNote(i) {
            this.notes.splice(i,1);
        },
        addNote() {
            this.notes.push({
                description: `Note ${this.notes.length + 1}`,
                inputTime: '',
                inputCountdown: '00:00:00',
                endTime: [0,0,0,0],             // [hour,min,sec,ms]
                totalTime: [0,0,0,0],           // [hour,min,sec,ms]
                timeRemaining: [0,0,0,0],       // [hour,min,sec,ms]
                started: false,
                timeSet: false,
                time: false,
                countdown: true,
                editTime: false,
                editCountdown: false,
                editDescription: false,
            });
        }
    },
    computed: {
        
        }
})

timeNote.mount('#timeNote')