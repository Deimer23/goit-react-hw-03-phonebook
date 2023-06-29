
const Section = props =>{
    return(
        <section>
            <h5>{props.tittle}</h5>
            {props.children}
        </section>
    )
}

export default Section;