// components/DataDisplay.tsx
import React from 'react';

interface DataDisplayProps {
    data: any;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
    return (
        <div>
            {/* Render your data here */}
            {data && (
                <ul>
                    {data.map((item: any) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DataDisplay;

