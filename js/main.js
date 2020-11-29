document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const nextNewYears = "January 1, " + (currentYear + 1);

  function countdown(date, w) {
    const destinationDate = new Date(date);
    const destinationTime = Number(destinationDate);

    if (isNaN(destinationTime)) {
      throw new Error("Invalid date passed to getRemainingTimeUntil: " + date);
    }

    const currentDate = new Date();
    const currentTime = +currentDate;

    let remainingTime = destinationTime - currentTime;
    if (remainingTime <= 0) {
      return { seconds: 0, minutes: 0, hours: 0, days: 0 };
    }
    if (typeof w !== "undefined") {
      w.setTimeout(() => countdown(date, window), 1000);
    }

    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;

    const daysRemaining = Math.floor(remainingTime / DAY);
    remainingTime -= daysRemaining * DAY;
    // Remaining time is now equal to the number of hours, minutes, seconds, and milliseconds remaining

    const hoursRemaining = Math.floor(remainingTime / HOUR);
    remainingTime -= hoursRemaining * HOUR;
    // Remaining time is now equal to the number of minutes, seconds, and milliseconds remaining

    const minutesRemaining = Math.floor(remainingTime / MINUTE);
    remainingTime -= minutesRemaining * MINUTE;
    // Remaining time is now equal to the number of seconds and milliseconds remaining

    const secondsRemaining = Math.floor(remainingTime / SECOND);
    remainingTime -= secondsRemaining * SECOND;
    // Remaining time is now equal to the number of milliseconds remaining

    const daysElement = document.getElementById("days");
    if (daysElement) {
      daysElement.textContent = daysRemaining;
    }
    const hoursElement = document.getElementById("hours");
    if (hoursElement) {
      hoursElement.textContent =
        hoursRemaining < 10 ? "0" + hoursRemaining : String(hoursRemaining);
    }
    const minutesElement = document.getElementById("minutes");
    if (minutesElement) {
      minutesElement.textContent =
        minutesRemaining < 10
          ? "0" + minutesRemaining
          : String(minutesRemaining);
    }
    const secondsElement = document.getElementById("seconds");
    if (secondsElement) {
      secondsElement.textContent =
        secondsRemaining < 10
          ? "0" + secondsRemaining
          : String(secondsRemaining);
    }
  }

  countdown(nextNewYears, window);
});
