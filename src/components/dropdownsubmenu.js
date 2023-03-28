import * as React from "react";

export const DropDownSubMenu = (props) => {
  let refSubmenuContent = React.useRef(HTMLDivElement);

  let className = "dropdown-submenu-container";
  className = props.className ? className + " " + props.className : className;

  const onClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (refSubmenuContent.current) {
      let show = false;
      if (refSubmenuContent.current.classList.contains("show")) {
        hideChildren(refSubmenuContent.current);
      } else {
        show = true;
        hideSiblings();
      }

      refSubmenuContent.current.classList.toggle("show");
      if (typeof props.onToggle === "function") {
        props.onToggle(show, { source: "select", originalEvent: event });
      }
    }
  };

  const hideSiblings = () => {
    if (refSubmenuContent.current) {
      const parents = getParents(
        refSubmenuContent.current,
        ".dropdown-menu.show"
      );
      if (parents.length > 1) {
        hideChildren();
      }
    }
  };

    const hideChildren = (parent) => {
        const children = parent.querySelectorAll('.dropdown-menu.show');
        for (const child of children) {
            child.classList.remove('show');
        }
    }
    const getParents = (elem, selector) =>{
        const nodes = [];
        let element = elem;
        nodes.push(element);
        while (element.parentNodes) {
            if (typeof element.parentNode.matches == "function" && element.parentNode.matches(selector)) {
                nodes.push(element.parentNode);
            }
            element = element.parentNode;
        }
        return nodes;
    }
    
    return (
        <div className={className} i={props.id}>
            <a href={props.href} className="dropdown-item dropdown-submenu dropdown-toggle" onClick={onClick}>
                {props.title}
            </a>
            <div className='dropdown-menu' ref={refSubmenuContent}>
            {props.children}
            </div>

        </div>
    );
};


