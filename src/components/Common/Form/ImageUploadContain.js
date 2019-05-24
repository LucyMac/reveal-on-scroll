import React from 'react';

import { EditImage, Link, Wrap } from '@flec/flec-brand-ui';

import ImageUpload from './ImageUpload';

class ImageUploadContain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null
    }

    this.handleUpload = this.handleUpload.bind(this);
  }

  /**
   * Callback for drop or browser listener
   * 
   * @param {*} files
   */
  handleUpload(files) {

    if (files && files.length > 0) {
      this.setState({ file: files[0] }, () => {
        console.log('Image set: ', this.state)
      });
    }
  }

  /**
   * Convert image to readable
   */
  getImage() {
    if (this.state.file !== null) {
      return URL.createObjectURL(this.state.file);
    }
  }

  /**
   * Sets the local file to null
   * and resets the input state so
   * form can be saved and image removed
   */
  editAction = () => {
    this.setState({ file: null });
  }

  render() {
    if (this.state.file === null) {
      return (
        <ImageUpload handleUpload={this.handleUpload} />
      )
    } else {
      return (
        <React.Fragment>
          <EditImage src={this.getImage()} editAction={this.editAction} />
          <Wrap spaceTop="3" style={{ alignSelf: 'flex-start' }}>
            <Link 
              size="small" 
              onClick={this.editAction}>
                Remove image
            </Link>
          </Wrap>
        </React.Fragment>
      )
    }
  }
}

export default ImageUploadContain;