import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { fireDB } from '../../Firebase/FirebaseConfig';
import Loader from '../../components/loader/Loader';

const AddProduct = () => {

  const categoryList = [
    {
        name: 'fashion'
    },
    {
        name: 'shirt'
    },
    {
        name: 'jacket'
    },
    {
        name: 'mobile'
    },
    {
        name: 'laptop'
    },
    {
        name: 'shoes'
    },
    {
        name: 'home'
    },
    {
        name: 'books'
    }
]
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const product = {
        ...data,
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString('en-US', {
          month: 'short',
          day: '2-digit',
          year: 'numeric',
        }),
      };

      // Add Product to Firestore
      await addDoc(collection(fireDB, 'product'), product);

      toast.success('Product added successfully');
      setLoading(false);
      navigate('/admin-dashboard');
    } catch (error) {
      console.error(error);
      toast.error('Failed to add product');
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
        <h2 className="text-center text-2xl font-bold text-pink-500 mb-5">Add Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Input One */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Product Name"
              {...register('title', { required: 'Product name is required' })}
              className="bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>

          {/* Input Two */}
          <div className="mb-3">
            <input
              type="number"
              placeholder="Price"
              {...register('price', { required: 'Price is required' })}
              className="bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
            {errors.price && <p className="text-red-500">{errors.price.message}</p>}
          </div>

          {/* Input Three */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Product Image Url"
              {...register('productImageUrl', { required: 'Product image URL is required' })}
              className="bg-pink-50 text-pink-300 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300"
            />
            {errors.productImageUrl && <p className="text-red-500">{errors.productImageUrl.message}</p>}
          </div>
          {/* Input Four  */}
          <div className="mb-3">
                        <select
                            {...register('category', { required: 'Product category is required' })}
                            className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none  ">
                            <option disabled>Select Product Category</option>
                            {categoryList.map((value, index) => {
                                const { name } = value
                                return (
                                    <option className=" first-letter:uppercase" key={index} value={name}>{name}</option>
                                )
                            })}
                        </select>
                    </div>

                    {/* Input Five  */}
                    <div className="mb-3">
                        <textarea
                        {...register('description', { required: 'Product description is required' })}
                        
                            name="description" placeholder="Product Description" rows="5" className=" w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300 ">

                        </textarea>
                    </div>


          {/* Submit Button */}
          <div className="mb-5">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center  font-bold rounded-md flex justify-center items-center"
              disabled={loading}
            >
              {loading ? <Loader /> : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;