import { CoreModule } from '../core/core-module';
import { CoreEvent } from '../core/core-event';

class FadeAfterScroll extends CoreModule {
  init() {
    this.elements = document.querySelectorAll('.fade-after-scroll')

    this.elements.forEach(element => {
      this.events.push(
        new CoreEvent('scrolled-from-top', () => {
          this.fadeOut(element)
        })
      )

      this.events.push(
        new CoreEvent('scrolled-to-top', () => {
          this.fadeIn(element)
        })
      )
    })

    return super.init()
  }

  fadeIn(element) {
    element.classList.remove('fade-out')
  }

  fadeOut(element) {
    element.classList.add('fade-out')
  }
}

export const fadeAfterScroll = new FadeAfterScroll()