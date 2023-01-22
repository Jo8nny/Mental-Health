function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  
  var buttonAbout = document.querySelector('.button-about');
  var buttonServices= document.querySelector('.button-services');
  var buttonContact = document.querySelector('.button-contact');



  var about = document.querySelector('#about');
  var services = document.querySelector('#services');
  var contact = document.querySelector('#contact');
  
  buttonAbout.addEventListener('click', () => {
    scrollTo(about);
  })

  buttonServices.addEventListener('click', () => {
    scrollTo(services);
  })

  buttonContact.addEventListener('click', () => {
    scrollTo(contact);
  })