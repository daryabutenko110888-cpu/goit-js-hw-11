import{S as u,a as d,i}from"./assets/vendor-DZWlGVzj.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".gallery"),f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const o=s.map(t=>`
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
      `).join("");c.insertAdjacentHTML("beforeend",o),f.refresh()}function m(){c.innerHTML=""}function h(){document.querySelector(".loader").classList.remove("hidden")}function y(){document.querySelector(".loader").classList.add("hidden")}const g="56006616-a538aed9a85366c4c70ae2b3b",b="https://pixabay.com/api/";async function L(s){return(await d.get(b,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".form");l.addEventListener("submit",w);function w(s){s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){i.error({message:"Please enter a search query!",position:"topRight"});return}m(),h(),L(o).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t.hits)}).catch(t=>{i.error({message:"Something went wrong!",position:"topRight"}),console.log(t)}).finally(()=>{y(),l.reset()})}
//# sourceMappingURL=index.js.map
