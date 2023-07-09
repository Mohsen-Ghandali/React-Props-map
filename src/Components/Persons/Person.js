const Person = (props) => {
    const data=props.data
    const {firstName,lastName,age}=data
    return ( 
        <>
<h1>{firstName}</h1>
<h1>{lastName}</h1>
<h1>{age}</h1>
<hr />
        </>
     );
}
 
export default Person;