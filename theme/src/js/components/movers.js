import { CoreModule } from '../core/core-module';
import { CoreScrollScene } from '../core/core-scroll-scene';

class Movers extends CoreModule {
  init() {
    this.scenes = []
    this.movers = document.querySelectorAll('.mover')
    this.readMores = document.querySelectorAll('.read-more')

    console.log("TCL: Core -> init -> this.movers ", this.movers )

    this.movers.forEach(mover => {
      console.log('init mover')
      this.scenes.push(
        new CoreScrollScene(
          () => {
            return 0
          },
          (event) => {
            mover.classList.add('move-in')
          },
          (event) => {},
          false,
          mover,
          0.9
        )
      )
    })

    this.readMores.forEach(mover => {
      console.log('init mover')
      this.scenes.push(
        new CoreScrollScene(
          () => {
            return 0
          },
          (event) => {
            mover.classList.add('move-in')
          },
          (event) => {
            mover.classList.remove('move-in')
          },
          false,
          mover,
          0.5
        )
      )
    })

    this.scenes.forEach(scene => {
      scene.init()
    })

    return super.init()
  }

  destroy() {

  }
}

export const movers = new Movers()