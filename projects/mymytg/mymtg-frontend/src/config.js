let env = process.env.NODE_ENV
let serverConfig = {
  baseURL: env === 'development' ? 'http://localhost:8000/api' : 'http://marcusbalbi.dlinkddns.com:81/api',
  timeout: 5000,
  withCredentials: false,
  responseType: 'json', // default
  maxRedirects: 5, // default,
  renderError: true,
  transformResponse: [
    function (data) { return data.data }
  ]
}

export {
  serverConfig
}
