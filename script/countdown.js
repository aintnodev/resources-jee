const targetDate = new Date("2023-11-30").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `Hurry up! only ${days} days left`;
};

setInterval(countdown, 1000);
