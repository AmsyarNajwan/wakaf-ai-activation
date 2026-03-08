
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 18;

const columns = canvas.width / fontSize;

const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff9f";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const text = letters[Math.floor(Math.random() * letters.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;

    }

}

setInterval(draw, 33);



function showScene(id) {

    document.querySelectorAll(".scene").forEach(scene => {
        scene.classList.remove("active")
    })

    document.getElementById(id).classList.add("active")

}

setTimeout(() => {
    showScene("scene2")
}, 2000)

setTimeout(() => {
    showScene("scene3")
}, 4000)

function checkPassword() {

    let pass = document.getElementById("password").value

    if (pass === "WAKAF2026") {

        showScene("scene4")

        setTimeout(() => {
            showScene("scene5")
        }, 2000)

        setTimeout(() => {

            document.getElementById("voice").play()

            showScene("scene6")

        }, 4000)

    } else {

        alert("Kata laluan salah")

    }

}
