import Person from "../Persons/Person";

const App = () => {
  const data = [
    { firstName: "Mohsen", lastName: "Ghandali", age: 35, id: 1 },
    { firstName: "Marius", lastName: "Bach", age: 45, id: 2 },
    { firstName: "MAx", lastName: "Müller", age: 28, id: 3 }
  ]

  return (
    <div className=" col-6 offset-3 p-5 bg-dark text-white mt-2 ">

      {data.map((elem) => {
        return (
          <Person data={elem} key={elem.id} />
        )
      })}
    </div>
  );
}

export default App;