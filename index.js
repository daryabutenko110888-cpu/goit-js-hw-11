import{S as u,a as d,i as a}from"./assets/vendor-DZWlGVzj.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery"),f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function p(n){const o=n.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${t.likes}</p>
            <p><b>Views</b> ${t.views}</p>
            <p><b>Comments</b> ${t.comments}</p>
            <p><b>Downloads</b> ${t.downloads}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),f.refresh()}function m(){c.innerHTML=""}function y(){document.querySelector(".loader").classList.remove("hidden")}function h(){document.querySelector(".loader").classList.add("hidden")}const g="56006616-a538aed9a85366c4c70ae2b3b",b="https://pixabay.com/api/";async function L(n){return(await d.get(b,{params:{key:g,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".form");l.addEventListener("submit",w);function w(n){n.preventDefault();const o=n.currentTarget.elements["search-text"].value.trim();o&&(m(),y(),L(o).then(t=>{if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t.hits)}).catch(t=>{a.error({message:"Something went wrong!",position:"topRight"}),console.log(t)}).finally(()=>{h(),l.reset()}))}
//# sourceMappingURL=index.js.map
