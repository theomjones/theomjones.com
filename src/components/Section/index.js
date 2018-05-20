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
    this.handleCollapse = this.handleCollapse.bind(this)
  }

  handleCollapse() {
    if (this.props.canCollapse) {
      this.setState(ps => ({ collapsed: !ps.collapsed }))
    }
  }

  render() {
    const headerClasses = `${classNames.Header} ${
      this.props.canCollapse ? classNames.canCollapse : ''
    }`
    return (
      <div className={classNames.Section}>
        <div className={headerClasses} onClick={this.handleCollapse}>
          <Title
            title={this.props.title}
            h3
            size={this.props.size}
            weight={600}
            tertiary={this.props.subSection ? true : false}
          />
          {this.props.canCollapse && (
            <span
              className={classNames.Arrow}
              style={{
                transform: this.state.collapsed ? 'rotate(0)' : 'rotate(90deg)',
              }}
            >
              &#9656;
            </span>
          )}
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
  canCollapse: true,
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  collapsed: PropTypes.bool,
  size: PropTypes.string,
  subSection: PropTypes.bool,
  children: PropTypes.any.isRequired,
}
