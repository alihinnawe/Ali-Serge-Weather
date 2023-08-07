import "./List.css";

export default function List({ LisOfActivities, onDeleteActivity }) {
  return (
    <>
      <ul className="activities-list">
        {LisOfActivities.map((activity) => (
          <li key={activity.id} className="activities-list_item">
            <h5>{activity.name}</h5>
            <button
              className="activities-item_button"
              type="button"
              aria-label="delete list item"
              onClick={() => onDeleteActivity?.(activity)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
