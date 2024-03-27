const Header = () => {
    return (
        <div className="header h-[105px] flex justify-between items-center text-gray">
            <span className="text-2xl font-bold uppercase">flat ui colors 2</span>
            <div className="capitalize flex font-semibold">
                <a href={"/"}>
                    <span>designer inspiration</span>
                    <span className="uppercase ml-2 bg-red-700 text-sm px-1 py-0.5 font-bold rounded-md">new</span>
                </a>
                <a href={"/"} className="ml-10">subscribe</a>
            </div>
        </div>
    )
}

export default Header;