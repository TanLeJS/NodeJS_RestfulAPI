const path = require("path")
const { base } = require("../models/user")


const uploadSingleFile = async(fileObject) => {

    // save => public/image/upload
    // abc.png => abc time-stamp.png
    // upload multiple file

    let uploadPath = path.resolve(__dirname, "../public/image/upload")


    let extName = path.extname(fileObject.name)

    let baseName = path.basename(fileObject.name, extName)
    
    let finalName = `${baseName}-${Date.now()}${extName}`
    let finalPath = `${uploadPath}/${finalName}
    `
    try {
        await fileObject.mv(uploadPath)
        return {
            status: "success",
            path: finalName,
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

const uploadMultipleFiles = async (filesArr) => {
    try {
        let uploadPath = path.resolve(__dirname, "../public/images/upload");

        let resultArr = [];
        let countSuccess = 0;
        for (let i = 0; i < filesArr.length; i++) {
            console.log("check i = ", i)
            //get image extension
            let extName = path.extname(filesArr[i].name);

            //get image's name (without extension)
            let baseName = path.basename(filesArr[i].name, extName);

            //create final path: eg: /upload/your-image.png
            let finalName = `${baseName}-${Date.now()}${extName}`
            let finalPath = `${uploadPath}/${finalName}`;

            try {
                await filesArr[i].mv(finalPath);
                resultArr.push({
                    status: 'success',
                    path: finalName,
                    fileName: filesArr[i].name,
                    error: null
                })
                countSuccess++;
            } catch (err) {
                resultArr.push({
                    status: 'failed',
                    path: null,
                    fileName: filesArr[i].name,
                    error: JSON.stringify(err)
                })
            }
        }

        return {
            countSuccess: countSuccess,
            detail: resultArr
        }

    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    uploadSingleFile,
    uploadMultipleFiles
}