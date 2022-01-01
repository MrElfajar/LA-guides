import { useEffect, useState } from "react";

export default function () {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading && <div>Loading</div>}
      This is Special Items Page
    </div>
  );
}
