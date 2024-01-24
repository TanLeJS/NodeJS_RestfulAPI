const uploadSingleFile = async(fileObject) => {

    // save => public/image/upload
    // abc.png => abc time-stamp.png
    // upload multiple file

    let uploadPath = __dirname +  fileObject.name;
    try {
        await fileObject.mv(uploadPath)
        return {
            status: "success",
            path: "link-image",
            error: null
          }
    } catch (error) {
        return {
            status: "failed",
            path: null,
            error: JSON.stringify(error)
          }
    }
}

const uploadMultipleFile = () => {

}

module.exports = {
    uploadSingleFile,
    uploadMultipleFile
}