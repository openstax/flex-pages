import { jsx as _jsx } from "react/jsx-runtime";
export function Image({ image, ...props }) {
    return _jsx("img", { ...props, src: image.file, width: image.width, height: image.height });
}
