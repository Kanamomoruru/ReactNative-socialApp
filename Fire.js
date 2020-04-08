import FirebaseKeys from "./config";
import firebase from "firebase";

class Fire {
    constructor() {
        firebase.initializeApp(FirebaseKeys);
    }

    uploadPhotoAsync = async uri => {
        const path = `photos/${this.uid}/${Date.now()}.jpg`;

        return new Promise(async(res, rej) => {
            const response = await fetch(uri);
            const file = await response.blob();

            let upload = firebase.storage().ref(path).put(file);

            upload.on(
                "state_changed", 
                snapshot => {},
                err => {
                    ref(err);
                },
                async () => {
                    const url = await upload.snapshot.ref.getDownloadURL();
                }
            );
        });
    };

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;