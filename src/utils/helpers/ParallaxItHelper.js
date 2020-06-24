import gsap from 'gsap';

function maxValue (value, max) {
  return value > max ? max : value
}

export function parallaxIt (docX, docY, target, movement, ref) {
  if (ref) {
    const rect = ref.current.getBoundingClientRect()
    const offset = {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft
    }
    const relX = docX - offset.left
    const relY = docY - offset.top
    const maxHeight = 800

    gsap.to(document.getElementById(target), 1, {
      x: ((relX - rect.width / 2) / rect.width) * movement,
      y: ((maxValue(relY, maxHeight) - rect.height / 2) / rect.height) * movement
    })
  }
}
