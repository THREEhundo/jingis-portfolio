import { proxy } from 'valtio'

const state = proxy({
	clicked: null,
	urls: [
		'JetpackCyberpunkPoster',
		'doorway',
		'gas-station',
		'neon',
		'orange',
		'shiba',
		'taj',
		'windy-road'
	].map(u => `./${u}.jpg`)
})

export default state
