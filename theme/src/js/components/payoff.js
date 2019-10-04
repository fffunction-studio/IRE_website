import { CoreModule } from '../core/core-module';
import { CoreEvent } from '../core/core-event';

class Payoff extends CoreModule {
  init() {
    this.wrapper = document.querySelector('.payoff-wrapper')
    this.placeholder = document.querySelector('.payoff-placeholder')

    if (this.placeholder) {
      this.wrapper.classList.remove('opacity-0')
      this.element = this.placeholder.querySelector('.payoff')
      this.wrapper.innerHTML = ''
      this.wrapper.appendChild(this.element)

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
      this.wrapper.classList.add('opacity-0')
      setTimeout(()=> {
        this.wrapper.innerHTML = ''
      }, 800)
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