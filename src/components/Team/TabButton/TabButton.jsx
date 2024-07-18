import "./tabbutton.scss";

export default function TabButton({children, onSelect, isSelected}) {
    
    return (
        <div className="tabButton">
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </div>
    );
}