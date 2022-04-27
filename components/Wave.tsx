import Link from "next/link";

export interface IWave{
    name: string;
    longitude: string;
    lattitude: string
}

const Wave = (props: IWave) => {
    return (
        <div>
            <Link href={`/waves/${props.name}`}>
                <b>{props.name}</b>
            </Link>
        </div>
    )
}

export default Wave