import { Navbar, SignUp, SignupRightImg } from './components/import'

export const App = () => {
    return (
        <div className="">
            <Navbar />

            <div className="h-screen sm:grid sm:grid-cols-1 lg:grid-cols-2">
                <SignupRightImg />
                <SignUp />
            </div>
        </div>

    )
}