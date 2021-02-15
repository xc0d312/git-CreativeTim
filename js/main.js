const btn = document.getElementById('btnSidebar');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('main');
const btnfixed = document.getElementById('btnFixed');
const botomFixed = document.getElementById('botomFixed');
const contentBtn = document.getElementById('contentButtons');
const btnLeft = document.getElementById('btnleft')
const html = document.getElementById('html')


btn.addEventListener('click',function(){
    sidebar.classList.toggle('toogle');
    content.classList.toggle('main');
})
btnfixed.addEventListener('click',function(){
    sidebar.classList.toggle('toogle');
    content.classList.toggle('main');
})
btnLeft.addEventListener('click',function(){
  html.classList.toggle('nav-open');

})
function mostrarScroll(){
 let scroll = document.documentElement.scrollTop
 console.log(scroll);
  if (scroll > 35) {
    contentBtn.classList.add('none');
    btnfixed.classList.add('scroll');
  }else{
    contentBtn.classList.remove('none')
    btnfixed.classList.remove('scroll');
  }
}
window.addEventListener('scroll',mostrarScroll)
