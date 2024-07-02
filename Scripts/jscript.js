let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    const slides = document.querySelectorAll('.banner-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


setInterval(() => {
    showSlides(slideIndex += 1);
}, 20000);


/*js para os planos*/
function showDetails(plan) {
    document.getElementById('plan-selection').style.display = 'none';
    document.getElementById('plan-details').style.display = 'block';
    const details = {
        glamcombo: [
            '- Receba todo mês uma box e bag temática com valor +R$340',
            '- Produtos enviados de acordo com seu perfil de beleza através do beauty match',
            '- 50% OFF no frete em pedidos da loja',
            '- Até 60% de desconto em toda a loja',
            '- Produtos de graça com gbeautypoints',
            '- Acesso a comunidade exclusiva de beautygirls',
            '- Renovação automática com opção de desabilitar quando quiser'
        ],
        glambox: [
            '- Receba todo mês uma box temática com valor +R$240',
            '- Produtos enviados de acordo com seu perfil de beleza através do beauty match',
            '- 50% OFF no frete em pedidos da loja',
            '- Até 60% de desconto em toda a loja',
            '- Produtos de graça com beautypoints',
            '- Acesso a comunidade exclusiva de beautyirls',
            '- Renovação automática com opção de desabilitar quando quiser'
        ],
        glambag: [
            '- Receba todo mês uma bag temática com valor +R$100',
            '- Produtos enviados de acordo com seu perfil de beleza através do beauty match',
            '- 50% OFF no frete em pedidos da loja',
            '- Até 60% de desconto em toda a loja',
            '- Produtos de graça com beautypoints',
            '- Acesso a comunidade exclusiva de beautygirls',
            '- Renovação automática com opção de desabilitar quando quiser'
        ],
        glampass: [
            '- Compre a box (R$94.90), a bag (R$53,90) ou o combo (R$148,80) quando quiser',
            '- Produtos enviados de acordo com seu perfil de beleza através do beauty match',
            '- 50% OFF no frete em pedidos da loja',
            '- Até 60% de desconto em toda a loja',
            '- Produtos de graça com beautypoints',
            '- Acesso a comunidade exclusiva de beautygirls',
            '- Renovação automática com opção de desabilitar quando quiser'
        ]
    };

    document.getElementById('details-title').innerText = plan;
    const detailsList = document.getElementById('details-list');
    detailsList.innerHTML = '';
    details[plan].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        detailsList.appendChild(li);
    });
    document.getElementById('subscribe-button').textContent = `Quero assinar a ${plan}`;
}

function goBack() {
    document.getElementById('plan-details').style.display = 'none';
    document.getElementById('plan-selection').style.display = 'block';
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    
    if (!nome || !email) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos.');
    }
});


//js para o login
document.addEventListener('DOMContentLoaded', function() {
    var loginBtn = document.getElementById('loginBtn');
    var loginPopup = document.getElementById('loginPopup');

    loginBtn.addEventListener('click', function(event) {
        event.preventDefault();
        loginPopup.style.display = loginPopup.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!loginPopup.contains(event.target) && event.target !== loginBtn) {
            loginPopup.style.display = 'none';
        }
    });
});

/*rolagem*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});