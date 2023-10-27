export const setInputSize = (size: 0.5 | 1 | 2 | 3) => {
  if(size === 1) return 'flex-[1]'
  else if(size === 2) return 'flex-[2]'
  else if(size === 3) return 'flex-[3]'
  else return 'flex-[0.5]'
}
