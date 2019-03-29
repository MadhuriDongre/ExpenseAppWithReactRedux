console.log('app1.js is running');

// JSX --JavaScript XML
const user ={
    name:"Madhuri Dongre",
    age:28,
    location: "Bangalore, IN"
};

const getLocation = (location) => {
    return location ? <p>Location : {location}</p>:undefined;
};

const template=(
    <div>
        <h1>{user.name ? user.name :"Anonymous"}</h1>
        {(user.age && user.age > 18 )&& <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
// ReactDOM.render(template, document.getElementById('app'));

const book={
    title:"Harry Potter",
    // subtitle:"Chamber of Secrets!!!",
    author:"J.K.Rowling",
    options:['one','two']
};

const getAuthor=(author)=>{
    return author ? <h3>Author: {book.author}</h3>: "No author information";
};

const html = (
    <div>
        <h1>{book.title}</h1>
        {book.subtitle && <h2>{book.subtitle}</h2>}
        {getAuthor(book.author)}
        <p>{(book.options && book.options.length > 0) ? "here are your options" : "No option available"}</p>
    </div>
);
ReactDOM.render(html, document.getElementById('app'));
