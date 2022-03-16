const [usuario, setUsuario] = useState({});
const [error, seterror] = useState(null);
const [isLoaded, setisLoaded] = useState(false);

const useDatos = ()=>{

    const buscarUsuario = async () => {
      console.log("usuario " + usuario);
      console.log("Fetch usuario");
      const response = await fetch(
        `http://localhost:5000/api/usuarios/${emailUser}`
      )
        .then((response) => response.json())
        .then(
          (data) => {
            console.log("data" + data);
            setisLoaded(true);
            setUsuario(data);
          },
          (error) => {
            setisLoaded(true);
            seterror(error);
          }
        );
    };
}

module.exports = {
    usuario,
    error,
    isLoaded,
    buscarUsuario
}
