import { ChangeEvent } from 'react';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { auth, app } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const UploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userDir = (user.uid + user.displayName).replaceAll(' ', '');
            console.log(userDir)
  
            // Root reference to storage
            const storage = getStorage(app!);
            
            // User image file
            const selectedFile = event.target.files?.[0];
  
            // Create a reference to 'user/image.[ext]'
            const storageRef = ref(storage, (userDir + '/' + selectedFile!.name));
  
            if (selectedFile) {
                const reader = new FileReader();
    
                reader.onload = function(event) {
                    const fileBlob = new Blob([event.target?.result ?? ''], { type: selectedFile.type });
                    
                    uploadBytes(storageRef, fileBlob).then((snapshot) => {
                        console.log('Image Uploaded! :))');
                        // Reload the page after successful upload
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.error('Sorry, Error uploading image, Error:', error);
                        window.location.reload();
                    });
                }
                reader.readAsArrayBuffer(selectedFile);
            }
        }
    });
};
