var counter = 0
function   onclickButton(el) {
counter++
el.innerHTML = "вы нажали на кнопку: " + counter
    el.style.background = "red"
    el.style.color = "blue"

    el.style.cssText = "border-radius: 5px; border: 0; font "


}