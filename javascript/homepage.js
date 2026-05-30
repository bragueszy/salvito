

document.addEventListener("DOMContentLoaded", () => {

    // 1. GESTÃO DO FORMULÁRIO DE CONTACTO
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Simulação de envio
            alert("Obrigado! A sua mensagem foi enviada com sucesso. Entraremos em contacto em breve!");

            // Limpa o formulário após o envio
            this.reset();
        });
    }

    // 2. ANIMAÇÃO DE ENTRADA (SCROLL REVEAL)
    // Seleciona todos os cards de serviços
    const cards = document.querySelectorAll(".card-modern");

    const observerOptions = {
        threshold: 0.15, // Ativa quando 15% do card está visível
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe que torna o card visível
                entry.target.classList.add('visible');
                // Para de observar o elemento após a animação ocorrer uma vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });

    // 3. EFEITO DINÂMICO NA NAVBAR
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '5px 0';
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });

    // 4. SMOOTH SCROLL (Navegação Suave)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const toastEl = document.getElementById('successToast');
    const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
    toast.show();

    form.reset();
});