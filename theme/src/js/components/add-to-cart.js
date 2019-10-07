import { CoreModule } from '../core/core-module';

class AddToCart extends CoreModule {
  init() {
    let elements = document.querySelectorAll('.wspsc_add_cart_submit')

    elements.forEach(element => {
      let parent = element.parentElement
      let placeholder = document.createElement('div')

      placeholder.classList.add('underline-placeholder')
      placeholder.classList.add('underline-out')
      placeholder.appendChild(element)
      parent.appendChild(placeholder)

      element.addEventListener('click', this.onClick)
    })

    return super.init()
  }

  onClick(event) {
    event.preventDefault();

    let form = event.currentTarget.parentElement
    event.currentTarget.setAttribute('value', 'added!')
    setTimeout(function() {
      form.submit()
    }, 500)
  }
}

export const addToCart = new AddToCart()