export function Card({ children, className }) {
    return <div className={`p-6 shadow-lg bg-gray-800 text-white rounded-2xl ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
    return <div className="text-center">{children}</div>;
}
