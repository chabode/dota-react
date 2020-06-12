import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import FavouriteList from './pages/favouriteList'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("testing dom app", () => {
  //1
  test('should render Dota Heroes List', () => {
    const { getByText } = render(<App />)
    const pageTitle = getByText('Dota Heroes List')
    expect(pageTitle).toBeInTheDocument()
  })

  //2
  test('should contain element with that contain "dota heroes list"', () => {
    const { getByTestId } = render(<App/>)
    // const testId = getByTestId('table-dota')
    const heroesDota = getByTestId('heroes-dota')
    
    expect(heroesDota).toBeInTheDocument()
    expect(heroesDota).toHaveTextContent(/dota heroes list/i)
    
  })

  //3
  test('should render table list', () => {
    const { getByTestId } = render(<App/>)
    
    const tableDota = getByTestId('table-dota')

    expect(tableDota).toBeInTheDocument()
    expect(tableDota).toHaveTextContent(/name/i)
    expect(tableDota).toHaveTextContent(/winrate/i)
  })
})

describe('Async api', () => {
  test('should show data from API', (done) => {
    const { getByText, findByText, container} = render(<App/>)

    findByText('Anti-Mage')
    .then(element => {
      const child = container.querySelectorAll('tr')
      expect(element).toBeInTheDocument()
      expect(child).toHaveLength(120)
      expect(getByText('Anti-Mage')).toBeInTheDocument()
      done()
    })
  })

  /* 
  ini niatnya buat ngecek button show detail yg ada didalem table. pake getAll/queryAll
  dapetnya array bukan single element html. pake get/query bilangnya ada tp kena multiple. 

  test('should show button action from API', (done) => {
    const { getByText, findByText, container, queryAllByRole} = render(<App/>)

    // const button = getByDisplayValue(/show detail/i)
    findByText('Anti-Mage')
    .then(element => {
      const child = container.querySelectorAll('tr')
      expect(element).toBeInTheDocument()
      expect(queryAllByRole('button')).toBeInTheDocument()
      expect(getByText('Anti-Mage')).toBeInTheDocument()
      done()
    })
  })
  */
})