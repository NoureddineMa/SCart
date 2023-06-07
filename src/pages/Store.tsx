import storeItems from '../data/items.json'
import { CardItem } from '../components/CardItem'

export function Store() {
    return (
        <div className='flex flex-row  flex-wrap justify-around gap-3 mt-10 '>
            {storeItems.map(item => (  <CardItem key={item.id} {...item}  />))}
           
        </div>
    )
}