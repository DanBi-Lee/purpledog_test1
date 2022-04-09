import { useEffect, useState } from "react";
import { timer } from "../util/timer";

function useTimer(endDate) {
  const [time, setTime] = useState(timer(endDate));

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(() => timer(endDate));
    }, 1000);
    return () => clearInterval(timerInterval);
  }, [endDate]);

  return time;
}

export default useTimer;
