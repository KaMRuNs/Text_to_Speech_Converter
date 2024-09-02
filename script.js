let speech = new SpeechSynthesisUtterance();
let btn = document.querySelector("button");
let select =document.querySelector("select");

let voices=[];
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i)=>(select.options[i]= new Option(voice.name,i)));
};

select.addEventListener("change", ()=>{
    speech.voice = voices[select.value];
})

btn.addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})