// common.js
// 모든 페이지의 공통 기능을 구현
//0. 변수선언
const t_btn = document.getElementById('toggle_btn');//토글버튼
const navi = document.getElementById('navi'); //내비게이션
const close_btn = document.getElementById('close_btn'); //닫기 버튼
let mnu = document.querySelectorAll('#gnb > li > a');//메인메뉴

//1. 내비게이션 나오게 하기 / 숨기기
t_btn.addEventListener('click', function(){
  navi.style.left='0%';
});

//2. 닫기 버튼 클릭시 내비게이션 사라지게 하기
close_btn.addEventListener('click', function(){
  navi.style.left='-100%';
});

//3. 메인 메뉴 클릭시 서브메뉴 나오게 하기 / 숨기기
// 방법1. 메인메뉴마다 각각 기능을 구현해야함
// (foreach, event)
// 방법2. 이벤트 안에서 .sub클래스가 존재하면 새로고침 방지
// 방법3. 현재 메뉴의 서브가 아니라면 숨기기(아이콘 회전)
// 방법4. 해당 서브가 보이게하기(아이콘 회전)
mnu.forEach(function(item){
  item.addEventListener('click', function(event){

    const sub = item.nextElementSibling;//서브메뉴 변수

    //만약에 sub클래스가 존재한다면
    if(sub && sub.classList.contains('sub')){
      event.preventDefault(); //a태그 새로고침 방지
    }

    //다른 열려있는 서브메뉴와 화살표 방향 변경하기
    //메인메뉴에 각각의 기능을 구현합니다.
    mnu.forEach(function(otherItem){
      if(otherItem !== item){ //현재 클릭한 메뉴가 아니라면
      
      //다음 형제요소들을 선택
      const otherSub = otherItem.nextElementSibling;

      //다른 서브메뉴 숨기기
        if(otherSub&&otherSub.classList.contains('sub')){
          otherSub.classList.remove('act');
        }

        const otherIcon = otherItem.querySelector('.fa-angle-down');

      //아이콘 방향 반대로 돌리기
        if(otherIcon){
          otherIcon.classList.remove('rotate');
        }
      }
    });

    sub.classList.toggle('act'); //클릭한 서브뉴 열고/닫기

    //현재 클릭한 메뉴의 화살표 아이콘 회전하기
    const icon = item.querySelector('.fa-angle-down');
    if(icon){
      icon.classList.toggle('rotate');
    }
  });  
});

//로그인폼
let id_txt = document.getElementById('username');
let pw_txt = document.getElementById('password');
const login_btn = document.querySelector('.btn-login');

// 로그인 버튼
login_btn.addEventListener('click', function(){
  console.log(id_txt.value, pw_txt.value);
});
