(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.querySelector(".inputbox");document.getElementById("searchbtn");const n=document.querySelector(".weatherimage"),d=document.querySelector(".temprature"),u=document.querySelector(".description"),l=document.getElementById("humidity"),m=document.getElementById("wind"),a=document.querySelector(".locationnotfound");async function p(s){const c=`https://api.openweathermap.org/data/2.5/weather?q=${s}&appid=38c3cdb1e6fb4b4ee10150992a2d241b`,r=await fetch(c).then(e=>e.json());if(r.cod==="404"){a.style.display="flex",console.log("Error");return}switch(a.style.display="none",d.innerHTML=`${Math.round(r.main.temp-273.15)}°C`,u.innerHTML=`${r.weather[0].description}`,l.innerHTML=`${r.main.humidity}%`,m.innerHTML=`${r.wind.speed} Km/H`,r.weather[0].main.toLowerCase()){case"clouds":n.src="images/cloud.png";break;case"clear":n.src="images/clear.png";break;case"mist":n.src="images/mist.png";break;case"rain":n.src="images/rain.png";break;case"snow":n.src="images/snow.png";break;default:n.src="images/default.png";break}}const f=document.getElementById("searchbtn"),y=document.querySelector(".inputbox");f.addEventListener("click",()=>{p(y.value)});