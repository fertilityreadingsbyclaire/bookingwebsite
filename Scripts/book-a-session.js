import { paymentMethods } from "./Data/payment.js";
import { session } from "./Data/session.js";


document.querySelector('.appointment-list').innerHTML = session.map(({type, priceCent, id}) => {
  return `
    <div class="appointment-cont">
      <input type="radio" name="1" id="${id}" data-id="${id}" class="radio">
      <div class="appointment-type">
        ${type}
      </div>
      <div class="appointment-price">$${(priceCent/100).toFixed(2)}</div>
    </div>
  `
}).join('');


document.querySelector('.payment-cont')
  .innerHTML = paymentMethods.map(({method, id}) => {
    return ` <div class="payment">
    <input type="radio" name="2" id="${id}" data-id="${id}" class="payment-radio">
    <span >${method}</span>
  </div>`
  }).join('')

let username;
const bookBtn = document.querySelector('.book');
let match;

document.querySelectorAll('.radio')
  .forEach(elem => {
    elem.addEventListener('click', () => {
      let id = Number(elem.dataset.id)

      session.forEach(list => {
        if (id === list.id ) {
          match = list
        }
      });
      // bookBtn.style.backgroundColor = '#69727b'
    });
  });

  let match2;

document.querySelectorAll('.payment-radio')
  .forEach(elem => {
    elem.addEventListener('click', () => {
      const id = elem.dataset.id
      
      paymentMethods.forEach(method => {
        if (id === method.id ) {
          match2 = method
        }
      });
      bookBtn.style.backgroundColor = '#69727b'
    })
  })


bookBtn.addEventListener('click', () => {
  if (match && match2) {
    document.querySelector('.booking-container').classList.remove('hide');
    document.querySelector('.session-type').value = `${match.type} Cost $${(match.priceCent/100).toFixed(2)}`;
    document.querySelectorAll('.blur').forEach(elem => {
      elem.style.filter = 'blur(2px)'
    })
    document.querySelector('body').style.overflow = 'hidden'
    document.querySelector('.pay-method').value = match2.method 
  } else if (!match) {
    alert('Please select a Session');
  } else if (!match2) {
    alert('Please select a Payment Method');
  }
});

document.querySelectorAll('.full-name, .username').forEach((elem) => {

  const name = document.querySelector('.full-name')
  const username = document.querySelector('.username')
  
  elem.addEventListener('keyup', () => {
    if ((name.value) && (username.value)) {
      document.querySelector('.proceed').style.backgroundColor = '#69727b'
    } else {
      document.querySelector('.proceed').style.backgroundColor = '#69727b89'
    };
  });
});


document.querySelector('.fa-times').addEventListener('click', () => {
  document.querySelector('.booking-container').classList.add('hide');
  document.querySelector('body').style.overflow = 'visible';
  document.querySelectorAll('.blur').forEach(elem => {
    elem.style.filter = 'blur(0px)'
  });
});


document.querySelector('.not-avail-cont').addEventListener('submit', (event) => {
  event.preventDefault();
  const textArea = document.querySelector('textarea')

  if (textArea.value) {
    document.querySelector('.pop-textarea').classList.remove('hide');
    document.querySelector('.pop-textarea').value = `${textArea.value}`
    document.querySelector('.session-type-span').innerHTML = 'Prefer Session'
    document.querySelector('.booking-container').classList.remove('hide');
    document.querySelector('.session-type').classList.add('hide')
    document.querySelectorAll('.blur').forEach(elem => {
      elem.style.filter = 'blur(2px)';
    });
  };
});


document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('.full-name')
  const username = document.querySelector('.username')
  const sessionType = document.querySelector('.session-type');
  const popTextarea = document.querySelector('.pop-textarea');
  const paymentMethod = document.querySelector('.pay-method')
  const question = document.querySelector('.question-area')

  const userdtails = {
    title: 'Booking an appointment',
    fullName: name.value,
    instagramUsername: username.value,
    sessionType: sessionType.value ? sessionType.value: '',
    preferedSession: popTextarea.value ? popTextarea.value : '',
    paymentMethod: paymentMethod.value,
    question: question.value ? question.value : '' 
  }

  sendEmail(userdtails);

  setTimeout(() => {
    location.replace('index.html')
  }, 1000)
});


function sendEmail(userdtails) {
  Email.send({
    SecureToken: 'e94aeb98-35d8-4774-adf1-0cb05cfd06c0',
    To : 'fertilityreadingsbyclaire@gmail.com',
    From : "fertilityreadingsbyclaire@gmail.com",
    Subject : "Details From My Website",
    Body : `
      Title: ${userdtails.title}; 
      <br> Full Name: ${userdtails.fullName}; 
      <br> Instagram or Tiktoks Username: ${userdtails.instagramUsername}; 
      <br> Session Type: ${userdtails.sessionType};
      <br> Prefered Session: ${userdtails.preferedSession};
      <br> Payment Method: ${userdtails.paymentMethod}
      <br> Question: ${userdtails.question}
    `
  }).then(
    message => alert('Appoinment Sent Sucessfully! \nYou will receive a reply shortly. ')
  );
}
