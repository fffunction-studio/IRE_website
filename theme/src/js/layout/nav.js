import { eventBus } from '../core'
import { CoreModule } from '../core/core-module'
import { CoreEvent } from '../core/core-event'

class Nav extends CoreModule {
  init(options) {
    this.element = options.element

    this.addEventListeners()

    this.toggles = document.querySelectorAll('.toggle-menu')
    this.toggles.forEach((toggle) => {
      toggle.addEventListener('click', this.onToggle)
    })

    this.closers = document.querySelectorAll('.nav-menu-item')
    this.closers.forEach((closer) => {
      closer.addEventListener('click', this.onClose)
    })

    this.activateMenuItem()
    
    return super.init()
  }

  destroy() {
    super.destroy()

    this.toggles.forEach((toggle) => {
      toggle.removeEventListener('click', this.onToggle)
    })

    this.closers.forEach((closer) => {
      closer.removeEventListener('click', this.onClose)
    })
  }

  onToggle(event) {
    eventBus.$emit('toggle-menu', event)
  }

  onClose(event) {
    eventBus.$emit('close-menu', event)
  }

  addEventListeners() {
    this.events.push(
      new CoreEvent('toggle-menu', () => {
        this.toggleMenu()
      })
    )

    this.events.push(
      new CoreEvent('close-menu', () => {
        this.closeMenu()
      })
    )

    this.events.push(
      new CoreEvent('window-resized', () => {
        if (window.innerWidth >= 1024) {
          this.closeMenu()
        }
      })
    )

    this.events.push(
      new CoreEvent('barba-before-enter', () => {
        this.activateMenuItem()
      })
    )
  }

  closeMenu() {
    if (this.element.classList.contains('animating')) {
      return
    }

    if (this.element.classList.contains('active')) {
      this.element.classList.remove('active')
      this.element.classList.add('animating')
      setTimeout(() => {
        this.element.classList.remove('animating')
      }, 400)
    }
  }

  toggleMenu() {
    if (this.element.classList.contains('animating')) {
      return
    }

    if (this.element.classList.contains('active')) {
      this.element.classList.remove('active')
      document.querySelector('.nav-main').classList.remove('menu-open')
      this.element.classList.add('animating')
      let burgerSpans = document.querySelectorAll('.nav-burger > span')
      burgerSpans.forEach(span => {
        span.style.backgroundColor = span.getAttribute('data-bg-color')
      })
      setTimeout(() => {
        this.element.classList.remove('animating')
      }, 400)
    } else {
      this.element.classList.add('active')
      document.querySelector('.nav-main').classList.add('menu-open')
      this.element.classList.add('animating')
      let burgerSpans = document.querySelectorAll('.nav-burger > span')
      burgerSpans.forEach(span => {
        span.style.backgroundColor = 'rgb(0,0,0)'
      })
      setTimeout(() => {
        this.element.classList.remove('animating')
      }, 400)
    }
  }

  activateMenuItem() {
    let namespace = document.querySelector('.main').getAttribute('data-barba-namespace')

    let menuItems = document.querySelectorAll('.nav-menu-item')

    menuItems.forEach(item => {
        item.classList.remove('italic')
    })

    menuItems.forEach(item => {
      if (item.getAttribute('data-slug') == namespace) {
        item.classList.add('italic')
      }
    })
  }
}

export const nav = new Nav()
