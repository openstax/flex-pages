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
