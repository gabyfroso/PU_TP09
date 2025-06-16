const BADGE = document.getElementById('T1_2');

function MostrarBadge() {
    BADGE.style.display = 'block';
}

function OcultarBadge() {
    BADGE.style.display = 'none';
}

setTimeout(() => {
    MostrarBadge();

    setTimeout(() => {
        OcultarBadge();
    }, 6000);

}, 5000);


const FORMcontact = document.getElementById('formContact');
FORMcontact.addEventListener('submit', (e) => {
    e.preventDefault();
})

const FORMEYES = document.getElementById('OpenCloseEyes');

const EYEopen = document.getElementById('eye-open');
const EYEclosed = document.getElementById('eye-close');


const PASS = document.getElementById('pass');

let eyestatus = true;

FORMEYES.addEventListener('click', statusPass);


function statusPass() {
    eyestatus = !eyestatus;

    EYEclosed.style.display = eyestatus ? 'block' : 'none';
    EYEopen.style.display = eyestatus ? 'none' : 'block';

    PASS.type = eyestatus ? 'text' : 'password';

    console.log('eyestatus: ', eyestatus);
}

statusPass();