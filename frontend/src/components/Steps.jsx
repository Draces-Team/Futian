const Steps = (props)=>{
    const steps = props.steps
    const title = props.title
    const body = props.body
    const href = props.href
    const link = props.link
    const className = props.className
    return steps.map((step)=>(
                <div className={step.className} key={step.id}>
                    <div className="col-1">
                        <h1>{step.id}</h1>
                    </div>
                    <div className="col-2">                        
                        <img src="" alt="" />
                        <h3>{step.title}</h3>
                        <p>{step.body}</p>
                        <a href={step.href}>{step.link}</a>
                    </div>
                </div>                   
            ))   
}

export default Steps