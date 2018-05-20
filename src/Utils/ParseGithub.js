export default data => {
  return data.map(item => {
    let type
    switch (item.type) {
      case 'PushEvent':
        type = 'Pushed'
        break
      case 'WatchEvent':
        type = 'Watched'
        break
      case 'CreateEvent':
        type = 'Created'
        break
      case 'PullEvent':
        type = 'Pulled'
        break
      default:
        type = item.type
        break
    }
    return {
      type: type,
      url: 'https://github.com/' + item.repo.name,
      time: item.created_at,
      name: item.repo.name,
    }
  })
}
