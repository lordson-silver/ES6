/*
 * Create a terminal countdown, that checks the cutrent year
 * if > 2022 then
 * &show how many days and hours and minutes and seconds till 2023
 * use this format "Its X_days Y_hours Z_Minutes P_Seconds till 2023"
 * If 2023 then
 * show how long since
 * show how many days and hours and minutes and seconds since 2023
 * use this format "Its X_days Y_hours Z_Minutes P_Seconds since 2023"
 * Make use of google, functions, conditionals, not to mention variables
 * */

// Set the target year to 2023
const targetYear = 2023;

// Function to update the countdown
const updateCountdown = () => {
  // Get the current date and time
  const currentDate = new Date();

  // Check if the current year is greater than the target year
  if (currentDate.getFullYear() > targetYear) {
    // Calculate the difference in time between the current date and January 1st of the target year
    const timeDifference = currentDate - new Date(targetYear, 0, 1);

    // Calculate the number of days, hours, minutes, and seconds since the target year
    const daysSince = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursSince = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutesSince = Math.floor((timeDifference / (1000 * 60)) % 60);
    const secondsSince = Math.floor((timeDifference / 1000) % 60);

    // Print the results to the console
    console.log(`It's ${daysSince} days, ${hoursSince} hours, ${minutesSince} minutes, and ${secondsSince} seconds since ${targetYear}`);
  } else {
    // Calculate the difference in time between the current date and January 1st of the target year
    const timeDifference = new Date(targetYear, 0, 1) - currentDate;

    // Calculate the number of days, hours, minutes, and seconds until the target year
    const daysUntil = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursUntil = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const minutesUntil = Math.floor((timeDifference / (1000 * 60)) % 60);
    const secondsUntil = Math.floor((timeDifference / 1000) % 60);

    // Print the results to the console
    console.log(`It's ${daysUntil} days, ${hoursUntil} hours, ${minutesUntil} minutes, and ${secondsUntil} seconds until ${targetYear}`);
  }
};

// Update the countdown every second
setInterval(updateCountdown, 1000);

