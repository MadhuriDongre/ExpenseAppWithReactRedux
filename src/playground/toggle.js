
let show = false;

const toggle =()=>{
    show = !show;
    render();
}

const render =()=> {
    const template = (
    <div>
        <h1>Toggle App</h1>
        <button onClick={toggle} className="btn btn-info m-2 p-2">{show?'Hide Details':'Show Details'}</button>
        {show && (<div><p>Show or Hide Details on the click of button</p></div>)}
    </div>
);

ReactDOM.render(template,document.getElementById('app'));
}
render();