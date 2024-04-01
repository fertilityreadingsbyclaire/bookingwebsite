

document.querySelector('.right-section a').addEventListener('click', () => {
 document.querySelector('.booking-container').classList.remove('hide');
 document.querySelector('body').style.overflow = 'hidden';
 document.querySelectorAll('.fixed-botton-container, .also-like-cont, .page-content, .top-note, .booking-container hide, header').forEach(element => {
  element.style.filter = 'blur(2px)'
 });
 document.querySelector('.session-type').value = document.querySelector('.product-name').innerText
})

document.querySelector('.fa-times').addEventListener('click', () => {
  document.querySelector('.booking-container').classList.add('hide');
  document.querySelector('body').style.overflow = 'visible';
  document.querySelectorAll('.fixed-botton-container, .also-like-cont, .page-content, .top-note, .booking-container hide, header').forEach(element => {
    element.style.filter = 'blur(0px)'
   })
});

document.querySelectorAll('.full-name, .username').forEach(elem => {
  const name = document.querySelector('.full-name')
  const username = document.querySelector('.username')
  
  elem.addEventListener('keyup', () => {
    if ((name.value) && (username.value)) {
      document.querySelector('.proceed').style.backgroundColor = '#69727b'
    } else {
      document.querySelector('.proceed').style.backgroundColor = '#69727b91'
    };
  });
});

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const userdtails = {
    title: 'Appling for a Session',
    fullName: document.querySelector('.full-name').value,
    instagramUsername: document.querySelector('.username').value,
    sessionType: document.querySelector('.product-name').innerText
  }

  sendEmail(userdtails);

  setTimeout(() => {
    location.replace('../index.html')
  }, 2000)
});

function sendEmail(userdtails) {
  Email.send({
    SecureToken: 'ba5b9670-fb6f-4598-af1c-19cf1c1d3701',
    To : 'serenaspirituals@gmail.com',
    From : "serenaspirituals@gmail.com",
    Subject : "Details From My Website",
    Body : `
      Title: ${userdtails.title}; 
      <br> Full Name: ${userdtails.fullName}; 
      <br> Instagram Username: ${userdtails.instagramUsername}; 
      <br> Session Type: ${userdtails.sessionType};
    `
  }).then(
    message => alert('Apply Sent Sucessfully! \nYou will receive a reply shortly. ')
  );
}
