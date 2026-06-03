import Color from 'color';

export function resolveBackground(
  backgroundColor: string | undefined,
  gradientColor: string | undefined,
  gradientDirection: string | undefined
) {
  if (!backgroundColor) return {isDark: false};

  if (gradientColor) {
    const direction = gradientDirection || 'to bottom';
    const background = `linear-gradient(${direction}, ${backgroundColor}, ${gradientColor})`;
    const mixed = Color(backgroundColor).mix(Color(gradientColor), 0.5); // eslint-disable-line new-cap
    return {background, backgroundColor, isDark: mixed.isDark()};
  }

  return {backgroundColor, isDark: Color(backgroundColor).isDark()}; // eslint-disable-line new-cap
}

export function findByType<Union extends {type: string}, T extends string>(entries: Union[] | undefined, type: T) {
  return entries?.find((entry) => entry.type === type) as Extract<Union, { type: T }> | undefined;
}

// Marks an element as the text-alignment context for its descendants. Flex-based
// blocks (e.g. CTA actions) read this class to align themselves to match, since a
// flex row stretched to the full width can't be positioned by text-align alone.
// Goes on the same element that carries the text-align style so the nearest one
// wins for nested contexts.
export function flexAlignClass(textAlign: string | undefined) {
  return textAlign ? `flex-align-${textAlign}` : undefined;
}

export function scrollTo(el: Element, offset = 0) {
  const getOffsetTop = () => {
    const rect = el.getBoundingClientRect();
    return rect.top - offset;
  };

  window.scrollBy({
    top: getOffsetTop(),
    behavior: 'smooth'
  });
}
