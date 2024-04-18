// "Interesting code snippet for continuously rotating a settings gear icon."
setInterval(function() {
  settingsIcon.style.transform = `rotate(${Math.random() * 360}deg)`;
}, 1500);
        //To access setting icon
        const settingsIcon = document.querySelector('.settings-icon');
        const colorMenu = document.querySelector('.color-menu');
        const colorItems = colorMenu.querySelectorAll('li');
        
        // Add event for click setting incon
        settingsIcon.addEventListener('click', function() {
            colorMenu.style.display = colorMenu.style.display === 'none' ? 'block' : 'none';
        }); 

document.addEventListener('DOMContentLoaded', function() {
    const colorItems = document.querySelectorAll('.color-menu li');
  
    colorItems.forEach(function(item) {
      item.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        const styleElement = document.querySelector('#main-color');
  
        if (styleElement) {
          styleElement.textContent = `:root { --main-color: ${color}; }`;
        } else {
          const newStyleElement = document.createElement('style');
          newStyleElement.id = 'main-color';
          newStyleElement.textContent = `:root { --main-color: ${color}; }`;
          document.head.appendChild(newStyleElement);
        }
      });
    });
  });