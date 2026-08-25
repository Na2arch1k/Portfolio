export function getStoryMotion(index: number, total: number, distance = 150) {
  const segment = 1 / total;
  const enter = Math.max(0, index * segment - segment * .12);
  const settled = index * segment + segment * .2;
  const leaving = (index + 1) * segment - segment * .2;
  const exit = Math.min(1, (index + 1) * segment + segment * .12);
  const direction = index % 2 === 0 ? 1 : -1;

  if (index === 0) {
    return {
      range: [0, leaving, exit],
      opacity: [1, 1, 0],
      y: [0, 0, -distance],
      x: [0, 0, direction * 34],
      scale: [1, 1, .88],
      rotate: [0, 0, direction * 3.2],
    };
  }

  if (index === total - 1) {
    return {
      range: [enter, settled, 1],
      opacity: [0, 1, 1],
      y: [distance, 0, 0],
      x: [-direction * 34, 0, 0],
      scale: [.88, 1, 1],
      rotate: [-direction * 3.2, 0, 0],
    };
  }

  return {
    range: [enter, settled, leaving, exit],
    opacity: [0, 1, 1, 0],
    y: [distance, 0, 0, -distance],
    x: [-direction * 34, 0, 0, direction * 34],
    scale: [.88, 1, 1, .88],
    rotate: [-direction * 3.2, 0, 0, direction * 3.2],
  };
}
