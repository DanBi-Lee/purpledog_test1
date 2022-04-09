export const timer = (endDate) => {
  const d_day = new Date(endDate);
  const today = new Date();

  const diff = d_day - today;

  const diff_day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diff_hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const diff_min = Math.floor((diff / (1000 * 60)) % 60);
  const diff_sec = Math.floor((diff / 1000) % 60);
  return `${diff_day}일 ${diff_hour}:${setTwoDigits(diff_min)}:${setTwoDigits(
    diff_sec
  )}`;
};

function setTwoDigits(number) {
  if (number >= 10) {
    return number;
  }
  return `0${number}`;
}
