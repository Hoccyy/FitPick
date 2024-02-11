import React from 'react';
import SmallOutfitCard from '@/app/components/SmallOutfitCard';
import { Key } from 'react';
import { FetchCloset } from './FetchCloset';

const getOutfits  = async () => {
  try {
    const outfitList = await FetchCloset();
    const outfitElements = outfitList.map((
      imageSource: string,
      index: Key | null | undefined) => (
        <SmallOutfitCard key={index} ImageSource={imageSource}/>
    ));
    return [
      outfitList,
      [outfitElements],
    ];
  } catch (error) {
    console.error('Error fetching closet:', error);
    return [];
  }
};


export default getOutfits;
