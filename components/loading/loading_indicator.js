// components/LoadingIndicator.js
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stopLoading } from '../../store/reducers/loading_action'; // Mengimpor aksi stopLoading

const LoadingIndicator = () => {
  const isLoading = useSelector(state => state.loading.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        dispatch(stopLoading()); 
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [isLoading, dispatch]);

  if (!isLoading) return null;

  return (
    <div class="spinner-container">
    <div class="spinner"></div>
  </div>
  
  );
};

export default LoadingIndicator;
