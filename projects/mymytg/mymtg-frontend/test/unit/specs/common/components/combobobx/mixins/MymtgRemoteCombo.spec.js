import Vue from 'vue'
import MymtgRemoteCombo from 'common/components/combobox/mixins/MymtgRemoteCombo'

function getMockedService () {
  return {
    search: function (filter, fields) {
      return new Promise(function (resolve, reject) {
        if (filter !== undefined) {
          resolve({
            data: [
            { id: 1, value: 'Value Remote 1' },
            { id: 2, value: 'Value Remote 2' },
            { id: 3, value: 'Value Remote 3' },
            { id: 4, value: 'Value Remote 4' }
            ]
          })
        } else {
          reject('REJECTED')
        }
      })
    }
  }
}

function getComponent (propsData = {}, service = getMockedService()) {
  const Ctor = Vue.extend(MymtgRemoteCombo)
  let cmp = new Ctor({ propsData })

  cmp.service = service

  return cmp
}

describe('MymtgRemoteCombo.js', () => {
  it('should set correct Props ', () => {
    const vm = getComponent({
      value: 3,
      defaultText: 'Select Me',
      defaultValue: -30
    }).$mount()

    expect(vm.defaultText).to.equal('Select Me')
    expect(vm.defaultValue).to.equal(-30)
    expect(vm.value).to.equal(3)
  })

  it('selectedItem should be equals to value ', () => {
    let propsData = {
      value: 1
    }
    const vm = getComponent(propsData).$mount()
    expect(vm.selectedItem).to.equal(1)
  })

  it('should emit event input on selectItem ', () => {
    const vm = getComponent().$mount()
    let spy = sinon.spy(vm, '$emit')
    vm.selectItem()
    expect(spy).to.have.been.called
    expect(spy).to.have.been.calledWith('input')
  })

  it('selectedItem should be equals to default value on no value passed ', () => {
    let propsData = {
      defaultValue: -99
    }
    const vm = getComponent(propsData).$mount()
    expect(vm.selectedItem).to.equal(-99)
  })

  it('default props should be set correctly', () => {
    const vm = getComponent().$mount()
    expect(vm.value).to.be.empty
    expect(vm.defaultValue).to.be.null
    expect(vm.defaultText).not.to.be.empty
    expect(vm.emptyDefaultValue).to.equal(0)
    expect(vm.emptyDefaultText).not.to.be.empty
  })

  it('service should be mandatory', () => {
    let cmp = getComponent()
    try {
      cmp.$mount()
      throw new Error('service should be mandatory')
    } catch (err) {
      expect(err).not.to.be.empty
    }
  })

  it('should format data correctly', () => {
    const vm = getComponent().$mount()
    vm.textName = 'label'
    vm.valueName = 'value'
    let spy = sinon.spy(vm, 'formatItem')
    let formatedData = vm.format([
      { value: 1, label: 'Text one' }
    ])
    expect(spy).to.be.calledWith({ value: 1, label: 'Text one' })
    expect(formatedData[0].value).to.equal(1)
    expect(formatedData[0].text).to.equal('Text one')
  })

  it('should applyWatch on watch passed', () => {
    let watch = { someId: 0 }
    let cmp = getComponent({ watch })
    let spy = sinon.spy(cmp, 'applyWatch')
    cmp.$mount()
    expect(spy).to.be.called
  })

  it('should not validate a invalid watch', () => {
    let watch = 'some invalid watch prop'
    let cmp = getComponent({ watch })
    let spy = sinon.spy(cmp, 'validateWatch')
    cmp.$mount()
    expect(spy).to.returned(false)
  })
})
