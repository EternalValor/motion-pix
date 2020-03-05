export function findByTestAtrr(wrapper, atrr) {
  return wrapper.find(`[data-test='${atrr}']`);
}