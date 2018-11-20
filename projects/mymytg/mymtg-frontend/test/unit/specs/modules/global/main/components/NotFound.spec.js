import Vue from 'vue'
import NotFound from 'global/main/components/NotFound'

describe('NotFound.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(NotFound, { props: { title: 'Nothing Found', buttonText: 'get me to other place!' } })
    })
    expect(vm.$el.querySelector('.notfound-title').innerText).to.equal('Nothing Found')
    expect(vm.$el.querySelector('.notfound-back-button').innerText).to.equal('get me to other place!')
  })

  it('should have default props', () => {
    const defaultProps = NotFound.props
    expect(defaultProps.title).not.be.empty
    expect(defaultProps.buttonText).not.be.empty
  })

  it('should have a name', () => {
    const name = NotFound.name
    expect(name).not.be.empty
  })
})
