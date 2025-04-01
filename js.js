let fon = document.querySelector(".fon")
let pro = document.querySelector(".pro")
let proMax = document.querySelector(".pro-max")
let colors = document.querySelectorAll(".s")
let h1 = document.querySelector(".h1")
let h2 = document.querySelector(".h2")
let gb128 = document.querySelector(".gb128")
let colorname = document.querySelector(".color-name")
let gbites = document.querySelectorAll(".gb")
let gb256 = document.querySelector(".gb256")
let pricep = document.querySelectorAll(".price-p")
let pricep1 = document.querySelectorAll(".pricep1")

let promaxfoto = {
    Desert: "./img/pro-max/desert.webp",
    White: "./img/pro-max/white.webp",
    Natural: "./img/pro-max/natural.webp",
    Black: "./img/pro-max/black.webp",
}

proMax.onclick = () => {

    gbites.forEach(gb => {
        gb.classList.remove("on")
    });
    gb256.classList.add("on")

    fon.setAttribute("src", promaxfoto.Desert)
    pro.classList.remove("active")
    proMax.classList.add("active")
    h1.innerHTML = "Buy iPhone 16 Pro max"
    h2.innerHTML = "From $1199 or $49.95/mo. for 24 mo.*"
    gb128.classList.add("delate")

    colors.forEach(color => {
        color.onclick = () => {
            let selcolor = color.dataset.color;
            fon.setAttribute("src", promaxfoto[selcolor]);
            colorname.innerHTML = `Color- ${selcolor} Titanium`
            colors.forEach(color => {
                color.classList.remove("open");
            });
            color.classList.add("open");
        }
    })

    gbites.forEach(gb => {
        gb.onclick = () => {
            gbites.forEach(gbb => {
                gbb.classList.remove("on")
            })
            gb.classList.add("on")
            let go = gb.dataset.promax
            let mo = parseInt(go / 24)
            h2.innerHTML = `From $${go} or $${mo}/mo. for 24 mo*`
        }
    });
}



let profoto = {
    Desert: "./img/pro/desert.webp",
    Natural: "./img/pro/natural.webp",
    Black: "./img/pro/black.webp",
    White: "./img/pro/white.webp"
}

pro.onclick = () => {
    gbites.forEach(gb => {
        gb.classList.remove("on")
    });
    gb128.classList.add("on")
    fon.setAttribute("src", profoto.Desert)
    proMax.classList.remove("active")
    pro.classList.add("active")
    h1.innerHTML = "Buy iPhone 16 Pro"
    h2.innerHTML = "From $999 or $41.62/mo. for 24 mo*"
    gb128.classList.remove("delate")

    colors.forEach(color => {
        color.onclick = () => {
            let selcolor = color.dataset.color;
            fon.setAttribute("src", profoto[selcolor]);
            colorname.innerHTML = `Color- ${selcolor} Titanium`
            colors.forEach(color => {
                color.classList.remove("open");
            });
            color.classList.add("open");
        }
    })

    gbites.forEach(gb => {
        gb.onclick = () => {
            gbites.forEach(gbb => {
                gbb.classList.remove("on")
            })
            gb.classList.add("on")
            let go = gb.dataset.pro
            let mo = parseInt(go / 24)
            h2.innerHTML = `From $${go} or $${mo}/mo. for 24 mo*`
        }
    });
}


