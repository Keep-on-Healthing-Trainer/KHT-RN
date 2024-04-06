import { useMemo } from "react";

const useXY = (data) => {
  const arr = useMemo(( ) => {
    if (!data) return [];
    return data.map((rank, index) => {
      const lineHeight = Math.round(rank) * 10;
      return {
        x: index * 10,
        y: lineHeight
      };
    });
  }, [data]);

  return [arr];
}

export default useXY;