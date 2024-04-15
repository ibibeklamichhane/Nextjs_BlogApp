import { fetchData } from '@/api/getMovies';

export default async function DataDisplay(){
    const data = await fetchData();
    return (
        <div>
            {/* Render your data here */}
            {data && (
                <ul>
                    {data.map((item: any) => (
                        <>
                        <ul>
                        <li key={item.id}>

                         <h5> {item.title}</h5>   

</li>


                        </ul>


                       
                        <h3>{item.body}</h3>
                        </>
                    ))}
                </ul>
            )}
        </div>
    );
}


