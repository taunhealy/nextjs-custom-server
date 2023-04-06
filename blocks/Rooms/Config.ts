import { Block } from 'payload/types';

export const RoomsBlock: Block = {
  slug: 'roomsblock',
  labels: {
    singular: 'RoomsBlock',
    plural: 'RoomsBlocks',
  },
    fields: [
      {
        name: 'selectRooms',
        type: 'relationship',
        relationTo: 'rooms',
        hasMany: true,
      },
    ],
  };


export default RoomsBlock;
