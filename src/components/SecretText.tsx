import { useMemo } from "react";

type SecretTextProps = {
    text: string;
}

function SecretText({text}: SecretTextProps) {

    const hiddenText = useMemo( () => {
        const dots = "*".repeat(10);
        const rest = text.substring(text.length - 4)
        
        return dots + rest;
    }, [text]);

    return (
        <span>
            {hiddenText}
        </span>
    )
}

export default SecretText;