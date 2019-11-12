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

  checkEmpty(name, lastname, email) {
    let result;

    if (name === '' || lastname === '' || email === '') {
      result = false
    } else {
      result = true
    }

    return result

  }

  // Show feedback
  showFeedback(message, alertType) {

    if (alertType === 'success') {

      let feedBack = document.querySelector('.sign-up-form__feedback');
      feedBack.classList.add('success');
      feedBack.innerText = message;
      this.removeAlert('success');

    } else if (alertType === 'error') {
      let feedBack = document.querySelector('.sign-up-form__feedback');
      feedBack.classList.add('error');
      feedBack.innerText = message;
      this.removeAlert('error');
    }

  }

  // Remove Alert
  removeAlert(alertType) {
    setTimeout(() => {
      let feedBack = document.querySelector('.sign-up-form__feedback');
      feedBack.classList.remove(alertType);

    }, 3000);
  }

  // Add new customer to DOM
  addNewCustomerToDom(newCustomer) {
    const images = [1, 2, 3, 4];
    let random = Math.floor(Math.random() * images.length);
    const div = document.createElement('div');
    div.classList.add('person');

    div.innerHTML = `
    
        <img src="img/person-${random}.jpg" alt="" class="person__thumbnail">
        <h4 class="person__name">${newCustomer.name}</h4>
        <h4 class="person__last-name">${newCustomer.lastname}</h4>
    `

    document.querySelector('.free-session-card__list').appendChild(div);
  }

  // Clear fields
  clearForm() {
    document.querySelector('.input-name').value = '';
    document.querySelector('.input-lastname').value = '';
    document.querySelector('.input-email').value = '';


  }


}





class Customer {
  constructor(name, lastname, email) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
  }
}





const eventListeners = () => {

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

  //------------------submit form
  document.querySelector('.sign-up-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('.input-name').value;
    const lastName = document.querySelector('.input-lastname').value;
    const email = document.querySelector('.input-email').value;

    let value = ui.checkEmpty(name, lastName, email);

    if (value) {

      let newCustomer = new Customer(name, lastName, email);

      // console.log(newCustomer)


      ui.showFeedback('You have been added to the list!', 'success');
      ui.addNewCustomerToDom(newCustomer);
      ui.clearForm();

    } else {

      ui.showFeedback('some form values are empty', 'error');
    }

  })

}


eventListeners();




// contructor es5
// function UI(){

// continue lesson from 3:29:552

//}


// UI.prototype.hidePreloader = function () {
//   document.querySelector('.preloader').style.display = 'none';
// }

// UI.prototype.showNav = function () {
//   document.querySelector('.nav').classList.toggle('nav--show');
// }