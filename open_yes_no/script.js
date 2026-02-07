let noClick=0;
let maxNoClick=4;
const minNoScale=0.50;
let noScale=1;
let yesScale=1;
const gifElement = document.getElementById("maka-gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth)||550;

const gifs = [
    "sad1.gif",
    "sad2.gif",
    "sad3.gif",
    "sad4.gif"
];

const buttonMessages = [
    "Are you sure?",
    "OMG, you dont love me anymore..",
    "Babe, pleaseee",
    "JUST TRY -_-"
];

noButton.addEventListener("click", () => {
    // меняем GIF
    const index = noClick % maxNoClick;

    gifElement.src = gifs[index];
    noButton.textContent = buttonMessages[index];

    // уменьшаем кнопку NO
    if(noScale > minNoScale){
        noScale -= 0.1;
        noButton.style.transform = `scale(${noScale})`;
    }

    // увеличиваем кнопку YES
    const baseWidth = parseFloat(yesButtonStyle.width);
    const scaledWidth = baseWidth * yesScale;
    console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxYesWidth}`);

    if(scaledWidth < maxYesWidth){
        yesScale += 0.4;
        yesButton.style.transform = `scale(${yesScale})`;

        const rootStyle = getComputedStyle(document.documentElement);
        const gapScaleFactor = parseFloat(rootStyle.getPropertyValue("--gap-scale-factor")) || 250;
        const currentGap = parseFloat(buttonContainer.style.gap) || 20;
        const newGap = Math.sqrt(currentGap * gapScaleFactor);
        buttonContainer.style.gap = `${newGap}px`;
    }

    noClick++;
});

