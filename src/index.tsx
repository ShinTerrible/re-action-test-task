import * as ReactDOMClient from 'react-dom/client'
import { App } from './components/app/_app'
import { StrictMode } from 'react'
import store from './services/store'
import { Provider } from 'react-redux'

const container = document.getElementById('root') as HTMLElement
const root = ReactDOMClient.createRoot(container!)

root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
)
