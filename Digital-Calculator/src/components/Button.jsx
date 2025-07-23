export function Button({label,parentMethod}) {
    return (
        <button onClick={parentMethod}>{label}</button>
    );
}