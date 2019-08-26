import React from 'react'

function Info(props) {
  return (
    <>
    {props.activeMonster && (
      <div className='info-container'>
        <h1 className='eaves'>{props.activeMonster.name}</h1>
        <p className='scaly-i'>{props.activeMonster.size}  {props.activeMonster.type} {props.activeMonster.subtype && (`(${props.activeMonster.subtype})`)}, {props.activeMonster.alignment}</p>
        <section>
          <p className='scaly-b'>Armor Class <span className='scaly'>{props.activeMonster.armor_class}</span></p>
          <p className='scaly-b'>Hit Points <span className='scaly'>{props.activeMonster.hit_points} ({props.activeMonster.hit_dice})</span></p>
          <p className='scaly-b'>Speed <span className='scaly'>{props.activeMonster.speed}</span></p>
        </section>
        <section className='stats'>
          <div className='indiv-stat scaly'>
            <p className='scaly-b'>STR</p>
            <p>{props.activeMonster.strength}</p>
          </div>
          <div className='indiv-stat scaly'>
            <p className='scaly-b'>DEX</p>
            <p>{props.activeMonster.dexterity}</p>
          </div>
          <div className='indiv-stat scaly'>
            <p className='scaly-b'>CON</p>
            <p>{props.activeMonster.constitution}</p>
          </div>
          <div className='indiv-stat scaly'>
            <p className='scaly-b'>INT</p>
            <p>{props.activeMonster.intelligence}</p>
          </div>
          <div className='indiv-stat scaly'>
            <p className='scaly-b'>WIS</p>
            <p>{props.activeMonster.wisdom}</p>
          </div>
          <div className='indiv-stat scaly'>
            <p className='scaly-b'>CHA</p>
            <p>{props.activeMonster.charisma}</p>
          </div>
        </section>
        <section>
          {/*SAVING THROW CONDITIONAL*/}
          {(props.activeMonster.strength_save ||
             props.activeMonster.dexterity_save || props.activeMonster.constitution_save || props.activeMonster.intelligence_save || props.activeMonster.wisdom_save || props.activeMonster.charisma_save) && (
          <p className='scaly'>
            <span className='scaly-b'>Saving Throws</span> {props.activeMonster.strength_save && (`STR +${props.activeMonster.strength_save} `)} {props.activeMonster.dexterity_save && (`DEX +${props.activeMonster.dexterity_save} `)}
            {props.activeMonster.constitution_save && (`CON +${props.activeMonster.constitution_save} `)}
            {props.activeMonster.intelligence_save && (`INT +${props.activeMonster.intelligence_save} `)}
            {props.activeMonster.wisdom_save && (`WIS +${props.activeMonster.wisdom_save} `)}
            {props.activeMonster.charisma_save && (`CHA  +${props.activeMonster.charisma_save}`)}
          </p>)}
          {/* SKILLS DISPLAY CONDITIONAL*/}
          {(props.activeMonster.athletics ||
            props.activeMonster.acrobatics ||
            props.activeMonster.sleight_of_hand ||
            props.activeMonster.stealth ||
            props.activeMonster.arcana ||
            props.activeMonster.history ||
            props.activeMonster.investigation ||
            props.activeMonster.nature ||
            props.activeMonster.religion ||
            props.activeMonster.animal_handling ||
            props.activeMonster.insight ||
            props.activeMonster.medicine ||
            props.activeMonster.perception ||
            props.activeMonster.survival ||
            props.activeMonster.deception ||
            props.activeMonster.intimidation ||
            props.activeMonster.performance ||
            props.activeMonster.persuasion) && (
          <p className='scaly'>
          <span className='scaly-b'>Skills</span> {props.activeMonster.athletics && (`Athletics +${props.activeMonster.athletics} `)}
          {props.activeMonster.acrobatics && (`Acrobatics +${props.activeMonster.acrobatics} `)}
          {props.activeMonster.sleight_of_hand && (`Sleight of Hand +${props.activeMonster.sleight_of_hand} `)}
          {props.activeMonster.stealth && (`Stealth +${props.activeMonster.stealth} `)}
          {props.activeMonster.arcana && (`Arcana +${props.activeMonster.arcana} `)}
          {props.activeMonster.history && (`History +${props.activeMonster.history} `)}
          {props.activeMonster.investigation && (`Investigation +${props.activeMonster.investigation} `)}
          {props.activeMonster.nature && (`Nature +${props.activeMonster.nature} `)}
          {props.activeMonster.religion && (`Religion +${props.activeMonster.religion} `)}
          {props.activeMonster.animal_handling && (`Animal Handling +${props.activeMonster.animal_handling} `)}
          {props.activeMonster.insight && (`Insight +${props.activeMonster.insight} `)}
          {props.activeMonster.medicine && (`Medicine +${props.activeMonster.medicine} `)}
          {props.activeMonster.perception && (`Perception +${props.activeMonster.perception} `)}
          {props.activeMonster.survival && (`Survival +${props.activeMonster.survival} `)}
          {props.activeMonster.deception && (`Deception +${props.activeMonster.deception} `)}
          {props.activeMonster.intimidation && (`Intimidation +${props.activeMonster.intimidation} `)}
          {props.activeMonster.performance && (`Performance +${props.activeMonster.performance} `)}
          {props.activeMonster.persuasion && (`Persuasion +${props.activeMonster.persuasion} `)}
          </p>)}
        </section>
      </div>
    )}
    </>
  )
}

export default Info
