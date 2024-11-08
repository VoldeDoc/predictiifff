import { IconType } from "react-icons";

interface TabItemProps {
    Icon: IconType;
    title: string;
    descriptions: string[];
}

export default function TabItem({ Icon, title, descriptions }: TabItemProps) {
    return (
        <>
        <div className="flex space-x-4">
            <div className="bg-[#0C21C1] px-2 py-2 flex items-center">
                <Icon className="text-xl text-white mr-2" />
                </div>
                <h1 className="text-xl font-bold">
                    {title}
                </h1>
           
            </div>
            <div className="ml-4 pb-6">
                {descriptions.map((desc, index) => (
                    <p key={index} className="flex items-center">
                        {desc}
                    </p>
                ))}
            </div>
            </>
        
    );
}