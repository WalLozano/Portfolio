// fullpage js
new fullpage('#fullpage', {
        //options here
        verticalCentered: false,
        autoScrolling: true,
        scrollHorizontally: true,
        fixedElements: '#header, .footer',
        scrollOverflow: false
});

// menu button
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
}

// Regex
const nam = /^[A-Za-z]+$/gi
const message = /^[a-zA-ZÀ-ÿ0-9_\-()/]+$/
const email = /^[a-z0-9-._-]+@[a-z]{3,12}.(com|net|web|me|gov|edu|online|shop)$/
const phone = /\d{3}\-\d{3}\-\d{4}/gi


let inputName = document.getElementById('nombre')
let inputEmail = document.getElementById('email')
let inputPhone = document.getElementById('phone')

inputName.addEventListener('keyup', () => {
        if (inputName.value.match(nam)) {
                inputName.classList.remove('input')
                inputName.classList.add('good')
        } else {
                inputName.classList.remove('input')
                inputName.classList.add('bad')
        };
});

inputEmail.addEventListener('keyup', () => {
        if (inputEmail.value.match(email)) {
                inputEmail.classList.remove('input')
                inputEmail.classList.add('good')
        } else {
                inputEmail.classList.remove('input')
                inputEmail.classList.add('bad')
        };
});

inputPhone.addEventListener('keyup', () => {
        if (inputPhone.value.match(phone)) {
                inputPhone.classList.remove('input')
                inputPhone.classList.add('good')
        } else {
                inputPhone.classList.remove('input')
                inputPhone.classList.add('bad')
        };
});
// reloj and calendar

const reloj = () => {
        const time = document.getElementById('watch');

        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hour >= 12 ? 'PM' : 'AM';

        hour = hour % 12;
        hour = hour ? hour : 12;
        minute = minute < 10 ? `0${minute}` : minute;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        let watch = `${hour}:${minute}:${seconds} ${ampm}`;
        time.innerText = watch;
}
reloj();
setInterval(reloj, 1000);

const calendar = () => {
        const calendario = document.getElementById('calendar');

        let dates = new Date();
        day = dates.getDay();
        month = dates.getMonth();
        year = dates.getFullYear();

        day = day < 10 ? `0${day}` : day;
        month = month < 10 ? `0${month}` : month;

        let calendar = `${day}/${month}/${year}`
        calendario.innerText = calendar;
}

calendar();