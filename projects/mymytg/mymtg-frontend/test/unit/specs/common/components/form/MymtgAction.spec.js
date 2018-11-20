import Vue from 'vue'
import MymtgAction from 'common/components/form/MymtgAction'

function getComponent (propsData = {}) {
  const Ctor = Vue.extend(MymtgAction)
  return new Ctor({ propsData })
}

describe('MymtgFormActions.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(MymtgAction)
    })
    expect(vm.$el.children.length).to.equal(2)
    expect(vm.$el.querySelector('.submit')).to.exist
    expect(vm.$el.querySelector('.submit').innerText)
    .to.equal('Submit')
    expect(vm.$el.querySelector('.back')).to.exist
    expect(vm.$el.querySelector('.back').innerText)
    .to.equal('Get back')
  })

  it('should render reset button', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(MymtgAction, { props: { reset: 'on' } })
    })
    expect(vm.$el.children.length).to.equal(3)
    expect(vm.$el.querySelector('.reset')).to.exist
    expect(vm.$el.querySelector('.reset').innerText)
    .to.equal('Reset')
  })

  it('should render only submit button', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(MymtgAction, { props: { back: 'off', reset: 'off' } })
    })
    expect(vm.$el.children.length).to.equal(1)
    expect(vm.$el.querySelector('.reset')).to.not.exist
    expect(vm.$el.querySelector('.submit')).to.exist
    expect(vm.$el.querySelector('.back')).to.not.exist
  })

  it('should set correct props', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(MymtgAction, { props:
        { back: 'on', reset: 'on', submitText: 'Send', backText: 'Back', resetText: 'clean form' } })
    })
    expect(vm.$el.children.length).to.equal(3)
    expect(vm.$el.querySelector('.reset').innerText)
    .to.equal('clean form')
    expect(vm.$el.querySelector('.submit').innerText)
    .to.equal('Send')
    expect(vm.$el.querySelector('.back').innerText)
    .to.equal('Back')
  })

  it('should emit submit event correctly', () => {
    const vm = getComponent().$mount()
    let spy = sinon.spy(vm, '$emit')
    vm.submitClicked()
    expect(spy).to.be.calledWith('submit')
  })

  it('should emit back event correctly', () => {
    const vm = getComponent().$mount()
    let spy = sinon.spy(vm, '$emit')
    vm.backClicked()
    expect(spy).to.be.calledWith('back')
  })

  it('should emit reset event correctly', () => {
    const vm = getComponent().$mount()
    let spy = sinon.spy(vm, '$emit')
    vm.resetClicked()
    expect(spy).to.be.calledWith('reset')
  })

  it('should have a name', () => {
    const name = MymtgAction.name
    expect(name).not.be.empty
  })
})
