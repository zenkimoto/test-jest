require('../hello_world')

describe('hello world', () => {
  test('should be able to generate templated markup', () => {
    const element = document.createElement('hello-world')

    expect(element).not.toBeNull();
    expect(element.shadowRoot.querySelector('span')).toContainHTML('<slot name="text"></slot>');
  });
});
