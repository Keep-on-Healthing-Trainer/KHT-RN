import { useMemo } from "react";

const useXY = (data) => {
  const arr = useMemo(( ) => {
    const maxCount = Math.max(...data);
    const itemCount = data.length;
    const maxLineHeight = 90;
    const maxLineWidth = 145;

    if (!data) return [];

    const interval = maxLineWidth / (itemCount - 1 || 1);

    return data.map((count, index) => {

      const multiplierHeight = maxCount > 0 ? maxLineHeight / maxCount : 0;
      const lineHeight = maxLineHeight - Math.round(count * multiplierHeight);
      
      return {
        x: index * interval,
        y: lineHeight
      };
    });
  }, [data]);

  return [arr];
}

export default useXY;