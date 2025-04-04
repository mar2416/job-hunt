import { useState, useRef, useEffect, useCallback } from "react";
import OptionsButton from "../buttons/OptionsButton";
import OptionsCard from "./OptionsCard";

const OptionsContainer = () => {
  const [open, setOpen] = useState(false);
  const dropRef = useRef(null);
  const handleClickOutside = useCallback((e) => {
    if (dropRef.current && !dropRef.current.contains(e.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, handleClickOutside]);

  return (
    <div className="relative m-3 w-auto inline-block" ref={dropRef}>
      <OptionsButton onClick={() => setOpen((open) => !open)} />
      {open && <OptionsCard setOpen={setOpen} />}
    </div>
  );
};

export default OptionsContainer;
