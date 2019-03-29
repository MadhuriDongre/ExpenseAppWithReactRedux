const app ={
    title: "Indecision App",
    subtitle:"Put your life in the hand of computer",
    options:[]
};

const onFormSubmit =(e)=>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value =null;
        renderFormApp();
    }
};

const onRemoveAll = ()=>{
    app.options =[];
    renderFormApp();
};

const onMakeDecision =()=>{
    const randomNum = Math.floor(Math.random()*app.options.length);
    const optionToDo = app.options[randomNum];
    alert(optionToDo);
};

const renderFormApp =()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <h3>{app.subtitle}</h3>}
            <p>{(app.options && app.options.length > 0) ? "here are your options" : "no option available"}</p>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button className="btn btn-primary m-2 p-1">Add Option</button>
                <button className="btn btn-primary m-2 p-1" onClick={onRemoveAll}>Remove All</button>
            </form>
            <ol>
                {app.options.map((opt, index)=><li key={index}>{opt}</li>)}
            </ol>
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};
renderFormApp();
