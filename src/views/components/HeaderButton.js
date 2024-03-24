import './HeaderButton.css';

function HeaderButton({text, onClick}) {
  return (
    <input 
      type="button" 
      value={text} 
      onClick={onClick} 
      className="HeaderButton-button"
    />
  )
}

export default HeaderButton;
