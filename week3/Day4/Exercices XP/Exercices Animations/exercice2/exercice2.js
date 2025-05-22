function myMove() {
    const elem = document.getElementById("animate");
    const container = document.getElementById("container");
    let pos = 0;

    // Calculate max position (container width - box width)
    const maxPos = container.clientWidth - elem.clientWidth;

    const id = setInterval(frame, 1); // Move every 1ms

    function frame() {
        if (pos >= maxPos) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}
