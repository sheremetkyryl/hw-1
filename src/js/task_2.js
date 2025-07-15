const box = document.getElementById("box")
box.style.position = "absolute";

const boxMove = (event) => {
    const x = event.clientX
    const y = event.clientY
    box.style.left = `${x}px`
    box.style.top = `${y}px`
}

const boxMoveDebounce = _.debounce(boxMove, 200)
document.addEventListener("mousemove", boxMoveDebounce)