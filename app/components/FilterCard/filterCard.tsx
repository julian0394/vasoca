import { Card, CardBody, Chip } from "@nextui-org/react"
import { useAtom } from "jotai"
import { searchAtom } from "../../stores/atoms"

const FilterCard = () => {
  const [search, setSearch] = useAtom(searchAtom)

  return (
    <Card className="mb-2">
      <CardBody className="flex-row items-center gap-2 py-2">
        <span>Filtrando por:</span>
        <Chip className="text-slate-100 h-6" onClose={() => setSearch('')}>{search}</Chip>
      </CardBody>
    </Card>
  )
}

export default FilterCard
