import React, { useEffect, useRef, useState } from 'react'
import { useMouse } from 'react-use'
import styled from 'styled-components'
import gsap from 'gsap'

import range from 'lodash/range'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

import { ReactComponent as Businesses } from 'assets/categories/businesses.svg'
import { parallaxIt } from '../../utils/helpers/ParallaxItHelper';

const Stage = styled.div`
  width: 100%;
`;

const SVGSprite = styled(Businesses)`
  transform: translatez(0);
`

function Header () {
  const ref = useRef(null)
  const threshold = range(0, 1, 0.01)
  const [targetRef, event] = useIntersectionObserver('-100px', threshold)
  const { docX, docY } = useMouse(ref)
  const [movingCharacters, setMovingCharacters] = useState(null)

  useEffect(() => {
    const timelineDefaults = { defaults: { ease: 'power3.inOut' } }
    const deliveryBoy = document.getElementById('delivery_boy')
    const sun = document.getElementById('sun')
    const store = document.getElementById('store')
    const infoTable = document.getElementById('info_table')
    const flowers = document.getElementById('flowers')
    const houseBack = document.getElementById('house_back')

    gsap.set([
      deliveryBoy,
      sun,
      store,
      infoTable,
      flowers,
      houseBack,
    ], {
      autoAlpha: 0
    })

    const depth1 = gsap.timeline(timelineDefaults)
    depth1
      .fromTo(store, { y: '-=20' }, { duration: 0.7, y: '+=20', autoAlpha: 1, delay: 1,})
      .fromTo(houseBack, { y: '-=20' }, { duration: 0.5, y: '+=20', autoAlpha: 1,}, '<.2')
      .fromTo(infoTable, { y: '+=20' }, { duration: 0.6, y: '-=20', autoAlpha: 1 }, '<.2')

    const nature = gsap.timeline(timelineDefaults)
    nature
      .fromTo(flowers, { y: '+=20' }, { duration: 0.7, y: '-=20', autoAlpha: 1 }, '<')
      .fromTo(sun, { y: '-=20', x: '+=20' }, { duration: 0.7, y: '+=20', x: '-=20', autoAlpha: 1,}, '<.1')

    const characters = gsap.timeline(timelineDefaults)
    characters
      .fromTo(deliveryBoy, { y: '-=20' }, { duration: 0.7, y: '+=20', autoAlpha: 1,}, '<.2')
    const movingCharactersTimeline = gsap
      .timeline({ ease: 'back.easeOut' })
      .to(deliveryBoy, { scale: '1.1', duration: 1 }, 0)
      .pause()
    setMovingCharacters(movingCharactersTimeline)

    const master = gsap.timeline(timelineDefaults)
    master
      .add(depth1)
      .add(nature)
      .add(characters)

    return () => {}
  }, [])

  useEffect(() => {
    parallaxIt(docX, docY, 'sun', -6, ref)
    parallaxIt(docX, 0, 'delivery_boy', +14, ref)
    parallaxIt(docX, docY, 'info_table', +3, ref)
    parallaxIt(docX, docY, 'flower_front', +1, ref)
    parallaxIt(docX, docY, 'flower_back', -1, ref)
  }, [docX, docY, event])

  function seekAnimation (ratio) {
    if (movingCharacters) {
      const duration = movingCharacters.duration()
      const timeDestination = (1 - ratio) * duration
      movingCharacters.seek(timeDestination)
    }
  }

  if (event) {
    seekAnimation(event.intersectionRatio)
  }

  return (
    <Stage ref={targetRef}>
      <SVGSprite ref={ref} />
    </Stage>
  )
}

export default Header
