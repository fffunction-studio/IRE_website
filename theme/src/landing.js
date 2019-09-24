import { throttle } from 'lodash';

(function() {

  let imageSwapper = document.querySelector('.image-swapper-wrapper')
  let maxImages = 9
  let lastIndex = 0

  if (imageSwapper) {
    let swappers = document.querySelectorAll('.image-swapper')

    imageSwapper.onmousemove = throttle((event) => {
      let index = Math.floor(event.clientX / window.innerWidth * maxImages)
      if (index != lastIndex) {
        lastIndex = index

        hideAll()
        showSwapper(index)
      }
    }, 100)
    
    function hideAll() {
      swappers.forEach(swapper => {
        swapper.classList.add('hidden')
      })
    }

    function showSwapper(index) {
      swappers[index].classList.remove('hidden')
    }
  }

})()