import React from 'react';

import { UploadBox } from '@flec/flec-brand-ui';

import Dropzone from 'react-dropzone';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);

    this.onDrop = this.onDrop.bind(this);
  }

  /**
   * Callback for drop or browser listener
   * 
   * @param {*} files
   */
  onDrop(files) {
    const { handleUpload } = this.props;
    handleUpload(files);
  }

  render() {
    return (
      <Dropzone 
        disablePreview={false}
        onDrop={this.onDrop} 
        accept="image/jpeg, image/png"
      >
        {({getRootProps, getInputProps}) => (
          <div
            {...getRootProps()}
          > 
            <React.Fragment>
              <input {...getInputProps()} />
              <UploadBox />
            </React.Fragment>
          </div>
        )}
      </Dropzone>
    );
  }
}

export default ImageUpload;