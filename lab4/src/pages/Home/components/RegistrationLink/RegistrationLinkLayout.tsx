import {LayoutProps} from "../../../../types/LayoutProps.ts";
import Button from "../../../../common-components/Button.tsx";

const RegistrationLinkLayout = ({children}: LayoutProps) => {
    return (
        <Button>
            {children}
        </Button>
    )
}

export default RegistrationLinkLayout;