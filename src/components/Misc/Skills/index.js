import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Skills.module.css'
import Skill from './Skill'
import Section from '../../Section'
import data from './data'

const Skills = ({ children }) => (
  <div>
    <Section title="Code" size="16px" subSection>
      <div className={classNames.Skills}>
        {data.code.map(el => <Skill title={el.title} img={el.img} />)}
      </div>
    </Section>
    <Section title="Frameworks" size="16px" subSection>
      <div className={classNames.Skills}>
        {data.frameworks.map(el => <Skill title={el.title} img={el.img} />)}
      </div>
    </Section>
    <Section title="Other" size="16px" subSection collapsed>
      <div className={classNames.Skills}>
        {data.other.map(el => <Skill title={el.title} img={el.img} />)}
      </div>
    </Section>
    <Section title="Design" size="16px" subSection collapsed>
      <div className={classNames.Skills}>
        {data.design.map(el => <Skill title={el.title} img={el.img} />)}
      </div>
    </Section>
  </div>
)

Skills.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Skills
