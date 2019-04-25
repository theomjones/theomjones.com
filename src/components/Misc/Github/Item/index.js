import React from 'react'
import PropTypes from 'prop-types'

import SourceIcon from '../../../../img/source.svg'
import classNames from './Item.module.css'
import Icon from '../../../Icon'

const Item = ({ name, type, time, url }) => {
  const date = new Date(time)
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={url}>
      <div className={classNames.Item}>
        <div className={classNames.Icon}>
          <Icon src={SourceIcon} size={15} alt="source control icon" />
        </div>
        <div className={classNames.Data}>
          <span className={classNames.Type}>{type}</span>
          <span className={classNames.Name}>{name}</span>
          <span
            className={classNames.Time}
          >{`${date
            .toLocaleTimeString()
            .substr(0, 5)} – ${date.toLocaleDateString()}`}</span>
        </div>
      </div>
    </a>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Item
