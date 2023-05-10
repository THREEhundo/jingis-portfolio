import { Canvas } from '@react-three/fiber'
import Items from './Items'
import store from '../store/index'

const CanvasModel = () => {
	return (
		<Canvas
			gl={{ antialias: false }}
			dpr={[1, 1.5]}
			onPointerMissed={() => (store.clicked = null)}>
			<Items />
		</Canvas>
	)
}

export default CanvasModel
