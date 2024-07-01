const form = document.querySelector('#form_cadastro');
const button = form.querySelector('button');

const addLoading = () => {

    // button.style.width = '100%'
    button.innerHTML = '<img src="img/loading.png" class="loading">'

    
};

const removeAll = () => {

    const alert = document.querySelector('.alert');

    alert.classList.remove('hidden')

    setInterval(() => {
        alert.classList.add('hidden')
    }, 3000);

    button.innerHTML = 'Enviar';
    form.reset();


    
};


const handleSubmit = (e) => {
    e.preventDefault();

    addLoading()

    const email = form.querySelector('input[ name="email"]').value;

    const password = form.querySelector('input[ name="password"]').value;

    const password_confirm = form.querySelector('input[ name="password_confirm"]').value;

    fetch('https://api.sheetmonkey.io/form/3RFwsHbTrMQj28HDGW55By', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({ email, password }),
    }).then(() => removeAll());
};

form.addEventListener('submit', handleSubmit);