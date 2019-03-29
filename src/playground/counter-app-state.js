class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count:0
        }
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('count');
            const count = parseInt(json,10);
            if(!isNaN(count)){
                this.setState(()=>({count}));
            }
        }
        catch(e){
            //swallow the error
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count!==this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }

    addOne(){
        console.log('Add');
        this.setState((prevState)=>{
            return {
                count: prevState.count+1
            };
        });
    }
    minusOne(){
        console.log('Minus');
        this.setState((prevState)=>{
            return {
                count: prevState.count-1
            };
        });
    }
    reset(){
        console.log('Reset');
        this.setState(()=>{
            return {
                count: 0
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Counter</h1>
                <button className="btn btn-primary m-2 p-1" onClick={this.addOne}>+1</button>
                {this.state.count}
                <button className="btn btn-primary m-2 p-1" onClick={this.minusOne}>-1</button>
                <button className="btn btn-warning p-1" onClick={this.reset}>Reset</button>
            </div>
        );
    }
}
// Counter.defaultProps={
//     count: 0
// }

ReactDOM.render(<Counter count={1}/>,document.getElementById('app'));