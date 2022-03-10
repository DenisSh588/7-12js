function getDomNodesBySelector(selector) {
    // Ваш код из прошлого задания
    const rub = document.querySelectorAll(selector)
    const page = Array.from(rub)
    return page
  }

  let sel = 0
  let car =0
  
  console.log(getDomNodesBySelector('.price-value'));

function applyDiscount() {
  // Ваш код
  const pri = getDomNodesBySelector('.price-value')
  sel++
  if (sel>1) {
    return 
  } else {
    pri.forEach(elem => {
      elem.textContent = elem.textContent - (elem.textContent * 0.15)
      car += +elem.textContent
      document.querySelector('.total-price-value').textContent = car
    })
  }

}
document.querySelector('.total__button').addEventListener('click', ()=>{
  applyDiscount()
})
  