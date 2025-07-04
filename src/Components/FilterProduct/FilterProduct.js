import './FilterProduct.css';
function FilterProduct(props) {
    function onFilterChange(event) {
        props.onFilterChange(event.target.value);
    }
    return (<div className="filter-area" onChange={onFilterChange}>
        <select name="isAvailable">
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
        </select>
    </div>)
}

export default FilterProduct;