import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Image, useScroll } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { damp } from 'three/src/math/MathUtils'

import store from '../store/index'

const centeredOffset = [
	0, 0.13822435547837197, 0.27644871095674395, 0.414673066435116,
	0.5528974219134879, 0.6911217773918599, 0.829346132870232,
	0.9675704883486039, 1.0005316645847058
]

const centeredScrollPosition = [
	0, 0.13815090553455422, 0.27630181106910845, 0.4144527166036627,
	0.5802337870296237, 0.7205101397573755, 0.8607864114076071, 1
]

const Item = ({
	index,
	position,
	scale,
	c = new THREE.Color(),
	width,
	...props
}) => {
	const ref = useRef()
	const scroll = useScroll()

	const { clicked, urls } = useSnapshot(store)
	const [hovered, hover] = useState(false)

	const click = () => (store.clicked = index === clicked ? null : index)
	const over = () => hover(true)
	const out = () => hover(false)

	useFrame((state, delta) => {
		// Calculate a value for "y" using the "curve" method from the useScroll hook
		const y = scroll.curve(
			index / urls.length - 1.5 / urls.length,
			4 / urls.length
		)

		// Update the scale of the material and the component based on "x" and "clicked"
		ref.current.material.scale[0] = ref.current.scale.x = damp(
			ref.current.scale.x,
			clicked === index ? 5 : scale[0],
			6,
			delta
		)

		// Update the scale of the material and the component based on "y" and "clicked"
		ref.current.material.scale[1] = ref.current.scale.y = damp(
			ref.current.scale.y,
			clicked === index ? 4.7 : 4 + y,
			8,
			delta
		)

		//ref.current.position.x = scroll.range(0, 1 / 3, -1 / 3, 1 / 3, true)

		// Move the component to the left or right if it is not clicked and is before or after the clicked index
		// Move the component back to its original position if it is clicked or if nothing is clicked
		if (clicked !== null && index < clicked)
			ref.current.position.x = damp(
				ref.current.position.x,
				position[0] - 2,
				6,
				delta
			)
		if (clicked !== null && index > clicked)
			ref.current.position.x = damp(
				ref.current.position.x,
				position[0] + 2,
				6,
				delta
			)
		if (clicked === null || clicked === index)
			ref.current.position.x = damp(
				ref.current.position.x,
				position[0],
				6,
				delta
			)

		// Center image to viewport when clicked
		if (clicked !== null && clicked === index) {
			centeredScrollPosition.map((targetScrollPosition, i) => {
				if (i === index) {
					scroll.scroll.current = damp(
						scroll.scroll.current,
						targetScrollPosition,
						6,
						delta
					)
				}
			})
		}

		// Update the grayscale of the material based on "hovered", "clicked", and "y"
		ref.current.material.grayscale = damp(
			ref.current.material.grayscale,
			hovered || clicked === index ? 0 : Math.max(0, 1 - y),
			6,
			delta
		)

		// Update the color of the material based on "hovered" or "clicked"
		ref.current.material.color.lerp(
			c.set(hovered || clicked === index ? 'white' : '#aaa'),
			hovered ? 0.3 : 0.1
		)
	})
	return (
		<Image
			ref={ref}
			{...props}
			position={position}
			scale={scale}
			onClick={click}
			onPointerOver={over}
			onPointerOut={out}
			className='overflow-hidden'
		/>
	)
}

export default Item
