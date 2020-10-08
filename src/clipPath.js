export default function startScratch() {
    const art = document.getElementById("art");
    const artCanvas = art.getContext("2d");
    const brushRadius = 100;
    const isMobile = window.matchMedia("(max-width: 640px)");

    artCanvas.canvas.width = window.innerWidth;
    artCanvas.canvas.height = window.innerHeight;

    if (!isMobile) {
        artCanvas.fillStyle = "white";
        artCanvas.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }

    function drawDot(mouseX, mouseY) {
        artCanvas.beginPath();
        artCanvas.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI);
        artCanvas.fillStyle = "#000";
        artCanvas.globalCompositeOperation = "destination-out";
        artCanvas.fill();
    }

    document.body.addEventListener(
        "mousemove",
        function (e) {
            drawDot(e.clientX, e.clientY);
        },
        false
    );
}
