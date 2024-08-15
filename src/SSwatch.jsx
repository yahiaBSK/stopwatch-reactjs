import { useEffect, useRef, useState } from "react";

function Swatch() {
  const [sec, setSec] = useState(0),
    [milsec, setMilSec] = useState(0),
    [min, setMin] = useState(0),
    [hrs, setHrs] = useState(0),
    [isRunning, setIsRunning] = useState(false),
    intervalMilSecID = useRef();
  //const intervalMilSecID2 = {current: 0};
  useEffect(() => {
    isRunning == true
      ? (intervalMilSecID.current = setInterval(() => {
          setMilSec((milsec) => milsec + 1),
          console.log(intervalMilSecID.current);
        }, 10))
      : clearInterval(intervalMilSecID.current);

  }, [isRunning]);

  function timerTriger(status) {
    status == "start" && setIsRunning(true);
    status == "stop" && setIsRunning(false);
    status == "reset" &&
      (setIsRunning(false), setMilSec(0), setSec(0), setMin(0), setHrs(0));
  }

  function timerHandler() {
    milsec == 100 && (setMilSec(0), setSec((sec) => sec + 1));
    sec == 60 && (setMilSec(0), setSec(0), setMin((min) => min + 1));
    min == 60 && (setMilSec(0), setSec(0), setMin(0), setHrs((hrs) => hrs + 1));
    hrs == 60 && (setMilSec(0), setSec(0), setMin(0), setHrs(0));
  }
  timerHandler();

  let paddedMilSec, paddedSec, paddedMin, paddedHrs;
  function timerNumberPadding() {
    milsec < 10 ? (paddedMilSec = "0" + milsec) : (paddedMilSec = milsec);
    sec < 10 ? (paddedSec = "0" + sec) : (paddedSec = sec);
    min < 10 ? (paddedMin = "0" + min) : (paddedMin = min);
    hrs < 10 ? (paddedHrs = "0" + hrs) : (paddedHrs = hrs);
  }
  timerNumberPadding()

  return (
    <>
      <div className="mainBody">
        <div className="mainSwatchDiv">
          <p className="time">
            {paddedHrs}:{paddedMin}:{paddedSec}:{paddedMilSec}
          </p>
          <div className="btnDiv">
            <button className="startBtn" onClick={() => timerTriger("start")}>
              Start
            </button>
            <button className="stopBtn" onClick={() => timerTriger("stop")}>
              Stop
            </button>
            <button className="resetBtn" onClick={() => timerTriger("reset")}>
              Reset
            </button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>{`${new Date().getFullYear()}`} ©️ Made with❤️ by @yahia-BSK</p>
      </footer>
    </>
  );
}
export default Swatch;
