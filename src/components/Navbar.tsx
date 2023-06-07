import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <header className="">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <h1>M A H E R S T O R E</h1>
                    </a>
                </div>
               
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
                    <Link to="/store" className="text-sm font-semibold leading-6 text-gray-900">Store</Link>
                    <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">About</Link>
                </div>
            </nav>
        </header>

    )
}