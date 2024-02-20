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

    const match = ImageSource.match(/%2F(.*?)\?alt/);
    const photoName = match ? match[1] : '';



    return (
        <div id='smallCard' className={SmallOutfitCardStyles.PrimaryCard}>
            <Image
                src={ImageSource}
                width={5013}
                height={5013}
                alt={'Your amazing outfit'}
                className={SmallOutfitCardStyles.OutfitImageStyle}
                id={'SmallCardImage'}
                title={photoName}
                loading='eager'
                onError={(event) => {
                    event.currentTarget.remove();
                }}
            />
            <p className={SmallOutfitCardStyles.outfitDescription}>{photoName}</p>
            <button className={SmallOutfitCardStyles.DeleteButton} onClick={() => handleDeleteClick(ImageSource)}>Delete</button>
        </div>
    );
};

export default PickedOutfitCard;
