import { render, screen } from '@testing-library/react'
import it from 'date-fns/esm/locale/it/index.js'
import { describe } from 'node:test'
import About from '../pages/about'

describe('Home', ()=> {
	it('renders a heading', ()=> {
		render(<About />)

		const heading = screen.getByRole('heading', {
			name: 'About',
		})

		expect(heading).toBeInTheDocument()
	})
})