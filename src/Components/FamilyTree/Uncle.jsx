import {} from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name="Labib"></Cousin>
                <Cousin name="Nuhan"></Cousin>
            </section>
        </div>
    );
};

export default Uncle;