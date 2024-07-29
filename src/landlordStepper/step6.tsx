import { CModal, UploadImage } from "@/src/components";
import { useOpenCloseModal } from "@/src/hooks";
import { GENERATE_UPLOAD_URL, UPDATE_LANDLORD_ATTACHMENT, uploadFileUsingSignedUrl } from "@/src/utils";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import Congratulations from "../components/Congratulations";
import NextPreviousButtons from "./NextPreviousButtons";

interface Props {
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  closeLandlordModal: () => void;
  uniqueId: string;
}

const Step6: React.FC<Props> = ({ handleNextStep, uniqueId, handlePreviousStep, closeLandlordModal }) => {
  const [genUploadUrl, { loading, error }] = useMutation(GENERATE_UPLOAD_URL);
  const { closeModal: closeSuccessModal, isOpen, openModal } = useOpenCloseModal();
  const [isUpdateComplete, setIsUpdateComplete] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileInterface[]>([]);
  const [updateLandlordAttachment,
    { loading: updateLandlordAttachmentLoading, error: updateLandlordAttachmentError }
  ] = useMutation(UPDATE_LANDLORD_ATTACHMENT);

  const generateUploadUrl = async (fileName: string, fileType: string) => {
    const { data } = await genUploadUrl({
      variables: { fileName, fileType }
    });
    return data.generateUploadUrl;
  };

  const updateAttachment = async (fileName: string, uploadedFileUrl: string) => {
    const { data } = await updateLandlordAttachment({
      variables: {
        uniqueId: uniqueId,
        attachment: {
          documentName: fileName,
          documentUrl: uploadedFileUrl
        }
      }
    });
    return data;
  };
  // Update file status
  const updateFileStatus = (index: number, isUploading: boolean, isCompleted: boolean) => {
    setSelectedFiles(prevSelectedFiles => {
      const updatedFiles = [...prevSelectedFiles];
      updatedFiles[index] = { ...updatedFiles[index], isUploading, isCompleted };
      return updatedFiles;
    });
  };

  // generate upload url and upload files using signed url
  const handleGetUrl = async () => {
    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        updateFileStatus(i, true, false);
        const { url, fields } = await generateUploadUrl(file.fileName, file.fileType);

        if (url && fields) {
          const uploadedFileUrl = await uploadFileUsingSignedUrl(url, fields, file.fileLocalBlobURL, file.fileType)
          if (uploadedFileUrl) {
            const updateData = await updateAttachment(file.fileName, uploadedFileUrl);
            if (updateData) {
              openModal();
            }
            // console.log("uploadedFileUrl", updateData)
          }

          updateFileStatus(i, false, true);

        } else {
          updateFileStatus(i, false, false);
        }
      }
    } catch (error) {
      console.error('Error creating landlord:', error);
    }
  }

  return (
    <>
      <div className="container p-3 pt-0 mt-5">
        <h2 className="fw-normal mb-2">
          Upload Images, legals, and complaint files
        </h2>
        <p className="subTextColor mb-4">
          Provide all necessary documents and files to complete your property submission.
          For the best results, upload high-quality images and ensure all legal and complaint files are up-to-date and clearly labeled
        </p>

        <div className="row">
          <UploadImage selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
        </div>
        {error && <div className="text-danger">Submission error ${error.message}</div>}
      </div>
      <div className="container">
        <div className="" style={{ marginRight: "8px", marginLeft: "10px" }}>
          <NextPreviousButtons
            handlePreviousStep={handlePreviousStep}
            handleNextStep={handleGetUrl}
          />
        </div>
      </div>

      <CModal
        showModal={isOpen}
        closeModal={() => {
          closeSuccessModal()
          closeLandlordModal();
        }}
        title={""}
        showFooter={false}
      >
        <Congratulations
          handleNextStep={() => {
            closeSuccessModal();
            closeLandlordModal();
          }}
        />
      </CModal>
    </>
  );
};

export default Step6;
