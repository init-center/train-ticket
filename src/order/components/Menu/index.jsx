import React, { memo } from "react";
import PropTypes from "prop-types";

import "./index.css";

const MenuItem = memo(function MenuItem(props) {
    const { title, value, active, onPress } = props;

    return (
        <li
            className={`${active ? "active" : ""}`}
            onClick={() => onPress(value)}
        >
            {title}
        </li>
    );
});

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    active: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
};

const Menu = memo(function Menu(props) {
    const { show, options, onPress, hideMenu } = props;

    return (
        <div>
            {show && (
                <div className="menu-mask" onClick={() => hideMenu()}></div>
            )}
            <div className={`menu ${show ? "show" : ""}`}>
                <div className="menu-title"></div>
                <ul>
                    {options &&
                        options.map(option => {
                            return (
                                <MenuItem
                                    key={option.value}
                                    {...option}
                                    onPress={onPress}
                                />
                            );
                        })}
                </ul>
            </div>
        </div>
    );
});

Menu.propTypes = {
    show: PropTypes.bool.isRequired,
    options: PropTypes.array,
    onPress: PropTypes.func,
    hideMenu: PropTypes.func.isRequired,
};

export default Menu;
