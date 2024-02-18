"use client";
import SmallOutfitCardStyles from './SmallOutfitCard.module.css';
import Image from 'next/image';
import { DeleteImage } from './DeleteImage';

type Props = {
    ImageSource: string
};

const PickedOutfitCard = ({
    ImageSource = 'default.png',
} : Props) => {

    const handleDeleteClick = (src: string) => {
        DeleteImage(src)
    };

    return (
        <div id='smallCard' className={SmallOutfitCardStyles.PrimaryCard}>
            <Image
                src={ImageSource}
                width={5013}
                height={5013}
                alt={'Your amazing outfit'}
                className={SmallOutfitCardStyles.OutfitImageStyle}
                id={'SmallCardImage'}
                title={'Chosen outfit'}
                loading='eager'
                onError={(event) => {
                    event.currentTarget.remove();
                }}
            />
            <button className={SmallOutfitCardStyles.DeleteButton} onClick={() => handleDeleteClick(ImageSource)}>Delete</button>
        </div>
    );
};

export default PickedOutfitCard;
