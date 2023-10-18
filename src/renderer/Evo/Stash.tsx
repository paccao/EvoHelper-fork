import { FC } from 'react';
import { EvoItemRenderer } from './Item';

export const EvoStash: FC<{ itemIds: string[] }> = (props) => {
  const { itemIds } = props;
  return (
    <>
      {itemIds.map((id, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <EvoItemRenderer key={id + index} id={id} />
      ))}
    </>
  );
};
