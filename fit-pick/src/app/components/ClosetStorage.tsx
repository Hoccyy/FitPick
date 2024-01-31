import SmallOutfitCard from '@/app/components/SmallOutfitCard';
import { Key } from 'react';

var outfitSourceLinks : any = [
  '/default.webp',
  '/default2.jpeg',
  '/test.jpg',
];

var outfitElements = outfitSourceLinks.map((
  imageSource: string,
  index: Key | null | undefined) => (
    <SmallOutfitCard key={index} ImageSource={imageSource}/>
));

var Outfits : any = [
  outfitSourceLinks,
    
  [
    outfitElements,
  ]
];

export default Outfits;