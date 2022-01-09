import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  const getPhotos = useCallback(async () => {
    const response = await fetch(url);
    const photos = await response.json();
    setPhotos(photos);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getPhotos();
  }, [url, getPhotos]);
  return { loading, photos };
};
