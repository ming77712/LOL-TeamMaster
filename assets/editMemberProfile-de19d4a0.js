import{u as n,b as l,a as u,m as d,S as c}from"./main-1b7287d0.js";n||(location.href="index.html");let r,o,s;const p=document.querySelector(".jsAvatarWrap"),f=document.querySelector(".jsRankWrap"),k=document.querySelector(".jsPositionWrap"),y=document.querySelector("#editMemberAccount"),g=document.querySelector("#newMemberPassword"),A=document.querySelector("#checkMemberPassword"),v=document.querySelector("#editMemberName"),b=document.querySelector(".avatarMd"),i=document.querySelector("select"),h=document.querySelector("#editMemberHero"),S=document.querySelector(".jsChangeInfoBtn"),E=document.querySelector(".jsChangePasswordBtn");l.get(`${u}/600/users/${d}`,{headers:{Authorization:`Bearer ${n}`}}).then(e=>{y.value=e.data.email,v.value=e.data.username,b.src=`./images/avatar/${e.data.avatar}.png`,r=document.querySelector(`[data-avatar='${e.data.avatar}']`),r.classList.add("avatarActive"),r=r.getAttribute("data-avatar"),o=document.querySelector(`[data-rank='${e.data.userRank}']`),o.classList.remove("bg-opacity-20"),o=o.getAttribute("data-rank"),s=document.querySelector(`[data-position='${e.data.likePosition}']`),s.classList.remove("bg-opacity-20"),s=s.getAttribute("data-position"),i.value=e.data.likeHero,h.style=`background-image: url(./images/champion/${e.data.likeHero}.jpg)`}).catch(e=>{console.log(e)});p.addEventListener("click",e=>{const t=document.querySelectorAll("img");e.target.getAttribute("class")==="avatarSmall pointer"&&(t.forEach(a=>{a.classList[2]==="avatarActive"&&a.classList.remove("avatarActive")}),r=e.target.getAttribute("data-avatar"),e.target.classList.add("avatarActive"),b.src=`./images/avatar/${r}.png`)});f.addEventListener("click",e=>{const t=document.querySelectorAll("[data-rank]");e.target.getAttribute("class")==="badge bg-white text-dark fs-6 pointer bg-opacity-20"&&(t.forEach(a=>{a.classList[5]!=="bg-opacity-20"&&a.classList.add("bg-opacity-20")}),o=e.target.getAttribute("data-rank"),e.target.classList.remove("bg-opacity-20"))});k.addEventListener("click",e=>{const t=document.querySelectorAll("[data-position]");e.target.getAttribute("class")==="badge bg-white text-dark fs-6 pointer bg-opacity-20"&&(t.forEach(a=>{a.classList[5]!=="bg-opacity-20"&&a.classList.add("bg-opacity-20")}),s=e.target.getAttribute("data-position"),e.target.classList.remove("bg-opacity-20"))});i.addEventListener("change",e=>{h.style=`background-image: url(./images/champion/${i.value}.jpg)`});S.addEventListener("click",e=>{e.preventDefault(),l.patch(`${u}/600/users/${d}`,{username:v.value,avatar:r,userRank:o,likePosition:s,likeHero:i.value},{headers:{Authorization:`Bearer ${n}`}}).then(t=>{localStorage.setItem("userAvatar",r),c.fire({icon:"success",title:"修改成功",showConfirmButton:!1,timer:2e3,background:"#060818",color:"#D6EEFF"}),setTimeout(()=>{location.href="memberCenter.html"},2e3)}).catch(t=>{c.fire({icon:"error",title:t.response.data,showConfirmButton:!1,timer:2500,background:"#060818",color:"#D6EEFF"})})});E.addEventListener("click",e=>{e.preventDefault(),g.value===A.value?l.patch(`${u}/600/users/${d}`,{password:g.value},{headers:{Authorization:`Bearer ${n}`}}).then(t=>{c.fire({icon:"success",title:"修改成功",showConfirmButton:!1,timer:2e3,background:"#060818",color:"#D6EEFF"}),setTimeout(()=>{location.href="memberCenter.html"},2e3)}).catch(t=>{c.fire({icon:"error",title:t.response.data,showConfirmButton:!1,timer:2500,background:"#060818",color:"#D6EEFF"})}):c.fire({icon:"error",title:"新密碼與確認新密碼不相同",showConfirmButton:!1,timer:2500,background:"#060818",color:"#D6EEFF"})});
