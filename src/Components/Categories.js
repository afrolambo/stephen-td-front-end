import React from 'react'

function Categories ({categories, clickHandler, selected}){

    function setClassName(category, selected) {
        if (category === selected){
            return "selected"
        } else {
            return null
        }
    }

    let buttons = categories.map(function(category, index){return (<button className={setClassName(category, selected) } onClick={clickHandler} key={index}>{category}</button>)})
    return <div className="categories">
    <h5>Category Filters</h5>
    {buttons}
    </div>

}

export default Categories 