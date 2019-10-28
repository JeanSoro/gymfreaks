//hide preloader
//all the images scripts links finished loading

class UI {

  hidePreloader() {
    return document.querySelector('.preloader').style.display = 'none';
  }

  showNav() {
    return document.querySelector('.nav').classList.toggle('nav--show');
  }
}


function eventListeners() {

  const ui = new UI()

  //window event listener
  window.addEventListener('load', function () {
    ui.hidePreloader();
  })


  // nav button event listener
  document.querySelector('.navBtn').addEventListener('click', function () {
    ui.showNav();
  });

}
eventListeners();





// UI.prototype.hidePreloader = function () {
//   document.querySelector('.preloader').style.display = 'none';
// }

// UI.prototype.showNav = function () {
//   document.querySelector('.nav').classList.toggle('nav--show');
// }