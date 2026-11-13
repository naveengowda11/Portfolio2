const roles=["thoughtful software.","reliable backend systems.","AI-powered experiences.","useful products for people."];
let roleIndex=0;const role=document.getElementById("roleText");
if(role){setInterval(()=>{role.style.opacity="0";setTimeout(()=>{roleIndex=(roleIndex+1)%roles.length;role.textContent=roles[roleIndex];role.style.opacity="1"},240)},2800);role.style.transition="opacity .25s"}
const menu=document.getElementById("menuToggle"),nav=document.getElementById("nav");
menu?.addEventListener("click",()=>{nav.classList.toggle("open");menu.setAttribute("aria-label",nav.classList.contains("open")?"Close navigation":"Open navigation")});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const themeButton=document.getElementById("themeToggle");
const setTheme=theme=>{document.documentElement.dataset.theme=theme;const light=theme==="light";if(themeButton){themeButton.textContent=light?"☾":"☼";themeButton.setAttribute("aria-label",light?"Switch to dark theme":"Switch to light theme");themeButton.title=light?"Switch to dark theme":"Switch to light theme"};document.querySelector('meta[name="theme-color"]')?.setAttribute("content",light?"#f1f0ec":"#080a12")};
let savedTheme=null;try{savedTheme=localStorage.getItem("naveen-portfolio-theme")}catch(e){}
const preferred=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";setTheme(savedTheme||preferred);
themeButton?.addEventListener("click",()=>{const next=document.documentElement.dataset.theme==="light"?"dark":"light";setTheme(next);try{localStorage.setItem("naveen-portfolio-theme",next)}catch(e){}});
const line=document.getElementById("scrollLine");
addEventListener("scroll",()=>{const max=document.documentElement.scrollHeight-innerHeight;if(line)line.style.width=(max?scrollY/max*100:0)+"%"},{passive:true});
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
if("IntersectionObserver"in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll(".project,.facts>div,.timeline article,.toolkit-grid article,.about-copy").forEach(el=>{el.classList.add("reveal");observer.observe(el)})}else{document.querySelectorAll(".project,.facts>div,.timeline article,.toolkit-grid article,.about-copy").forEach(el=>el.classList.add("visible"))}
const art=document.querySelector(".hero-art");if(art&&matchMedia("(pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion: reduce)").matches){art.addEventListener("pointermove",e=>{const r=art.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;art.style.setProperty("--mx",x.toFixed(3));art.style.setProperty("--my",y.toFixed(3));const core=document.getElementById("orbitalCore");if(core)core.style.translate=(x*18)+"px "+(y*18)+"px"});art.addEventListener("pointerleave",()=>{const core=document.getElementById("orbitalCore");if(core)core.style.translate="0 0"})}
