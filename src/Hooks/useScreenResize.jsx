import React, { useEffect } from "react";
import { setMobile } from "../Store/screenSlice/screenSlice";
import { useDispatch } from "react-redux";

export default function useScreenResize() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth >= 600;
      dispatch(setMobile(isMobile));
    };

    handleResize();
    
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);
}
