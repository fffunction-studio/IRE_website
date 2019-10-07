import { scrollController } from './scroll-controller'
import ScrollMagic from 'scrollmagic'

class CoreScrollScene {
  constructor(offset = () => { return 0 }, enter = () => {}, leave = () => {}, reinit = false, element = null, hook = 0.5, update = false) {
    this.offset = offset
    this.enter = enter
    this.leave = leave
    this.reinit = reinit
    this.element = element
    this.hook = hook
    this.update = update
  }

  init() {
    this.scene = new ScrollMagic.Scene({
      offset: this.offset(),
      triggerElement: this.element,
      triggerHook: this.hook
    })
      .on('enter', this.enter)
      .on('leave', this.leave)
    
      if (this.update) {
        this.scene.on('update', this.update)
      }

    scrollController.addScene(this.scene)
  }

  destroy() {
    scrollController.removeScene(this.scene)
  }
}

export { CoreScrollScene }
