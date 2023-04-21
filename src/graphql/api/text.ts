import { useQuery } from 'villus'

const textApi = () => {
  return useQuery({
    query: `query TheQuery($skip: Int, $take: Int, $name: String) { data: m_list_electricBox( skip: $skip take: $take where: {merchant: {name: {contains: $name}}} ) { items { id isOnline number warehouseRow categoryName warehouseColumn merchant { name address } warehouses { isOnline isOpened number row column status battery { number percentage status voltage ampere } } } totalCount }}`,
  })
}

export { textApi }
