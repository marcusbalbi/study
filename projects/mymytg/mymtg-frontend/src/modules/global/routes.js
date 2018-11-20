import Dashbord from './main/components/Dashbord'
import NotFound from './main/components/NotFound'

export default [
  {
    path: '/dashbord',
    name: 'global.main',
    component: Dashbord
  },
  {
    path: '/notfound',
    name: 'global.notfound',
    component: NotFound
    // beforeRouteEnter: function (from, to, next) {
    //   console.log(from, to)
    //   next(from, to)
    // }
  },
  {
    path: '/',
    redirect: '/dashbord'
  },
  {
    path: '*',
    redirect: '/notfound'
  }
]
