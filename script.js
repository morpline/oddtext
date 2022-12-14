let end = document.getElementById("end");
let toInsert = document.getElementById("toInsert");
let editing = document.querySelector(".editor");
let pages = document.querySelectorAll(".page");
let activePage = 0;
let wave = document.getElementById("wave");
let shake = document.getElementById("shake");
let rainbow = document.getElementById("rainbow");
let chroma = document.getElementById("chroma");
function load () {
    end = document.getElementById("end");
    toInsert = document.getElementById("toInsert");
    editing = document.querySelector(".editing");
    wave = document.getElementById("wave");
    pages = editing.childNodes;
    shake = document.getElementById("shake");
    rainbow = document.getElementById("rainbow");
    chroma = document.getElementById("chroma");
}
function insertFunc() {
    pages = document.querySelectorAll(".page");

    //console.dir(e);
    //console.log("you clicked: "+e.path[0].id);
    let s = document.createElement("div");

    // if(e.path[0].id == "end") {
    //     s='</div>';
    // } else {
        
    // }
    s.innerText = " "+" "+toInsert.value;
    toInsert.value="";
    console.dir(wave)
    if(wave.classList.contains("selected"))
    {
        s.classList.add("Oddtext-wave");
    } else if(shake.classList.contains("selected"))
    {
        s.classList.add("Oddtext-shake");
    } if(rainbow.classList.contains("selected"))
    {
        s.classList.add("Oddtext-rainbow");
    } else if(chroma.classList.contains("selected"))
    {
        s.classList.add("Oddtext-chroma");
    }
    console.log(s);
    //editing.append(s);
    //pages[activePage].innerHTML = pages[activePage].innerHTML+s;
    console.dir(pages[activePage])
    //pages.item.
    console.log(editing.childElementCount);
    if(editing.childElementCount==0)
    {
        const page = document.createElement("div");
        page.classList.add("page");
        editing.append(page);
        pages = document.querySelectorAll(".page");
        activePage=0;
    }
    pages[activePage].append(s);
    reload();
    //load();
}
let a = -1;
// wave.classList.toggle("selected");
function toggleSelected (number) {
    // if(e.path[0].classList.contains("rainbow")) {
    //     e.path[1].classList.toggle("selected");
    // } else {
    //     e.path[0].classList.toggle("selected");
    // }
    console.log("toggled for "+number)
    switch(number)  {
        
        case 0:
            //if(a==0) return;
            shake.classList.remove("selected");
            wave.classList.toggle("selected");
            a=number;
            break;
        case 1:
            //if(a==1) return;
            wave.classList.remove("selected");
            shake.classList.toggle("selected");
            a=number;
            break;
        case 2:
            //if(a==2) return;
            chroma.classList.remove("selected");
            rainbow.classList.toggle("selected");
            a=number;
            break;
        case 3:
            //if(a==3) return;
            rainbow.classList.remove("selected");
            chroma.classList.toggle("selected");
            a=number;
            break;
        default:
            console.error("Error 9: toggleSelected() run without a valid number");
            break;
    }

}
end.addEventListener("click",e => insertFunc(e));
wave.addEventListener("click",e => toggleSelected(0));
shake.addEventListener("click",e => toggleSelected(1));
rainbow.addEventListener("click",e => toggleSelected(2));
chroma.addEventListener("click",e => toggleSelected(3));
pages.forEach((page,ipag) => page.addEventListener("click",() => {
    activePage=ipag;
    page.append(document.createElement("div"));
}))