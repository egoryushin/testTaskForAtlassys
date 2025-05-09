import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'

import { GlobalStyle } from '../styles/global'
import { App } from './App'
import { withDnD } from './provider'

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			{withDnD(() => <App />)()}
		</Provider>
	</React.StrictMode>
)
