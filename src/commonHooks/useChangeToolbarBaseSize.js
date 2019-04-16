import React, {useEffect, useState} from "react";

export default function useChangeToolbarBaseSize(smallName, largeName) {

    const [cityLocation, setCityLocation] = useState(largeName);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 500) {
                setCityLocation(smallName);
            }
            else {
                setCityLocation(largeName);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    });

    return cityLocation;

}
