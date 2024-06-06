document.addEventListener("DOMContentLoaded",function(){var e,n,r=function(e){return Number(e.replace(/[^0-9.-]+/g,""))};(n=Array.from((e=document.querySelector("ul")).children)).sort(function(e,n){return r(n.dataset.salary)-r(e.dataset.salary)}),e.innerHTML="",n.forEach(function(n){return e.appendChild(n)})});
//# sourceMappingURL=index.66e05bc0.js.map
