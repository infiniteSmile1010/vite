import { useState } from "react";
import Button from "../Button";
import InputFiles from "../InputFile";
import InputPages from "../InputPages";

const FileUploader = () => {
  const [files, setFiles] = useState<any[]>([]);

  const [pages, setPages] = useState([Array(Number(files.length)).fill(1)]);

  /* const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }; */
  const handleUpload = async () => {
    // We will fill this out later
  };
  console.log(pages);

  let i = 0;
  return (
    <>
      <div className="col-12">
        {/* <div className="file-upload">
          <label>
            <input
              type="file"
              name="fileToUpload"
              id="fileToUpload"
              accept=".doc, .docx, .rtf, .pdf, .odt, .txt"
              onChange={handleFileChange}
            />
            <span>Choose file</span>
          </label>
        </div> */}
        <InputFiles files={files} setFiles={setFiles} />
        <div>
          {files && (
            <table className="table">
              <thead>
                <tr>
                  <th colSpan={5}>File details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Number of pages</td>
                  <td>Express service</td>
                  <td>Estimated cost (in credits)</td>
                  <td>Size</td>
                </tr>

                {files.map((file) => (
                  <tr>
                    <td>{file.originalFile.originalFileName}</td>
                    <td>{<InputPages pages={pages} setPages={setPages} />}</td>
                    <td>
                      {
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="expressDelivery"
                            id="expressDelivery"
                          />
                        </div>
                      }
                    </td>
                    <td>{pages[0]}</td>
                    <td>{(file.originalFile.size / 1024).toFixed(1)} Kbytes</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {files && (
        <div>
          <Button children="Proceed" color="warning" onClick={handleUpload} />
        </div>
      )}
    </>
  );
};

export default FileUploader;