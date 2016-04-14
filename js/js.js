function acordeon(event) {

    if (event.target.nextElementSibling.classList.contains('cont-item')) {


        event.target.nextElementSibling.classList.toggle('oculto');

    }
}

document.querySelector(window.location.hash).nextElementSibling.classList.remove('oculto');
