const obj = {
    name : "Sharan",
    getName() {
        return this.name
    }
}
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = "Hello, World!"
        const options = ['Thing 1', 'Thing 2', 'Thing 3']
        return (
            <div>
            <Header title={title} subtitle={subtitle} options ={options}/>
            <Action/>
            <Options options = {options}/>
            <AddOption/>
            </div>
        )
    }
}
//React enforces UPPERCASE 
class Header extends React.Component {
    //Special method - must be defined - returns jsx
    render(){
        return (
            <div>
                <h1>{this.props.title} App</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        alert(this.props.options)
    }
    render() {
        return (
            <div>
            <button onClick = {this.handleRemoveAll}>Remove all</button>
            {
                this.props.options.map((data)=>
                    <Option key={data} optionText={data}/>
                )
            }
                <br/>
                <Option/>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim()
        if(option)
        alert(option)
    }
    render() {
        return (
            <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
                Testststs Component here
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))