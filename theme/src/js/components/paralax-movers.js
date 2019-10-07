import { CoreModule } from '../core/core-module';
import { CoreScrollScene } from '../core/core-scroll-scene';

class ParalaxMovers extends CoreModule {
  init() {
    this.scenes = []
    this.movers = document.querySelectorAll('.paralax-mover')

    this.movers.forEach(mover => {
      this.scenes.push(
        new CoreScrollScene(
          () => {
            return 0
          },
          (event) => {
            console.log('enter')
          },
          (event) => {
            console.log('leave')
          },
          false,
          mover,
          0.5,
          (event) => {
            let offset = event.scrollPos / window.innerHeight
            offset = offset > 1 ? 50 : offset * 50
            
            mover.style.transform = 'translateY(-' + offset + 'vh)'          
          },
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

export const paralaxMovers = new ParalaxMovers()