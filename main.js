function conectButtonToImage(button, buttonIndex, imagesHrefList)
{
    button.onclick = () =>
    {
        sliderBody.style.backgroundImage = `url("../images/${imagesHrefList[buttonIndex]}")`;
    };
}


function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function loopSlider(arrayOfButtons)
{
    for (let i = 0;i < arrayOfButtons.length;i++)
    {
        await sleep(4000);
        arrayOfButtons[i].click();
    }

    loopSlider(arrayOfButtons);
}


const sliderBody = document.getElementById('sliderBody');
const controlCircles = document.querySelectorAll('.control-circle');
const imagesHref = [
    'bigworlds.webp',
    'futuristic-city.webp',
    'miniworlds.webp',
    'peopledworld.webp',
    'spacialcity.webp'
];

controlCircles.forEach((button, buttonIndex) =>
{
    button.addEventListener('click', conectButtonToImage(button, buttonIndex, imagesHref));
});

loopSlider(controlCircles);