/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Allows for hash links
exports.onRouteUpdate = location => {
  if (location.hash) {
    setTimeout(() => {
      document
        .querySelector(`${location.hash}`)
        .scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }
}
