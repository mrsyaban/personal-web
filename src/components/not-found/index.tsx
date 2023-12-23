import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='flex flex-col gap-5 h-screen w-screen items-center justify-center text-blue font-bold text-3xl'>
        <p>404 Page Not Found.</p>
        <Link to="/" className='flex opacity-60 hover:opacity-100 bg-blue text-black text-xl rounded-md p-2 items-center justify-center' >
            Home
        </Link>
    </div>
  )
}

export default NotFound