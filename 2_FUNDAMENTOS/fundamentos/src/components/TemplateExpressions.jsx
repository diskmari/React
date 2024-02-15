const TemplateExpressions = () => {

    const name = "Bruno";
    const data = {
        age: 20,
        job: "Carpenteer"
    }
    
    return (
        <div>
            <h1>Olá {name}, td bem?</h1>
            <p>Vc atua como: {data.job}</p>
            <p>{4+4}</p>
            <p>{console.log("jsx.react")}</p>
        </div>
    )
}

export default TemplateExpressions