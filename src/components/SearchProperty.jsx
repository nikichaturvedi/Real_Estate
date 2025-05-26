'use client';
import Link from 'next/link';
import { useState } from 'react';
import Select from 'react-select';

export default function SearchProperty({ property, layout }) {
    const [property_Type, setProperty_Type] = useState('')
    const [property_Category, setProperty_Category] = useState('')
    const [property_Date, setProperty_Date] = useState('')


    const filterOptions = [
        { value: 'new-to-old', label: 'Date New to Old' },
        { value: 'old-to-new', label: 'Date Old to New' },
        { value: 'low-to-high', label: 'Price Low to High' },
        { value: 'high-to-low', label: 'Price High to Low' }
    ];
    return (
        <div className={`${layout == 'col' ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'}`}>
            <Select
                onChange={(data) => setProperty_Type(data.value)}
                placeholder='Property Type'
                options={Array.from(
                    new Set(property?.map(item => item.propertyType))
                ).map(type => ({
                    value: type,
                    label: `Property for ${type}`
                }))}
            />

            <Select
                onChange={data => setProperty_Category(data.value)}
                placeholder='Property Category'
                options={Array.from(
                    new Set(property?.map(item => item.category))
                ).map(type => ({
                    value: type,
                    label: type
                }))}
            />

            <Select
                onChange={data => setProperty_Date(data.value)}
                placeholder='Filter'
                options={filterOptions?.map(item => { return { value: item.value, label: item.label } }
                )

                }
            />

            <button className={`w-full bg-[#BFA249] text-white rounded hover:bg-[#a88e37] cursor-pointer ${layout == 'col' ? 'py-2' : ''}`}>
                {
                    property_Type || property_Category || property_Date ?
                        <Link
                            href={`/search?property_Type=${property_Type}&property_Category=${property_Category}&property_Date=${property_Date}`}
                            className="text-center bg-[#BFA249] text-white px-4 py-2 rounded hover:bg-[#a88e37] flex items-center justify-center"
                        >
                            Search
                        </Link> :
                        'Search'
                }
            </button>
        </div >
    );
}
