import{u as i,b as s,a as r,m as n,S as o}from"./main-1b7287d0.js";i||(location.href="index.html");const w=document.querySelector("#memberAccount"),k=document.querySelector("#memberName"),D=document.querySelector("#memberThumb"),S=document.querySelector("#memberAvatar"),C=document.querySelector("#memberRank"),B=document.querySelector("#memberPosition"),P=document.querySelector("#memberHero"),I={Iron:"鐵",Bronze:"銅",Silver:"銀",Gold:"金",Platinum:"白金",Emerald:"翡翠",Diamond:"鑽石",Master:"大師",Grandmaster:"宗師",Challenger:"菁英"};s.get(`${r}/600/users/${n}`,{headers:{Authorization:`Bearer ${i}`}}).then(a=>{w.value=a.data.email,k.value=a.data.username,D.textContent=a.data.thumb,S.src=`./images/avatar/${a.data.avatar}.png`,C.textContent=I[a.data.userRank],B.textContent=a.data.likePosition,P.style=`background-image: url(./images/champion/${a.data.likeHero}.jpg)`}).then(a=>{console.log(a)});i||(location.href="index.html");let m=[],u=[],b=[],v=[],g=[],p=[],f=[];const h=document.querySelector(".evaluateCard"),$=document.querySelector(".friendCard"),y=document.querySelector(".blackCard"),A=document.querySelector(".historicalCard");let L;function j(){G(),H(),E(),z()}async function G(){try{(await s.get(`${r}/600/comments?userId=${n}`,{headers:{Authorization:`Bearer ${i}`}})).data.forEach(t=>{m.push(t.commentedId)}),u=(await s.get(`${r}/users`)).data.filter(t=>m.includes(t.id)),T(),l("#evaluateSwiper",4,3)}catch(a){console.log(a)}}function T(){let a="";u.forEach(e=>{a+=`
    <div class="swiper-slide memberEvaluateCard border border-2 border-radius border-primary w-20 bg-dark blueShadow" data-commentSwiper="${e.id}">
      <div class="meber-card-top">
        <div class="member-avatar position-relative">
          <img
            src="./images/avatar/${e.avatar}.png"
            alt=""
            class="member-avatar-style w-100"
            style="height: 306px;"/>
          <div class="member-avatar-style position-absolute bottom-0"></div>

          <div
            class="metal position-absolute"
            style="width: 82px; height: 60px">
            <div class="parallelogram-1">
              <div
                class="parallelogram-content-avatar"
                style="
                  background-image: url(./images/ranking/${e.userRank}.png);
                  background-size: cover;
                  background-position: center;
                  width: 82px;
                  height: 60px;">
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="mt-12 text-center mb-4">${e.username}</h4>
      <div class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap">
      ${e.likePosition==="TOP"?'<div class="bage bage-text">TOP</div>':'<div class="bage bage-text bageGroup">TOP</div>'}
      ${e.likePosition==="JG"?'<div class="bage bage-text">JG</div>':'<div class="bage bage-text bageGroup">JG</div>'}
      ${e.likePosition==="MID"?'<div class="bage bage-text">MID</div>':'<div class="bage bage-text bageGroup">MID</div>'}
      ${e.likePosition==="AD"?'<div class="bage bage-text">AD</div>':'<div class="bage bage-text bageGroup">AD</div>'}
      ${e.likePosition==="SUP"?'<div class="bage bage-text">SUP</div>':'<div class="bage bage-text bageGroup">SUP</div>'}
      </div>
      <div class="commentThumb my-6">
        <button class="jsCancelCommentBtn btn btnShadow d-block border border-primary text-primary w-50 mx-auto" data-id="${e.id}">
          取消按讚
          <span data-id="${e.id}">
            <i class="fa-regular fa-thumbs-up ms-1" data-id="${e.id}"></i>
          </span>
        </button>
      </div>
    </div>
    `}),h.innerHTML=a}h.addEventListener("click",async a=>{try{if(a.target.getAttribute("class")!=="jsCancelCommentBtn btn btnShadow d-block border border-primary text-primary w-50 mx-auto")return;const t=a.target.getAttribute("data-id"),d=await s.get(`${r}/600/comments?userId=${n}&commentedId=${t}`,{headers:{Authorization:`Bearer ${i}`}});await s.delete(`${r}/600/comments/${d.data[0].id}`,{headers:{Authorization:`Bearer ${i}`}}),o.fire({icon:"success",title:"取消成功",showConfirmButton:!1,timer:1500,background:"#060818",color:"#D6EEFF"}),document.querySelector(`[data-commentSwiper ='${t}']`).remove()}catch(e){console.log(e)}});async function H(){try{(await s.get(`${r}/600/friendLists?userId=${n}`,{headers:{Authorization:`Bearer ${i}`}})).data.forEach(t=>{b.push(t.friendId)}),v=(await s.get(`${r}/users`)).data.filter(t=>b.includes(t.id)),R(),l("#friendListSwiper",3,4)}catch(a){console.log(a)}}function R(){let a="";v.forEach(e=>{a+=`
    <div class="swiper-slide friendListCard border border-2 border-radius border-primary bg-dark blueShadow" data-friendSwiper="${e.id}">
      <div class="meber-card-top">
        <div class="member-avatar position-relative">
          <div class="avatar">
            <img
              src="./images/avatar/${e.avatar}.png"
              alt=""
              class="member-avatar-style"
              style="height: 300px; object-fit: cover"
            />
          </div>

          <div
            class="member-avatar-style position-absolute bottom-0"
          ></div>

          <div
            class="metal position-absolute"
            style="width: 82px; height: 60px"
          >
            <div class="parallelogram-1">
              <div
                class="parallelogram-content-avatar"
                style="
                  background-image: url(./images/ranking/${e.userRank}.png);
                  background-size: cover;
                  background-position: center;
                  width: 82px;
                  height: 60px;
                "
              ></div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="mt-12 text-center mb-4">${e.username}</h4>
      <div
        class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap"
      >
      ${e.likePosition==="TOP"?'<div class="bage bage-text" data-likePosition="Top">TOP</div>':'<div class="bage bage-text bageGroup" data-likePosition="Top">TOP</div>'}
      ${e.likePosition==="JG"?'<div class="bage bage-text">JG</div>':'<div class="bage bage-text bageGroup">JG</div>'}
      ${e.likePosition==="MID"?'<div class="bage bage-text">MID</div>':'<div class="bage bage-text bageGroup">MID</div>'}
      ${e.likePosition==="AD"?'<div class="bage bage-text">AD</div>':'<div class="bage bage-text bageGroup">AD</div>'}
      ${e.likePosition==="SUP"?'<div class="bage bage-text">SUP</div>':'<div class="bage bage-text bageGroup">SUP</div>'}
      </div>
      <div class="thumb my-6">
        <p class="thum-text text-center">
        ${e.thumb} <span><i class="fa-regular fa-thumbs-up"></i></span>
        </p>
      </div>
      <div
        class="button-all d-flex justify-content-center gap-4 mb-8"
        style="height: 48px"
      >
        <button class="btn btnShadow border border-primary text-primary w-40" data-banId=${e.id}>
          列為黑名單
          <span>
            <i class="fa-solid fa-ban ms-1"></i>
          </span>
        </button>
        <button class="btn btnShadow border border-primary text-primary w-40" data-removeId=${e.id}>
          移除好友
          <span>
            <i class="fa-solid fa-user-minus ms-1"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
    `}),$.innerHTML=a}$.addEventListener("click",async a=>{try{if(a.target.getAttribute("class")!=="btn btnShadow border border-primary text-primary w-40")return;const t=a.target.getAttribute("data-banId"),d=a.target.getAttribute("data-removeId");if(t){const c=await s.get(`${r}/600/friendLists?userId=${n}&friendId=${t}`,{headers:{Authorization:`Bearer ${i}`}});await s.delete(`${r}/600/friendLists/${c.data[0].id}`,{headers:{Authorization:`Bearer ${i}`}}),await s.post(`${r}/600/banLists`,{userId:n,friendId:Number(t)},{headers:{Authorization:`Bearer ${i}`}}),o.fire({icon:"success",title:"加入黑名單成功",showConfirmButton:!1,timer:1500,background:"#060818",color:"#D6EEFF"}),document.querySelector(`[data-friendSwiper ='${t}']`).remove(),x()}if(d){const c=await s.get(`${r}/600/friendLists?userId=${n}&friendId=${d}`,{headers:{Authorization:`Bearer ${i}`}});await s.delete(`${r}/600/friendLists/${c.data[0].id}`,{headers:{Authorization:`Bearer ${i}`}}),o.fire({icon:"success",title:"移除好友成功",showConfirmButton:!1,timer:1500,background:"#060818",color:"#D6EEFF"}),document.querySelector(`[data-friendSwiper ='${d}']`).remove()}}catch(e){console.log(e)}});async function E(){try{(await s.get(`${r}/600/banLists?userId=${n}`,{headers:{Authorization:`Bearer ${i}`}})).data.forEach(t=>{g.push(t.friendId)}),p=(await s.get(`${r}/users`)).data.filter(t=>g.includes(t.id)),x(),L=l("#blackListSwiper",4,5)}catch(a){console.log(a)}}function x(){let a="";p.forEach(e=>{a+=`
    <div class="swiper-slide blackListCard border border-2 border-radius border-primary bg-dark blueShadow" data-banSwiper="${e.id}">
      <div class="meber-card-top">
        <div class="member-avatar position-relative w-100">
          <div class="avatar w-100">
            <img
              src="./images/avatar/${e.avatar}.png"
              alt=""
              class="member-avatar-style"
              style="height: 300px; object-fit: cover"
            />
          </div>

          <div class="member-avatar-style position-absolute bottom-0"></div>

          <div class="metal position-absolute" style="width: 85px; height: 65px">
            <div class="parallelogram-1">
              <div class="parallelogram-content-avatar"
                style="
                  background-image: url(./images/ranking/${e.userRank}.png);
                  background-size: cover;
                  background-position: center;
                  width: 85px;
                  height: 60px;
                "></div>
            </div>
          </div>
        </div>
      </div>

      <h5 class="mt-12 text-center mb-4">${e.username}</h5>
      <div class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap">
      ${e.likePosition==="TOP"?'<div class="bage bage-text">TOP</div>':'<div class="bage bage-text bageGroup">TOP</div>'}
      ${e.likePosition==="JG"?'<div class="bage bage-text">JG</div>':'<div class="bage bage-text bageGroup">JG</div>'}
      ${e.likePosition==="MID"?'<div class="bage bage-text">MID</div>':'<div class="bage bage-text bageGroup">MID</div>'}
      ${e.likePosition==="AD"?'<div class="bage bage-text">AD</div>':'<div class="bage bage-text bageGroup">AD</div>'}
      ${e.likePosition==="SUP"?'<div class="bage bage-text">SUP</div>':'<div class="bage bage-text bageGroup">SUP</div>'}
      </div>
      <div class="thumb my-6">
        <p class="thum-text text-center">
        ${e.thumb} <span><i class="fa-regular fa-thumbs-up"></i></span>
        </p>
      </div>
      <div
        class="button-all d-flex justify-content-center gap-4 mb-8"
        style="height: 48px"
      >
        <button class="btn btnShadow border border-primary text-primary w-80" data-removeBanId=${e.id}>
          剔除
          <span>
            <i class="fa-solid fa-user-slash ms-1"></i>
          </span>
        </button>
      </div>
    </div>
    `}),y.innerHTML=a}y.addEventListener("click",async a=>{if(a.target.getAttribute("class")!=="btn btnShadow border border-primary text-primary w-80")return;const t=a.target.getAttribute("data-removeBanId"),d=await s.get(`${r}/600/banLists?userId=${n}&friendId=${t}`,{headers:{Authorization:`Bearer ${i}`}});await s.delete(`${r}/600/banLists/${d.data[0].id}`,{headers:{Authorization:`Bearer ${i}`}}),o.fire({icon:"success",title:"剔除成功",showConfirmButton:!1,timer:1500,background:"#060818",color:"#D6EEFF"}),document.querySelector(`[data-banSwiper ='${t}']`).remove()});function z(){s.get(`${r}/teamsHistorical/${n}`).then(a=>{f=a.data,M(),l("#historicalTeamRecordsSwiper",3,6)}).catch(a=>{console.log(a)})}function M(){let a="";f.forEach(e=>{a+=`<div
    class="swiper-slide historicalTeamRecordsCard border border-2 border-radius border-primary bg-dark blueShadow"
  >
    <div class="card-header mb-4 mb-md-6">
      <div
        class="d-block d-md-flex justify-content-between mb-4 mb-md-6"
      >
        <div class="mb-2 mb-md-0">
          <h3 class="card-title mb-2 fs-3 fw-medium">
          ${e.teamName}
          </h3>
          <p class="card-subtitle text-secondary">
            遊戲時間：${e.playTime}
          </p>
        </div>
        <div
          class="d-flex d-md-block justify-content-between align-items-center"
        >
          <span class="d-block text-secondary fs-8 mb-0 mb-md-2">
          ${e.thumb}
            <i class="fa-regular fa-thumbs-up fs-7 ms-1"></i>
          </span>
          <span class="d-block text-secondary fs-6">
            <span class="text-white fs-5">${e.countMembers}</span>
            /5<i class="fa-solid fa-people-group fs-7 ms-1"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="card-body">
      <ul>
        <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
          ${e.membersDetail[0]==="waiting"?"<p class='text-secondary text-opacity-50'>等待上路玩家加入</p>":`<p class="text-secondary">${e.membersDetail[0].username}</p>`}
            <span class="text-secondary fs-8">TOP</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(./images/${e.membersDetail[0]==="waiting"?"img-team-player@2x.png":`champion/${e.membersDetail[0].likeHero}.jpg`});
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(./images/${e.membersDetail[0]==="waiting"?"img-team-badge.png":`ranking/${e.membersDetail[0].userRank}.png`});
                "
              ></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
          ${e.membersDetail[1]==="waiting"?"<p class='text-secondary text-opacity-50'>等待打野玩家加入</p>":`<p class="text-secondary">${e.membersDetail[1].username}</p>`}
            <span class="text-secondary fs-8">JG</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(./images/${e.membersDetail[1]==="waiting"?"img-team-player@2x.png":`champion/${e.membersDetail[1].likeHero}.jpg`});
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(./images/${e.membersDetail[1]==="waiting"?"img-team-badge.png":`ranking/${e.membersDetail[1].userRank}.png`});
                "
              ></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
          ${e.membersDetail[2]==="waiting"?"<p class='text-secondary text-opacity-50'>等待中路玩家加入</p>":`<p class="text-secondary">${e.membersDetail[2].username}</p>`}
            <span class="text-secondary fs-8">MID</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(./images/${e.membersDetail[2]==="waiting"?"img-team-player@2x.png":`champion/${e.membersDetail[2].likeHero}.jpg`});
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(./images/${e.membersDetail[2]==="waiting"?"img-team-badge.png":`ranking/${e.membersDetail[2].userRank}.png`});
                "
              ></div>
            </div>
          </div>
        </li>
        <li class="mb-2">
          <div class="d-flex justify-content-between mb-1">
          ${e.membersDetail[3]==="waiting"?"<p class='text-secondary text-opacity-50'>等待下路玩家加入</p>":`<p class="text-secondary">${e.membersDetail[3].username}</p>`}
            <span class="text-secondary fs-8">AD</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(./images/${e.membersDetail[3]==="waiting"?"img-team-player@2x.png":`champion/${e.membersDetail[3].likeHero}.jpg`});
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(./images/${e.membersDetail[3]==="waiting"?"img-team-badge.png":`ranking/${e.membersDetail[3].userRank}.png`});
                "
              ></div>
            </div>
          </div>
        </li>
        <li>
          <div class="d-flex justify-content-between mb-1">
          ${e.membersDetail[4]==="waiting"?"<p class='text-secondary text-opacity-50'>等待輔助玩家加入</p>":`<p class="text-secondary">${e.membersDetail[4].username}</p>`}
            <span class="text-secondary fs-8">SUP</span>
          </div>
          <div class="d-flex justify-content-between">
            <div class="parallelogramHero-1">
              <div
                class="parallelogramContent-1 teamCardHeroBg-1"
                style="
                  background-image: url(./images/${e.membersDetail[4]==="waiting"?"img-team-player@2x.png":`champion/${e.membersDetail[4].likeHero}.jpg`});
                "
              ></div>
            </div>
            <div class="parallelogramRank-1">
              <div
                class="parallelogramContent-1 teamCardRankBg-1"
                style="
                  background-image: url(./images/${e.membersDetail[4]==="waiting"?"img-team-badge.png":`ranking/${e.membersDetail[4].userRank}.png`});
                "
              ></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>`}),A.innerHTML=a}function l(a,e,t){return new Swiper(a,{slidesPerView:e,spaceBetween:24,loop:!0,grabCursor:"true",watchOverflow:!0,observer:!0,pagination:{el:`#swiper-pagination${t}`,clickable:!0},navigation:{nextEl:`#swiper-button-next${t}`,prevEl:`#swiper-button-prev${t}`},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:e}}})}j();