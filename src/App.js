
import './App.css';


const subjects = [

  "Books",
  "Hobbies",
  "Work",
  "Speadreading",
  "Juggling"

];

const sObjects = subjects.map ((subject,i) => ({id:i,title:subject}));


//subjects.map((subject) => console.log(subject));

function Header(props){

  return(
    <header>
      <h1>{props.name}</h1>
    </header>
    
  );
}

function Main(props) {
  return(
    <section>
      <p>This is my personal {props.adjective} site</p>
      <ul style={{textAlign:"left"}}>
      {props.subjects.map((subject) => (
            
            <li key={subject.id}>{subject.title}</li>

          ))}
      </ul>
    </section>
  );

}

function Footer(props) {
  return (
    <footer>
      <p>Created By SoftCloud. Copyright {props.year}</p>
    </footer>
  );

}





function App() {
  return (
    <div className="App">
       <Header name="Ahmad Farhat" />
       <Main adjective="amazing" subjects={sObjects} />
       <Footer year={new Date().getFullYear()} />

    </div>
  );
}

export default App;
