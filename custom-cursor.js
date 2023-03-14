// With pythagorean distance: https://codepen.io/yesh/pen/VOveow

const circle = document.getElementsByClassName('cursor')[0];

const setStylesOnElement = (element, styles) => {
  Object.assign(element.style, styles);
}

let isCursorWithinBounds = false;

const onMouseMove = (e) => {
  cursorContentElem = document.getElementsByClassName('cursor__content')[0];
  elementMouseIsOver = document.elementFromPoint(e.pageX, e.pageY);
  
  isOverMenuItem = elementMouseIsOver.className === 'menu-item';
  if (isOverMenuItem) {
    menuItemboundingRect = isOverMenuItem ? elementMouseIsOver.getBoundingClientRect() : undefined;
    menuItemGravity = {
      x: elementMouseIsOver.offsetLeft + (menuItemboundingRect.width / 2),
      y: elementMouseIsOver.offsetTop + (menuItemboundingRect.height / 2)
    }
  }

  setStylesOnElement(cursorContentElem, {
    borderRadius: isOverMenuItem ? '10px': '50%',
    opacity: isOverMenuItem ? '0.15': '0.5'
  })

  setStylesOnElement(circle, {
    height: isOverMenuItem ? `${menuItemboundingRect.height}px` : `16px`,
    width: isOverMenuItem ? `${menuItemboundingRect.width}px` : `16px`, 
    top: isOverMenuItem ? `${(e.pageY + menuItemGravity.y) / 2}px` : `${e.pageY}px`,
    left: isOverMenuItem ? `${(e.pageX + menuItemGravity.x) / 2}px` : `${e.pageX}px`
  })
}

const onMouseEnterOrLeave = (e, isLeave) => {
  circle.style.opacity = isLeave ? 0 : 1;
}

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseleave', e => onMouseEnterOrLeave(e, true));
document.addEventListener('mouseenter', e => onMouseEnterOrLeave(e, false));