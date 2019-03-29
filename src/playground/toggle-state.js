class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.toggle= this.toggle.bind(this);
        this.state={
            show: false
        }
    }
    toggle(){
        this.setState((prevState)=>{
            return {
                show: !prevState.show
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Toggle App</h1>
                <button onClick={this.toggle} className="btn btn-info m-2 p-2">{this.state.show?'Hide Details':'Show Details'}</button>
                {this.state.show && (<div><p>Show or Hide Details on the click of button</p></div>)}
            </div>
        );
    }
}

ReactDOM.render(<Toggle/>, document.getElementById('app'));