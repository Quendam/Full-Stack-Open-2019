const blogs = [
  {
    'likes': 10,
    'title': 'Testailu blog xi',
    'url': 'http://www.testin.lo/asdf',
    'user': {
      'username': 'taavi',
      'name': 'Taavi Testaaja',
      'id': '5e026106bb657379dfed75da'
    },
    'id': '5e0272ff87f6fc7c7646a222'
  },
  {
    'likes': 0,
    'title': 'Front testaus',
    'author': 'Taavi',
    'url': 'http://www.thing.local/asdf',
    'user': {
      'username': 'taavi',
      'name': 'Taavi Testaaja',
      'id': '5e026106bb657379dfed75da'
    },
    'id': '5e03902af9294988bd2eaafd'
  },
  {
    'likes': 2,
    'title': 'asdf',
    'author': 'qwer',
    'url': '1234',
    'user': {
      'username': 'taavi',
      'name': 'Taavi Testaaja',
      'id': '5e026106bb657379dfed75da'
    },
    'id': '5e039270f9294988bd2eaaff'
  },
  {
    'likes': 4,
    'title': 'Your gonna need it!',
    'author': 'Tiina Testaaja',
    'url': 'http:///hmm.lo',
    'user': {
      'username': 'taavi',
      'name': 'Taavi Testaaja',
      'id': '5e026106bb657379dfed75da'
    },
    'id': '5e039b40f9294988bd2eab00'
  },
  {
    'likes': 0,
    'title': 'Poisto testausta',
    'author': 'Joku ihan muu',
    'url': 'asdf',
    'user': {
      'username': 'tiina',
      'name': 'Tiina Testaaja',
      'id': '5e0279cb12a2737d8080c70c'
    },
    'id': '5e049a165d506093b68f09d1'
  },
  {
    'likes': 0,
    'title': 'Testing more',
    'author': 'asdf',
    'url': 'asdf',
    'user': {
      'username': 'tiina',
      'name': 'Tiina Testaaja',
      'id': '5e0279cb12a2737d8080c70c'
    },
    'id': '5e049b355d506093b68f09d3'
  },
  {
    'likes': 0,
    'title': 'after delete',
    'author': 'qwerty',
    'url': 'asdfg',
    'user': {
      'username': 'tiina',
      'name': 'Tiina Testaaja',
      'id': '5e0279cb12a2737d8080c70c'
    },
    'id': '5e049b4a5d506093b68f09d4'
  }
]

const getAll = () => {
  return Promise.resolve(blogs)
}

const setToken = () => {}

export default { getAll, setToken }