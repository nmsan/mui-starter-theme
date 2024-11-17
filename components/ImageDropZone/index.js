import styled from "styled-components";
import {useEffect, useState} from "react";
import {useDropzone} from "react-dropzone";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";


const getColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isFocused) {
        return '#2196f3';
    }
    return '#c4c4c4';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${props => getColor(props)};
  border-style: solid;
  //background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
    --Paper-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
`;
const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: "auto",
    height: "300px",
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};
const label = {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "300",
    lineHeight: "1.4375em",
    letterSpacing: "0.00938em",
    fontSize: "12px",
    position: "absolute",
    padding: "0px 6px",
    backgroundColor: "#fff",
    marginLeft: "8px",
    marginTop: "-8px",
    color: "rgb(0 0 0 / 60%)"
}
const ImageDropZone = ({labelText, isRequired}) => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject,

    } = useDropzone({
        accept: {'image/*': []},
        multiple: false,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }});
    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    alt={"test"}
                    src={file.preview}
                    style={img}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    return (
        <div className="container">
            <span style={label}>{labelText} {isRequired ? <span>*</span>: ''}</span>
            <Container {...getRootProps({isFocused, isDragAccept, isDragReject})}>
                <input {...getInputProps()} />
                {
                    files.length > 0
                        ? <aside style={thumbsContainer}>{thumbs}</aside>
                        : <p>Drag & drop some files here, or click to select files</p>
                }
            </Container>

        </div>
    );
}
ImageDropZone.prototype = {
    labelText: PropTypes.string.isRequired,
    isRequired: PropTypes.bool
}
export default ImageDropZone;