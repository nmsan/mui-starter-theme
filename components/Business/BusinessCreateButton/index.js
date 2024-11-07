'use client'
import PropTypes from "prop-types";
import WdDialog from "../../../theme/WdDialog";
import WdButton from "../../../theme/WdButton/WdButton";
import {useEffect, useState} from "react";
import {AddBox} from "@mui/icons-material";
import WdActionButton from "../../../theme/WdActionButton";
import WdBox from "../../../theme/WdBox";
import WdTextField from "../../../theme/WdTextField";
import {useDropzone} from "react-dropzone";
import styled from 'styled-components';


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
    return '#eeeeee';
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
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
    width: 100,
    height: 100,
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
function StyledDropzone(props) {
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

const BusinessCreateButton = () => {

    const [open, setOpen] = useState(false)

    const onClose = () => {
        setOpen(false)
    }
    const openDialog = () => {
        setOpen(true)
    }

    const action = () => {
        return <div style={{display: "flex", justifyContent: "space-between", width:"100%"}}>
            <WdButton variant="outlined"  color="secondary">Cancel</WdButton>
            <WdButton variant="outlined" >Submit</WdButton>

        </div>
    }
    return <>
        <WdActionButton icon={<AddBox/>} text={"New"} onClick={() => openDialog(true)}/>
        <WdDialog
            title="Create Business"
            open = {open}
            setOpen = {setOpen}
            onClose = {onClose}
            actions = {action()}
        >
            <WdBox>
                <WdTextField
                    required
                    id="business-name"
                    label="Business Name"
                    placeholder="Enter your the name of the business"
                ></WdTextField>
                <StyledDropzone />
            </WdBox>
        </WdDialog>
    </>
}

BusinessCreateButton.prototype = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export default BusinessCreateButton;