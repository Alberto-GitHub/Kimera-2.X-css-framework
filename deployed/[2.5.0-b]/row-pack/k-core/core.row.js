
/*/KV2.5.0b / gapkit 0.5.0 /*/

const k=(e=>{console.time(":::: [ kimera framework V2.5.0b ]\n:::: [ wikizone ] https://git.io/fhSzk\n:::: [ k-loader ] page time ");const t=e=>{var t;return s=>{t&&clearTimeout(t);t=setTimeout(e,100,s)}};const s=()=>{document.documentElement.clientWidth>920?(document.querySelector("html").style.height="",document.querySelector("body").style.height=""):(document.querySelector("html").style.height=window.innerHeight+"px",document.querySelector("body").style.height=window.innerHeight+"px")};const a=()=>{1==e&&void 0!=e||(Loader=[...document.querySelectorAll(".loader")][0],Loader.style.transitionTime="",Loader.classList.add("active"),window.onload=(()=>{document.querySelectorAll('*[class*="viewport-"]')[0].style.opacity="1";Loader.classList.add("off");Loader.classList.remove("active");A();setTimeout(()=>{Loader.classList.remove("active","gpuboost");Loader.classList.replace("off","hide");console.timeEnd(":::: [ kimera framework V2.5.0b ]\n:::: [ wikizone ] https://git.io/fhSzk\n:::: [ k-loader ] page time ")},500);return}))};const o=()=>{let e=[...document.querySelectorAll('[target*="_self"], [target*="_top"], [target*="_inside]"')];let t=e.length;for(let s=0;t>s;s++){let t=e[s];t.onclick=(e=>{e.preventDefault();let s=[...document.querySelectorAll(".loader")][0],a=t.getAttribute("href"),o=t.getAttribute("disabled");s.querySelector(".spinner-box").classList.add("hide");s.classList.add("off");o||(s.classList.remove("hide"),setTimeout(()=>{s.classList.add("gpuboost","active");s.classList.remove("off")},15),setTimeout(()=>{"#"===a?location.reload():location.href=a},270))})}return};const l=()=>{let e=parseInt(document.body.clientWidth/2.5);let t=[...document.querySelectorAll(".viewport-app")];let s=t.length;for(let a=0;s>a;a++){let s=t[a],o=[...s.querySelectorAll(".view-controller")][0],l=[...s.querySelectorAll(".view-group")][0],c=[...l.querySelectorAll(".view")],i=[...o.querySelectorAll(".pointer")],n=[...s.querySelectorAll(".prev-view")],r=[...s.querySelectorAll(".next-view")],f=s.querySelector(".dots"),u=s.querySelector(".steps");f&&(f.closest(".snap-x")||f.closest(".snap-y"))&&(f=null);let d,m,p;d=i>0,m=!!f,p=!!u;let v=c.length;for(let t=0;v>t;t++){if(c[t].className.match("active")){let e=t,s=c[e].offsetLeft;d&&i[e].classList.add("active"),l.style.transform="translate("+-1*s+"px,0)"}if(p){let e=document.createElement("span");if(u.appendChild(e),e.classList.add("step"),c[t].className.match("active")){let e=t,s=[...u.querySelectorAll(".step")];for(e=0;e<s.length;e++)s[e].classList.add("active")}}if(m){let e=document.createElement("span");f.appendChild(e),e.classList.add("dot"),c[t].className.match("active")&&e.classList.add("active")}d&&(i[t].onclick=(e=>{l.classList.remove("smooth");I();i[t].classList.add("active");c[t].classList.add("active");e.preventDefault();let s;if(t<i.length-1)s=c[t].offsetLeft;else{let e=parseInt(window.getComputedStyle(c[t]).width),a=parseInt(window.innerWidth),o=c[t].offsetLeft;s=parseInt(o-(a-e))}M();D();l.style.transform="translate("+-1*s+"px,0)"}));let s,a,o,v,h,g,L,y,b,x,S,A,T,N,q,k,E,w;if(l.ontouchstart=(e=>{l.classList.remove("smooth");a=e.target.closest(".view");s=e.target;e.target.closest(".scroll-x")||e.target.closest(".scroll-y")||e.target.closest(".snap-x")||e.target.closest(".snap-y")||e.target.closest(".button-range *")||e.target.className.match("nofx")?a.removeAttribute("draggable"):a.setAttribute("draggable","true");L=e.changedTouches[0],b=L.pageX,x=L.pageY,w=new Date,q=parseInt(L.clientX),o=a.previousElementSibling,v=a.nextElementSibling,E=!1;a.className.match("active")||(I(),a.classList.add("active"),H(),M(),D());h=o?parseInt(-1*a.previousElementSibling.offsetLeft):a.offsetLeft;v?g=parseInt(-1*a.nextElementSibling.offsetLeft):null===v?g=parseInt(-1*a.offsetLeft):null===v&&parseInt(v.nextElementSibling.offsetWidth)<parseInt(l.offsetWidth)&&(g=parseInt(-1*a.offsetLeft))}),l.ontouchmove=(e=>{L=e.changedTouches[0],k=a.offsetLeft,y=parseInt(k+q+-1*L.pageX),N=L.pageY-x,T=k-y;a.onscroll=(e=>{E=!0;return});let t=Math.abs(T),s=Math.abs(N);a.hasAttribute("draggable")&&t>s?0>T&&!v||T>0&&!o?(T=0,l.style.transform="translate("+-1*k+"px,0)",a.removeAttribute("draggable")):0==T||E||(N=0,l.style.transform="translate("+-1*y+"px,0)"):(T=0,l.style.transform="translate("+-1*k+"px,0)",a.removeAttribute("draggable"))}),l.ontouchend=(t=>{L=t.changedTouches[0],k=a.offsetLeft,S=parseInt(L.pageX-b),A=parseInt(L.pageY-x);Math.abs(S),Math.abs(A);let s;t.target.closest(".scroll-x")||t.target.closest(".scroll-y")||t.target.closest(".snap-x")||t.target.closest(".snap-y")||t.target.closest(".button-range *")||t.target.className.match("nofx")?(s=0,S=0):s=50;a.hasAttribute("draggable")&&(A=0,(S*=-1)>e?C():S>-e?(l.style.transform="translate("+-1*k+"px,0)",a.removeAttribute("draggable")):Y());a.blur();E=!1}),r){let e=r.length;for(let t=0;e>t;t++)r[t].onclick=(e=>{e.preventDefault();e.stopPropagation();let t=c.length;for(let e=0;t>e;e++){let t;if(c[e].className.match("active"))return t=parseInt(e+1),void function(e){if(void 0!==c[e]){e>=0&&c.length;{let t=c[e].offsetLeft;I(),l.style.transform="translate("+-1*t+"px,0)",c[e].classList.add("active"),H()}}}(t)}})}else r=null;if(n){let e=n.length;for(let t=0;e>t;t++)n[t].onclick=(e=>{e.preventDefault();e.stopPropagation();let t=c.length;for(let e=0;t>e;e++){let t;if(c[e].className.match("active"))return t=parseInt(e-1),void function(e){if(void 0!==c[e]){e>=0&&c.length;{let t=c[e].offsetLeft;I(),l.style.transform="translate("+-1*t+"px,0)",c[e].classList.add("active"),H()}}}(t)}})}else n=null;()=>{l.classList.add("smooth")},()=>{setTimeout(()=>{l.classList.remove("smooth")},600)};let I=()=>{for(let e=0;e<i.length;e++)i[e].classList.remove("active");for(let e=0;e<c.length;e++)c[e].classList.remove("active")},D=()=>{if(f){let e=[...f.querySelectorAll(".dot")];for(let t=0;t<c.length;t++)c[t].className.match("active")?e[t].classList.add("active"):e[t].classList.remove("active")}},M=()=>{if(u){let e=[...u.querySelectorAll(".step")];for(let t=0;t<e.length;t++)e[t].classList.remove("active");for(let t=0;t<c.length;t++)if(c[t].className.match("active")){let s=e.fill(0,1+t);for(let e=0;1+t>e;e++)s[e].classList.add("active")}}},H=()=>{for(let e=0;e<c.length;e++)c[e].className.match("active")?d&&i[e].classList.add("active"):d&&i[e].classList.remove("active")},C=()=>{a.removeAttribute("draggable");a.classList.remove("active");v.classList.add("active");l.style.transform="translateX("+g+"px)";H();M();D()},Y=()=>{a.removeAttribute("draggable");a.classList.remove("active");o.classList.add("active");l.style.transform="translateX("+h+"px)";H();M();D()}}}};const c=()=>{let e=document.querySelector('body>*[class*="viewport-"]'),t=[...document.querySelectorAll('*[target^="outbox#"]')];let s=t.length;for(let e=0;s>e;e++)t[e].onclick=(s=>{s.preventDefault();let l=t[e].getAttribute("target").split("#")[1],c=[...document.querySelectorAll("#"+l)][0],i=c.querySelector("div").className;c.classList.add("gpuboost","active");i.match("center")?a("center"):i.match("top")?a("top"):i.match("left")?a("left"):i.match("right")?a("right"):i.match("bottom")&&a("bottom");c.onclick=(e=>{if(e.target.className.match("close")||e.target.className.match("accept")||e.target===c)return c.classList.add("off"),c.classList.remove("active"),setTimeout(()=>{c.classList.remove("off","active","gpuboost")},300),void o(c)});return});let a=t=>{e.classList.add("gpuboost","vfxtransition-in","vfx"+t)};let o=(t,s)=>{e.classList.add("vfxtransition-out"),e.classList.remove("vfxtransition-in","vfxtop","vfxleft","vfxbottom","vfxright","vfxcenter");setTimeout(()=>{t.classList.remove("off","active","gpuboost"),e.classList.remove("vfxtransition-out","gpuboost")},500)}};const i=()=>{var e=[...document.querySelectorAll('[class*="absolute-"]')];let t=e.length;for(let s=0;t>s;s++)e[s].parentNode.className.match("outbox")&&e[s].parentNode.className.match("view")||(e[s].parentNode.style.position="relative");return};const n=()=>{var e=[...document.querySelectorAll(".scroll-x, .scroll-y")];let t=e.length;for(let a=0;t>a;a++){let t;t="undefined"!=typeof InstallTrigger?85:2.5;var s=-1;e[a].onwheel=(o=>{o.preventDefault();o.stopPropagation();e[a].focus();s++;if(s>=1){let l;l=5>s?s/2:s>5&&8>s?s/2.5:s/3.5,e[a].className.match("scroll-x")?o.deltaY>0?e[a].scrollLeft+=l*(t*o.deltaY):0>o.deltaY&&(e[a].scrollLeft-=l*(t*o.deltaY)*-1):e[a].className.match("scroll-y")&&(o.deltaY>0?e[a].scrollTop+=l*(t*o.deltaY):0>o.deltaY&&(e[a].scrollTop-=l*(t*o.deltaY)*-1)),setTimeout(()=>s=0,150)}})}};const r=()=>{(()=>{let e=[...document.querySelectorAll(".snapgroup")];let t=e.length;for(let s=0;t>s;s++){let t=e[s],a=[...t.querySelectorAll("*:first-child")][0];if(a.classList.add("active"),t.nextElementSibling&&t.nextElementSibling.className.match("dots")){let e=[...t.querySelectorAll(".snapgroup>*")],s=e.length;for(let t=0;s>t;t++){let s=e[t].parentNode.nextElementSibling,a=document.createElement("span");s.appendChild(a),a.classList.add("dot");let o=[...s.querySelectorAll(".dot")][0];o.classList.add("active")}}}})();let e,t=[...document.querySelectorAll(".snap-x>.snapgroup")],s=[...document.querySelectorAll(".snap-y>.snapgroup")];let a=t.length;for(let s=0;a>s;s++){let a,o,n,r,f,u;t[s].ontouchstart=(e=>{a=e.changedTouches[0];r=parseInt(a.pageX);f=parseInt(a.pageY);e.preventDefault();let l=[...t[s].children];for(let e=0;e<l.length;e++)l[e].className.match("active")&&(o=l[e],n=e)}),t[s].ontouchmove=(e=>{a=e.changedTouches[0];DragXPosition=parseInt(o.offsetLeft+r+-1*a.pageX);u=parseInt(r+-1*a.pageX);u>100?(e.preventDefault(),c(t[s],o)):-100>u?(e.preventDefault(),i(t[s],o)):t[s].style.transform="translate("+-1*DragXPosition+"px,0)"}),t[s].ontouchend=(e=>{e.preventDefault();let a=[...t[s].children];for(let e=0;e<a.length;e++)a[e].className.match("active")&&(o=a[e],n=e);t[s].style.transform="translate("+-1*o.offsetLeft+"px,0)"}),t[s].onwheel=(a=>{0!=a.deltaY&&(e=t[s],l(a,e),a.stopPropagation(),a.preventDefault())})}let o=s.length;for(let t=0;o>t;t++){let a,o,n,r,f;s[t].ontouchstart=(e=>{a=e.changedTouches[0];r=parseInt(a.pageX);f=parseInt(a.pageY);e.preventDefault();let l=[...s[t].children];for(let e=0;e<l.length;e++)l[e].className.match("active")&&(o=l[e],n=e)}),s[t].ontouchmove=(e=>{a=e.changedTouches[0];DragYPosition=parseInt(o.offsetTop+f+-1*a.pageY);DragY=parseInt(f+-1*a.pageY);DragY>100?(e.preventDefault(),c(s[t],o)):-100>DragY?(e.preventDefault(),i(s[t],o)):s[t].style.transform="translate(0,"+-1*DragYPosition+"px)"}),s[t].ontouchend=(e=>{e.preventDefault();let a=[...s[t].children];for(let e=0;e<a.length;e++)a[e].className.match("active")&&(o=a[e],n=e);s[t].style.transform="translate(0,"+-1*o.offsetTop+"px)"}),s[t].onwheel=(a=>{0!=a.deltaY&&(e=s[t],l(a,e),a.stopPropagation(),a.preventDefault())})}let l=(e,t)=>{let s=[...t.querySelectorAll(".snapgroup>*")];for(let e=0;e<s.length;e++)s[e].className.match("active")&&(ActiveChild=s[e]);1>e.deltaY?e.deltaY>-1||i(t,ActiveChild):c(t,ActiveChild)};let c=(e,t)=>{if(t.nextElementSibling){let s=t.nextElementSibling,a=parseInt(s.offsetLeft),o=parseInt(s.offsetTop);e.style.transform="translate("+-1*a+"px,"+-1*o+"px)",t.classList.remove("active"),s.classList.add("active"),n(e)}};let i=(e,t)=>{if(t.previousElementSibling){let s=t.previousElementSibling,a=parseInt(s.offsetLeft),o=parseInt(s.offsetTop);e.style.transform="translate("+-1*a+"px,"+-1*o+"px)",t.classList.remove("active"),s.classList.add("active"),n(e)}};let n=(e,t)=>{if(e.nextElementSibling&&e.nextElementSibling.className.match("dots")){let t=[...e.nextElementSibling.querySelectorAll(".dot")],s=[...e.querySelectorAll(".snapgroup>*")];for(let e=0;e<s.length;e++)s[e].className.match("active")?t[e].classList.add("active"):t[e].classList.remove("active")}}};const f=()=>{var e=[...document.querySelectorAll('*[class*="autocrop"]')];let t=e.length;for(let s=0;t>s;s++)if(void 0==e[s].style.height||!e[s].style.height){let t=e[s].parentNode.style.height+"px";e[s].style.height=t}};const u=()=>{var e=[...document.querySelectorAll('*[class*="flange"]')];let t=e.length;for(let s=0;t>s;s++)setTimeout(()=>{let t,a,o,l,c,i,n=e[s],r=n.closest("NAV"),f=n.parentNode,u=!1;n.parentElement.style.position="relative";setTimeout(()=>{(n.className.match("flange-left")||n.className.match("flange-right"))&&("DIV"==n.tagName?(n.style.height=r.offsetHeight+"px",t=n.parentNode.offsetTop,a=r.offsetTop,positon=a-t,n.style.top=positon+"px"):(n.style.top=0,l=n.offsetHeight/2,c=n.parentNode.offsetHeight/2,o=-1*(l-c),n.style.marginTop=o+"px"),n.className.match("flange-left")&&(i=n.offsetWidth,n.style.marginLeft=-1*i+"px"));if(n.className.match("flange-top")||n.className.match("flange-bottom")){if("DIV"==n.tagName)t=parseInt(n.parentNode.offsetLeft),a=parseInt(r.offsetLeft),o=a-t,n.style.left=o+"px",n.style.width=r.offsetWidth+"px";else{let e=parseInt(n.offsetWidth)/2,t=parseInt(n.parentNode.offsetWidth)/2,s=-1*(e-t);n.style.left=s+"px"}n.className.match("flange-top")&&(n.style.top=0,l=-1*n.offsetHeight,n.style.marginTop=l+"px"),n.className.match("flange-bottom")&&(n.style.top=0,c=n.parentNode.offsetHeight,n.style.marginTop=c+"px")}f.className.match("fx-")||n.className.match("fx-")||(f.addEventListener("click",e=>{d(e)},!0),n.addEventListener("mouseleave",e=>{m(e)},!1),document.body.addEventListener("click",e=>{e.target.closest("NAV")||m(e);document.body.onclick=null},!0))},150);let d=t=>{if(u)u&&(n.classList.add("off"),n.classList.remove("active"),f.classList.add("off"),f.classList.remove("active"),u=!1);else{for(let t=0;t<e.length;t++)e[t].classList.remove("active","off"),e[t].classList.add("off");n.classList.add("active"),n.classList.remove("off"),f.classList.add("active"),f.classList.remove("off"),u=!0}};let m=e=>{n.classList.add("off");n.classList.remove("active");f.classList.add("off");f.classList.remove("active");setTimeout(()=>{n.classList.remove("off","active");n.previousElementSibling.classList.remove("off","active")},250);return u=!1}},200)};const d=()=>{let e=[...document.querySelectorAll('[class*="button"]>img, .icon, .icon-before, .icon-after')];if(e){let t=e.length;for(let s=0;t>s;s++){let t=e[s];t.parentNode.className.match("inconized")||t.parentNode.classList.add("inconized")}}let t=[...document.querySelectorAll('input[type="checkbox"]')];if(t){let e=t.length;for(let s=0;e>s;s++){let e=t[s];e.onclick=(t=>{!0===e.checked?e.setAttribute("checked",!0):e.setAttribute("checked",!1);return})}}let s=[...document.querySelectorAll('input[type="radio"]')];if(s){let e=s.length;for(let t=0;e>t;t++){let e=s[t];e.onclick=(t=>{e.getAttribute("name");let s=[...document.querySelectorAll('input[type="radio"][name="+name+"]')];let a=s.length;for(let e=0;a>e;e++)s[e].checked=!1;e.checked=!0;return})}}let a=[...document.querySelectorAll('*[class*="button-number"]')];if(a){let e=a.length;for(let t=0;e>t;t++){let e=a[t],s=[...e.querySelectorAll('input[type="number"]')][0],o=[...e.querySelectorAll("A")][0],l=[...e.querySelectorAll("A")][1],c=[...e.querySelectorAll("P")][0],i=s.getAttribute("value"),n=s.getAttribute("min"),r=s.getAttribute("max");s.classList.add("off"),o.classList.add("off"),l.classList.add("off"),c.classList.add("off"),o.onclick=(()=>{if(n>=i)return;i--;s.value=i,c.innerHTML=i;o.className.match("active")||o.classList.replace("off","active");c.className.match("active")||c.classList.replace("off","active");setTimeout(()=>{c.classList.replace("active","off");o.classList.replace("active","off")},150)}),l.onclick=(()=>{if(i>=r)return;i++;s.value=i,c.innerHTML=i;l.className.match("active")||l.classList.replace("off","active");c.className.match("active")||c.classList.replace("off","active");setTimeout(()=>{c.classList.replace("active","off");l.classList.replace("active","off")},150)})}}let o=[...document.querySelectorAll('*[class*="button-file"]')];if(o){let e=o.length;for(let t=0;e>t;t++){let e=o[t];e.onchange=(()=>{let t=[...e.querySelectorAll('input[type="file"]')][0],s=[...e.getElementsByTagName("P")][0],a=t.value+"";selected=t.value.split("\\")[t.value.split("\\").length-1]+"";s.classList.add("active"),s.innerHTML="[ &#x2714 ] "+selected,t.setAttribute("value",a);setTimeout(()=>{s.classList.remove("active")},150)})}}setTimeout(()=>{let e=[...document.querySelectorAll(".button-range")];if(e){let s=e.length;for(var t=0;s>t;t++){let s=[...e[t].querySelectorAll(".slider")],a=[...e[t].querySelectorAll(".bullet")][0],o=parseInt(window.getComputedStyle(a).width),l=parseInt(window.getComputedStyle(s[0]).width),c=o;a.classList.add("off"),a.style.left=-o/4+"px";let i=s.length;for(let e=0;i>e;e++){let t,o=s[e];o.addEventListener("input",e=>{a.className.match("active")||a.classList.replace("off","active");if(o.nextElementSibling){let e=parseInt(o.nextElementSibling.value)-1;o.value<e||(o.value=parseInt(e))}if(o.previousElementSibling){let e=parseInt(o.previousElementSibling.value)+1;o.value>e||(o.value=parseInt(e))}let s=(o.value-o.min)/(o.max-o.min),i=parseInt(s*(l-c/2));a.style.transform="translate("+i+"px,0)";a.innerHTML="<p>"+o.value+"</p>";o.setAttribute("value",o.value);clearTimeout(t);t=setTimeout(()=>{a.classList.replace("active","off")},1e3)},!0)}}}},50);let l=[...document.querySelectorAll('*[class*="button-select"]')];if(l){let e=l.length;for(let t=0;e>t;t++){let e=l[t],s=Math.floor(101*Math.random());e.setAttribute("target","outbox#select-"+s);let a=`\n          <div class="outbox" id="select-`+s+`">\n            <div class="side-center selectorbox">\n\n                <div>\n\n                  <div>\n            \t\t\t\t<a class="close">\n                      <p>Select your option</p>\n                    </a>\n                  </div>\n\n                  <div>\n                    \x3c!--<div class="hide-bar-y">--\x3e\n                      <div class="scroll-y">\n                        <div class="optiongroup">\n                        </div>\n                      </div>\n                    \x3c!--</div>--\x3e\n                  </div>\n\n                </div>\n\n            </div>\n          </div>`;document.getElementsByTagName("BODY")[0].insertAdjacentHTML("beforeEnd",a);let o=document.getElementById("select-"+s).querySelector(".optiongroup"),c=[...e.querySelectorAll("OPTGROUP")],i=c.length;for(let e=0;i>e;e++){let t=c[e],s="<p>"+t.getAttribute("label")+"</p>",a=[...t.querySelectorAll("option")],l=[],i=a.length;for(let e=0;i>e;e++)l.push('<a data-option="'+a[e].value+'">'+a[e].value+"</a>");let n,r=l.join(" ")+"";n="<p></p>"==s?`\n              <div class="nolabel hide"></div>\n              <div class="options">\n                `+r+`\n              </div>`:`<div class="label">\n               `+s+`\n              </div>\n              <div class="options">\n                `+r+`\n              </div>`,o.insertAdjacentHTML("beforeEnd",n)}let n=[...o.querySelectorAll(".options a")],r=n.length;for(let e=0;r>e;e++){let t=n[e];t.addEventListener("click",()=>{for(let e=0;r>e;e++)n[e].classList.remove("active");t.classList.add("active");let e=t.getAttribute("data-option");let a=document.querySelectorAll('.button-select[target="outbox#select-'+s+'"]>select')[0];a.previousElementSibling.innerHTML=e;a.setAttribute("value",""+e)},!0)}}}let c=[...document.querySelectorAll("*[class*=button-date]")];if(c){let e=c.length;for(let t=0;e>t;t++){let e=c[t],s=Math.floor(101*Math.random());e.setAttribute("target","outbox#datepicker-"+s);let a=`\n          <div class="outbox gpuboost" id="datepicker-`+s+`">\n\n            <div class="side-center">\n\n              <div class="datepicker">\n\n                <div>\n                  <a class="close">\n                    <p>Select a date</p>\n                  </a>\n                </div>\n\n                <div>\n\n                  <div>\n\n                    <div class="years">\n                      <span class="prev">&nbsp;</span>\n                      <span class="year_list"></span>\n                      <span class="next">&nbsp;</span>\n                    </div>\n\n                  </div>\n\n                  <div>\n\n                    <div class="months">\n                      <span class="prev">&nbsp;</span>\n                      <span class="month_list"></span>\n                      <span class="next">&nbsp;</span>\n                    </div>\n\n                  </div>\n\n                </div>\n\n                <div>\n\n                  <div class="weekday_list">\n                    <div class="grid-x" align="center">\n\n                    </div>\n                  </div>\n\n                </div>\n\n                <div>\n\n                  <div class="day_list">\n                    <div class="grid-x" align="center">\n\n                    </div>\n                  </div>\n\n                </div>\n\n                <div>\n                  <a class="button-action accept"> OK - CLOSE </a>\n                </div>\n\n              </div>\n\n            </div>\n\n          </div>`;document.getElementsByTagName("BODY")[0].insertAdjacentHTML("beforeEnd",a);let o=[...document.querySelectorAll("#datepicker-"+s)][0],l=[...o.querySelectorAll(".year_list")][0],i=[...o.querySelectorAll(".month_list")][0],n=[...o.querySelectorAll(".weekday_list>div")][0],r=[...o.querySelectorAll(".day_list>div")][0],f=[];for(let e=1950;2050>=e;e++)f.push("<p>"+e+"</p>");f=f.join(" ")+"",l.innerHTML=f;let u=[],d=["January","February","March","April","May","June","July","August","September","October","November","December"];for(let e=0;11>=e;e++)u.push("<p>"+d[e]+"</p>");u=u.join(" ")+"",i.innerHTML=u;let m=[],p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];for(let e=0;7>e;e++)m.push('<div class="box-[14-14-14]"><p>'+p[e]+"</p></div>");m=m.join(" ")+"",n.innerHTML=m;let v=new Date,h=(v.toUTCString(),v.getUTCFullYear()),g=v.getUTCMonth(),L=v.getUTCDate(),y=(v.getUTCDay(),(e,t)=>{let s=parseInt(t),a=parseInt(e);let o=new Date(Date.UTC(s,a,1)),l=parseInt(o.getDay());firstDayString=o.toUTCString();return l}),b=(e,t)=>{let s=parseInt(t),a=parseInt(e+1);dayQuantity=parseInt(new Date(Date.UTC(s,a,0)).getDate());return dayQuantity},x=[...l.querySelectorAll("p")],S=o.querySelector(".years>.prev"),A=o.querySelector(".years>.next");for(let e=0;e<x.length;e++)x[e].classList.add("off","hide"),x[e].textContent==h&&(x[e].classList.remove("off","hide"),x[e].classList.add("active"));S.addEventListener("click",e=>{for(let e=0;e<x.length;e++)if(x[e].className.match("active")&&x[e-1])return x[e].classList.replace("active","off"),x[e].classList.add("hide"),x[e-1].classList.add("active"),x[e-1].classList.remove("off","hide"),void k()},!1),A.addEventListener("click",e=>{for(let e=0;e<x.length;e++)if(x[e].className.match("active")&&x[e+1])return x[e].classList.replace("active","off"),x[e].classList.add("hide"),x[e+1].classList.add("active"),x[e+1].classList.remove("off","hide"),void k()},!1);let T=[...i.querySelectorAll("p")],N=o.querySelector(".months>.prev"),q=o.querySelector(".months>.next");for(let e=0;e<T.length;e++)T[e].classList.add("off","hide"),e==g&&(T[e].classList.remove("off","hide"),T[e].classList.add("active"));N.addEventListener("click",e=>{for(let e=0;e<T.length;e++)if(T[e].className.match("active")&&T[e-1])return T[e].classList.replace("active","off"),T[e].classList.add("hide"),T[e-1].classList.add("active"),T[e-1].classList.remove("off","hide"),void k()},!1),q.addEventListener("click",e=>{for(let e=0;e<T.length;e++)if(T[e].className.match("active")&&T[e+1])return T[e].classList.replace("active","off"),T[e].classList.add("hide"),T[e+1].classList.add("active"),T[e+1].classList.remove("off","hide"),void k()},!1),o.addEventListener("click",e=>{let t=[...o.querySelectorAll(".day_list .day")];for(let e=0;e<t.length;e++)t[e].addEventListener("click",e=>{for(let e=0;e<t.length;e++)t[e].classList.remove("active"),t[e].classList.add("off");e.target.classList.replace("off","active")},!0)},!0);let k=(e,t)=>{if(!e||!t){var e=document.querySelector("#datepicker-"+s+" .year_list .active").textContent;switch(t=document.querySelector("#datepicker-"+s+" .month_list .active").textContent){case"January":t=0;break;case"February":t=1;break;case"March":t=2;break;case"April":t=3;break;case"May":t=4;break;case"June":t=5;break;case"July":t=6;break;case"August":t=7;break;case"September":t=8;break;case"October":t=9;break;case"November":t=10;break;case"December":t=11;break;default:console.log("error: no mouth active")}}let a=y(t,e),o=b(t,e),l=[],c=parseInt(41-a+1);for(let e=-1*(a-1);c>=e;e++){let t=e,s="off";0>=t||e>o?(t="--",s="off disabled"):1>t||t>9?t==L&&(s="active"):t="0"+e,l.push('<div class="box-[14-14-14]"><p class="day  '+s+'">'+t+"</p></div>")}l=l.join(" ")+"";r.innerHTML=l};k(h,g);let E=[...o.querySelectorAll(".accept")][0];E.addEventListener("click",e=>{let t=document.querySelector("#datepicker-"+s+" .day_list .active").textContent;let a,o=document.querySelector("#datepicker-"+s+" .month_list .active").textContent;switch(o){case"January":a="01";break;case"February":a="02";break;case"March":a="03";break;case"April":a="04";break;case"May":a="05";break;case"June":a="06";break;case"July":a="07";break;case"August":a="08";break;case"September":a="09";break;case"October":a="10";break;case"November":a="11";break;case"December":a="12";break;default:console.log("error: no mounth active")}let l=document.querySelector("#datepicker-"+s+" .year_list .active").textContent;let c=t+"/"+a+"/"+l;let i=document.querySelector('[target="outbox#datepicker-'+s+'"]');let n=i.querySelector("input");n.setAttribute("value",c);n.previousElementSibling.innerHTML=c;e=e},!1)}}};const m=()=>{let e=[...document.querySelectorAll(".top")][0];if(e){let t=[...document.querySelectorAll("HTML, BODY, .view, .scroll-x, .scroll-y")],s=document.documentElement,a=2*parseInt(document.body.clientHeight)/3;e.classList.add("off"),window.addEventListener("scroll",()=>{let o=parseInt(s.scrollTop);if(t){let s=t.length;for(let o=0;s>o;o++){let s=t[o];s.scrollTop>a&&(e.classList.add("active"),e.classList.remove("off"),e.addEventListener("click",()=>{o(s)},!0))}}else!t&&o>a?(e.classList.add("active"),e.classList.remove("off"),e.addEventListener("click",()=>{o()},!0)):a>o&&(e.classList.add("off"),e.classList.remove("active"))},!0);let o=e=>{e?(e.scroll({top:0,behavior:"smooth"}),l()):(document.documentElement.scroll({top:0,behavior:"smooth"}),l())},l=()=>{e.classList.add("off");e.classList.remove("active");setTimeout(()=>{e.classList.add("hide");e.classList.remove("off")},1500)}}};const p=()=>{let e=[...document.querySelectorAll('a[href^="#"]')];let t=e.length;for(let s=0;t>s;s++){let t=e[s],a=t.getAttribute("target");a||t.parentNode.addEventListener("click",e=>{e.preventDefault();e.stopPropagation();let s=t.getAttribute("href").split("#")[1];if(s&&!a){let e=[document.querySelector('*[name="'+s+'"]')][0];if(e){let t=e.offsetTop,s=e.offsetLeft;t>s?setTimeout(()=>{e.closest("HTML, BODY, .view, .scroll-y, .scroll-x").scrollTop=t},100):setTimeout(()=>{e.closest("HTML, BODY, .view, .scroll-y, .scroll-x").scrollLeft=s},100)}}},!0)}};const v=()=>{let e=[...document.querySelectorAll('[class*="card"]')];let t=e.length;for(let s=0;t>s;s++){let t=e[s];t.addEventListener("click",e=>{let s=[...document.querySelectorAll(".loader")][0],a=t.querySelector("a:last-child").getAttribute("href"),o="_self"==t.querySelector("a:last-child").getAttribute("target");o?(s.classList.remove("hide"),setTimeout(function(){s.classList.add("active")},50),setTimeout(function(){"#"===a?location.reload():location.href=a},300)):location.href=a},!0)}};const h=()=>{let e=[...document.querySelectorAll(".tabs-x")];let t=e.length;for(let s=0;t>s;s++){let t=e[s],a=[...t.querySelectorAll("nav>a")],o=[...t.querySelectorAll(".tabs-x>div")],l=a.length;for(let e=0;l>e;e++){let t=a[e],s=o[e];t.classList.add("off"),s.classList.add("off"),a[0].classList.replace("off","active"),o[0].classList.replace("off","active"),t.onclick=(()=>{if(!t.className.match("active")){for(let e=0;l>e;e++)a[e].classList.replace("active","off"),o[e].classList.replace("active","off");return t.classList.replace("off","active"),s.classList.replace("off","active"),!1}})}}};const g=()=>{let e=[...document.querySelectorAll(".tabs-y")];let t=e.length;for(let s=0;t>s;s++){let t=e[s],a=[...t.querySelectorAll(".tabs-y>div:nth-child(odd)")],o=a.length;for(let e=0;o>e;e++){let t=a[e];t.classList.add("off"),t.nextElementSibling.classList.add("off"),a[0].classList.replace("off","active"),a[0].nextElementSibling.classList.replace("off","active"),t.onclick=(()=>{for(let e=0;o>e;e++)a[e].classList.add("off"),a[e].classList.remove("active"),a[e].nextElementSibling.classList.add("off"),a[e].nextElementSibling.classList.remove("active");t.classList.replace("off","active");t.nextElementSibling.classList.replace("off","active");return!1})}}};const L=()=>{let e=[...document.querySelectorAll("video.background")];for(let t=0;t<e.length;t++)e[t].parentNode.style.overflow="hidden",e[t].parentNode.style.position="relative";let t=[...document.querySelectorAll("video.player")];for(let e=0;e<t.length;e++){let l,c,i,n,r=t[e].getAttribute("src"),f=t[e].getAttribute("autoplay"),u=t[e].getAttribute("controls"),d=t[e].getAttribute("loop"),m=t[e].getAttribute("classes"),p=t[e].getAttribute("id"),v=r&&r.match(/(?:youtu)(?:\.be)\/([\w\W]+)/i),h=r&&r.match(/(?:youtube)(?:\.com)\/([\w\W]+)/i),g=r&&r.match(/(?:vimeo)(?:\.com)\/([\w\W]+)/i);if(l=f&&"false"!=f?"autoplay=1":"autoplay=0",c=u&&"false"!=u?"controls=1":"controls=0",i=d&&"false"!=d?"loop=1":"loop=0",p||(p=""),m||(m=""),v&&"VIDEO"==t[e].tagName){var s=v[1];htmlcode="<iframe id="+p+' class="'+m+'" src="https://www.youtube.com/embed/'+s+"?"+l+"&showinfo=0&"+c+"&modestbranding=1&"+i+'&nologo=1&iv_load_policy=3;" frameborder="0" allowfullscreen"></iframe>',(n=document.createElement("div")).innerHTML=htmlcode,t[e].parentNode.insertBefore(n,t[e]),n.outerHTML=n.innerHTML,t[e].parentNode.removeChild(t[e])}else if(h&&"VIDEO"==t[e].tagName){var a=h[1].split("=")[1];htmlcode="<iframe id="+p+' class="'+m+'" src="https://www.youtube.com/embed/'+a+"?"+l+"&showinfo=0&"+c+"&modestbranding=1&"+i+'&nologo=1;" frameborder="0" allowfullscreen"></iframe>',(n=document.createElement("div")).innerHTML=htmlcode,t[e].parentNode.insertBefore(n,t[e]),n.outerHTML=n.innerHTML,t[e].parentNode.removeChild(t[e])}else if(g&&"VIDEO"==t[e].tagName){var o=g[1];htmlcode="<iframe id="+p+' class="'+m+'" src="https://player.vimeo.com/video/'+o+'?color=9c00f0&title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',(n=document.createElement("div")).innerHTML=htmlcode,t[e].parentNode.insertBefore(n,t[e]),n.outerHTML=n.innerHTML,t[e].parentNode.removeChild(t[e])}else t[e].setAttribute("controls","true"),t[e].setAttribute("preload","true")}};const y=()=>{setTimeout(()=>{let e=[...document.querySelectorAll(".fit-up")];let t=e.length;for(let s=0;t>s;s++){let t=e[s];t.parentNode.style.position="relative";let a=t.previousElementSibling.offsetHeight,o=t.previousElementSibling.offsetWidth;t.style.height=a+"px",t.style.width=o+"px",t.style.margin="-"+a+"px 0 -"+a+"px 0"}},10)};const b=()=>{let e=[...document.querySelectorAll(".fit-height")];let t=e.length;for(let s=0;t>s;s++){let t=e[s];t.parentNode.style.position="relative";let a=t.parentNode.offsetHeight,o=t.parentNode.offsetWidth;t.style.width=o+"px",t.style.height=a+"px"}};const x=()=>{let e=[...document.querySelectorAll('*[class*="fx-parallax-"]')];let t=e.length;for(let s=0;t>s;s++){let t,a,o=e[s];o.className.match("mask")?(t=o.className.split("fx-parallax-[")[1].split("-mask]")[0].split("-")[1],a=o.className.split("fx-parallax-[")[1].split("-mask]")[0].split("-")[0]):(t=o.className.split("fx-parallax-[")[1].split("]")[0].split("-")[1],a=o.className.split("fx-parallax-[")[1].split("]")[0].split("-")[0]);let l=o.offsetHeight,c=o.offsetWidth,i=(o.offsetTop,o.offsetLeft,o.getBoundingClientRect().top+l/2),n=o.getBoundingClientRect().left+c/2,r=document.body.clientHeight,f=document.body.clientWidth,u=-1*(i-r/2),d=-1*(n-f/2),m=1,p=o.children,v=p.length;for(let e=0;v>e;e++){let s,o;o=u/r*(100-++m*a),
s=d/f*(100-m*a),p[e].style.transformOrigin="center",p[e].style.transform="scale("+t+") translate(0px,"+o+"px)"}}};const S=()=>{let e=[...document.querySelectorAll(".spoiler")];let t=e.length;for(let s=0;t>s;s++){let t=[...e[s].querySelectorAll(".toggle")][0];t.addEventListener("click",()=>{a()},!0);let a=()=>{e[s].className.match("active")?(e[s].classList.add("off"),t.classList.add("off"),e[s].classList.remove("active"),t.classList.remove("active")):(e[s].classList.add("active"),t.classList.add("active"),e[s].classList.remove("off"),t.classList.remove("off"))}}};const A=()=>{let e=[...document.querySelectorAll('[class*="fx-["]')];let t=e.length;for(let s=0;t>s;s++){let t,a,o,l,c,i,n,r,f,u,d,m,p=e[s].className.split("fx-[")[1].split("]")[0];if(p.match("on:")&&(o=""+p.split("on:")[1].split(";")[0]),p.match("target:")){let e=p.split("target:")[1].split(";")[0]+"";t=[...document.querySelectorAll('[class*="target-'+e+'"]')]}else t=[e[s]];if(p.match("trigger:")){let e=p.split("trigger:")[1].split(";")[0]+"";a=[...document.querySelectorAll('[class*="trigger-'+e+'"]')]}else a=[e[s]];p.match("in:")?(l=""+p.split("in:")[1].split(";")[0].split(",")[0],c=""+p.split("in:")[1].split(";")[0].split(",")[1],i=""+p.split("in:")[1].split(";")[0].split(",")[2],c||(c=1),i||(i=1)):console.log='kimera debug: fx -> "in" not found!',p.match("out:")?(n=""+p.split("out:")[1].split(";")[0].split(",")[0],r=""+p.split("out:")[1].split(";")[0].split(",")[1],f=""+p.split("out:")[1].split(";")[0].split(",")[2],r||(r=1),f||(f=1)):n=!1,p.match("toggle:")?(u=""+p.split("toggle:")[1].split(";")[0],u="true"==u):u=!0,d=!!p.match("hide:")&&""+p.split("hide:")[1].split(";")[0],p.match("reset:")?(m=""+p.split("reset:")[1].split(";")[0],m="true"==m):m=!1;let v=a.length;for(let e=0;v>e;e++){let s=t.length;for(let p=0;s>p;p++)switch(d&&!t[p].className.match("fx-active")&&(t[p].style.opacity=0),o){case"unloadDoc":console.log("kimera debug: fx -> unload not can be used in this version of fx. Sorry.");break;case"loadDoc":setTimeout(()=>{t[p].classList.add("[fx-active]",l);t[p].classList.remove("[fx-off]",n);setTimeout(()=>{m&&t[p].classList.remove(l)},c)},i);break;case"scroll":t[p].offsetTop<screen.height&&!t[p].className.match(l)&&(t[p].classList.add(l),t[p].classList.add("[fx-active]")),window.addEventListener("scroll",e=>{s(e)},!0);let s=e=>{let s=parseInt(document.documentElement.scrollTop+screen.height-screen.height/10),a=parseInt(document.documentElement.scrollTop+screen.height/10),o=parseInt(t[p].offsetTop);t[p].className.match("fx-active")&&s>o&&o>a&&setTimeout(()=>{t[p].classList.add(l);t[p].classList.remove(n);setTimeout(()=>{m?t[p].classList.remove(l):(t[p].classList.add("[fx-off]"),t[p].classList.remove("[fx-active]"))},c)},i+r);(a>o||o>s)&&t[p].className.match("fx-off")&&u&&(t[p].classList.add(n),t[p].classList.remove(l),t[p].classList.add("[fx-active]"),t[p].classList.remove("[fx-off]"),m&&setTimeout(()=>{t[p].classList.remove(n)},r))};break;case"hover":a[e].addEventListener("mouseover",e=>{v()},!0),a[e].addEventListener("mouseleave",e=>{h()},!0);let v=()=>{let e=t.length;for(let s=0;e>s;s++)t[s].className.match("fx-active")&&!t[s].className.match("fx-off")||setTimeout(()=>{t[s].classList.add("[fx-active]",l);t[s].classList.remove(n,"[fx-off]");setTimeout(()=>{!0===m&&(t[s].classList.remove(l),t[s].classList.remove(l,"[fx-active]"))},c)},i)},h=()=>{for(let e=0;e<t.length;e++)t[e].className.match("fx-active")&&u&&setTimeout(()=>{t[e].classList.add(n,"[fx-off]");t[e].classList.remove(l,"[fx-active]");m&&setTimeout(()=>{t[e].classList.remove(n)},r)},f)};break;case"click":a[e].addEventListener("click",e=>{g()},!0);let g=()=>{for(let e=0;e<t.length;e++)t[e].className.match("fx-active")||setTimeout(()=>{t[e].classList.add("[fx-active]",l);t[e].classList.remove("[fx-off]",n);setTimeout(()=>{m&&t[e].classList.remove("[fx-active]",l)},c)},i),t[e].className.match("fx-active")&&!0===u&&setTimeout(()=>{t[e].classList.add("[fx-off]",n);t[e].classList.remove("[fx-active]",l);m&&setTimeout(()=>{t[e].classList.remove("[fx-off]",n)},r)},f)}}}}};const T=()=>{let e=[...document.querySelectorAll(".checksize, TABLE, CODE, PRE, OUTPUT")];let t=e.length;for(let s=0;t>s;s++){let t=e[s],a=parseInt(t.offsetWidth),o=parseInt(t.parentNode.offsetWidth);if(!t.parentNode.className.match("scroll-x")){let e=t.tagName;if("TABLE"==e||"CODE"==e||"PRE"==e||"OUTPUT"==e)t.classList.add("scroll-x","checksize");else if(a>o){let e=document.createElement("div");t.parentNode.insertBefore(e,t),e.appendChild(t),t.parentNode.classList.add("scroll-x","checksize")}else o>=a&&t.parentNode.className.match("checksize")&&(t.parentNode.outerHTML=t.parentNode.innerHTML)}}};window.onunload=(()=>{a()});document.addEventListener("DOMContentLoaded",()=>{a();s()});document.addEventListener("DOMContentLoaded",()=>{l();d();i();T();n();r();p();v();h();g();S();L()},!0);window.addEventListener("load",t(()=>{c();x();f();b();y();A();u();o()}),!1);window.addEventListener("scroll",()=>{x();t(()=>{m()})},!0);window.addEventListener("resize",t(()=>{b();y();L();u();x()}),!1);window.onresize=(()=>{s()})})();
