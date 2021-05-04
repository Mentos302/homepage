const lightButton = document.querySelector('#lightTheme')
const inviseButton = document.querySelector('#inviseTheme')

lightButton.addEventListener('click', () => turnOnLightTheme())
inviseButton.addEventListener('click', () =>  turnOnInviseTheme())

const turnOnLightTheme = () => {
    document.querySelector('article').style.display = 'block'
    document.querySelector('.muggleVersion').style.display = 'none'
} 
const turnOnInviseTheme = () => {
    document.querySelector('article').style.display = 'none'
    document.querySelector('.muggleVersion').style.display = 'flex'
}