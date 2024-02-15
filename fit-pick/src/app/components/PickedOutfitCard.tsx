"use client";
import OutfitCardStyles from './PickedOutfitCard.module.css';
import Image from 'next/image';
import RandomIndex from './RandomIndex';
import { useEffect, useState } from 'react';
import { FetchCloset } from './FetchCloset';

const SpinnerMessage: string = 'Click for new outfit!';

type Props = {
    ImageSource: string
};

const PickedOutfitCard = ({
    ImageSource = 'default2.jpeg',
} : Props) => {
    const [outfitList, setOutfitList] = useState<any[]>([]);

    useEffect(() => {
      FetchCloset()
        .then((list: any) => {
          setOutfitList(list);
          console.log(list);
        })
        .catch((error: any) => {
          console.error('Error fetching closet:', error);
        });
    }, []);
    
    // Render your components based on user closet
    return (
        <div className={OutfitCardStyles.PrimaryCard} 
          title={SpinnerMessage}>
            <Image
                src={ImageSource}
                width = {5013}
                height = {5013}
                alt = {'Your amazing outfit'}
                className={OutfitCardStyles.OutfitImageStyle}
                id='RandomCard'
                title= {SpinnerMessage}
                loading='eager'
                priority = {true}
                onClick={(event)=> {
                    let newPick : string = outfitList[RandomIndex(0, outfitList.length)];
                    while (newPick == null || newPick == event.currentTarget.src || newPick == event.currentTarget.srcset) {
                        newPick = outfitList[RandomIndex(0, outfitList.length)];
                        console.log(newPick);
                    }
                    event.currentTarget.src = newPick;
                    event.currentTarget.srcset= newPick;
                }}
                // TODO
                onLoad={(event)=> {
                    console.log('Outfit Loaded!');
                    return;
                }}
            />

        </div>
    );
};

export default PickedOutfitCard;