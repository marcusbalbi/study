// import Vue from 'vue'
import Sidebar from 'global/main/components/Sidebar'

describe('Sidebar.vue', () => {
  // it('should render correct contents', () => {
  //   const vm = new Vue({
  //     el: document.createElement('div'),
  //     render: (h) => h(Sidebar)
  //   })
  //   expect(vm.$el.querySelector('.sidebar')).to.exist
  // })

  it('should have correct data', () => {
    const defaultData = Sidebar.data()
    expect(defaultData.links.length).to.be.at.least(1)
  })

  it('should have a name', () => {
    const name = Sidebar.name
    expect(name).not.be.empty
  })
})
