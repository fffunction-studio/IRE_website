import { CoreModule } from '../core/core-module';
import { CoreEvent } from '../core/core-event';

class TextColor extends CoreModule {
  init() {
    this.events.push(
      new CoreEvent('barba-before-enter', () => {
        this.setTextColor()
      })
    )

    this.setTextColor()

    return super.init()
  }

  setTextColor() {
    
    let namespace = document.querySelector('.main').getAttribute('data-barba-namespace')
    
    if (namespace == 'home') {
      let color = document.querySelector('.main').getAttribute('data-text-color')
      if (color) {
        document.body.style.color = color

        let underlines = document.querySelectorAll('.underline-in')
        underlines.forEach(underline => {
          underline.style.borderColor = color
        })

        let burgerSpans = document.querySelectorAll('.nav-burger > span')
        burgerSpans.forEach(span => {
          span.setAttribute('data-bg-color', color)
          span.style.backgroundColor = color
        })
      }
    } else {
      console.log('resetting text color')
      document.body.style.color = ''

      let underlines = document.querySelectorAll('.underline-in')
        underlines.forEach(underline => {
          underline.style.borderColor = ''
        })

        let burgerSpans = document.querySelectorAll('.nav-burger > span')
        burgerSpans.forEach(span => {
          span.setAttribute('data-bg-color', 'rgb(0,0,0')
          span.style.backgroundColor = ''
        })
    }
  }
}

export const textColor = new TextColor()