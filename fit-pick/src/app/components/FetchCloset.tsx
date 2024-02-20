import { onAuthStateChanged } from 'firebase/auth';
import { auth, app } from '../../../firebase';
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

export const FetchCloset = () => {
    return new Promise<string[]>((resolve, reject) => {
        const outfitList: string[] = [];

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User directory
                const userDir = (user.uid + user.displayName).replaceAll(' ', '');
                console.log(userDir)

                // Create a reference with an initial file path and name
                const storage = getStorage(app);
                const directoryRef = ref(storage, userDir);


                listAll(directoryRef)
                    .then((result) => {
                        // Loop through each photo in user folder
                        const promises: Promise<void>[] = [];
                        result.items.forEach((itemRef) => {
                            // Get the download URL for each photo
                            const promise = getDownloadURL(itemRef)
                                .then((url) => {
                                    outfitList.push(url);
                                })
                                .catch((error) => {
                                    switch (error.code) {
                                        case 'storage/object-not-found':
                                            console.error('File not found:', itemRef.name);
                                            break;
                                        case 'storage/unauthorized':
                                            console.error('Unauthorized to access file:', itemRef.name);
                                            break;
                                        case 'storage/unknown':
                                            console.error('Unknown error occurred for file:', itemRef.name);
                                            break;
                                        default:
                                            console.error('Error fetching download URL for file:', itemRef.name, error);
                                            break;
                                    }
                                });
                            promises.push(promise);
                        });

                        // When all URLs are fetched, resolve the promise with the outfitList
                        Promise.all(promises).then(() => {
                            resolve(outfitList);
                        });
                    })
                    .catch((error) => {
                        // Handle errors
                        console.error('Error listing items in folder:', error);
                        reject(error);
                    });
            }
        });
    });
};
