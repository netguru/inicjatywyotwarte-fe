import React, { useEffect, useRef, useState } from 'react'
import { useMouse } from 'react-use'
import styled from 'styled-components'
import gsap from 'gsap'

import range from 'lodash/range'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

import { ReactComponent as Education } from 'assets/categories/education.svg'
import { parallaxIt } from '../../utils/helpers/ParallaxItHelper';

const Stage = styled.div`
  width: 100%;
`;

const SVGSprite = styled(Education)`
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
    const smallGirlStudies = document.getElementById('small_girl_studies')
    const girlStudies = document.getElementById('girl_studies')
    const boyStudies = document.getElementById('boy_studies')
    const phoneBubble = document.getElementById('phone_bubble')
    const laptopBubble = document.getElementById('laptop_bubble')

    gsap.set([
      smallGirlStudies,
      girlStudies,
      boyStudies,
      phoneBubble,
      laptopBubble,
    ], {
      autoAlpha: 0
    })

    const depth1 = gsap.timeline(timelineDefaults)
    depth1
      .fromTo(smallGirlStudies, { y: '-=20' }, { duration: 0.7, y: '+=20', autoAlpha: 1, delay: 1,})
      .fromTo(boyStudies, { y: '-=20' }, { duration: 0.5, y: '+=20', autoAlpha: 1,}, '<.2')
      .fromTo(girlStudies, { y: '+=20' }, { duration: 0.6, y: '-=20', autoAlpha: 1 }, '<.2')

    const techBubbles = gsap.timeline(timelineDefaults)
    techBubbles
      .fromTo(phoneBubble, { y: '+=20' }, { duration: 0.7, y: '-=20', autoAlpha: 1 }, '<')
      .fromTo(laptopBubble, { y: '-=20', x: '-=20' }, { duration: 0.7, y: '+=20', x: '+=20', autoAlpha: 1,}, '<.1')

    const movingCharactersTimeline = gsap
      .timeline({ ease: 'back.easeOut' })
      .to(smallGirlStudies, { scale: '1.2', duration: 1 }, 0)
      .to(boyStudies, { scale: '.9', duration: 1 }, 0)
      .to(girlStudies, { scale: '.9', duration: 1 }, 0)
      .to(phoneBubble, { scale: '1.1', duration: 1 }, 0)
      .to(laptopBubble, { scale: '1.1', duration: 1 }, 0)
      .pause()
    setMovingCharacters(movingCharactersTimeline)

    const master = gsap.timeline(timelineDefaults)
    master
      .add(depth1)
      .add(techBubbles)

    return () => {}
  }, [])

  useEffect(() => {
    parallaxIt(docX, docY, 'small_girl_studies', +4, ref)
    parallaxIt(docX, docY, 'girl_studies', +4, ref)
    parallaxIt(docX, docY, 'boy_studies', -4, ref)
    parallaxIt(docX, docY, 'phone_bubble', +1, ref)
    parallaxIt(docX, docY, 'laptop_bubble', -1, ref)
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
