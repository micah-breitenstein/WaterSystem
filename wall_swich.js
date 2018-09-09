// This class provides the ability to create a new light object. 
// location='pumpHouse'
// defaultIsOn = true | defaultIsOn = true
// autoOff = true | autoOff = false
// autoOffTime = 500

class LedLight {
    
    constructor(location, defaultIsOn, autoOff = true) {
        this.location = location;
        this.defaultIsOn = defaultIsOn;
        this.autoOff = autoOff;
        this.isOn = false;
        this.totalTimeOn = 0;
        this.timeOn(defaultIsOn);
        this.start = new Date();
        // this.setDefalutState(defaultIsOn);
    }

    timeOn(isOn) {
        this.isOn = this.defaultIsOn;
        if (isOn == true){
            this.start = new Date().getTime();
            console.log("turning on the timer");
            this.totalTimeOn = new Date().getTime();
        } else if (isOn == false) {
            console.log("in off checking start value"+ this.start );
            if (this.start !== undefined) {
                console.log("undefined");
            }
            this.end = new Date().getTime();
            this.ms = this.end - this.start;
            this.min = Math.floor((this.ms/1000/60) << 0),
            this.sec = Math.floor((this.ms/1000) % 60);
            console.log(this.min + ':' + this.sec);
            console.log("turning off the timer");
            this.start = 0;
            console.log("Total time on: " + this.totalTimeOn);
            return this.totalTimeOn = 0;
        } else {
            console.log("WTF!");
        }
    }

    on() {
        console.log("Turning the LED on");
        // lighttimer(lightIsOn);
        this.isOn = true;
        this.timeOn(this.isOn);
    }

    off() {
        console.log("Turning the LED off");
        // lighttimer(lightIsOn);
        this.isOn = false;
        this.timeOn(this.isOn);
    }

    status() {
        console.log("LEDs on/off Status: " + this.isOn);
        console.log("Status time on: " + this.totalTimeOn);
    }
}


function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

let light = new LedLight(location='pumpHouse', defaultIsOn = true, autoOff = true);
light.status();
//light.totalTimeOn();
light.on();
light.status();

sleep(5000).then(() => {
    light.off();
    light.status();
})