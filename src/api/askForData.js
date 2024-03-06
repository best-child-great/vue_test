import axios from 'axios'

export function getData () {
  return new Promise((resolve, reject) => {
    axios
      .get('/message.json')
      .then((result) => {
        if (result.data.status === 'success') {
          resolve(result.data.data)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function updateData (user) {
  return new Promise((resolve, reject) => {
    resolve({ status: 'success' })
  })
}

export function deleteData (id) {
  return new Promise((resolve, reject) => {
    resolve({ status: 'success' })
  })
}
