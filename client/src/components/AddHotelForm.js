function AddHotelForm({updateFormData, addHotel}){
    return <form onSubmit={addHotel}>
        <h1>Add Hotel Form</h1>
        <label>Hotel Name: </label>
        <input onChange={updateFormData} type="text" name="name"/>
        <input type="submit" value="Add Hotel"/>
    </form>
}

export default AddHotelForm