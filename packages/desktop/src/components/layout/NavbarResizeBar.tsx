import { Divider } from '@mantine/core';
import React, { useCallback } from 'react';
import { useLayoutStore } from '../../store/LayoutStore.ts';
import classes from './NavbarResizeBar.module.css';
import {fromEvent, map, merge, switchMap, takeUntil} from "rxjs";
const NavbarResizeBar = () => {
  const minNavbarWidth = 200;
  const store = useLayoutStore();

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const startX = event.clientX;
      if (store.navbarWidth < minNavbarWidth) return;
      fromEvent(document,'mousemove').pipe(
          takeUntil(fromEvent(document,'mouseup')),
          map((e)=>{
              console.log(e)
          })
      )
        // const mouseMove$ = fromEvent(document, 'mousemove').pipe(
        //     takeUntil(fromEvent(document, 'mouseup')),
        //     map((e:MouseEvent) => e.clientX - startX),
        //     switchMap((offsetX) => {
        //         const newWidth = store.navbarWidth + offsetX;
        //         return newWidth < minNavbarWidth ? [] : [newWidth];
        //     })
        // );
        //
        // const subscription = merge(
        //     mouseMove$,
        //     fromEvent(document, 'mouseup').pipe(mapTo(null))
        // ).subscribe((newWidth) => {
        //     if (newWidth === null) {
        //         subscription.unsubscribe();
        //     } else {
        //         store.increase(newWidth);
        //     }
        // });
      // const handleMouseMove = (event: MouseEvent) => {
      //   const offsetX = event.clientX - startX;
      //   const newWidth = store.navbarWidth + offsetX;
      //   if (newWidth < minNavbarWidth) {
      //     return;
      //   }
      //   store.increase(newWidth);
      // };
      //
      // const handleMouseUp = () => {
      //   document.removeEventListener('mousemove', handleMouseMove);
      //   document.removeEventListener('mouseup', handleMouseUp);
      // };
      //
      // document.addEventListener('mousemove', handleMouseMove);
      // document.addEventListener('mouseup', handleMouseUp);

      event.preventDefault();
    },
    [store],
  );

  return (
    <>
      <Divider
        orientation='vertical'
        className={classes.resize}
        onMouseDown={handleMouseDown}
      />
    </>
  );
};

export { NavbarResizeBar };
