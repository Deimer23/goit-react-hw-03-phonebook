import s from './Filter.module.css'
const Filter = props=>{
    return(
        <div>
            <label>Find contact by name</label>
            <input className={s.input} type="text" name="filter" onChange={props.filter}/>
        </div>
    )
}

export default Filter;