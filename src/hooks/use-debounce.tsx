export const useDebounce = (value: any, _delay: number) => {
  return {
    isReady: false,
    debouncedValue: value,
    cancel: () => {},
  }
}
