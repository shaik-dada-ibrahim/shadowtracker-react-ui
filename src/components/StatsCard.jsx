export default function StatsCard({icon,attribute,value}){
    return (
        <div className="p-4 shadow-xl rounded-lg gap-2 bg-white dark:bg-gray-800 text-black dark:text-white transition">
            <div className="text-xl mb-2">{icon}</div>
            <h3 className="text-xl font-bold">{attribute}</h3>
            <p className="text-xl font-bold">{value}</p>
        </div>
    );
}