import { useState } from 'react';

function ImageUpload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // capture le premier fichier sélectionné
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('image', file); // 'image' est la clé attendue par le serveur

        try {
            const response = await fetch('http://yourserver.com/upload', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Upload successful', data);
            } else {
                console.error('Upload failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload Image</button>
        </form>
    );
}

export default ImageUpload;
