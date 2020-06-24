import React, { useEffect, useRef, useState } from 'react'
import { useMouse } from 'react-use'
import styled from 'styled-components'
import gsap from 'gsap'

import range from 'lodash/range'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

import { ReactComponent as Neighbour } from 'assets/categories/neighbour.svg'
import { parallaxIt } from '../../utils/helpers/ParallaxItHelper';

const Stage = styled.div`
  width: 100%;
`;

const SVGSprite = styled(Neighbour)`
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
    const grandmaHouse = document.getElementById('house')
    const grandma = document.getElementById('grandma')
    const groceries = document.getElementById('groceries')
    const clouds = document.getElementById('clouds')
    const bushes = document.getElementById('bushes')
    const girl = document.getElementById('girl')
    const plant = document.getElementById('plant')

    gsap.set([
      grandmaHouse,
      groceries,
      clouds,
      bushes,
      girl,
      grandma,
      plant
    ], {
      autoAlpha: 0
    })

    const depth1 = gsap.timeline(timelineDefaults)
    depth1
      .fromTo(grandmaHouse, { y: '-=20' }, { duration: 0.7, y: '+=20', autoAlpha: 1, delay: 1,})
      .fromTo(plant, { y: '-=20' }, { duration: 0.5, y: '+=20', autoAlpha: 1,}, '<.2')
      .fromTo(bushes, { y: '+=20' }, { duration: 0.6, y: '-=20', autoAlpha: 1 }, '<.2')

    const nature = gsap.timeline(timelineDefaults)
    nature
      .fromTo(clouds, { y: '-=20' }, { duration: 0.7, y: '+=20', autoAlpha: 1 }, '<')

    const characters = gsap.timeline(timelineDefaults)
    characters
      .fromTo(girl, { y: '-=20' }, { duration: 0.7, y: '+=20', autoAlpha: 1,}, '<')
      .fromTo(grandma, { y: '-=20' }, { duration: 0.7, y: '+=20', autoAlpha: 1,}, '<.2')
      .fromTo(groceries, { y: '-=20' }, { duration: .7, y: '+=20', autoAlpha: 1 }, '<.2')
    const movingCharactersTimeline = gsap
      .timeline({ ease: 'back.easeOut' })
      .to(groceries, { scale: '1.1', duration: 1 }, 0)
      .pause()
    setMovingCharacters(movingCharactersTimeline)

    const master = gsap.timeline(timelineDefaults)
    master
      .add(depth1)
      .add(characters)
      .add(nature)

    return () => {}
  }, [])

  useEffect(() => {
    parallaxIt(docX, docY, 'cloud_1', -6, ref)
    parallaxIt(docX, docY, 'cloud_2', -14, ref)
    parallaxIt(docX, docY, 'groceries', +3, ref)
    parallaxIt(docX, 200, 'grandma', -2, ref)
    parallaxIt(docX, 200, 'girl', +3, ref)
    parallaxIt(docX, 200, 'plant', +1, ref)
    parallaxIt(docX, docY, 'bushes', -3, ref)
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
