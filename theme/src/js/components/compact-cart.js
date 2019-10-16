import { CoreModule } from '../core/core-module';

class CompactCart extends CoreModule {
  init() {
    let element = document.querySelector('.wpsps_compact_cart')
    let link = '/cart'
    
    console.log(window.location.pathname)
    if (window.location.hostname == 'fffunction.studio') {
      link = '/irene/cart'
    } else if (window.location.pathname == '/cms/shop/' || window.location.pathname == '/cms/shop') {
      link = '/cms/cart'
    }

    

    if (element) {
      let parent = element.parentElement
      let wrapper = document.createElement('div')
      
      wrapper.classList.add('flex','justify-start', 'lg:justify-center')
      element.classList.add('lg:underline-in')

      wrapper.appendChild(element)
      parent.appendChild(wrapper)

      let amount = element.querySelector('.wpsps_compact_cart_container').innerText.trim().split(' ', 1)[0]
      if (amount == 'Cart') {
        amount = 0
      }
      element.innerHTML = '<a class="hidden lg:block" href="' + link + '" >Cart (' + amount + ')</a>'

      if (amount == 0) {
        element.innerHTML += '<a class="lg:hidden" href="' + link + '" ><div class="empty-cart-icon"></div></a>'
      } else {
        element.innerHTML += '<a class="lg:hidden" href="' + link + '" ><div class="cart-icon">' + amount + '</div></a>'
      }
    }

    return super.init()
  }
}

export const compactCart = new CompactCart()