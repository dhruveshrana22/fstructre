// FloatButton.jsx
import React from 'react';
import { FloatButton, Tooltip } from 'antd';
import { Badge } from 'antd';
import { BellOutlined, CloseOutlined, ArrowUpOutlined } from '@ant-design/icons';

const FloatButtonComponent = ({
    icon,
    description,
    tooltip,
    type = 'default',
    shape = 'circle',
    onClick,
    href,
    target,
    badge,
}) => {
    return (
        <Tooltip title={tooltip}>
            <FloatButton
                type={type}
                shape={shape}
                onClick={onClick}
                href={href}
                target={target}
            >
                {badge ? <Badge count={badge.count}>{icon}</Badge> : icon}
                {description}
            </FloatButton>
        </Tooltip>
    );
};

const FloatButtonGroup = ({
    shape = 'circle',
    trigger = 'click',
    open,
    closeIcon = <CloseOutlined />,
    onOpenChange,
    children,
}) => {
    return (
        <FloatButton.Group
            shape={shape}
            trigger={trigger}
            open={open}
            closeIcon={closeIcon}
            onOpenChange={onOpenChange}
        >
            {children}
        </FloatButton.Group>
    );
};

const BackTopButton = ({
    duration = 450,
    target = () => window,
    visibilityHeight = 400,
    onClick,
}) => {
    return (
        <FloatButton.BackTop
            duration={duration}
            target={target}
            visibilityHeight={visibilityHeight}
            onClick={onClick}
        >
            <ArrowUpOutlined />
        </FloatButton.BackTop>
    );
};

export { FloatButtonComponent, FloatButtonGroup, BackTopButton };
