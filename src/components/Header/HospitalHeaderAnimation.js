import React, { useEffect, useRef, useState } from 'react'
import { useMouse } from 'react-use'
import styled from 'styled-components'
import gsap from 'gsap'

import range from 'lodash/range'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

import { ReactComponent as Hospital } from 'assets/categories/hospital.svg'
import { parallaxIt } from '../../utils/helpers/ParallaxItHelper';

const Stage = styled.div`
  width: 100%;
`;

const SVGSprite = styled(Hospital)`
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
    const hospital = document.getElementById('hospital_2')
    const boxTop = document.getElementById('box_top')
    const boxMiddle = document.getElementById('box_middle')
    const boxBottom = document.getElementById('box_bottom')
    const maskBox = document.getElementById('mask_box')
    const deliveryBoy = document.getElementById('delivery_boy')
    const shelf = document.getElementById('shelf')
    const sousChef = document.getElementById('sous_chef')
    const car = document.getElementById('car')
    const girlSewingMask = document.getElementById('girl_sewing_mask')
    const chef = document.getElementById('chef')
    const groundUp = document.getElementById('ground_up')
    const groundDown = document.getElementById('ground_down')

    gsap.set([
      hospital,
      boxTop,
      boxMiddle,
      boxBottom,
      maskBox,
      deliveryBoy,
      shelf,
      sousChef,
      car,
      girlSewingMask,
      chef,
      groundUp,
      groundDown,
    ], {
      autoAlpha: 0
    })

    const depth1 = gsap.timeline(timelineDefaults)
    depth1
      .fromTo(groundUp, { x: '-=40' }, { duration: 0.7, x: '+=40', autoAlpha: 1, delay: 1})
      .fromTo(groundDown, { x: '+=40' }, { duration: 0.7, x: '-=40', autoAlpha: 1 }, '<')

    const itemsAndCharacters = gsap.timeline(timelineDefaults)
    itemsAndCharacters
      //groundUp
      //boxes
      .fromTo(boxBottom, { y: '-=20' }, { duration: 0.7, y: '+=20', autoAlpha: 1 })
      .fromTo(boxMiddle, { y: '-=20' }, { duration: 0.7, y: '+=20', autoAlpha: 1 }, '<.1')
      .fromTo(boxTop, { y: '-=20' }, { duration: 0.7, y: '+=20', autoAlpha: 1 }, '<.1')
      //sewing
      .fromTo(girlSewingMask, { y: '-=20' }, { duration: 0.7, y: '+=20', autoAlpha: 1 }, '<.2')
      .fromTo(maskBox, { y: '-=20' }, { duration: 0.7, y: '+=20', autoAlpha: 1 }, '<.1')
      //delivery
      .fromTo(deliveryBoy, { x: '+=20' }, { duration: 0.7, x: '-=20', autoAlpha: 1 }, '<.4')
      //groundDown
      //sousChef
      .fromTo(shelf, { x: '-=20' }, { duration: 0.7, x: '+=20', autoAlpha: 1 }, '<.3')
      .fromTo(sousChef, { x: '-=20' }, { duration: 0.7, x: '+=20', autoAlpha: 1 }, '<.1')
      //chef
      .fromTo(chef, { x: '-=20' }, { duration: 0.7, x: '+=20', autoAlpha: 1 }, '<.4')
      //delivery
      .fromTo(car, { x: '-=20' }, { duration: 0.7, x: '+=20', autoAlpha: 1 }, '<.4')
      //hospital
      .fromTo(hospital, { y: '+=20' }, { duration: 0.7, y: '-=20', autoAlpha: 1 }, '<.3')

    const movingCharactersTimeline = gsap
      .timeline({ ease: 'back.easeOut' })
      .pause()
    setMovingCharacters(movingCharactersTimeline)

    const master = gsap.timeline(timelineDefaults)
    master
      .add(depth1)
      .add(itemsAndCharacters)

    return () => {}
  }, [])

  useEffect(() => {
    parallaxIt(docX, 200, 'stack_of_boxes', +3, ref)
    parallaxIt(docX, 200, 'girl_sewing_mask', +1, ref)
    parallaxIt(docX, 200, 'hospital_2', -2, ref)
    parallaxIt(docX, 200, 'mask_box', +3, ref)
    parallaxIt(docX, 200, 'delivery_boy', -4, ref)
    parallaxIt(docX, 200, 'chef', +2, ref)
    parallaxIt(docX, 200, 'sous_chef', -1, ref)
    parallaxIt(docX, 200, 'shelf', -1, ref)
    parallaxIt(docX, 200, 'car', -5, ref)
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
