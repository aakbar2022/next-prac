import { CheckIcon, UploadIcon } from "@/assets/images";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "react-bootstrap";
import { validMimeTypes } from "../stepDataInit";
import { calcFileSizeInMB } from "../utils";

interface Props {
  setSelectedFiles: (data: FileInterface[]) => void;
  selectedFiles: FileInterface[];

}

const UploadImage = ({ selectedFiles, setSelectedFiles }: Props) => {
  const wrapperRef = useRef(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    let invalidFiles = false
    const validFiles: FileInterface[] = [];
    if (fileList) {
      Array.from(fileList).forEach((file) => {
        if (validMimeTypes.includes(file.type)) {
          validFiles.push({
            fileName: file.name,
            fileLocalBlobURL: URL.createObjectURL(file),
            fileType: file.type,
            progress: 0,
            fileSize: calcFileSizeInMB(file.size),
            isUploading: false,
            isCompleted: false
          })
        } else {
          invalidFiles = true
        }
      });

      if (invalidFiles) {
        alert("Some or all selected file(s) type is not supported. Please select valid files only")
      }
      setSelectedFiles([...selectedFiles, ...validFiles]);
    }
  };

  const handleDeleteFile = (fileName: string) => {
    const updatedFiles = selectedFiles.filter(
      (file) => file.fileName !== fileName
    );
    setSelectedFiles(updatedFiles);
  };

  return (
    <div className="mr-3">
      {<label htmlFor="btn-upload" style={{ width: "100%" }}>
        <div
          className="file-upload-box"
          style={{
            position: "relative",
            width: "100%",
            border: "1px dashed rgba(0, 0, 0, 0.4)",
            borderRadius: "7px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          ref={wrapperRef}
        >
          <div className="d-flex align-items-center justify-content-center flex-column p-4 ;">
            <UploadIcon />
            <input
              id="btn-upload"
              name="btn-upload"
              className="form-control"
              multiple
              type="file"
              accept={validMimeTypes.join(',')}
              onChange={(e: any) => handleFileChange(e)}
              style={{ display: "none" }}
            />
            <h6 className="mt-3 fs-4">Upload Images, pdfs, and docs files</h6>
            <p className="subTextColor">Max file size 30MB</p>
          </div>
        </div>
      </label>}
      <div className="w-100 mt-4 ">
        {selectedFiles.length > 0 && (
          <ul
            className="w-100 max-600 bg-white p-0 overflow-auto"
            style={{ maxHeight: "165px", height: "100%" }}
          >
            {selectedFiles.map((item, index) => (
              <li
                key={index}
                className="d-flex align-items-center m-1 justify-content-between border p-2"
              >
                <div className="d-flex align-items-center gap-3">
                  <Image
                    src={item.fileLocalBlobURL}
                    alt={item.fileName}
                    width={50}
                    height={50}
                  />
                  <div className="d-flex flex-column gap-2">
                    <span className="fs-6 fw-medium split_two_line">{item.fileName}</span>
                    <span className="subTextColor">{item.fileSize} MB</span>
                  </div>
                </div>

                {
                  item.isUploading ?
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    : item.isCompleted ? <div style={{ width: "26px" }}><CheckIcon color="#22C275" /></div>
                      : <Button
                        variant="link"
                        onClick={() => handleDeleteFile(item.fileName)}
                        style={{ cursor: "pointer" }}
                      >X</Button>
                }
              </li>
            ))}
          </ul>
        )}
      </div>
    </div >
  );
};

export default UploadImage;
