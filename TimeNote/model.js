const model = {
        currentTime: new Array(4),
        alarms: {
            default: "",
        },
        notes: [
            {
                description: "Note 1",
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
                timeDivTop: 26,
            },{
                description: "Note 2",
                endTime: new Array(4),          // [hour,min,sec,ms]
                totalTime: [0,0,0,0],           // [hour,min,sec,ms]
                timeRemaining: [0,0,0,0],       // [hour,min,sec,ms]
                time: false,
                started: false,
                countdown: false,
                editDescription: false,
                editTime: false,
                editCountdownTime: false,
                height: 82,
                timeDivTop: 113,
            }
        ]
    }