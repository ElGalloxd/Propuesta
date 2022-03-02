 "use strict";

const resSi = document.querySelector(".Si");
const resNo = document.querySelector(".No");
const mensaje = document.querySelector(".cajamensaje")
resNo.addEventListener("click", (e)=>{
    let MatematicaRamdom1 = Math.floor(Math.random() * (200 - 0) + 1);
    let MatematicaRamdom2 = Math.floor(Math.random() * (1000 - 100) + 1);
    console.log(MatematicaRamdom2);
    console.log(MatematicaRamdom1);
    resNo.style.position = `absolute`;
    resNo.style.top = `${MatematicaRamdom1}px`;
    resNo.style.left = `${MatematicaRamdom2}px`;
    resSi.style.margin = "0px 95px 200px 0px";
});

resSi.addEventListener("click",()=>{
    mensaje.style.display = "flex";
});