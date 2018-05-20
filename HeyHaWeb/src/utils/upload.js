const domain = 'http://api.zjztty.com';
// const domain = '/api';

const _uploadService = (formData, onSuccess, onError ) => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `${domain}/admin/dynamic/addDynamic`, true);
  xhr.withCredentials = true;
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      try {
        const result = JSON.parse(xhr.responseText);

        if (xhr.status === 200 || xhr.status === 304) {
          if (result.status === 'SUCCESS') {
            onSuccess(result.data);
            return;
          }
          onError(result.msg);
          return;
        }
        onError(result);
      } catch(e) {
        onError(e)
      }
    }
  };
  xhr.send(formData);
}

const uploadFiles = ({ files, fileKey, data, onUploadSuccess, onUploadFailed }) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append(fileKey, file.fileData, file.fileName)
  });

  const keys = Object.keys(data);
  keys.forEach((key) => {
    formData.append(key, data[key]);
  });

  _uploadService(formData, onUploadSuccess, onUploadFailed);
};

const readFileFunc = (imgData, onSuccess) => {
  window.resolveLocalFileSystemURL(imgData, function(fileEntry) {
    fileEntry.file((file) => {
      var reader = new FileReader();
      reader.onloadend = function () {
        const fileData = new Blob([this.result]);  
        onSuccess({
          uri: imgData,
          fileData,
          fileName: file.name
        })
      };

      reader.readAsArrayBuffer(file);

    }, function(e){()=> {}});  
  }, function(e){()=>{}}); 
}

const transferFilePath = (onSuccess) => (imageData) => {
  if (window.device.platform === 'iOS') {
    readFileFunc(imageData, onSuccess);
    return;
  }
  window.FilePath.resolveNativePath(imageData, (uri) => {
    readFileFunc(uri, onSuccess);
  });
}

const useCameraToUpload = (onSuccess, onError) => {
  const cameraOptions = {
    quality: 50,
    encodingType: Camera.EncodingType.JPEG,
    mediaType: Camera.MediaType.PICTURE,
    sourceType: Camera.PictureSourceType.CAMERA
  };
  navigator.camera.getPicture(transferFilePath(onSuccess), onError, cameraOptions);
};

const usePhotoToUpload = (onSuccess, onError) => {
  const cameraOptions = {
    quality: 50,
    encodingType: Camera.EncodingType.JPEG,
    mediaType: Camera.MediaType.PICTURE,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY
  };
  navigator.camera.getPicture(transferFilePath(onSuccess), onError, cameraOptions);
};

module.exports = {
  useCameraToUpload,
  usePhotoToUpload,
  uploadFiles
};
