import { useCallback, useEffect, useRef, useState } from 'react';

const useLazyLoading = (data, list, setList) => {
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loader = useRef(null);

  const addNext = () => {
    const nextList = [];
    if (data) {
      for (let i = list?.length; i < count; i++) {
        nextList.push(data[i]);
      }
    }
    if (nextList.length > 1) {
      setList(list.concat(nextList));
    }
  };

  useEffect(() => {
    if (count + 100 > data?.length) {
      setCount(data.length);
      setHasMore(false);
    }
    addNext();
  }, [data, count]);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setCount((count) => count + 100);
      setHasMore(true);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: '50px',
    });
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return { loader, hasMore };
};

export default useLazyLoading;
