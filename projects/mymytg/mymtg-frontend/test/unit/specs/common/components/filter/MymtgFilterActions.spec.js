import Vue from 'vue'
import MymtgFilterActions from 'common/components/filter/MymtgFilterActions'

function getComponent (propsData = {}) {
  const Ctor = Vue.extend(MymtgFilterActions)
  return new Ctor({ propsData })
}

describe('MymtgFilterActions.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(MymtgFilterActions)
    })
    expect(vm.$el.children.length).to.equal(2)
    expect(vm.$el.querySelector('.filter-actions .search')).to.exist
    expect(vm.$el.querySelector('.filter-actions .clean')).to.exist
  })

  it('should emit search event correctly', () => {
    const vm = getComponent().$mount()
    let spy = sinon.spy(vm, '$emit')
    vm.search()
    expect(spy).to.be.calledWith('search')
  })

  it('should emit clean event correctly', () => {
    const vm = getComponent().$mount()
    let spy = sinon.spy(vm, '$emit')
    vm.clean()
    expect(spy).to.be.calledWith('clean')
  })

  it('should have a name', () => {
    const name = MymtgFilterActions.name
    expect(name).not.be.empty
  })
})
