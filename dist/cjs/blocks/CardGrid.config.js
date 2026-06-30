"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCardGridConfig = parseCardGridConfig;
const find = (config, type) => { var _a; return (_a = config.find((c) => c.type === type)) === null || _a === void 0 ? void 0 : _a.value; };
const splitColors = (raw) => {
    const colors = raw ? raw.split(',').map((c) => c.trim()).filter(Boolean) : [];
    return colors.length ? colors : undefined;
};
function parseCardGridConfig(config, isDark) {
    const cardStyle = find(config, 'card_style');
    const backgroundColor = find(config, 'background_color');
    return {
        styleClass: cardStyle ? `card_style_${cardStyle}` : undefined,
        cardSize: find(config, 'card_size'),
        cardColumns: find(config, 'card_columns'),
        cardMinSize: find(config, 'card_min_size'),
        accentColors: splitColors(find(config, 'accent_colors')),
        dividerColors: splitColors(find(config, 'divider_colors')),
        backgroundColor,
        borderSize: find(config, 'border_size'),
        accentSize: find(config, 'accent_size'),
        padding: find(config, 'padding'),
        paddingTop: find(config, 'padding_top'),
        paddingBottom: find(config, 'padding_bottom'),
        isDarkBg: backgroundColor ? isDark(backgroundColor) : false,
    };
}
