

function Kid({ value, id, deleteKid }) {

	const deleteMe = () => {
		deleteKid(id);
	}



	return (
		<div className="booking-input booking-input_padding form-quests__kid">
			<input type="text" readOnly value={value} placeholder="Добавить детей" />
			<div className="quest-adult__icon quests-icon"><img src="./img/child.svg" alt="" /></div>
			<button type="button" onClick={deleteMe} className="delete"> </button>
		</div>
	)
}


export default Kid