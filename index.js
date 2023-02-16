function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  
  var buttonAbout = document.querySelector('.button-about');
  var buttonTakeTest= document.querySelector('.take-test-button');
  var buttonContact = document.querySelector('.button-contact');



  var about = document.querySelector('#about');
  var test = document.querySelector('#test');
  var contact = document.querySelector('#contact');
  
  buttonAbout.addEventListener('click', () => {
    scrollTo(about);
  })

  buttonTakeTest.addEventListener('click', () => {
    scrollTo(test);
  })

  buttonContact.addEventListener('click', () => {
    scrollTo(contact);
  })


const quizForm = document.getElementById('testform');
const submitButton = document.getElementById('submitButton');
const resultsContainer = document.getElementById('results');

submitButton.addEventListener('click', function() {
  let score = 0;

  // Question 1
  if (testform.q1.value === 'b') {
    score++;
  }

  // Question 2
  if (testform.q2.value === 'c') {
    score++;
  }

  // Question 3
  if (testform.q3.value === 'c') {
    score++;
  }

  // Question 4
  if (testform.q4.value === 'a') {
    score++;
  }

  // Display results
  resultsContainer.innerHTML = `You scored ${score} out of 5.`;
});


