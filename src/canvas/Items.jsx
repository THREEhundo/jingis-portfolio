import { useSnapshot } from 'valtio'
import { useThree } from '@react-three/fiber'
import { Scroll, ScrollControls } from '@react-three/drei'
import Minimap from './Minimap'
import Item from './Item'

import store from '../store/index'

const Items = ({ w = 1, gap = 0.15 }) => {
	const { urls } = useSnapshot(store)
	const { width } = useThree(state => state.viewport)
	const xW = w + gap
	console.log((width - xW + urls.length * xW) / width)
	return (
		<ScrollControls
			horizontal
			damping={0.1}
			pages={(width - xW + urls.length * xW) / width}
			style={{ overflow: 'hidden' }}>
			<Minimap />
			<Scroll>
				{
					urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} width={width} />) /* prettier-ignore */
				}
			</Scroll>
		</ScrollControls>
	)
}
export default Items
