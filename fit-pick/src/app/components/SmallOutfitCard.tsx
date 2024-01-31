"use client";
import SmallOutfitCardStyles from './SmallOutfitCard.module.css';
import Image from 'next/image';

type Props = {
    ImageSource: string
};

const PickedOutfitCard = ({
    ImageSource = 'default.png',
} : Props) => {
    return (
        <div className={SmallOutfitCardStyles.PrimaryCard}>
            <Image
                src={ImageSource}
                width = {5013}
                height = {5013}
                alt = {'Your amazing outfit'}
                className={SmallOutfitCardStyles.OutfitImageStyle}
                title= {'Chosen outfit'}
                loading='eager'
                onError={(event)=> {
                    event.currentTarget.remove();
                }}
            />

        </div>
    );
};

export default PickedOutfitCard;