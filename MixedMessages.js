const messageCall= ()=>{
let r= Math.floor(Math.random()*7);
let rA= Math.floor(Math.random()*12);
let astro= ["Aries", "Piscis","Capricorn", "Sagitarus", "Taurus", "Gemini", "Cancer", "Scorpio", "Libra","Virgo", "Leo","Aquarius"];
let message =["is your lucky day", "You will find money", "you will find love", "you will get a job", "you will buy new things", "you will met your lover", "you will have bad luck, don't go outside"]
console.log(`hello, ${astro[rA]} today ${message[r]}. The stars will guide your way`)
}

messageCall();