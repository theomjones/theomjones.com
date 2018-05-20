import React from 'react'
import PropTypes from 'prop-types'

import classNames from './Github.module.css'

import Item from './Item'
import Api from '../../../Services/Api'

import Icon from '../../Icon'
import GithubIcon from '../../../img/icons/github.svg'
import Text from '../../Typography/Text/index'

const Github = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      loading: true,
    }
  }

  componentDidMount() {
    Api.getGithubActivity()
      .then(res => {
        console.log(res)
        this.setState(() => ({ items: res, loading: false }))
      })
      .catch(error => alert(error))
  }

  render() {
    return (
      <div className={classNames.Github}>
        <div className={classNames.Head}>
          <Icon
            src={GithubIcon}
            to="https://github.com/theomjones"
            alt="github icon"
          />
        </div>
        {this.state.loading ? (
          <Text>Loading...</Text>
        ) : (
          <div className={classNames.Items}>
            {this.state.items.map(i => (
              <Item
                key={i.time}
                name={i.name}
                type={i.type}
                url={i.url}
                time={i.time}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Github
