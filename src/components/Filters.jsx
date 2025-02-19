function Filters() {

    return (
        <>
            <div className="filters">
                <div className="checkboxes">
                    <label><input type="checkbox" name="checkbox-car" />Cars</label>
                    <label><input type="checkbox" name="checkbox-clothes" />Clothes</label>
                    <label><input type="checkbox" name="checkbox-technology" />Technology</label>
                    <label><input type="checkbox" name="checkbox-household" />Household Items</label>
                    <label><input type="checkbox" name="checkbox-jewelry" />Jewelry</label>
                </div>
            </div>
        </>
    )
}

export default Filters