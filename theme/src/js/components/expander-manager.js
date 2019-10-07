import { CoreModule } from '../core/core-module'
import zenscroll from 'zenscroll'
import anime from 'animejs'

class ExpanderManager extends CoreModule {
  init() {
    this.activators = document.querySelectorAll('.expander-activator')

    this.activators.forEach((activator) => {
      activator.addEventListener('click', this.onClick)
      activator.element = activator
    })

    return super.init()
  }

  destroy() {
    this.activators.forEach((activator) => {
      activator.removeEventListener('click', this.onClick)
    })
  }

  onClick(event) {
    event.preventDefault()

    let target = event.currentTarget.getAttribute('data-expander-target')
    let duration = 800

    if (event.currentTarget.getAttribute('data-expander-instant') == 'true') {
      duration = 1
    }

    if (target) {
      let targetElement = document.getElementById(target)

      if (
        !(
          event.currentTarget.getAttribute('data-expander-triggered') ==
            'true' &&
          event.currentTarget.getAttribute('data-expander-once') == 'true'
        )
      ) {
        this.element.classList.toggle('active')
        targetElement.classList.toggle('active')
        
        let content = targetElement.querySelector('.expander-content')

        if (targetElement.classList.contains('active')) {
          anime({
            targets: targetElement,
            height: [0, content.offsetHeight],
            duration: duration,
            easing: 'easeOutCirc',
          })
        } else {
          anime({
            targets: targetElement,
            height: [content.offsetHeight, 0],
            duration: duration,
            easing: 'easeOutCirc'
          })
        }
      }

      if (event.currentTarget.getAttribute('data-expander-scroll') == 'true') {
        setTimeout(() => {
          zenscroll.to(targetElement, 800)
        }, 100)
      }
    }

    event.currentTarget.setAttribute('data-expander-triggered', true)
  }
}

export const expanderManager = new ExpanderManager()
