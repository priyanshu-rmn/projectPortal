import { useTimer } from "react-timer-hook";

export default function Timer({expiryTimestamp ,onTimerExpire}) {

  const {
    seconds,
    minutes,
    hours,
    days,
    /*isRunning,
    start,
    pause,
    resume,
    restart,*/
  } = useTimer({
    expiryTimestamp,
    onExpire: () => onTimerExpire(),
  });


  return (
    <div style={{ textAlign: "center" }}>
      <h1>Time Left</h1>
      <div style={{ fontSize: "50px" }}>
        <span>{days}</span>d:<span>{hours}</span>h:<span>{minutes}m</span>:
        <span>{seconds}s</span>
      </div>
    </div>
  );
}
