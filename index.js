class TimeApp {
    saniyeler = 0;
    stopValue = null;
    timeContent = document.querySelector("h2");
    laps=document.querySelector("#laps")
    timeParse(san) {
        let deqiqe = Math.floor(san / 60);
        let qaliqSaniyeler = san - deqiqe * 60;

        let timeResult = `${deqiqe < 10 ? "0" + deqiqe : deqiqe}:${
      qaliqSaniyeler < 10 ? "0" + qaliqSaniyeler : qaliqSaniyeler
    }`;
        return timeResult;
    }
    startTime() {
        clearInterval(this.stopValue);
        this.stopValue = setInterval(() => {
            this.saniyeler++;

            let netice =this.timeParse(this.saniyeler);
            console.log(netice);
            this.timeContent.innerHTML = netice;
        }, 1000);
    }
    pauseTime() {
        clearInterval(this.stopValue);
    }

    resetTime() {
        this.saniyeler = 0;
        this.timeContent.innerHTML = "00:00";
    }
    lapTime(){
        let lap_time = this.timeParse(this.saniyeler);
        let lap_ = document.createElement("div");
        lap_.innerHTML = ` ${lap_time}`
        this.laps.append(lap_)
    }
}

let timeCount = new TimeApp();

document.querySelector("#startTime").addEventListener("click", function () {
    timeCount.startTime();
});

document.querySelector("#pauseTime").addEventListener("click", function () {
    timeCount.pauseTime();
});

document.querySelector("#resetTime").addEventListener("click", function () {
    timeCount.resetTime();
});

document.querySelector("#lapTime").addEventListener("click", function () {
    timeCount.lapTime();
});

