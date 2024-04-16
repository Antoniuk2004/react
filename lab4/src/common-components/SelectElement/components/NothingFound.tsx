import {
    SocialNetwork
} from "../social-network-options.tsx";

type NothingFoundProps = {
    filteredOptions: string[] | SocialNetwork[]
    query: string
}

const NothingFound = (props: NothingFoundProps) => {
    const {filteredOptions, query} = props;

    if (filteredOptions.length === 0 && query !== '')
        return (
            <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                Nothing found.
            </div>
        )
    else return null;
}

export default NothingFound;