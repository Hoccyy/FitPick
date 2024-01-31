"use client";
import OutfitCardStyles from './PickedOutfitCard.module.css';
import Outfits from './ClosetStorage';
import Image from 'next/image';
import RandomIndex from './RandomIndex';

const SpinnerMessage: string = 'Click for new outfit!';

const test : string = Outfits[0][RandomIndex(0,Outfits[0].length-1)];

type Props = {
    ImageSource: string
};

const PickedOutfitCard = ({
    ImageSource = 'default.png',
} : Props) => {
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
                onClick={(event)=> {
                    let newPick : string = Outfits[0][RandomIndex(1,Outfits[0].length-1)]!;
                    while (newPick == null || newPick == event.currentTarget.src || newPick == event.currentTarget.srcset) {
                        newPick = Outfits[0][RandomIndex(0,Outfits[0].length-1)]!;
                    }
                    event.currentTarget.src = newPick;
                    event.currentTarget.srcset= newPick;
                }}
                // TODO
                onLoad={(event)=> {
                    console.log('Loaded');
                    return;
                    event.currentTarget.src = ImageSource;
                    event.currentTarget.srcset= ImageSource;
                }}
            />

        </div>
    );
};

export default PickedOutfitCard;