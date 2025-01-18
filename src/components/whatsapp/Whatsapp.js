import WhatsappLogo from './WhatsApp.png'

const WSP_LINK = 'https://wa.link/ylo8ll';

export const Whatsapp = () => {
  return (
    <div className="fixed bottom-0 right-0 p-7 z-50">
        <a href={WSP_LINK}>
            <img src={WhatsappLogo} className="w-20" alt="Contacto por whatsapp"/>
        </a>
    </div>
  )
}