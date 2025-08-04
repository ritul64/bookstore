import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/loader';
import BookCart from '../components/BookCart/bookcart';

const Allbooks = () => {
  const [Data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:1000/api/v1/get-all-books");
      const json = await res.json();
      setData(json.data);
    };
    fetchData();
  }, []);

  return (
    <div className='bg-zinc-900 px-4'>
      <h4 className='text-3xl text-yellow-100'>Recently added books</h4>
      {!Data && (
        <div className='flex items-center justify-center my-8'>
          <Loader />
        </div>
      )}
      <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {Data &&
          Data.map((items, i) => (
            <div key={i}>
              <BookCart data={items} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Allbooks;
