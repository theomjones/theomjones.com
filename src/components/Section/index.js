import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classNames from './Section.module.css'

import { Title } from '../Typography/'

export default class Section extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: props.collapsed,
    }
  }
  render() {
    return (
      <div className={classNames.Section}>
        <div
          className={classNames.Header}
          onClick={() => this.setState(ps => ({ collapsed: !ps.collapsed }))}
        >
          <Title
            title={this.props.title}
            h3
            size={this.props.size}
            weight={600}
          />
          <span
            className={classNames.Arrow}
            style={{
              transform: this.state.collapsed ? 'rotate(0)' : 'rotate(90deg)',
            }}
          >
            &#9656;
          </span>
        </div>

        {!this.state.collapsed && (
          <div className={classNames.Content}>{this.props.children}</div>
        )}
      </div>
    )
  }
}

Section.defaultProps = {
  collapsed: false,
  size: '50%',
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  collapsed: PropTypes.bool,
  children: PropTypes.any.isRequired,
}
