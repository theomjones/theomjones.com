import parseGithubData from '../Utils/ParseGithub'

export default {
  sendEmail(email) {
    return new Promise((resolve, reject) => {
      window
        .fetch(
          'https://us-central1-portfolio-84a75.cloudfunctions.net/sendMail',
          {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({ email }),
          }
        )
        .then(res => res.text())
        .then(s => resolve(s))
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
