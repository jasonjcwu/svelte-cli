<%_ if (!hasTS) { _%>
import { expect } from 'chai'
<%_ if (!rootOptions.bare) { _%>
import HelloWorld from '@/components/HelloWorld.svelte'

describe('HelloWorld.svelte', () => {
  afterEach(function () {
    this.instance.$destroy()
  })

  it('renders props.message when passed', function () {
    const message = 'new message'
    this.instance = new HelloWorld({
      target: document.body,
      props: { message }
    })
    expect(document.body.textContent).to.include(message)
  })
})
<%_ } else { _%>
import App from '@/App.svelte'

describe('App', () => {
  afterEach(function () {
    this.instance.$destroy()
  })

  it('should work', function () {
    this.instance = new App({
      target: document.body
    })
    expect(document.body.textContent).to.include(`Welcome to Your Svelte.js App`)
  })
})
<%_ } _%>
<%_ } _%>
