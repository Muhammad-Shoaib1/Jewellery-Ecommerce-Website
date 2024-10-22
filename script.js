const navWrap = document.querySelector('.nav-wrap');
const navbar = document.querySelector('.collapse.navbar-collapse')
const navLink = document.querySelectorAll('.nav-link')
const navToggleBtn = document.querySelector('.navbar-toggler')

window.onscroll = function(){
  if(document.documentElement.scrollTop> 30){
    navWrap.classList.add('onscroll')
  }else{
    navWrap.classList.remove('onscroll')
  }
}

navLink.forEach(function(a){
  a.addEventListener('click', function(){
    navbar.classList.remove('show')
    navWrap.classList.remove('bg-black')
  })
})

navToggleBtn.addEventListener('click', function(){
  navWrap.classList.toggle('bg-black')
})