export const makeResizableDiv = () => {
    console.log('go')
    const DOMimgBox = document.querySelector('.Article__imgBoxes__imgBox__resizable');
    const DOMresizer = document.querySelector('.Article__imgBoxes__imgBox__resizable__resizer')
    const minimum_size = 0;
    const maximum_size = 300;
    let original_width = 0;
    let original_x = 0;
    let original_mouse_x = 0;
    DOMresizer.addEventListener('mousedown', (e) => {
      e.preventDefault()
      original_width = parseFloat(getComputedStyle(DOMimgBox, null).getPropertyValue('width').replace('px', ''));
      original_x = DOMimgBox.getBoundingClientRect().left;
      original_mouse_x = e.pageX;
      window.addEventListener('mousemove', resize)
      window.addEventListener('mouseup', stopResize)
    })
  
    const resize = (e) => {
        const width = original_width + (e.pageX - original_mouse_x);
        if (width > minimum_size && width < maximum_size) DOMimgBox.style.width = width + 'px';
    }
    const stopResize = () => window.removeEventListener('mousemove', resize);
  }