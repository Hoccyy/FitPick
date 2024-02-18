import { getStorage, ref, deleteObject } from "firebase/storage";
import { auth, app } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';


export const DeleteImage = (fileName: string) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userDir = (user.uid + user.displayName).replaceAll(' ', '');
            console.log(userDir)
  
            // Root reference
            const storage = getStorage(app!);
            
            // User image
            const selectedFile = fileName;

            alert(selectedFile);
  
            // Create a reference to 'images/test/test.jpg'
            const fileRef = ref(storage, (selectedFile));
            
  
            deleteObject(fileRef).then(() => {
                console.log('File deleted :))');
                // Reload the page after successful deletion
                window.location.reload();
            })
            .catch((error) => {
                console.error('Sorry, Error deleting image, Error:', error);
                window.location.reload();
            });
        }
    });
};
