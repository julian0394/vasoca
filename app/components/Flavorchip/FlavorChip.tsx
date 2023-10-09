import { Flavor } from "../../models/products/types"

interface Props {
  flavor: Flavor
}

const FlavorChip = ({flavor}: Props) => {
  return (
    <span className={'py-0 px-2 rounded-full border border-white/50 text-xs bg-rose-300/90 text-black'}>{flavor}</span>
  )
}

export default FlavorChip
