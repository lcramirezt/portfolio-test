document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('fontSize');
  const tester = document.querySelector('.type-tester-purrrgatorio');

  const phrases = [
    'Todos los gatos son hermosos',
    'Una revolución psíquica de magnitud casi inconcebible',
    'Out of step with the world'
  ];

  const mediaQuery = window.matchMedia('(max-width: 799px)');

  function updateType(size, isMobile) {
    tester.style.fontSize = size + 'px';
    tester.style.lineHeight = (size * (isMobile ? 1 : 1)) + 'px';
    tester.style.marginBottom = (size * (isMobile ? 0.25 : 0.25)) + 'px';
  }

function setDefaults(isMobile) {
  const defaultSize = isMobile ? 96 : 200;
  const maxSize = isMobile ? 160 : 300;

  slider.max = maxSize;
  slider.value = defaultSize;

  updateType(defaultSize, isMobile);
}


  // frase random
  tester.textContent =
    phrases[Math.floor(Math.random() * phrases.length)];

  // init
  setDefaults(mediaQuery.matches);

  // slider
  slider.addEventListener('input', () => {
    updateType(slider.value, mediaQuery.matches);
  });

  // escuchar cambio de breakpoint
  mediaQuery.addEventListener('change', (e) => {
    setDefaults(e.matches);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('fontSize');
  const tester = document.querySelector('.type-tester-granada');

  const phrases = [
    'Persefone comió seis semillas',
    'Una revolución psíquica de magnitud casi inconcebible',
    'Out of step with the world'
  ];

  const mediaQuery = window.matchMedia('(max-width: 799px)');

  function updateType(size, isMobile) {
    tester.style.fontSize = size + 'px';
    tester.style.lineHeight = (size * (isMobile ? 1 : 1)) + 'px';
    tester.style.marginBottom = (size * (isMobile ? 0.25 : 0.25)) + 'px';
  }

function setDefaults(isMobile) {
  const defaultSize = isMobile ? 48 : 100;
  const maxSize = isMobile ? 100 : 120;

  slider.max = maxSize;
  slider.value = defaultSize;

  updateType(defaultSize, isMobile);
}


  // frase random
  tester.textContent =
    phrases[Math.floor(Math.random() * phrases.length)];

  // init
  setDefaults(mediaQuery.matches);

  // slider
  slider.addEventListener('input', () => {
    updateType(slider.value, mediaQuery.matches);
  });

  // escuchar cambio de breakpoint
  mediaQuery.addEventListener('change', (e) => {
    setDefaults(e.matches);
  });
});
