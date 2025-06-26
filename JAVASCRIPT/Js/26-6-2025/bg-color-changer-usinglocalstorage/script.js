
function changeColor(color) {
    let newColor;
  
    if (color === 'random') {
      newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } else {
      newColor = color;
    }
  
    document.body.style.backgroundColor = newColor;
  
    localStorage.setItem('backgroundColor', newColor);
  }
  
  
  function loadSavedColor() {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
    }
  }
  
  loadSavedColor();
  