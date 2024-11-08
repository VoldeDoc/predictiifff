import { FaCheck } from "react-icons/fa";

interface BenefitItemProps {
    text: string;
}

export default function BenefitItem({ text }: BenefitItemProps) {
    return (
        <div className="flex items-center mb-2 pb-4">
            <div className="bg-blue-800 text-white rounded-full p-2 mr-2">
                <FaCheck />
            </div>
            <p className="font-bold">{text}</p>
        </div>
    );
}