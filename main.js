const sliderBody = document.getElementById('sliderBody');

const controlCircles = document.querySelectorAll('.control-circle');

const imagesHref = [
    'bigworlds.jpg',
    'futuristic-city.png',
    'miniworlds.jpg',
    'peopledworld.jpg',
    'spacialcity.png'
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