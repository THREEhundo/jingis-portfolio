import { proxy } from 'valtio'

const state = proxy({
	clicked: null,
	urls: [
		'JetpackCyberpunkPoster',
		'JetpackJane-TshirtPoster',
		'Littles-ShirtPoster',
		'LittlesInfused-Leafly-1920x1080',
		'Jetpacks-Web-Layout',
		'Jetpacks-BlackOrchidPoster',
		'Jetpacks-BananaPie-SugarPoster',
		'Jetpacks-ChemdawgxBruceBanner-DiamondsPoster'
		//'Jetpacks-ChemxAnimalCookies-Sugar-IndicaPoster',
		//'Jetpacks-CollinsAve-Sugar-HybridPoster',
		//'JetpacksCon-AppleBerry-Diamonds-IndicaPoster',
		//'JetpacksCon-BerryPie-Badder-SativaPoster',
		//'JetpacksCon-Dosilato-Sugar-IndicaPoster',
		//'JetpacksCon-Fatso-LiveResinSaucePoster',
		//'JetpacksCon-GG4-LiveResinSaucePoster',
		//'JetpacksCon-GrapefruitMimosa-Diamonds-HybridPoster',
		//'JetpacksCon-GrapesSoda-Sugar-HybridPoster',
		//'JetpacksCon-IceCreamCake-LiveResinSaucePoster',
		//'JetpacksCon-JupiterOG-Sugar-IndicaPoster',
		//'JetpacksCon-KushMints-Sugar-IndicaPoster',
		//'JetpacksCon-MandorinSunset-Diamonds-IndicaPoster',
		//'JetpacksCon-Melonade-Badder-SativaPoster',
		//'JetpacksCon-MelonCake-Badder-IndicaPoster',
		//'JetpacksCon-OrangeKrush-LiveResinSaucePoster',
		//'JetpacksCon-OrangeSherbet-Sugar-HybridPoster',
		//'JetpacksCon-PeachRings-Diamond-SativaPoster',
		//'JetpacksCon-PineappleOG-Diamonds-SativaPoster',
		//'JetpacksCon-StrawberryZkittles-Diamonds-IndicaPoster',
		//'JetpacksCon-SunsetSherbet-Badder-IndicaPoster',
		//'JetpacksCon-THCBomb-Sugar-IndicaPoster',
		//'JetpacksCon-WC-LiveResinSaucePoster',
		//'JetpacksCon-ZCube-Diamonds-IndicaPoster',
		//'Jetpacks-Gelato-DiamondsPoster',
		//'Jetpacks-GG4-DiamondsPoster',
		//'Jetpacks-HiDefxOGKPoster',
		//'Jetpacks-Kashmir-DiamondsPoster',
		//'Jetpacks-Kudos-DiamondsPoster',
		//'Jetpacks-LemonLarryLavaCake-LRDPoster',
		//'Jetpacks-OrangeCake-LiveResinDiamonds-HybridPoster',
		//'Jetpacks-OrangeSunsetPoster',
		//'Jetpacks-PeachGuava2-SugarPoster',
		//'Jetpacks-PeachGuava-Sugar-SativaPoster',
		//'Jetpacks-PinkCookies-LiveResinSaucePoster',
		//'Jetpacks-SherbetPoster',
		//'Jetpacks-SlurricanePoster',
		//'Jetpacks-TrueOG-LiveResinSaucePoster',
		//'Jetpacks-WeddingCake-Diamonds-HybridPoster'
	].map((u, i) => (i == 1 || i == 2 ? `./${u}.png` : `./${u}.jpg`))
})

export default state
