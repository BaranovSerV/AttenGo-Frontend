import { useState } from "react";
import { Button } from "../components/ui/Button"; // Убедись, что файл существует
import { Card } from "../components/ui/Card"; // Убедись, что Card импортирован правильно

export default function GroupPage() {
    const [message, setMessage] = useState("");

    const handleCreateGroup = () => {
        setMessage("Создание новой группы...");
    };

    const handleJoinGroup = () => {
        setMessage("Вступление в группу...");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <Card className="p-6 shadow-lg w-80 text-center bg-gray-800 text-white rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4">Группы</h2>
                <Button className="w-full mb-2 bg-indigo-600 hover:bg-indigo-700" onClick={handleCreateGroup}>
                    Создать группу
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={handleJoinGroup}>
                    Вступить в группу
                </Button>
                {message && <p className="mt-4 text-gray-400">{message}</p>}
            </Card>
        </div>
    );
}
