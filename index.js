const dom = document;
const secondHand = dom.querySelector('.sec-hand')
const minuteHand = dom.querySelector('.min-hand')
const hourHand = dom.querySelector('.hour-hand')

function setDate(){
  const now = new Date()
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  
  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


  console.log(seconds);
  console.log(minutes)
}  
  
  setInterval(setDate, 1000)
