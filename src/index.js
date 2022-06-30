function draw() {
    const canvas = document.getElementById("tutorial");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgba(512, 0, 0, 0.5)";
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = "rgba(0, 0, 256, 0.5)";
        ctx.fillRect(30, 30, 50, 50);

        x = 90;
        ctx.fillStyle = "rgba(0, 200, 0, 0.5)";
        ctx.fillRect(25 + x, 25 + x, 100, 100);
        ctx.clearRect(45 + x, 45 + x, 60, 60);
        ctx.strokeRect(50 + x, 50 + x, 50, 50);

        x = 30;
        ctx.fillStyle = "rgba(0, 200, 256, 0.5)";
        ctx.beginPath();
        ctx.moveTo(75 + x, 50 + x);
        ctx.lineTo(100 + x, 75 + x);
        ctx.lineTo(100 + x, 25 + x);
        ctx.fill();

        y = -20;
        x = 120;
        ctx.beginPath();
        ctx.arc(75 + x, 75 + y, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(110 + x, 75 + y);
        ctx.arc(75 + x, 75 + y, 35, 0, Math.PI, false); // Mouth (clockwise)
        ctx.moveTo(65 + x, 65 + y);
        ctx.arc(60 + x, 65 + y, 5, 0, Math.PI * 2, true); // Left eye
        ctx.moveTo(95 + x, 65 + y);
        ctx.arc(90 + x, 65 + y, 5, 0, Math.PI * 2, true); // Right eye
        ctx.stroke();

    } else {
        canvas.insertAdjacentHTML("afterend", "<h3>problem</h3>");
    }
}