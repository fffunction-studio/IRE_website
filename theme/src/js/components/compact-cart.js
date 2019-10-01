import { CoreModule } from '../core/core-module';

class CompactCart extends CoreModule {
  init() {
    let element = document.querySelector('.wpsps_compact_cart')

    if (element) {
      let amount = element.querySelector('.wpsps_compact_cart_container').innerText.trim().split(' ', 1)[0]
      if (amount == 'Cart') {
        amount = 0
      }
      element.innerHTML = '<a class="hidden lg:block" href="/cart" >Cart (' + amount + ')</a>'

      if (amount == 0) {
        element.innerHTML += '<a class="lg:hidden" href="/cart" ><div class="empty-cart-icon"></div></a>'
      } else {
        element.innerHTML += '<a class="lg:hidden" href="/cart" ><div class="cart-icon">' + amount + '</div></a>'
      }
    }

    return super.init()
  }
}

export const compactCart = new CompactCart()