import React from 'react';

function Info(props) {
  return (
    <>
      {props.activeMonster && (
        <div className='info-container'>
          <div className='name'>
            <h1 className='eaves'>{props.activeMonster.name}</h1>
            <button className='encounter-button' onClick={() => props.handleEncounterClick()}><i className="fas fa-dragon"><span className='eaves button-text'> Add to Encounter</span></i></button>
          </div>
          <p className='scaly-i black-text'>{props.activeMonster.size}  {props.activeMonster.type} {props.activeMonster.subtype && (`(${props.activeMonster.subtype})`)}, {props.activeMonster.alignment}</p>
          <div className='divider'></div>
          <section>
            <p className='scaly-b'>Armor Class <span className='scaly'>{props.activeMonster.armor_class}</span></p>
            <p className='scaly-b'>Hit Points <span className='scaly'>{props.activeMonster.hit_points} ({props.activeMonster.hit_dice})</span></p>
            <p className='scaly-b'>Speed <span className='scaly'>{props.activeMonster.speed.walk && (`${props.activeMonster.speed.walk}`)}
              {props.activeMonster.speed.fly && (`, fly ${props.activeMonster.speed.fly}`)}
              {props.activeMonster.speed.swim && (`, swim ${props.activeMonster.speed.swim}`)}</span></p>
          </section>
          <div className='divider'></div>
          <section className='stats'>
            <div className='indiv-stat str scaly'>
              <p className='scaly-b'>STR</p>
              <p>{props.activeMonster.strength} ({Math.floor((props.activeMonster.strength / 2)) - 5})</p>
            </div>
            <div className='indiv-stat scaly'>
              <p className='scaly-b'>DEX</p>
              <p>{props.activeMonster.dexterity} ({Math.floor((props.activeMonster.dexterity / 2)) - 5})</p>
            </div>
            <div className='indiv-stat scaly'>
              <p className='scaly-b'>CON</p>
              <p>{props.activeMonster.constitution} ({Math.floor((props.activeMonster.constitution / 2)) - 5})</p>
            </div>
            <div className='indiv-stat scaly'>
              <p className='scaly-b'>INT</p>
              <p>{props.activeMonster.intelligence} ({Math.floor((props.activeMonster.intelligence / 2)) - 5})</p>
            </div>
            <div className='indiv-stat scaly'>
              <p className='scaly-b'>WIS</p>
              <p>{props.activeMonster.wisdom} ({Math.floor((props.activeMonster.wisdom / 2)) - 5})</p>
            </div>
            <div className='indiv-stat scaly'>
              <p className='scaly-b'>CHA</p>
              <p>{props.activeMonster.charisma} ({Math.floor((props.activeMonster.charisma / 2)) - 5})</p>
            </div>
          </section>
          <div className='divider'></div>
          <section>
            {/* SAVING THROW CONDITIONAL */}
            {(props.activeMonster.strength_save
              || props.activeMonster.dexterity_save || props.activeMonster.constitution_save || props.activeMonster.intelligence_save || props.activeMonster.wisdom_save || props.activeMonster.charisma_save) && (
                <p className='scaly'>
                  <span className='scaly-b'>Saving Throws</span> {props.activeMonster.strength_save && (`STR +${props.activeMonster.strength_save} `)} {props.activeMonster.dexterity_save && (`DEX +${props.activeMonster.dexterity_save} `)}
                  {props.activeMonster.constitution_save && (`CON +${props.activeMonster.constitution_save} `)}
                  {props.activeMonster.intelligence_save && (`INT +${props.activeMonster.intelligence_save} `)}
                  {props.activeMonster.wisdom_save && (`WIS +${props.activeMonster.wisdom_save} `)}
                  {props.activeMonster.charisma_save && (`CHA  +${props.activeMonster.charisma_save}`)}
                </p>)}
            { /*  SKILLS DISPLAY CONDITIONAL */}
            {(props.activeMonster.athletics
              || props.activeMonster.acrobatics
              || props.activeMonster.sleight_of_hand
              || props.activeMonster.stealth
              || props.activeMonster.arcana
              || props.activeMonster.history
              || props.activeMonster.investigation
              || props.activeMonster.nature
              || props.activeMonster.religion
              || props.activeMonster.animal_handling
              || props.activeMonster.insight
              || props.activeMonster.medicine
              || props.activeMonster.perception
              || props.activeMonster.survival
              || props.activeMonster.deception
              || props.activeMonster.intimidation
              || props.activeMonster.performance
              || props.activeMonster.persuasion) && (
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
            {/* DAMAGE VULNERABILITIES (CONDITIONAL) */}
            {props.activeMonster.damage_vulnerabilities && (
              <p className='scaly'>
                <span className='scaly-b'>Damage Vulnerabilities</span> {props.activeMonster.damage_vulnerabilities}
              </p>)}
            {/* DAMAGE RESISTANCES (CONDITIONAL) */}
            {props.activeMonster.damage_resistances && (
              <p className='scaly'>
                <span className='scaly-b'>Damage Resistances</span> {props.activeMonster.damage_resistances}
              </p>)}
            {/* DAMAGE IMMUNITIES (CONDITIONAL) */}
            {props.activeMonster.damage_immunities && (
              <p className='scaly'>
                <span className='scaly-b'>Damage Immunities</span> {props.activeMonster.damage_immunities}
              </p>)}
            {/* CONDITION IMMUNITIES (CONDITIONAL) */}
            {props.activeMonster.condition_immunities && (
              <p className='scaly'>
                <span className='scaly-b'>Condition Immunities</span> {props.activeMonster.condition_immunities}
              </p>)}
            {/* SENSES (CONDITIONAL) */}
            {props.activeMonster.senses && (
              <p className='scaly'>
                <span className='scaly-b'>Senses </span>
                {props.activeMonster.senses.darkvision && (`Darkvision ${props.activeMonster.senses.darkvision} `)}
                {props.activeMonster.senses.blindsight && (`Blindsight ${props.activeMonster.senses.blindsight} `)}
                {props.activeMonster.senses.tremorsense && (`Tremorsense ${props.activeMonster.senses.tremorsense} `)}
                {props.activeMonster.senses.truesight && (`Truesight ${props.activeMonster.senses.truesight} `)}
              </p>)}
            {/* LANGUAGES (CONDITIONAL) */}
            {props.activeMonster.languages && (
              <p className='scaly'>
                <span className='scaly-b'>Languages</span> {props.activeMonster.languages}
              </p>)}
            {/* CHALLENGE RATING (CONDITIONAL) */}
            {props.activeMonster.challenge_rating && (
              <p className='scaly'>
                <span className='scaly-b'>Challenge Rating</span> {props.activeMonster.challenge_rating}
              </p>)}
          </section>
          <div className='divider'></div>
          <section>
            {props.activeMonster.special_abilities && (props.activeMonster.special_abilities.map((special, i) => (
              <p key={i} className='scaly black-text'><span className='scaly-b black-text'>{special.name}</span> {special.desc}</p>
            )))}
          </section>
          {/* ACTIONS =========================== */}
          <section>
            <h2 className='scaly action'>Actions</h2>
            {props.activeMonster.actions
              && (props.activeMonster.actions.map((action, i) => (
                <React.Fragment key={i}>
                  <p className='scaly black-text'><span className='scaly-b black-text'>{action.name}</span> {action.desc}</p>
                </React.Fragment>
              )))}
          </section>
          {/* REACTIONS =========== CONDITIONAL */}
          {props.activeMonster.reactions && (
            <section>
              <h2 className='scaly action'>Reactions</h2>
              {props.activeMonster.reactions.map((reaction, i) => (
                <>
                  <p key={i} className='scaly black-text'><span className='scaly-b black-text'>{reaction.name}</span> {reaction.desc}</p>
                </>
              ))}
            </section>)}
          {/* LEGENDARY ACTIONS =========== CONDITIONAL */}
          {props.activeMonster.legendary_actions && (
            <section>
              <h2 className='scaly action'>Legendary Actions</h2>
              <p className='scaly black-text'>The {props.activeMonster.type} can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The {props.activeMonster.type} regains spent legendary actions at the start of its turn.</p>
              {props.activeMonster.legendary_actions.map((action, i) => (
                <>
                  <p key={i} className='scaly black-text'><span className='scaly-b black-text'>{action.name}</span> {action.desc}</p>
                </>
              ))}
            </section>)}
        </div>
      )}
    </>
  );
}

export default Info;
