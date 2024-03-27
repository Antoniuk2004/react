const ErrorPage = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center select-none justify-center">
            <span className="text-9xl text-red-400 font-semibold">404</span>
            <span className="uppercase text-3xl opacity-80 font-semibold">page not found</span>
        </div>
    )
}

export default ErrorPage;