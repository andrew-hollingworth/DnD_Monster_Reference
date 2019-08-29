import React from 'react'
import axios from 'axios'
import Info from './Info'
import ListCollapse from './ListCollapse'
import NavLinks from './NavLinks'
import Search from './Search'
import List from './List'
import About from './About'
import Encounter from './Encounter'
import { Switch, Route } from 'react-router-dom'

class Main extends React.Component {
  state = {
    activeMonster: null,
    url: 'http://www.dnd5eapi.co/api/monsters',
    monsterList: [],
    value: '',
    encounter: [],
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
    let monster = {}
    let keys = Object.keys(data.data)
    keys.map( (k) => {
        if (data.data[k]) { monster[k] = data.data[k]}
    })
    this.setState(prevState => ({
      activeMonster: monster
    }))
  }

  // ENCOUNTER BUILDER (WIP)
  handleEncounterClick = () => {
    localStorage.setItem(this.state.activeMonster._id, JSON.stringify(this.state.activeMonster))
    this.setState(() => ({
      encounter: [...this.state.encounter, this.state.activeMonster]
    }))
  }

  // STAT MODIFIER CALC
  abilityModifier = (input) => {
    return (-5 + Math.floor(input/2))
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
      <div className='desktop'>
        <h1 className='nodesto title'>Dungeons & Dragons Monster Reference</h1>
        <NavLinks />
        <Search
          handleChange={this.handleSearchChange}/>
        <List
          handleClick={this.handleMonsterClick}

          monsterList={this.state.monsterList}
          value={this.state.value}/>
        <Switch>
          <Route path='/about' component={ About }/>
          <Route path='/encounter' render={() =>
            <Encounter {...this.state.encounter}
              encounter={this.state.encounter}/>}/>
          <Route exact path='/'
            render={() =>
              <Info {...this.state.activeMonster}
                activeMonster={this.state.activeMonster}
                abilityModifier={this.abilityModifier}
                handleEncounterClick ={this.handleEncounterClick}/>}/>
        </Switch>
      </div>
        <ListCollapse
          handleChange={this.handleSearchChange}
          handleClick={this.handleMonsterClick}
          monsterList={this.state.monsterList}
          value={this.state.value} />
      <div className='mobile'>
        <Switch>
          <Route path='/about' component={ About }/>
          <Route path='/encounter' render={() =>
            <Encounter {...this.state.encounter}
              encounter={this.state.encounter}/>}/>
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
