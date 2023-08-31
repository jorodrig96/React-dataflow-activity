export default function DisplayIdeas (props) {

    let crazyIdeas= props.movieIdeas.map((idea, index) => 
    <li key= {index}>{idea}</li>)

    return (
        <ul>
            {crazyIdeas}
        </ul>
    );
};