import Vue from 'vue'
import MymtgCombo from 'common/components/combobox/MymtgCombo'
let data = [ { value: 1, text: 'some text' } ]

function getComponent (propsData = {}) {
  const Ctor = Vue.extend(MymtgCombo)
  return new Ctor({ propsData }).$mount()
}

describe('MymtgCombo.vue', () => {
  it('should set correct Props ', () => {
    const vm = getComponent({
      value: 15,
      data: data,
      defaultText: 'Select Me',
      defaultValue: -30
    })

    expect(vm.defaultText).to.equal('Select Me')
    expect(vm.defaultValue).to.equal(-30)
    expect(vm.value).to.equal(15)
    expect(vm.data).to.equal(data)
  })

  it('selectedItem should be equals to value ', () => {
    let propsData = {
      value: 1,
      data: data
    }
    const vm = getComponent(propsData)
    expect(vm.selectedItem).to.equal(1)
  })

  it('should emit event input on selectItem ', () => {
    let propsData = {
      data: data
    }
    const vm = getComponent(propsData)
    let spy = sinon.spy(vm, '$emit')
    vm.selectItem()
    expect(spy).to.have.been.calledTwice
    expect(spy).to.have.been.calledWith('input')
    expect(spy).to.have.been.calledWith('select')
  })

  it('selectedItem should be equals to default value on no value passed ', () => {
    let propsData = {
      defaultValue: -99,
      data: data
    }
    const vm = getComponent(propsData)
    expect(vm.selectedItem).to.equal(-99)
  })

  it('default props should be set correctly', () => {
    const vm = getComponent()
    expect(vm.value).to.be.empty
    expect(vm.data).to.be.empty
    expect(vm.defaultValue).to.be.null
    expect(vm.defaultText).not.to.be.empty
    expect(vm.emptyDefaultValue).to.equal(0)
    expect(vm.emptyDefaultText).not.to.be.empty
    expect(vm.showDefaultOption).to.be.true
    expect(vm.disableOnEmpty).to.be.true
  })

  it('Combo should be disabled on empty Data', () => {
    const vm = getComponent()
    expect(vm.disableCombo).to.be.true
    expect(vm.hasData).to.be.false
  })

  it('should have a name', () => {
    const name = MymtgCombo.name
    expect(name).not.be.empty
  })
})
