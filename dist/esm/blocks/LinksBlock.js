import { jsx as _jsx } from "react/jsx-runtime";
import cn from 'classnames';
import { Link, linkFieldConfig } from '../components/Link';
import { findByType } from '../utils';
import './LinksBlock.css';
LinksBlock.blockConfig = {
    type: 'cta_block',
    categories: ['content'],
    label: 'Links',
    fields: [
        { name: 'links', label: 'Links', type: 'list', fields: linkFieldConfig },
        { name: 'config', label: 'Config', type: 'configs', configs: [
                { name: 'analytics_label', label: 'Analytics Label', help: 'Analytics events from within this section will include this label', type: 'text' },
                { name: 'color', label: 'Color', type: 'select', options: [
                        { value: 'white', label: 'White' },
                        { value: 'blue', label: 'Blue' },
                        { value: 'deep-green', label: 'Deep Green' },
                    ] },
            ] },
    ],
};
export function LinksBlock({ data }) {
    var _a, _b, _c;
    const analytics = (_a = findByType(data.value.config, 'analytics_label')) === null || _a === void 0 ? void 0 : _a.value;
    const color = (_c = (_b = findByType(data.value.config, 'color')) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : 'white';
    const colorClass = `color-${color}`;
    return _jsx("div", { className: cn('content-block-links', colorClass), "data-analytics-nav": analytics, children: data.value.links.map((action, i) => _jsx(Link, { link: action }, i)) });
}
