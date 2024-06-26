import axios from 'axios';
import Swal from 'sweetalert2';
import { api_path, localhost, memberId, userIsLogin } from './config';
if (!userIsLogin) {
  Swal.fire({
    title: '請先登入會員',
    icon: 'warning',
    background: '#060818',
    color: '#D6EEFF',
  }).then(() => {
    console.log('Wait');
    location.href = 'index.html';
  });
}

const buildTeamName = document.querySelector('#buildTeamName');
const buildTeamTime = document.querySelector('#buildTeamTime');
const buildTeamTagGroup = document.querySelectorAll(
  '#buildTeamTagGroup .buildTeamTag'
);
const noticeGroup = document.querySelectorAll('#noticeGroup .messageItem');
let idc = memberId;
let buildTeamNameText = '';
let buildTeamTimeText = '';
let buildTeamTagGroupText = '';
let noticeGroupText = ['', '', '', '', ''];

buildTeamName.addEventListener('input', (e) => {
  buildTeamNameText = e.target.value;
});
buildTeamTime.addEventListener('input', (e) => {
  buildTeamTimeText = e.target.value;
});
buildTeamTagGroup.forEach((v) => {
  v.addEventListener('click', (e) => {
    let buildTeamTagList = [...v.classList];
    let checked = buildTeamTagList.find((v) => {
      console.log(v);
      return v === 'buildTeamTagActive';
    });
    console.log(checked);
    if (checked === undefined) {
      buildTeamTagGroup.forEach((v) => {
        v.classList.remove('buildTeamTagActive');
      });

      v.classList.add('buildTeamTagActive');
    } else {
      v.classList.remove('buildTeamTagActive');
    }
    buildTeamTagGroupText = v.dataset.rank;
  });
});

noticeGroup.forEach((v, i) => {
  v.addEventListener('input', (e) => {
    console.log(e.target.value);
    noticeGroupText[i] = e.target.value;
  });
});
let posHash;
let posArr = [0, 0, 0, 0, 0];

const switchFunction = async () => {
  let data = await axios.get(`${api_path}/users/${idc}`);
  data = data.data;
  console.log(data.likePosition);
  switch (data.likePosition) {
    case 'TOP':
      posHash = 0;
      break;
    case 'JG':
      posHash = 1;
      break;
    case 'MID':
      posHash = 2;
      break;
    case 'AD':
      posHash = 3;
      break;
    case 'SUP':
      posHash = 4;
      break;
  }

  posArr[posHash] = parseInt(idc);
};
switchFunction();

addTeamButtom.addEventListener('click', () => {
  let teamDetalis = {
    userId: idc,
    teamName: buildTeamNameText,
    playTime: buildTeamTimeText,
    rankLimt: buildTeamTagGroupText,
    teamNotice: noticeGroupText,
    teamMerberId: posArr,
    createAt: `${new Date()}`,
  };
  axios.post(`${api_path}/teams`, teamDetalis).then((res) => {
    console.log(res);
    Swal.fire({
      title: '建立隊伍成功',
      icon: 'success',
    }).then(() => {
      location.href = `${localhost}/LOL-TeamMaster/teamList.html`;
    });
  });
});
