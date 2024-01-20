import React, { useState } from 'react';

const SendFiles = ({ handleFileOptionClick }) => {
    const [fileOptionsVisible, setFileOptionsVisible] = useState(false);

    const toggleFileOptions = () => {
        setFileOptionsVisible(!fileOptionsVisible);
    };

    return (
        <div className="file-options">
            {/* Button to toggle file options */}
            <button id='upload-files' 
             style={{backgroundColor: 'transparent'}}
                type="button"
                className="file-options-button"
                onClick={toggleFileOptions}
            >
                <i className="material-icons"><img src={require('../images/attach-file.png')} alt="attachFiles"  style={{ width: '25px', height: '25px', backgroundColor: 'transparent' }}/></i>
            </button>

            {/* File options menu */}
            {fileOptionsVisible && (
                <div className="file-options-menu">
                    <button
                        type="button"
                        onClick={() => handleFileOptionClick('photo')}
                    >
                        <i className="material-icons">photo</i>
                        Photo
                    </button>
                    <button
                        type="button"
                        onClick={() => handleFileOptionClick('document')}
                    >
                        <i className="material-icons">description</i>
                        Document
                    </button>
                    {/* Add more file options as needed */}
                </div>
            )}
        </div>
    );
};

export default SendFiles;
