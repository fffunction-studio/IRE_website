import 'swiper/dist/css/swiper.min.css'

import Swiper from 'swiper/dist/js/swiper.min.js'
import { CoreModule } from '../core/core-module'

class SwiperManager extends CoreModule {
  init() {
    this.sliders = document.querySelectorAll('.slider')

    this.sliders.forEach(slider => {
      let container = slider.querySelector('.swiper-container')
      let counter = slider.querySelector('.slider-counter')
      let next = slider.querySelector('.slider-next')
      let previous = slider.querySelector('.slider-previous')
      
      let autoplay = container.getAttribute('data-autoplay') == 'true' ? { delay: 5000 } : false

      let instance = new Swiper(container, {
        loop: true,
        autoplay: autoplay,
        simulateTouch: false,
        allowTouchMove: false,
        speed: 400,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: container.querySelector('.swiper-pagination'),
          clickable: true
        }
      })


      counter.querySelector('.slider-index').innerHTML = instance.realIndex + 1

      instance.on('slideChange', () => {
        counter.querySelector('.slider-index').innerHTML = instance.realIndex + 1
      })
      
      if (previous) {
        previous.addEventListener('click', this.previous)
        previous.instance = instance
      }

      if (next) {
        next.addEventListener('click', this.next)
        next.instance = instance
      }

      container.addEventListener('click', this.next)
      container.instance = instance 

      slider.next = next
      slider.container = container
      slider.instance = instance
    })

    return super.init()
  }

  destroy() {
    this.sliders.forEach(slider => {
      if (slider.nex) {
        slider.next.removeEventListener('click', this.onClick)
      }
      slider.container.removeEventListener('click', this.onClick)
      slider.instance.destroy()
    })

    super.destroy()
  }

  previous(event) {    
    event.currentTarget.instance.slidePrev()
  }

  next(event) {    
    event.currentTarget.instance.slideNext()
  }
}

export const swiperManager = new SwiperManager()
