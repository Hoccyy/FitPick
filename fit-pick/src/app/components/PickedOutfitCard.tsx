import { useState, useEffect} from 'react';
import OutfitCardStyles from './PickedOutfitCard.module.css';
import Image from 'next/image';
import RandomIndex from './RandomIndex';
import { FetchCloset } from './FetchCloset';

const SpinnerMessage: string = 'Click for a new outfit!';

type Props = {
    ImageSource: string
};

const PickedOutfitCard = ({
    ImageSource = 'default2.jpeg',
} : Props) => {
    const [outfitList, setOutfitList] = useState<any[]>([]);
    const [currentOutfitIndex, setCurrentOutfitIndex] = useState<number>(0);
    let match;
    let photoName;

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
    
    // Function to handle click event and change outfit
    const handleOutfitChange = () => {
        setCurrentOutfitIndex(RandomIndex(0, outfitList.length));
    };
    

    return (
        <div>
        <div className={OutfitCardStyles.PrimaryCard} title={SpinnerMessage}>
            <Image
                src={outfitList[currentOutfitIndex]}
                width={5013}
                height={5013}
                alt={'Your amazing outfit'}
                className={OutfitCardStyles.OutfitImageStyle}
                id='RandomCard'
                title={SpinnerMessage}
                loading='eager'
                priority={true}
                onClick={handleOutfitChange}
                onLoad={(event)=> {
                    console.log('Outfit Loaded!');
                }}
            />
        </div>
        </div>
    );
};

export default PickedOutfitCard;
