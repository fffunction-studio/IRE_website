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
        console.log('setting home text color', color)
        document.body.style.color = color
      }
    } else {
      console.log('resetting text color')
      document.body.style.color = ''
    }
  }
}

export const textColor = new TextColor()