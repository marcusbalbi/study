import Vue from 'vue'
import Topbar from 'global/main/components/Topbar'

describe('Topbar.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Topbar)
    })
    expect(vm.$el.querySelector('.query-form')).to.exist
    expect(vm.$el.querySelector('.project-name').text).not.be.empty
  })

  it('should have correct data', () => {
    const defaultData = Topbar.data()
    expect(defaultData.query).to.equal('')
    expect(defaultData.projectName).not.be.empty
  })

  it('should have a name', () => {
    const name = Topbar.name
    expect(name).not.be.empty
  })
})
