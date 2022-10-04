import './ResourceFile.css';
import fileIcon from '../media/icon_file.png';
import DownloadLink from 'react-download-link';
import { Link } from 'react-router-dom';

const ResourceFile = ({title}) => {

    return (
        <div className="resFile">
            <img src={fileIcon} alt="File" />
            {/* <Link to={'../media/icon_file.png'} onClick={downloadTxtFile} download>{title}</Link> */}
            <DownloadLink label={title} filename={title} exportFile={() => fileIcon}/>
        </div>
    );
}
 
export default ResourceFile;