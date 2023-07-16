import { useSnapshot } from 'valtio'
import { useThree } from '@react-three/fiber'
import { Scroll, ScrollControls } from '@react-three/drei'
import Minimap from './Minimap'
import Item from './Item'

import store from '../store/index'
import { useRef } from 'react'

const Items = ({ w = 4, gap = 0.15 }) => {
	const { urls } = useSnapshot(store)
	const { width } = useThree(state => state.viewport)
	const xW = w + gap
	const group = useRef()

	return (
		<ScrollControls
			horizontal
			damping={0.1}
			pages={(width - xW + urls.length * xW) / width}
			style={{ overflow: 'hidden' }}>
			<Minimap />
			<Scroll ref={group}>
				{
					urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} group={group} />) /* prettier-ignore */
				}
			</Scroll>
		</ScrollControls>
	)
}
export default Items
