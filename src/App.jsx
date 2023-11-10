function App() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="row w-100 mt-5 d-flex justify-content-center align-items-center">
        <div className="col-md-8">
          <table className="table">
            <thead className="table-primary text-center">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nama</th>
                <th scope="col">Level</th>
                <th scope="col">Alamat Email</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div> 
  </div>
  )
}

export default App
