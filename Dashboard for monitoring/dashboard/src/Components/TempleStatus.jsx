// TempleStatus.jsx
import React, { useState, useEffect } from 'react';

// Function to calculate time left for the next event (opening or closing)
const getTimeLeft = () => {
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentTime = now.getTime();

  // Define opening and closing times
  const schedule = [
    { start: { hours: 6, minutes: 0 }, end: { hours: 11, minutes: 0 } },
    { start: { hours: 16, minutes: 0 }, end: { hours: 20, minutes: 0 } },
  ];

  let nextEvent = null;
  let isOpen = false;

  for (const period of schedule) {
    const start = new Date(now);
    start.setHours(period.start.hours, period.start.minutes, 0, 0);
    const end = new Date(now);
    end.setHours(period.end.hours, period.end.minutes, 0, 0);

    if (currentTime >= start.getTime() && currentTime <= end.getTime()) {
      isOpen = true;
      nextEvent = end;
      break;
    } else if (currentTime < start.getTime()) {
      nextEvent = start;
      break;
    } else if (currentTime > end.getTime() && nextEvent === null) {
      nextEvent = new Date(start.getTime() + 24 * 60 * 60 * 1000); // Next day's start time
      break;
    }
  }

  return { nextEvent, isOpen };
};

const TempleStatus = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const { nextEvent, isOpen } = getTimeLeft();
      setIsOpen(isOpen);
      if (nextEvent) {
        const now = new Date().getTime();
        const distance = nextEvent.getTime() - now;
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft({ hours, minutes });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Temple Status</h2>
      <div className="text-center">
        <p className="text-xl font-semibold">The temple is currently {isOpen ? 'Open' : 'Closed'}</p>
        <p className="text-3xl mt-2">
          Time until {isOpen ? 'Closing' : 'Opening'}: {timeLeft.hours}h {timeLeft.minutes}m
        </p>
      </div>
    </div>
  );
};

export default TempleStatus;
