import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { setSearchTerm } from './actionCreators'
import Search, { Unwrapped as UnwrappedSearch } from './Search'
// import renderer from 'react-test-renderer'
import { shallow, render } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

// test('Search snapshot test', () => {
//   const componnet = renderer.create(<Search />)
//   const tree = componnet.toJSON()
//   expect(tree).toMatchSnapshot()
// })


test('Search snapshot test', () => {
  const componnet = shallow(<UnwrappedSearch shows={preload.shows} searchTerm=''/>)
  const tree = shallowToJson(componnet)
  expect(tree).toMatchSnapshot()
})

test('Search should render a ShowCard for each show',() => {
  const componnet = shallow(<UnwrappedSearch shows={preload.shows} searchTerm=''/>)
  expect(preload.shows.length).toEqual(componnet.find(ShowCard).length)
})

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house';
  store.dispatch(setSearchTerm(searchWord))
  const componnet = render(<Provider store={store}><Search shows={preload.shows} /></Provider>)
  const showCount = preload.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length
  expect(componnet.find('.show-card').length).toEqual(showCount)
  // const componnet = shallow(<Search />)
  // componnet.find('input').simulate('change', {target: {value:searchWord}})
  // const showCount = preload.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0).length
  // expect(componnet.find(ShowCard).length).toEqual(showCount)
})