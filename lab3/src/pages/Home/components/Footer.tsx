const Footer = () => {
    return (
        <footer className="h-72 mt-20 bg-footer pt-8 text-base relative font-bold text-gray">
            <div className="max-w-[1024px] mx-auto flex tracking-wide">
                <div className="w-60">
                    <p className="uppercase mb-4 leading-7">share</p>
                    <ul>
                        <li className="leading-7"><a href="">Send via e-mail</a></li>
                        <li className="leading-7"><a href="">Share on Twitter</a></li>
                        <li className="leading-7"><a href="">Share on Facebook</a></li>
                        <li className="leading-7"><a href="">Share on Google Plus</a></li>
                        <li className="leading-7"><a href="">Share on LinkedIn</a></li>
                    </ul>
                </div>
                <div className="w-60">
                    <p className="uppercase mb-4 leading-7">more</p>
                    <ul>
                        <li className="leading-7"><a href="">👋&nbsp;&nbsp;Contact Me</a></li>
                        <li className="h-7"></li>
                        <li className="leading-7"><a href="">📩&nbsp;&nbsp;Subscribe</a></li>
                        <li className="leading-7"><a href="">🎉&nbsp;&nbsp;Submit</a></li>
                        <li className="leading-7"><a href="">🤙&nbsp;&nbsp;Replay Onboarding</a></li>
                    </ul>
                </div>
                <div className="">
                    <p className="uppercase mb-4 leading-7">about</p>
                    <ul>
                        <li className="leading-7">Flat UI Colors 2 brought to you by ...</li>
                        <li className="leading-7">
                            <a className="underline" href="">Follow me on Twitter</a> or&nbsp;&nbsp;
                            <a href="" className="underline">Subscribe</a> to be the first to know
                            <br/>when I launch new projects.
                        </li>
                        <li className="h-7"></li>
                        <li className="leading-7">Read the <a href="" className="underline">article on Medium</a> to learn more.</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;