import { proxy } from 'valtio'

const state = proxy({
	clicked: null,
	urls: [
		'JetpackCyberpunkPoster',
		'JetpackJane-Tshirt',
		'Littles-Shirt',
		'LittlesInfused-Leafly-1920x1080',
		'Jetpacks-BlackOrchid',
		'Jetpacks-BananaPie-Sugar',
		'Jetpacks-ChemdawgxBruceBanner-Diamonds',
		'Jetpacks-ChemxAnimalCookies-Sugar-Indica'
	].map((u, i) => (i == 1 ? `./${u}.png` : `./${u}.jpg`))
})

export default state
