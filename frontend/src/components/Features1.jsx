const Features1=(props)=>{
    const features = props.features
    const img = props.img
    const alt = props.alt
    const head = props.head
    const body = props.body
    return (<div className="features-1">
        {features.map((feature)=>(
                    <div className="feature" id={feature.id}>
                    <img src={feature.img} alt={feature.alt} />
                    <h3>{feature.head}</h3>
                    <p>{feature.body}</p>
                </div>
        ))}
    </div>)}

export default Features1