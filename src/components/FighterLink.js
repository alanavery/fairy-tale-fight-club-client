import { Link } from 'react-router-dom';

function FighterLink(props) {
  const linkTo = `/fighters/${props.fighter._id}`;
  return (
    <div className="link-fighter">
      <Link to={linkTo}>{props.fighter.name}</Link>
    </div>
  );
}

export default FighterLink;
