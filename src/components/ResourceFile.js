import './ResourceFile.css';
import fileIcon from '../media/icon_file.png';

const ResourceFile = ({title, url}) => {

    return (
        <div className="resFile">
            <img src={fileIcon} alt="File" />
            <a href={url} target="_blank" rel='noreferrer'>{title}</a>
        </div>
    );
}

export default ResourceFile;