// defining elements
const success = document.querySelector('.success');
const error = document.querySelector('form span.error');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const dismiss = document.getElementById('dismiss')

// click button to submit
submit.addEventListener('click', function() {
    email.className = '';
    error.style.opacity = '0';
    if (email.value !== '') {
        success.style.display = 'flex';
        email.value = '';
    } else {
        email.placeholder = 'ash#loremcompany.com';
        email.classList.add('error-email');
        error.style.opacity = '1';
    }
})
dismiss.addEventListener('click', function() {
    success.style.display = 'none';
})

