function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { css } from '@nimbus/core';

var _React$createContext = React.createContext({}),
    SideMenuContext = _React$createContext.Consumer,
    SideMenuProvider = _React$createContext.Provider;

function SideMenu(_ref) {
  var children = _ref.children,
      inner = _ref.inner,
      open = _ref.open,
      pinned = _ref.pinned,
      onMenuToggle = _ref.onMenuToggle,
      onPinToggle = _ref.onPinToggle,
      onOverlayClick = _ref.onOverlayClick,
      className = _ref.className;
  var classes = css('n-sidemenu', {
    'n-sidemenu-open': open,
    'n-sidemenu-pinned': pinned,
    'n-sidemenu-inner-opened': inner && inner.open
  }, className);
  var innerOpen = inner && inner.open;
  return React.createElement(React.Fragment, null, React.createElement(SideMenuOverlay, {
    open: !pinned && open || innerOpen,
    onClick: function onClick() {
      return onOverlayClick && onOverlayClick(false);
    }
  }), React.createElement(SideMenuProvider, {
    value: {
      open: open,
      pinned: pinned,
      onMenuToggle: onMenuToggle,
      onPinToggle: onPinToggle
    }
  }, React.createElement("div", {
    className: classes
  }, children)), React.createElement(SideMenuInner, _extends({}, inner, {
    parentOpen: open
  })));
}

function SideMenuInner(_ref2) {
  var items = _ref2.items,
      title = _ref2.title,
      className = _ref2.className,
      open = _ref2.open,
      parentOpen = _ref2.parentOpen,
      _onSelect = _ref2.onSelect;
  var classes = css('n-sidemenu-inner', {
    'n-sidemenu-open': parentOpen,
    'n-sidemenu-inner-open': open
  }, className);
  return React.createElement("div", {
    className: classes
  }, React.createElement("h1", {
    className: "n-sidemenu-inner-title"
  }, title), React.createElement("ul", {
    className: "n-sidemenu-inner-list"
  }, items && items.map(function (item) {
    return React.createElement(SideMenuInnerListItem, _extends({}, item, {
      onSelect: function onSelect() {
        return _onSelect && _onSelect(item);
      }
    }));
  })));
}

function SideMenuOverlay(_ref3) {
  var open = _ref3.open,
      onClick = _ref3.onClick;
  var classes = css('n-sidemenu-overlay', {
    'n-sidemenu-open': open
  });
  return React.createElement("div", {
    className: classes,
    onClick: onClick
  });
}

function SideMenuHeader(_ref4) {
  var iconPin = _ref4.iconPin,
      iconMenu = _ref4.iconMenu;
  return React.createElement(SideMenuContext, null, function (_ref5) {
    var open = _ref5.open,
        pinned = _ref5.pinned,
        onMenuToggle = _ref5.onMenuToggle,
        onPinToggle = _ref5.onPinToggle;
    return React.createElement("div", {
      className: "n-sidemenu-header"
    }, React.createElement("button", {
      onClick: function onClick() {
        return onMenuToggle(!open);
      },
      className: "n-sidemenu-header-toggle"
    }, React.createElement("i", {
      className: iconMenu
    })), React.createElement("button", {
      onClick: function onClick() {
        return onPinToggle(!pinned);
      },
      className: "n-sidemenu-header-pin"
    }, React.createElement("i", {
      className: iconPin
    })));
  });
}

function SideMenuList(_ref6) {
  var items = _ref6.items,
      expanded = _ref6.expanded,
      _onSelect2 = _ref6.onSelect;
  return React.createElement("ul", {
    className: "n-sidemenu-list"
  }, items && items.map(function (item) {
    return React.createElement(SideMenuListItem, _extends({}, item, {
      onSelect: function onSelect() {
        return _onSelect2 && _onSelect2(item);
      },
      expanded: expanded == item
    }));
  }));
}

function SideMenuListItem(_ref7) {
  var icon = _ref7.icon,
      label = _ref7.label,
      expanded = _ref7.expanded,
      onSelect = _ref7.onSelect;
  var classes = css('n-sidemenu-list-item', {
    expanded: expanded
  });
  return React.createElement("li", {
    className: classes,
    onClick: onSelect
  }, React.createElement("span", {
    className: "n-sidemenu-list-item-icon"
  }, ' ', React.createElement("i", {
    className: icon
  }), ' '), React.createElement("span", {
    className: "n-sidemenu-list-item-text"
  }, " ", label, " "));
}

function SideMenuInnerListItem(_ref8) {
  var label = _ref8.label,
      onSelect = _ref8.onSelect;
  var classes = css('n-sidemenu-inner-list-item');
  return React.createElement("li", {
    className: classes,
    onClick: onSelect
  }, React.createElement("span", {
    className: "n-sidemenu-inner-list-item-text"
  }, " ", label, " "));
}

SideMenu.Header = SideMenuHeader;
SideMenu.List = SideMenuList;
SideMenu.Inner = SideMenuInner;
export default SideMenu;