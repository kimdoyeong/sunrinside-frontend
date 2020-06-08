import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function useAsync(func: any, options: { errorToast?: boolean } = {}) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.resolve(func())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message || e);
      });
  }, [func]);
  useEffect(() => {
    if (options.errorToast && error) {
      toast.error(error);
    }
  }, [options.errorToast, error]);

  return {
    data,
    loading,
    error,
  };
}

export default useAsync;
