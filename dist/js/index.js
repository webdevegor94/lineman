(()=>{"use strict";const e={modalSelector:".modal-callback",modalOverlaySelector:".modal-overlay"},t=(t,o,c=e)=>{document.querySelector(t).addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector(c.modalSelector),l=document.querySelector(c.modalOverlaySelector);t.style.display=o,l.style.display=o}))};t(".header .callback-btn","block"),t(".modal-close","none"),t(".quest-section .button-services","block"),((t,o,c=e)=>{document.querySelectorAll(t).forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector(c.modalSelector),l=document.querySelector(c.modalOverlaySelector);t.style.display=o,l.style.display=o}))}))})(".services-carousel .element","block"),(e=>{const t=document.querySelectorAll('a[href^="#"]');for(let e of t)e.addEventListener("click",(function(t){t.preventDefault();const o=e.getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".form-control"),t=document.querySelector(".tel");e.addEventListener("input",(t=>{e.value=t.target.value.replace(/[^А-Яа-яёЁ]/gi,"")})),t.addEventListener("input",(e=>{t.value=e.target.value.replace(/[^0-9+]/gi,"")}))})(),(()=>{let e=document.querySelector(".top-slider");for(const t of e.children)t.querySelector(".table").classList.add("active");let t=setTimeout((function o(){(()=>{let t=[...e.children];e.replaceChildren(...t.slice(1),...t.slice(0,1))})(),t=setTimeout(o,3e3)}),3e3)})(),(()=>{const e=document.querySelector("img.up"),t=document.querySelector("#services").getBoundingClientRect().top,o=Math.abs(document.body.getBoundingClientRect().top);e.style.display=o<t?"none":"block",document.addEventListener("scroll",(()=>{const o=Math.abs(document.body.getBoundingClientRect().top);e.style.display=o<t?"none":"block"})),e.addEventListener("click",(function(e){window.scrollTo({top:0,left:0,behavior:"smooth"})}))})(),(()=>{const e=document.querySelectorAll(".accordeon .element"),t=e=>{e.classList.remove("active"),e.querySelector(".element-content").style.display="none"},o=o=>{const c=o.currentTarget;var l;c.classList.contains("active")?t(c):((l=c).classList.add("active"),l.querySelector(".element-content").style.display="block"),e.forEach((e=>{e!==c&&t(e)}))};e.forEach((e=>{e.addEventListener("click",o)}))})(),(()=>{const e=document.querySelector('form[name="form-callback"]'),t=document.querySelector(".form-control"),o=document.querySelector(".tel"),c=document.createElement("div"),l=document.getElementById("callback"),n=document.querySelector(".modal-overlay");e.addEventListener("submit",(async r=>{r.preventDefault();const a={username:t.value,phone:o.value};c.textContent="Загрузка...",e.append(c);try{const r=await fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json; charset=UTF-8"}});if(404===r.status)throw new Error("Ошибка отправки формы");{const a=await r.json();console.log(a),c.textContent="Отправлено",e.append(c),setTimeout((()=>{t.value="",o.value="",c.textContent="",l.style.display="none",n.style.display="none"}),3e3)}}catch(t){console.log(t),c.textContent="Ошибка",e.append(c)}}))})(),(()=>{const e=document.querySelector(".services-carousel"),t=[...e.children],o=()=>{t.forEach(((t,o)=>{o>=3&&e.removeChild(t)}))},c=document.querySelector(".arrow-right"),l=document.querySelector(".arrow-left");c.addEventListener("click",(()=>{const c=t.shift();t.push(c),e.replaceChildren(...t),o()})),l.addEventListener("click",(()=>{const c=t.pop();t.unshift(c),e.replaceChildren(...t),o()})),o()})()})();