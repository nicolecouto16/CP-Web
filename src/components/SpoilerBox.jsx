import { useState } from "react";

function SpoilerBox({ children }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="spoiler-box">
     <h3>Informação protegida</h3>

      {!mostrar ? (
        <>
          <p>
            Esta informação está protegida para evitar spoilers.
          </p>

          <button onClick={() => setMostrar(true)}>
            Mostrar conteúdo
          </button>
        </>
      ) : (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

export default SpoilerBox;