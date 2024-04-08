import { useMemo } from "react";

const useXY = (data) => {
  const arr = useMemo(( ) => {
    const maxCount = Math.max(...data);

    if (!data) return [];
    return data.map((count, index) => {

      const maxLineHeight = 90;
      const multiplier = maxCount > 0 ? maxLineHeight / maxCount : 0;
      const lineHeight = maxLineHeight - Math.round(count * multiplier);
      
      return {
        x: index * 10,
        y: lineHeight
      };
    });
  }, [data]);

  return [arr];
}

export default useXY;