import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MpLogo from '/logo.svg'
import './App.css'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { Whatsapp } from './Whatsapp'

const CATALAGO = "https://storage.googleapis.com/qr-code-designer-active-storage.o2ohub.com/l459cntigecbackzzgofa4j3sqwb?GoogleAccessId=activestorage%40brainpage-production.iam.gserviceaccount.com&Expires=1729553338&Signature=wWlaUImqzj%2FPXQ4DcUgC8e6lNtLsWc6y0EZZnybFsEwEAt9BiCEG0WesqB8A9GF6n2CCPkH3E4ZAoUOBKeXbJqMpp23tyPtVMWSAlt244IXiJQ%2BZltKscAM3x71dOYny%2FZjfZ97pAdOBe9otH0mqZuqB7u2xBQkKcAkj4N0Bq9ovxbeAaJO8ys2uFDQcHV2oj4Ys4J0c2nQ32%2BBu%2BG46sUM0FZUrvXjf5Z0b7vZwACmtZ%2FdK0LE435b5tPb6JfFkbRZ7f3WqpUS2B39AE%2FG1P9E%2BxS69MEIiQvCOM3ngFjXIegQmJn2ycibJbzJGVZd8H3HXQRdU1%2FydoOz2n5ZzVQ%3D%3D&response-content-disposition=inline%3B+filename%3D%22CATALOGO+MP.pdf%22%3B+filename%2A%3DUTF-8%27%27CATALOGO%2520MP.pdf&response-content-type=application%2Fpdf";

function App() {

  return (
    <>
    <div className="container max-w-screen-lg mx-auto px-5 pb-9 lg:pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex justify-end lg:pr-4">
          <img src={MpLogo} className="logo" />
        </div>
        <div className="column-2-content">
          <p>
            <b className="pr-2">EMPRESA DE DISTRIBUCIÓN</b>
             ¡Somos líderes en la venta y distribución de productos para delivery y artículos plásticos. Aquí encontrarás una amplia gama de soluciones prácticas y sostenibles para tu negocio, garantizando calidad, eficiencia y un servicio excepcional. Estamos comprometidos en ser tu socio confiable para impulsar tu éxito. ¡Gracias por elegirnos!
          </p>
          <div className="grid grid-cols-1 gap-4 mt-3">
            <div className="flex py-4 items-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} fontSize={30}/>
              <span>Portugal 1122, Santiago.</span>
            </div>

            <div className="flex pb-4 last:items-center gap-2">
            <a href={CATALAGO} className="bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
              Conoce nuestro catalago
            </a>
            </div>
          </div>
        </div>
      </div>
      <Whatsapp/>
      </div>
          <div className="w-full bottom-0 absolute right-0 items-center flex justify-center">
          <img src="/base.png" className="w-auto h-auto"/>
      </div>
    </>
  )
}

export default App

