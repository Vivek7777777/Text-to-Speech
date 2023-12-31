let speech = new SpeechSynthesisUtterance();
let voices = [];

let btn = document.querySelector("button");
let textarea = document.querySelector("textarea");
voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    //getVoices return all the voices available on the device
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (
        voiceSelect.options[i] = new Option(voice.name, i)
    ));
}

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

btn.addEventListener("click", () => {
    console.log("click");
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
})

