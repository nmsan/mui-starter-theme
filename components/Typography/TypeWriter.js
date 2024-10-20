import {useEffect, useState} from "react";

export default function TypeWriter({text="", delay}) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if(text.length>0) {
            setCurrentIndex(0)
            setCurrentText('')

        }
    }, [text]);
    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <div style={{height: "22px"}}>{currentText}</div>;
}