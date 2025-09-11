import React from 'react';
import CheckOutForm from '../components/CheckOutForm';

const CheckOutPage = async({params}) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:3000/api/service/${id}`);
    const singleService = await res.json();
    return (
        <div className='w-11/12 max-w-7xl mx-auto my-10 space-y-8'>
            <CheckOutForm singleService={singleService}></CheckOutForm>
        </div>
    );
};

export default CheckOutPage;