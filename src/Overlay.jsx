const Overlay = () => {
	return (
		<div
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				pointerEvents: 'none',
				width: '100%',
				height: '100%'
			}}>
			<a
				href='https://johnkimmery.com/'
				style={{
					position: 'absolute',
					bottom: 40,
					left: 90,
					fontSize: '13px'
				}}>
				kimmery
			</a>
			<div
				style={{
					position: 'absolute',
					top: 40,
					left: 40,
					fontSize: '13px'
				}}>
				JOHN KIM —
			</div>
			<div
				style={{
					position: 'absolute',
					bottom: 40,
					right: 40,
					fontSize: '13px'
				}}>
				05/09/2023
			</div>
		</div>
	)
}

export default Overlay
