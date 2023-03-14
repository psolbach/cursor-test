  // let isCursorLocked = false;
  // const cursor = document.getElementById("cursor");
  // const cursorContentWrap = document.querySelector(".cursor-content-wrap");
  // const cursorContent = document.querySelector(".cursor__content");
  // const cursorHighlight = document.querySelector(".cursor-highlight");
  
  // if (window.innerWidth >= 991) {
  
  // document.addEventListener("mousemove", cursorMove);
  // function cursorMove(e) {
  //   if (!isCursorLocked) {
  //     cursor.style.top = e.clientY + "px";
  //     cursor.style.left = e.clientX + "px";
  //     }
  //   cursorHighlight.style.top = e.clientY + "px";
  //   cursorHighlight.style.left = e.clientX + "px";
  //   cursorContent.style.opacity = 50 + "%";
  // }
    
  // document.addEventListener("mousedown", () => {
  //    if (!isCursorLocked) {
  //   cursorContentWrap.style.transform = "scale(0.9, 0.9)";
  //   cursorContentWrap.style.webkitTransform = "scale(0.9, 0.9)";
  //   cursorContent.style.opacity = 80 + "%";
  //   }
  // });
  
  // document.addEventListener("mouseup", () => {
  //   if (!isCursorLocked) {
  //   cursorContentWrap.style.transform = "scale(1, 1)";
  //   cursorContentWrap.style.webkitTransform = "scale(1, 1)";
  //   cursorContent.style.opacity = 50 + "%";
  //   }
  // });
  
  // document.querySelectorAll("#a").forEach((a) => {
  //   let rect = null;
    
  //   a.addEventListener(
  //   "mouseenter",
  //   ({ currentTarget }) => {
  //       if (currentTarget.classList.contains("lift")) {
  //         cursorContentWrap.style.opacity = 0 + "%";
  //       }
  //       isCursorLocked = true;
          
  //       rect = currentTarget.getBoundingClientRect();
  //       var targetStyles = window.getComputedStyle(currentTarget);
  //       var targetZIndex = targetStyles.getPropertyValue("z-index");
  //       cursor.classList.add("is-locked");
  //       cursor.style.top = rect.top + rect.height / 2 + "px";
  //       cursor.style.left = rect.left + rect.width / 2 + "px";
  //       cursor.style.width = rect.width + "px";
  //       cursor.style.height = rect.height + "px";
  //       cursorContent.style.borderRadius = 10 + "px";
  //       cursor.style.zIndex = targetZIndex - 1;
  //       cursorHighlight.style.opacity = 30 + "%";
  //       cursorHighlight.style.width = rect.height/2 + "px";
  //       cursorHighlight.style.height = rect.height/2 + "px";
  //       cursorHighlight.style.filter = "blur("+rect.height/4+"px)";
  //       cursorHighlight.style.webkitFilter = "blur("+rect.height/4+"px)";
  //   },
  //   { passive: true }
  //   );
  
  //   a.addEventListener(
  //   "mousemove",
  //   ({ currentTarget }) => {
  //     const halfHeight = rect.height / 2;
  //     const topOffset = (event.y - rect.top - halfHeight) / halfHeight;
  //     const halfWidth = rect.width / 2;
  //     const leftOffset = (event.x - rect.left - halfWidth) / halfWidth;
      
  //       cursor.style.transform = "translate(" + leftOffset *8 + "px, "+ topOffset *6 +"px)";
  //       cursor.style.webkitTransform = "translate(" + leftOffset *8 + "px, "+ topOffset *6 +"px)";
        
  //       if (currentTarget.classList.contains("lift")) {
          
  //       } else {
  //         currentTarget.style.transform = "translate(" + leftOffset *3 +"px, "+ topOffset *2 +"px) scale(1.025, 1.025)";
  //         currentTarget.style.webkitTransform = "translate(" + leftOffset *3 +"px, "+ topOffset *2 +"px) scale(1.025, 1.025)";
  //         }
  //   },
  //   { passive: true }
  //   );
  
  //   a.addEventListener(
  //   "mouseleave",
  //   ({ currentTarget }) => {
  //       isCursorLocked = false;
  //       if (currentTarget.classList.contains("lift")) {
  //         cursorContentWrap.style.opacity = 100 + "%";
  //       }
  //       cursor.style.transitionDuration = 150 + "ms";
  //       cursor.style.width = 20 + "px";
  //       cursor.style.height = 20 + "px";
  //       cursor.style.transform = "translate(0px, 0px)";
  //       currentTarget.style.transform = "translate(0px, 0px) scale(1, 1)";
  //       cursor.style.webkitTransform = "translate(0px, 0px)";
  //       currentTarget.style.webkitTransform = "translate(0px, 0px) scale(1, 1)";
  //       cursor.classList.remove("is-locked");
        
  //       cursorHighlight.style.opacity = 0 + "%";
  //       cursorHighlight.style.width = 0 + "px";
  //       cursorHighlight.style.height = 0 + "px";
  //       cursorHighlight.style.filter = "blur(0px)";
  //       cursorHighlight.style.webkitFilter = "blur(0px)";
  
  //       setTimeout(() => {
  //       if (!isCursorLocked) {
  //         cursorContent.style.borderRadius = 50 + "%";
  //         cursor.style.zIndex = 1000;
  //        }
  //       }, 250);
  //   },
  //   { passive: true }
  //   );
    
  //   a.addEventListener(
  //     "mousedown",
  //     ({ currentTarget }) => {
  //     cursorContent.style.opacity = 80 + "%";
  //     },
  //     { passive: true }
  //   );
  //   a.addEventListener(
  //       "mouseup",
  //       ({ currentTarget }) => {
  //       cursorContent.style.opacity = 30 + "%";
  //       },
  //       { passive: true }
  //     );
  // });
  // }

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