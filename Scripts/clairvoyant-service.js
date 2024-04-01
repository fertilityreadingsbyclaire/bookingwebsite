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
    title: 'Clairvoyant Service',
    fullName: name.value,
    instagramUsername: username.value,
    preferedService: textArea.value 
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
      <br> Instagram or Tiktok Username: ${userdtails.instagramUsername}; 
      <br> Prefered Service: ${userdtails.preferedService};
    `
  }).then(
    message => alert('Service Sent Sucessfully! \nYou will get a reply shortly.')
  );
}
