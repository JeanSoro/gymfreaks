//hide preloader
//all the images scripts links finished loading

class UI {

  hidePreloader() {
    document.querySelector('.preloader').style.display = 'none';
  }

  showNav() {
    document.querySelector('.nav').classList.toggle('nav--show');
  }

  videoControls() {
    let btn = document.querySelector('.video__switch-btn');

    if (!btn.classList.contains('btnSlide')) {
      btn.classList.add('btnSlide')
      document.querySelector('.video__item').pause();

    } else {
      btn.classList.remove('btnSlide')
      document.querySelector('.video__item').play();
    }
  }


}


function eventListeners() {

  const ui = new UI();

  //window event listener
  window.addEventListener('load', () => {
    ui.hidePreloader();
  })


  // nav button event listener
  document.querySelector('.navBtn').addEventListener('click', () => {
    ui.showNav();
  });

  document.querySelector('.video__switch').addEventListener('click', () => {
    ui.videoControls();
  })

}

eventListeners();




// contructor es5
// function UI(){

//}


// UI.prototype.hidePreloader = function () {
//   document.querySelector('.preloader').style.display = 'none';
// }

// UI.prototype.showNav = function () {
//   document.querySelector('.nav').classList.toggle('nav--show');
// }