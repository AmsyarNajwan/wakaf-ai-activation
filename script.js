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

/* MATRIX BACKGROUND */

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


/* START SYSTEM */

function startSystem() {

    document.getElementById("startScreen").style.display = "none";
    document.getElementById("first_bgm").play();
    document.getElementById("load_system").play();
    let load_bar = document.getElementById("load_bar");

    load_bar.currentTime = 0;
    load_bar.play();

    setTimeout(() => {
        load_bar.pause();
        load_bar.currentTime = 0;
    }, 3000); // 3000ms = 3 saat
    setTimeout(() => {
        document.getElementById("sambungan").play();
    }, 3500);



    setTimeout(() => {
        document.getElementById("voice").play();
    }, 6000);

    startLoading();
}


/* LOADING BAR */

function startLoading() {

    let progress = 0;
    let bar = document.getElementById("progressBar");
    let percent = document.getElementById("percent");

    let interval = setInterval(() => {

        progress++;

        bar.style.width = progress + "%";
        percent.innerText = progress + "%";

        if (progress >= 100) {

            clearInterval(interval);

            showScene("scene2");

            setTimeout(() => {
                showScene("scene3");
            }, 3000);

        }

    }, 30);
}


/* SCENE CONTROL */

function showScene(id) {

    document.querySelectorAll(".scene").forEach(scene => {
        scene.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


/* PASSWORD CHECK */

function checkPassword() {

    let pass = document.getElementById("password").value;

    if (pass === "WAKAF2026") {

        showScene("scene4");
        startScan()

        setTimeout(() => {
            showScene("scene5");
        }, 2000);

        setTimeout(() => {

            showScene("scene6");
            document.getElementById("bgm").play();
            let load = document.getElementById("welcome_load");
            load.play();

        }, 6000);

    } else {

        alert("Kata laluan salah");

    }
}

function startScan() {

    let progress = 0
    let bar = document.getElementById("scanBar")
    let percent = document.getElementById("scanPercent")

    let load_bar = document.getElementById("load_bar");
    let imbas = document.getElementById("imbas");

    load_bar.currentTime = 0;
    load_bar.play();
    imbas.play();

    setTimeout(() => {
        load_bar.pause();
        load_bar.currentTime = 0;
    }, 2500); // 4000ms = 4 saat

    let success = document.getElementById("success");
    success.currentTime = 0;
    success.play();

    setTimeout(() => {
        success.pause();
        success.currentTime = 0;
    }, 4000);

    setTimeout(() => {
        document.getElementById("access").play();
    }, 3000);

    let interval = setInterval(() => {

        progress++

        bar.style.width = progress + "%"
        percent.innerText = progress + "%"

        if (progress >= 100) {

            clearInterval(interval)
            document.getElementById("first_bgm").pause()
            document.getElementById("first_bgm").currentTime = 0

            showScene("scene5")

        }

    }, 20)

}

function resetSystem() {

    // berhenti semua audio
    document.querySelectorAll("audio").forEach(a => {
        a.pause();
        a.currentTime = 0;
    });

    // reset progress bar utama
    let bar = document.getElementById("progressBar")
    let percent = document.getElementById("percent")

    if (bar) bar.style.width = "0%"
    if (percent) percent.innerText = "0%"

    // reset scan bar
    let scanBar = document.getElementById("scanBar")
    let scanPercent = document.getElementById("scanPercent")

    if (scanBar) scanBar.style.width = "0%"
    if (scanPercent) scanPercent.innerText = "0%"

    // kosongkan password
    document.getElementById("password").value = ""

    // hide semua scene
    document.querySelectorAll(".scene").forEach(scene => {
        scene.classList.remove("active")
    })

    // kembali ke start screen
    document.getElementById("startScreen").style.display = "flex"

}