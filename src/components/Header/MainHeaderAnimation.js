import React, { useEffect, useRef, useState } from 'react'
import { useMouse } from 'react-use'
import styled from 'styled-components'
import gsap from 'gsap'

import range from 'lodash/range'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

import { ReactComponent as Hero } from 'assets/categories/hero.svg'
import { parallaxIt } from '../../utils/helpers/ParallaxItHelper'

const Stage = styled.div`
  width: 100%;
`;

const SVGSprite = styled(Hero)`
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
    const hospital = document.getElementById('hospital')
    const tree1 = document.getElementById('tree_1')
    const tree2 = document.getElementById('tree_2')
    const grandmaHouse = document.getElementById('grandma_house')
    const houseEducation = document.getElementById('house_education')
    const deliveryBoy = document.getElementById('delivery_boy')
    const groceries = document.getElementById('groceries')
    const clouds = document.getElementById('clouds')
    const houseCenter = document.getElementById('house_mask_making')

    gsap.set(
      [
        hospital,
        tree1,
        tree2,
        grandmaHouse,
        houseEducation,
        deliveryBoy,
        groceries,
        clouds,
        houseCenter
      ],
      {
        autoAlpha: 0
      }
    )

    const depth1 = gsap.timeline(timelineDefaults)
    depth1
      .fromTo(
        houseCenter,
        { y: '+=20' },
        { duration: 0.7, y: '-=20', autoAlpha: 1, delay: 1 }
      )
      .fromTo(
        grandmaHouse,
        { y: '-=20' },
        { duration: 0.7, y: '+=20', autoAlpha: 1 },
        '<.1'
      )
      .fromTo(
        houseEducation,
        { y: '-=20' },
        { duration: 0.7, y: '+=20', autoAlpha: 1 },
        '<.1'
      )
      .fromTo(
        hospital,
        { y: '+=20' },
        { duration: 0.7, y: '-=20', autoAlpha: 1 },
        '<.1'
      )
    const trees = gsap.timeline(timelineDefaults)
    trees
      .fromTo(
        tree1,
        { y: '-=20' },
        { duration: 0.5, y: '+=20', autoAlpha: 1 },
        '<.1'
      )
      .fromTo(
        tree2,
        { y: '-=20' },
        { duration: 0.5, y: '+=20', autoAlpha: 1 },
        '<.1'
      )
      .fromTo(
        clouds,
        { y: '-=20' },
        { duration: 0.7, y: '+=20', autoAlpha: 1 },
        '<.1'
      )

    const characters = gsap.timeline(timelineDefaults)
    characters
      .fromTo(
        groceries,
        { y: '-=20' },
        { duration: 0.7, y: '+=20', autoAlpha: 1 },
        '<'
      )
      .fromTo(
        deliveryBoy,
        { y: '-=20' },
        { duration: 0.7, y: '+=20', autoAlpha: 1 },
        '<.1'
      )
    const movingCharactersTimeline = gsap
      .timeline({ ease: 'back.easeOut' })
      .to(groceries, { scale: '1.1', duration: 1 }, 0)
      .pause()
    setMovingCharacters(movingCharactersTimeline)

    const master = gsap.timeline(timelineDefaults)
    master
      .add(depth1)
      .add(trees)
      .add(characters)

    return () => {}
  }, [])

  useEffect(() => {
    parallaxIt(docX, 200, 'hospital', -2, ref)
    parallaxIt(docX, docY, 'big_cloud', +6, ref)
    parallaxIt(docX, docY, 'small_cloud', +14, ref)
    parallaxIt(docX, docY, 'tree_1', +6, ref)
    parallaxIt(docX, docY, 'tree_2', +4, ref)
    parallaxIt(docX, docY, 'groceries', +3, ref)
    parallaxIt(docX, 200, 'grandma', -3, ref)
    parallaxIt(docX, 200, 'woman_1', -2, ref)
    parallaxIt(docX, 200, 'woman_2', -2, ref)
    parallaxIt(docX, 0, 'delivery_boy', +8, ref)
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
