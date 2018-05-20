const data = [
  {
    id: '7694690781',
    type: 'WatchEvent',
    actor: {
      id: 11282659,
      login: 'theomjones',
      display_login: 'theomjones',
      gravatar_id: '',
      url: 'https://api.github.com/users/theomjones',
      avatar_url: 'https://avatars.githubusercontent.com/u/11282659?',
    },
    repo: {
      id: 126376543,
      name: 'walteribeiro/full-react-snippets',
      url: 'https://api.github.com/repos/walteribeiro/full-react-snippets',
    },
    payload: {
      action: 'started',
    },
    public: true,
    created_at: '2018-05-18T09:34:53Z',
  },
  {
    id: '7684461042',
    type: 'PushEvent',
    actor: {
      id: 11282659,
      login: 'theomjones',
      display_login: 'theomjones',
      gravatar_id: '',
      url: 'https://api.github.com/users/theomjones',
      avatar_url: 'https://avatars.githubusercontent.com/u/11282659?',
    },
    repo: {
      id: 133685219,
      name: 'theomjones/react-webpack-starter',
      url: 'https://api.github.com/repos/theomjones/react-webpack-starter',
    },
    payload: {
      push_id: 2569472182,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '76319c06f06add694d543c334e697659b1475be3',
      before: 'fbdc1aec55340bfa7cd42c02d384db92bbd8f52b',
      commits: [
        {
          sha: '76319c06f06add694d543c334e697659b1475be3',
          author: {
            email: 'theomjones@gmail.com',
            name: 'Theo M Jones',
          },
          message: 'added page creator',
          distinct: true,
          url:
            'https://api.github.com/repos/theomjones/react-webpack-starter/commits/76319c06f06add694d543c334e697659b1475be3',
        },
      ],
    },
    public: true,
    created_at: '2018-05-16T16:23:25Z',
  },
]

const parseData = data => {
  return data.map(item => ({
    action: item.payload.action,
    url: item.repo.url,
    time: item.created_at,
    name: item.repo.name,
  }))
}
