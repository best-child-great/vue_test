export function getTableData () {
  return new Promise(function (resolve) {
    const data = {
      status: 'success',
      data: [
        {
          id: 1,
          name: 'John Doe',
          email: 'john.doe@example.com',
          role: 'admin',
          createdAt: '2023-01-01T00:00:00Z'
        },
        {
          id: 2,
          name: 'John AAA',
          email: 'john.doe@example.com',
          role: 'adminAA',
          createdAt: '2023-01-01T00:00:00Z'
        }
      ]
    }
    resolve(data)
  })
}

export function dataUpdateApi () {
  return new Promise(resolve => {
    // 这里向后端发起请求
    resolve({ status: 'success' })
  })
}
