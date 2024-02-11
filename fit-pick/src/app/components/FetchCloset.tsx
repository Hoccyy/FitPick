import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, app } from '../../../firebase';
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

export const FetchCloset = () => {
    return new Promise<string[]>((resolve, reject) => {
        const outfitList: string[] = ['/default.webp'];

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
                        // Loop through each item in the folder
                        const promises: Promise<void>[] = [];
                        result.items.forEach((itemRef) => {
                            // Get the download URL for the item
                            const promise = getDownloadURL(itemRef)
                                .then((url) => {
                                    // Use the URL as needed (e.g., display it in an <img> tag)
                                    // console.log('Download URL:', url);
                                    outfitList.push(url);
                                })
                                .catch((error) => {
                                    // Handle errors
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
