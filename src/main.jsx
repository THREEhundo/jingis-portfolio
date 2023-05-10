import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import './index.css'
import App from './App'
import Overlay from './Overlay'

createRoot(document.getElementById('root')).render(
	<>
		<Suspense fallback={null}>
			<App />
		</Suspense>
		<Overlay />
	</>
)
