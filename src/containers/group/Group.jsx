import { useState } from "react";
import CreateGroupForm from "../components/Group/CreateGroupForm";
import JoinGroupForm from "../components/Group/JoinGroupForm";
import '../../assets/styles/Group.css';

export default function GroupPage() {
    const [selectedAction, setSelectedAction] = useState(null);

    const handleJoinGroup = () => {
        setSelectedAction("join");
    };

    const handleCreateGroup = () => {
        setSelectedAction("create");
    };

    return (
        <div className="group-page">
            <h1>Группы</h1>
            <div className="buttons-container">
                <button onClick={handleJoinGroup} className="action-button">Вступить в группу</button>
                <button onClick={handleCreateGroup} className="action-button">Создать группу</button>
            </div>

            {/* Форма для создания группы */}
            {selectedAction === "create" && <CreateGroupForm />}

            {/* Форма для вступления в группу */}
            {selectedAction === "join" && <JoinGroupForm />}
        </div>
    );
}
