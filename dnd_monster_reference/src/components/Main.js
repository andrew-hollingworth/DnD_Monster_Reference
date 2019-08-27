import React from 'react'
import axios from 'axios'
import Header from './Header'
import Info from './Info'
import List from './List'
import About from './About'
import { Switch, Route } from 'react-router-dom'

class Main extends React.Component {
  state = {
    activeMonster: null,
    url: 'http://www.dnd5eapi.co/api/monsters',
    monsterList: [],
    value: '',
    matched: []
  }

// SEARCH FILTER
  handleSearchChange = (e) => {
    let value = e.target.value
    this.setState(prevState => ({
      value
    }))
  }

// MONSTER SELECTION FROM LIST/NEW API CALL
  handleMonsterClick = async (url) => {
    let data  = await axios (url)
    localStorage.setItem(data.data.index, JSON.stringify(data))
    let monster = {}
    let keys = Object.keys(data.data)
    keys.map( (k) => {
      if (data.data[k]) { monster[k] = data.data[k]}
    })
    this.setState(prevState => ({
      activeMonster: monster
    }))
  }

// MONSTER LIST API CALL
  getMonsters = async () => {
    let data  = await axios (this.state.url)
    this.setState(prevState => ({
    monsterList: data.data.results
    }))
  }

  componentDidMount() {
    this.getMonsters()
  }

  render () {
    return (
    <React.Fragment>
      <Header handleChange={this.handleSearchChange}/>
      <div className='container'>
        <List
          handleClick={this.handleMonsterClick}
          monsterList={this.state.monsterList}
          value={this.state.value}/>
        <Switch>
          <Route path='/about' component={About}/>
          <Route exact path='/'
              render={() =>
                <Info {...this.state.activeMonster}
                  activeMonster={this.state.activeMonster}/>}/>
        </Switch>
      </div>
    </React.Fragment>
    )
  }
}

export default Main
