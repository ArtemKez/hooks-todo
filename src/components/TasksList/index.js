import "../../App.css"

export default function TasksList(props) {
    return (
        <div className={"tasks-list"}>
            <h2>Tasks</h2>
            <div className={"task-wrapper"}>
                {props.items.map((el) => {
                    function removeEl() {
                        props.removeItem(el.id)
                    }

                    function checkEl() {
                        props.setChecked(el.id)
                    }

                    return (<div key={el.id} className={"task"}>
                        <div>
                            <input
                                type="checkbox"
                                checked={el.isDone}
                                onChange={checkEl}
                            />
                            <p>{el.text}</p>
                        </div>
                        <img className={"close-icon"}
                             src="closeIcon.png"
                             alt="img"
                             onClick={removeEl}
                        />
                    </div>)
                })}
            </div>
        </div>
    )
}