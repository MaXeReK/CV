import { Header } from '../Header';
import { Personal } from '../Personal';
import { Details } from '../Details';
import { CVData } from '../types';
import './CV.scss';


const CV = () => {
    const cvData: CVData = {
        personal: {
            photo: "https://placehold.co/400x400?text=MK",
            name: "Marcin",
            lastName: "Krzyżagórski",
            position: "Informatyk",
        },
        details: {
            experience: [
                {year: 2018, description: "Decathlon"},
                {year: 2020, description: "UMG Stęszew"},
              ],
              education:[
                "Technikum nr 19",
                "AEH Warszawa"
              ]
        }
    }

    return <main className='cv-main'>
        <Header data={cvData.personal}/>
        <Personal data={cvData.personal}/>
        <Details data={cvData.details}/>
    </main>
}

export { CV }