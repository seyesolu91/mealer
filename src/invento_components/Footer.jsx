// Footer: consume value from AppNameContext
import { useContext } from 'react'
import { AppNameContext } from '../main'

const Footer = () => {
  const { appname } = useContext(AppNameContext)

  return (
    <div className="row footer pt-5 pb-2">
      <div className="col text-center">
        <h5>Copyright &copy; 2025 — {appname}</h5>
      </div>
    </div>
  )
}

export default Footer
