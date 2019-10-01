import { CoreModule } from '../core/core-module';

class AddToCart extends CoreModule {
  init() {
    let elements = document.querySelectorAll('.wspsc_add_cart_submit')

    elements.forEach(element => {
      element.addEventListener('click', this.onClick)
      console.log(element.parentElement)
    })

    return super.init()
  }

  onClick(event) {
    event.preventDefault();
    console.log(event)
    let form = event.currentTarget.parentElement
    event.currentTarget.setAttribute('value', 'added!')
    setTimeout(function() {
      form.submit()
    }, 500)
  }
}

export const addToCart = new AddToCart()