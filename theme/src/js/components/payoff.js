import { CoreModule } from '../core/core-module';
import { CoreEvent } from '../core/core-event';

class Payoff extends CoreModule {
  init() {
    this.element = document.querySelector('.payoff')

    if (this.element) {
      this.events.push(
        new CoreEvent('scrolled-from-top', () => {
          this.fadeOut()
        })
      )

      this.events.push(
        new CoreEvent('scrolled-to-top', () => {
          this.fadeIn()
        })
      )
    } else {
      return { id: this.id, status: false, message: 'no .header-main element' }
    }


    return super.init()
  }

  fadeIn() {
    this.element.classList.remove('fade-out')
  }

  fadeOut() {
    this.element.classList.add('fade-out')
  }
}

export const payoff = new Payoff()