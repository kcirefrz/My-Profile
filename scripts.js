var span = document.querySelector('.profile-text span');

span.addEventListener('click', () => {
    var conteudo = document.querySelector('.profile-text p');
    
    if (conteudo.classList.contains('show-profile-text')){
        span.innerHTML = 'See more...';
        conteudo.classList.remove('show-profile-text');
    } else {
        span.innerHTML = 'See less...';
        conteudo.classList.add('show-profile-text');
    }
});

var sendForm = document.querySelector('#submit');

sendForm.addEventListener('click', (e) => {
    let inputs = document.querySelectorAll('#input');
    let message = document.querySelector('.contact textarea');

    if (inputs.value == "" || message.value == "") {
        var submit = function toSubmit() {
            e.preventDefault();
        }; 
    } else {

    }
    submit();
});