import React from 'react';
import supabase from '../supabase'

const Button = () => {
    let { data, error } = supabase
        .from('tamu')
        .select('*')
    
    return (
        <button className="p-2 m-2 border rounded border-green-500">
            {data}
        </button>
    )
}

export default Button;