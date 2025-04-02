
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
