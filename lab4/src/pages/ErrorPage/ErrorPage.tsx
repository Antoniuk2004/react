import ErrorPageLayout from "./ErrorPageLayout.tsx";
import TopTextLayout from "./TopTextLayout.tsx";
import BottomTextLayout from "./BottomTextLayout.tsx";

const ErrorPage = () => {
    return (
        <ErrorPageLayout>
            <TopTextLayout>
                <span>404</span>
            </TopTextLayout>
            <BottomTextLayout>
                <span>page not found</span>
            </BottomTextLayout>
        </ErrorPageLayout>
    )
}

export default ErrorPage;