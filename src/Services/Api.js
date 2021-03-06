import parseGithubData from '../Utils/ParseGithub'

let mailUrl = process.env.EMAIL_URL

export default {
  sendEmail(email) {
    return new Promise((resolve, reject) => {
      window
        .fetch(mailUrl, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          // mode: 'cors',
          body: JSON.stringify({ email }),
        })
        .then(res => res.json())
        .then(json => {
          resolve(json)
        })
        .catch(e => reject(e))
    })
  },
  getGithubActivity() {
    return new Promise((resolve, reject) => {
      window
        .fetch(
          'https://api.github.com/users/theomjones/events?page=1&per_page=5'
        )
        .then(res => res.json())
        .then(json => {
          resolve(parseGithubData(json))
        })
        .catch(error => reject(error))
    })
  },
}
