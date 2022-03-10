function getDomNodesBySelector(selector) {
    // Ваш код
    const rub = document.querySelectorAll(selector)
    const page = Array.from(rub)
    return page
  }
  
  console.log(getDomNodesBySelector('.price-value'));