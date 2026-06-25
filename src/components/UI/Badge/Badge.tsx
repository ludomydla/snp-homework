import './Badge.css';

type BadgeProps = {
    content: string;
}

function Badge({content}: BadgeProps) {

    return (
        <span className="badge">
            {content}
        </span>
    )
}

export default Badge;