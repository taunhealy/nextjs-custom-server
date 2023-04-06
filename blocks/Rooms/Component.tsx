import React from 'react';
import NextImage from 'next/image';
import RichText from '../../components/RichText';
import classes from './index.module.css';
import sizes from './sizes.json';
import { MediaType } from '../../collections/Media';


export type Type = {
  blockType: 'image'
  blockName?: string
  image: MediaType
  caption?: any
  type: 'normal' | 'wide' | 'fullscreen'
}

export const Component: React.FC<Type> = (props) => {
  const { image, type, caption } = props;