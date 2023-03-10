import React, { ReactNode, useRef } from "react";

interface FileUploadProps {
  setFile: Function;
  accept: string;
  children: ReactNode;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  setFile,
  accept,
  children,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files);
  };
  return (
    <div
      onClick={() => {
        ref.current?.click();
      }}
    >
      <input
        style={{ display: "none" }}
        type="file"
        ref={ref}
        accept={accept}
        onChange={onChange}
      />
      {children}
    </div>
  );
};
