import React from 'react'
import classes from './PostJobDescription.module.scss'
import './postJob.css'
import { useDropzone } from 'react-dropzone'

const PostJobDescriptionCard = () => {

    const { getRootProps, getInputProps} = useDropzone({});

    return (
        <>
            <div className={classes.title}>Job description</div>
            <div className={classes.input}>
                <div className={classes.inputTitle}>
                    Describe the job
                </div>
                <textarea type="text" placeholder='Description'/>
            </div>
            <div className={classes.input}>
                <div className={classes.inputTitle}>
                    Upload a picture if necessary
                </div>
                <div {...getRootProps({ className: "dropzone" })}>
                    <input className="input-zone" {...getInputProps()} />
                    <div className="text-center">
                        <p className="dropzone-content">
                        Drag and drop or <span>Browse</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.button}>
                <button className={classes.backButton}>Back</button>
                <button className={classes.nextButton}>Next</button>
            </div>
        </>
    )
}

export default PostJobDescriptionCard