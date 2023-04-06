import { CollectionConfig } from 'payload/types';
import { RoomsBlock } from '../blocks/Rooms/Config';

const Room: CollectionConfig = {
    slug: 'rooms',
    access: {
      read: (): boolean => true, // Everyone can read Rooms
    },
    fields: [
      {
        name: 'title',
        label: 'Title',
        type: 'text',
        required: true,
      },
      {
        name: 'featuredImage',
        label: 'Featured Image',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
      {
        name: 'images',
        label: 'Images',
        type: 'array',
        minRows: 1,
        fields: [
          {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
          },
        ],
        required: true,
      },
      {
        name: 'description',
        label: 'Description',
        type: 'richText',
        required: true,
      },
      {
        name: 'price',
        label: 'Price',
        type: 'number',
        required: true,
      },
      {
        name: 'layout',
        label: 'Study Layout',
        type: 'blocks',
        blocks: [
         RoomsBlock
        ],
      },
    ],
  };
  
  export default Room;