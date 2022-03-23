class CustomElement extends window.HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = '<template><slot /></template>'
  }
}

window.customElements.define('custom-element', CustomElement)

test('shadow dom support', () => {
  const defaultElement = document.createElement('custom-element')
  expect(defaultElement.shadowRoot.querySelector('template')).toContainHTML(
    '<slot>',
  )
})
