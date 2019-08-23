import React from 'react'
import axios from 'axios'

class List extends React.Component {
  state = {
    url: 'http://www.dnd5eapi.co/api/monsters',
    mList: []
  }

  getMonsters = async () => {
    let data  = await axios (this.state.url)
    console.log('this is data.data.results', data.data.results);
    this.setState(prevState => ({
    mList: data.data.results
    }))
  }

  componentDidMount() {
    this.getMonsters()
  }

  render(){
    let monsterList = this.state.mList.map((d, i) => {
        return <li key={i}><button onClick={() => this.props.handleClick(d.url)}>{d.name}</button></li>
      })
    return(
    <div className='monsterList'>
      <h2 className='scaly-b-i'>Monster List</h2>
      {monsterList}
    </div>
  )}
}

export default List
