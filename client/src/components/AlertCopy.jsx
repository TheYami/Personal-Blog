import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

function AlertCopy({ setAlertCopy }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
        const timer = setTimeout(() => {
            setVisible(false);
            setAlertCopy(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [setAlertCopy]);

    const handleClose = () => {
        setVisible(false);
        setAlertCopy(false);
    };

    return (
        <div 
            className={`fixed bottom-5 right-5 p-4 bg-[#12B279] font-[Poppins] text-[#FFFFFF] 
            rounded-xl transition-transform duration-500 ease-in-out ${visible ? 'translate-x-0' : 'translate-x-[100%]'}`}
        >
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-xl'>Copied!</h3>
                <X onClick={handleClose} className='cursor-pointer' />
            </div>

            <p className='text-sm pt-1'>This article has been copied to your clipboard.</p>
        </div>
    );
}

export default AlertCopy;
