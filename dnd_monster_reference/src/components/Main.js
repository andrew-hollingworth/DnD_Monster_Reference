import React from 'react'
import axios from 'axios'
import Info from './Info'
import List from './List'

class Main extends React.Component {
  state = {
    activeMonster: {}
  }
  handleClick = async (url) => {
    let data  = await axios (url)
    console.log('this is click data.data', data.data);
    localStorage.setItem(data.data.index, JSON.stringify(data))
    let monster = {}
    let keys = Object.keys(data.data)
    keys.map( (k) => {
      if (data.data[k]) { monster[k] = data.data[k]}
    })
    console.log('monster', monster);
    this.setState(prevState => ({
      activeMonster: monster
}))
  }

  render () {
    return (
      <div className='container'>
        <List
          handleClick={this.handleClick}/>
        <Info
          activeMonster={this.state.activeMonster}/>
      </div>
    )
  }
}

export default Main
