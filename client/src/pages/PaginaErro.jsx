// Importação dos componentes do bootstrap
import Button from "react-bootstrap/Button";

// Importação do navigate para transitar entre páginas
import { useNavigate } from "react-router-dom";

const PaginaErro = () => {
  // Variável navigate, para guardar o retorno do hook
  const navigate = useNavigate();
  return (
    <div className="text-center min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <h2>Essa página não existe</h2>
      <Button
        variant="warning"
        onClick={() => {
          navigate("/home");
        }}
      >
        Voltar para home
      </Button>
    </div>
  );
};

export default PaginaErro;
