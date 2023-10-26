import { useParams } from 'react-router-dom';
import { evoItems } from '../../constants/items';
import { EvoItem } from '../components/Item';

export function ItemPage() {
  const { id } = useParams();
  if (!id || !evoItems.hasOwnProperty(id)) {
    return <h2>How did you end up here?</h2>
  }

  return (
    <EvoItem item={
      // @ts-ignore
      evoItems[id]
    }/>
  );
}