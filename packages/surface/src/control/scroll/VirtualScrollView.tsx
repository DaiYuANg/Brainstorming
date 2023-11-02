import { cl } from '@brainstorming/utils';
import { useCallback, useEffect, useRef, useState } from 'react';
import { VirtualScrollViewProp } from './VirtualScrollViewProp.ts';

const VirtualScrollView = ({
  data,
  containerHeight,
  itemHeight,
  className,
}: VirtualScrollViewProp) => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(
    Math.min(data.length, Math.ceil(containerHeight! / itemHeight!)),
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const offset = containerRef.current.scrollTop;
      const newStartIndex = Math.floor(offset / itemHeight!);
      const newEndIndex = Math.min(
        data.length,
        newStartIndex + Math.ceil(containerHeight! / itemHeight!),
      );
      setStartIndex(newStartIndex);
      setEndIndex(newEndIndex);
    }
  }, [containerHeight, data.length, itemHeight]);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll]);
  const visibleData = data.slice(startIndex, endIndex);
  return (
      <div
          style={{height: containerHeight}}
          ref={containerRef}
          // style={style !== undefined ? style : {}}
          className={cl('overflow-y-auto', `${className ? className : ''}`)}
      >
        <div style={{height: data.length * itemHeight!, width: '100%'}}>
          {visibleData.map((item, index) => (
              <div key={index} style={{height: itemHeight}}>
                {item}
              </div>
          ))}
        </div>
      </div>
  );
};

export {VirtualScrollView};
