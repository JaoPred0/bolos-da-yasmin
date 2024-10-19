var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,  // Tempo de espera em milissegundos entre cada slide (3 segundos aqui)
        disableOnInteraction: false,  // Continua a rotação automática mesmo após interação
    },
});
