import { CVPersonal } from '../types';
import './Header.scss'

type Props = {
    data: CVPersonal;
}

const Header = ({ data }: Props ) => {
    return (
        <header className='cv-header'>
            <h1>CV {data.name} {data.lastName}</h1>
        </header>
    )
}

export { Header }