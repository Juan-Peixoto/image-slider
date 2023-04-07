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


function conectButtonToImage(button, buttonIndex, imagesHrefList)
{
    button.onclick = () =>
    {
        sliderBody.style.backgroundImage = `url("../images/${imagesHrefList[buttonIndex]}")`;
    };
}