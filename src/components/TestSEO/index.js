import React from 'react'
import Link from 'gatsby-link'

const Links = () => (
  <div>
    <Link to="#one">One</Link>
    <Link to="#two">Two</Link>
    <Link to="#three">Three</Link>
  </div>
)

export default class TestSEO extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div ref="one" style={{ height: '100vh', width: '100vw' }}>
          <Links />
          PAGE 1
        </div>
        <div id="two" style={{ height: '100vh', width: '100vw' }}>
          <Links />
          PAGE 2 Donec sed odio dui. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Nullam quis risus eget urna mollis
          ornare vel eu leo. Donec sed odio dui. Donec ullamcorper nulla non
          metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut
          id elit. Duis mollis, est non commodo luctus, nisi erat porttitor
          ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis
          interdum. Cras mattis consectetur purus sit amet fermentum. Sed
          posuere consectetur est at lobortis. Maecenas sed diam eget risus
          varius blandit sit amet non magna. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare
          vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et.
        </div>
        <div id="three" style={{ height: '100vh', width: '100vw' }}>
          <Links />
          PAGE 3 Donec ullamcorper nulla non metus auctor fringilla. Sed posuere
          consectetur est at lobortis. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Nullam quis risus eget urna mollis
          ornare vel eu leo. Donec sed odio dui. Fusce dapibus, tellus ac cursus
          commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
          amet risus.
        </div>
      </div>
    )
  }
}
