import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd/dist/core'

export const withDnD = (component: () => React.ReactNode) => () =>
	<DndProvider backend={HTML5Backend}>{component()}</DndProvider>
