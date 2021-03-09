import React, { useState } from 'react';

// class App extends React.Component {
//   render() {
//     return <h1>Testando 123...</h1>;
//   }
// }

// function App() {
//   return <h1>Eu sou fodaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!</h1>;
// }

// const App = () => {
//   return <h1>Eu sou mais fodaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>;
// }


//const App = () => <h1>Eu sou mais foda aindaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>;


function App() {

    const [valorConta, setValorConta] = useState(0);
    const [valorGorjeta, setValorGorjeta] = useState(0);
    return (
        <>
            <h1>Calculadora de Gorjeta</h1><br />
            <label>Quanto deu a conta?<br /><br />
                <input type="number" name="conta" value={valorConta} onChange={(e) => setValorConta(e.target.value)} min={0} step={0.01} />
            </label>
            <br /><br />
            <label>Qual a porcentagem de gorjeta?<br /><br />
                <input type="number" name="gorjeta" value={valorGorjeta} onChange={(e) => setValorGorjeta(e.target.value)} min={0} step={0.01} />
            </label>
            <br /><br />
            {valorConta > 0 &&

                <div>
                    <span>Sub-total: R${parseInt(valorConta).toFixed(2)}</span><br /><br />
                    <span>Gorjeta ({valorGorjeta}%): R${((parseFloat(valorConta) * parseFloat(valorGorjeta)) / 100).toFixed(2)} </span><br /><br />
                    <span><strong>Total: R$ {(parseFloat(valorConta) + parseFloat(((parseFloat(valorConta) * parseFloat(valorGorjeta)) / 100))).toFixed(2)} </strong></span>
                </div>

            }

        </>
    );

}

export default App;