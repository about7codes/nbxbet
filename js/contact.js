

const sendMsg = document.getElementById('send-msg');
const sendMsgBtn = document.getElementById('send-msg-btn');
const contactForm = document.getElementById('contact-form');


const showForm = () => {

    sendMsg.style.display = 'none';
    contactForm.style.display = 'block';
}

sendMsgBtn.addEventListener('click', showForm);