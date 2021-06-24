import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import FlashOnIcon from '@material-ui/icons/FlashOn';
export default function SwipeButton(){
    return (
        <div className="swipeButton">
            <IconButton>
                <ReplayIcon fontSize="large" className="replay_icon"/>
            </IconButton>
            <IconButton>
                <CloseIcon fontSize="large" className="close_icon"/>
            </IconButton>
            <IconButton>
                <StarIcon fontSize="large" className="star_icon"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize="large" className="favorite_icon"/>
            </IconButton>
            <IconButton>
                <FlashOnIcon fontSize="large" className="flash_icon"/>
            </IconButton>
        </div>
    )
}