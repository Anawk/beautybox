document.addEventListener('DOMContentLoaded', function() {
    const leftButton = document.querySelector('.slider-left-button');
    const rightButton = document.querySelector('.slider-right-button');
    const carousel = document.querySelector('.itens-carrosel');
  
    // Calcula a largura de um item no carrossel
    let itemWidth = carousel.querySelector('.item').offsetWidth;
  
    // Inicializa o índice do item atual
    let currentIndex = 0;
  
    // Adiciona evento de clique no botão "Anterior"
    leftButton.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
      }
      updateCarousel();
    });
  
    // Adiciona evento de clique no botão "Próximo"
    rightButton.addEventListener('click', function() {
      if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
      }
      updateCarousel();
    });
  
    // Função para atualizar a posição do carrossel com base no índice atual
    function updateCarousel() {
      itemWidth = carousel.querySelector('.item').offsetWidth;
      const offset = -currentIndex * itemWidth;
      carousel.style.transform = `translateX(${offset}px)`;
    }
  });
  
  