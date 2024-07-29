/**
 * Calculates the file size in megabytes (MB) from the given file size in bytes.
 *
 * @param {number} fileSizeInBytes - The file size in bytes.
 * @return {number} The file size in megabytes.
 */
function calcFileSizeInMB(fileSizeInBytes: number): number {
    return Math.round((fileSizeInBytes / (1024 * 1024)) * 100) / 100;
}

async function fetchBlobContent(blobUrl: string) {
    const response = await fetch(blobUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch blob content');
    }
    return response.blob();
}

function buildUrl(baseUrl: string, fields: any) {
    const encodedPath = encodeURIComponent(fields.key);
    return `${baseUrl}${encodedPath}`;
}

/**
 * Uploads a file to a specified URL using a signed URL.
 *
 * @param {string} url - The URL to upload the file to.
 * @param {string} blobUrl - The URL of the file to upload.
 * @param {string} fileType - The MIME type of the file.
 * @return {Promise<void>} A promise that resolves when the file is uploaded successfully, or rejects with an error message.
 */
const uploadFileUsingSignedUrl = async (url: string, fields: any, blobUrl: string, fileType: string) => {
    const blobContent = await fetchBlobContent(blobUrl);
    const form: any = new FormData();
    Object.entries(fields).forEach(([field, value]: any) => {
        form.append(field, value);
    });

    form.append("file", blobContent);

    try {
        const res = await fetch(url, {
            method: 'POST',
            body: form,
            mode: 'no-cors'
        });
        if (res.status === 0) {
            console.log(res);
        }

        const fullUrl = buildUrl(url, fields);
        return fullUrl;
    } catch (err) {
        console.error(err);
    }
}

export {
    calcFileSizeInMB,
    uploadFileUsingSignedUrl
};

