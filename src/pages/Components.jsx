import Loaders from "../components/loaders/Loaders";


const Components = () => {
    return (<>
    <h1>Components</h1>
    <section>
        <h2>Loaders</h2>
        {
            Loaders.map( (com) => com )
        }
    </section>

    </>);
}








export default Components