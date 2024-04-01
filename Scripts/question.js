const name = document.querySelector('.full-name')
const username = document.querySelector('.username')
const textArea = document.querySelector('textarea');

document.querySelectorAll('.full-name, .username, textarea').forEach(elem => {
  elem.addEventListener('keyup', () => {
    if ((name.value) && (username.value) && (textArea.value)) {
      document.querySelector('button').style.backgroundColor = '#69727b'
    } else {
      document.querySelector('button').style.backgroundColor = '#69727b89'
    }
  })
})


document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const userdtails = {
    title: 'Question',
    fullName: name.value,
    instagramUsername: username.value,
    preferedSession: textArea.value 
  }

  sendEmail(userdtails);

  setTimeout(() => {
    location.replace('index.html')
  }, 2000)
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
      <br> Instagram Username: ${userdtails.instagramUsername}; 
      <br> Prefered Session: ${userdtails.preferedSession};
    `
  }).then(
    message => alert('Question Sent Sucessfully')
  );
}
