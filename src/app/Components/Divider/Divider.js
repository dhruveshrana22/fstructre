import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({
    children,
    className,
    dashed = false,
    orientation = 'center',
    orientationMargin,
    plain = true,
    style,
    type = 'horizontal',
    colorSplit = 'rgba(5, 5, 5, 0.06)',
    textPaddingInline = '1em',
    verticalMarginInline = '8px',
    colorText = 'rgba(0, 0, 0, 0.88)',
    colorTextHeading = 'rgba(0, 0, 0, 0.88)',
    fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontSize = 14,
    fontSizeLG = 16,
    lineHeight = 1.5714285714285714,
    lineWidth = 1,
    margin = 16,
    marginLG = 24
}) => {
    const isHorizontal = type === 'horizontal';
    const isDashed = dashed ? 'dashed' : 'solid';

    const baseStyle = {
        borderColor: colorSplit,
        borderWidth: lineWidth,
        margin: isHorizontal ? `${margin}px 0` : `0 ${verticalMarginInline}`,
        ...(style || {}),
    };

    const titleStyle = {
        display: 'inline-block',
        padding: isHorizontal ? `0 ${textPaddingInline}` : `0 ${marginLG}px`,
        fontFamily,
        fontSize,
        lineHeight,
        color: plain ? colorText : colorTextHeading,
    };

    const dividerStyle = {
        borderStyle: isDashed,
        ...(isHorizontal ? { borderTop: `${lineWidth}px ${isDashed}` } : { borderLeft: `${lineWidth}px ${isDashed}` }),
    };

    const getOrientationStyle = () => {
        if (orientation === 'left') {
            return { marginRight: orientationMargin };
        } else if (orientation === 'right') {
            return { marginLeft: orientationMargin };
        } else {
            return {};
        }
    };

    return (
        <div
            className={className}
            style={{
                ...baseStyle,
                ...dividerStyle,
            }}
        >
            {children && (
                <span style={{ ...titleStyle, ...getOrientationStyle() }}>{children}</span>
            )}
        </div>
    );
};

Divider.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dashed: PropTypes.bool,
    orientation: PropTypes.oneOf(['left', 'right', 'center']),
    orientationMargin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    plain: PropTypes.bool,
    style: PropTypes.object,
    type: PropTypes.oneOf(['horizontal', 'vertical']),
    colorSplit: PropTypes.string,
    textPaddingInline: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    verticalMarginInline: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    colorText: PropTypes.string,
    colorTextHeading: PropTypes.string,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    fontSizeLG: PropTypes.number,
    lineHeight: PropTypes.number,
    lineWidth: PropTypes.number,
    margin: PropTypes.number,
    marginLG: PropTypes.number,
};

export default Divider;
