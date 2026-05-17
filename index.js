import{a as u,S as d,i}from"./assets/vendor-aRrDMdG-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const f="55713445-fbda8ed7255a2117e2c0a47fe";async function p(t){return(await u.get("https://pixabay.com/api/",{params:{key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}let l=null;function m(t){const s=document.querySelector(".gallery"),a=t.map(o=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" />
      </a>
      <div class="image-info">
        <span>👍 ${o.likes}</span>
        <span>👁️ ${o.views}</span>
        <span>💬 ${o.comments}</span>
        <span>📥 ${o.downloads}</span>
      </div>
    </li>
  `).join("");s.innerHTML=a,l?l.refresh():l=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function y(){const t=document.querySelector(".gallery");t.innerHTML=""}function g(){const t=document.getElementById("loader");t&&t.classList.add("show")}function h(){const t=document.getElementById("loader");t&&t.classList.remove("show")}const c=document.querySelector(".form");c.addEventListener("submit",async t=>{t.preventDefault();const s=c.elements.searchQuery.value.trim();if(!s){i.warning({title:"Warning",message:"Please enter a search term",position:"topRight"});return}y(),g();try{const a=await p(s);if(!a.hits||a.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(a.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{h()}c.reset()});
//# sourceMappingURL=index.js.map
