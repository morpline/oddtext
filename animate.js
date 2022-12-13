
let waves = document.querySelectorAll(".Oddtext-wave");
let shakes = document.querySelectorAll(".Oddtext-shake");
let rainbows = document.querySelectorAll(".Oddtext-rainbow");
let chromas = document.querySelectorAll(".Oddtext-chroma");
function reload() {
    waves = document.querySelectorAll(".Oddtext-wave");
    shakes = document.querySelectorAll(".Oddtext-shake");
    rainbows = document.querySelectorAll(".Oddtext-rainbow");
    chromas = document.querySelectorAll(".Oddtext-chroma");
}
let waveSeed = 0;
let waveX = 0;
let colorSeed = 0;
let colorX = 0;
let waveClasses = ["down","normal","normal","up"]
let shakeClasses = ["down","left","right","up"]
let colorClasses = ["red","orange","yellow","green","blue","violet"]
function animate () {
    //ohno
    requestAnimationFrame(animate);
    waveX=waveSeed;
    let r = waves[0];
    waves.forEach((wave, index) => {
        //wave.style.transformY=Math.sin(waveX)
        if(wave.classList.contains("up"))
            wave.classList.remove("up")
        if(wave.classList.contains("normal"))
            wave.classList.remove("normal")
        if(wave.classList.contains("down"))
            wave.classList.remove("down")
        wave.classList.add(waveClasses[Math.floor(Math.sin(waveX)*2)+2])
        //console.log(Math.floor(Math.sin(waveX)*2)+2);
        waveX+=0.3;
    })
    waveSeed+=0.1;
    shakes.forEach((wave, index) => {
        //wave.style.transformY=Math.sin(waveX)
        if(wave.classList.contains("up"))
            wave.classList.remove("up")
        if(wave.classList.contains("right"))
            wave.classList.remove("right")
        if(wave.classList.contains("left"))
            wave.classList.remove("left")
        if(wave.classList.contains("down"))
            wave.classList.remove("down")
        wave.classList.add(shakeClasses[Math.floor(Math.random()*4)])
    })
    chromas.forEach((wave, index) => {
        //wave.style.transformY=Math.sin(waveX)
        if(wave.classList.contains("red"))
            wave.classList.remove("red")
        if(wave.classList.contains("orange"))
            wave.classList.remove("orange")
        if(wave.classList.contains("yellow"))
            wave.classList.remove("yellow")
        if(wave.classList.contains("green"))
            wave.classList.remove("green")
        if(wave.classList.contains("blue"))
            wave.classList.remove("blue")
        if(wave.classList.contains("violet"))
            wave.classList.remove("violet")
        wave.classList.add(colorClasses[Math.floor(colorX%6)])
        
        //console.log(Math.floor(Math.sin(waveX)*2)+2);
        
    })
    rainbows.forEach((wave, index) => {
        //wave.style.transformY=Math.sin(waveX)
        if(wave.classList.contains("red"))
            wave.classList.remove("red")
        if(wave.classList.contains("orange"))
            wave.classList.remove("orange")
        if(wave.classList.contains("yellow"))
            wave.classList.remove("yellow")
        if(wave.classList.contains("green"))
            wave.classList.remove("green")
        if(wave.classList.contains("blue"))
            wave.classList.remove("blue")
        if(wave.classList.contains("violet"))
            wave.classList.remove("violet")
        wave.classList.add(colorClasses[Math.floor(colorX%6)])
        //console.log(colorX%6);
        //console.log(Math.floor(Math.sin(waveX)*2)+2);
        colorX+=0.3;
    })
    colorSeed+=0.1;
    colorX=colorSeed;
}
animate();